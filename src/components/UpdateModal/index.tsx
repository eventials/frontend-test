import React, { useEffect } from "react";
import { Modal, Popconfirm, Form, message, Button, Input } from "antd";
import { connect, ConnectedProps } from "react-redux";
import { bindActionCreators } from "redux";
import { FormattedMessage, useIntl } from "react-intl";
import { ConnectedUpdateModalProps } from "./types";
import {
  updateSelectedCountry,
  deleteSelectedCountry,
} from "../../actions/country";
import { ICountry } from "../../configs/country";

const { Item } = Form;

const UpdateModal = (props: ConnectedUpdateModalProps<PropsFromRedux>) => {
  const {
    visible,
    modalDismiss,
    selectedCountry,
    updateSelectedCountry: dispatchUpdateSelectedCountry,
    deleteSelectedCountry: dispatchDeleteSelectedCountry,
  } = props;
  const [form] = Form.useForm();
  const intl = useIntl();

  useEffect(() => {
    if (visible && selectedCountry) {
      form.setFieldsValue(selectedCountry);
    } else {
      form.resetFields();
    }
  }, [visible]);

  const isValidPopulation = (population: string) => {
    function isNumeric(str: string) {
      const er = /^[0-9]+$/;
      return er.test(str);
    }

    return isNumeric(population) && parseInt(population) >= 0;
  };

  const onSave = () => {
    form
      .validateFields()
      .then((values) => {
        if (!isValidPopulation(values.population)) {
          const error = intl.formatMessage({
            id: "validation.population.type",
          });
          message.error(error);
          form.setFields([
            {
              name: "population",
              value: null,
              errors: [error],
            },
          ]);
          return;
        }
        dispatchUpdateSelectedCountry(values as ICountry);
        message.success(`The country ${values.name} has been updated`);
        modalDismiss();
      })
      .catch(() => {
        message.error(intl.formatMessage({ id: "validation.name.required" }));
      });
  };

  const onDelete = () => {
    message.info(
      intl.formatMessage(
        {
          id: "message.delete.success",
        },
        {
          countryName: selectedCountry.name,
        }
      )
    );
    dispatchDeleteSelectedCountry();
    modalDismiss();
  };

  return (
    <Modal
      visible={visible}
      onCancel={modalDismiss}
      title={selectedCountry?.name}
      footer={[
        <Popconfirm
          key="popconfirm"
          title={intl.formatMessage(
            { id: "message.confirm.delete" },
            { countryName: selectedCountry?.name }
          )}
          onConfirm={onDelete}
          onCancel={() => {}}
          okText={intl.formatMessage({ id: "app.yes" })}
          cancelText={intl.formatMessage({ id: "app.no" })}
        >
          <Button key="delete" type="primary" danger>
            <FormattedMessage id="app.deleteCountry" />
          </Button>
        </Popconfirm>,

        <Button key="cancel" onClick={modalDismiss}>
          <FormattedMessage id="app.cancel" />
        </Button>,
        <Button key="submit" type="primary" onClick={onSave}>
          <FormattedMessage id="app.save" />
        </Button>,
      ]}
    >
      <Form form={form} layout="vertical">
        <Item
          label={intl.formatMessage({ id: "input.label.code" })}
          name="code"
        >
          <Input disabled size="large" />
        </Item>

        <Item
          label={intl.formatMessage({ id: "input.label.name" })}
          name="name"
          rules={[
            {
              required: true,
              message: intl.formatMessage({ id: "app.required" }),
            },
          ]}
        >
          <Input size="large" />
        </Item>

        <Item
          label={intl.formatMessage({ id: "input.label.population" })}
          name="population"
        >
          <Input size="large" autoFocus />
        </Item>
      </Form>
    </Modal>
  );
};

const mapStateToProps = (store: any) => ({
  selectedCountry: store.countryState.selectedCountry,
});

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      updateSelectedCountry,
      deleteSelectedCountry,
    },
    dispatch
  );

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(UpdateModal);
