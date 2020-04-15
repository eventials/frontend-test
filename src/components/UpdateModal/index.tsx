import React, { useEffect } from "react";
import { Modal, Popconfirm, Form, message, Button, Input } from "antd";
import { connect, ConnectedProps } from "react-redux";
import { bindActionCreators } from "redux";
import { UpdateModalProps, ConnectedUpdateModalProps } from "./types";
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
          const error = "Country population must be a positive number!";
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
        message.error("Country name is required!");
      });
  };

  const onDelete = () => {
    message.info(`The country ${selectedCountry?.name} has been deleted`);
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
          title="Are you sure to delete this country?"
          onConfirm={onDelete}
          onCancel={() => {}}
          okText="Yes"
          cancelText="No"
        >
          <Button key="delete" type="primary" danger>
            Delete country
          </Button>
        </Popconfirm>,

        <Button key="cancel" onClick={modalDismiss}>
          Cancel
        </Button>,
        <Button key="submit" type="primary" onClick={onSave}>
          Save
        </Button>,
      ]}
    >
      <Form form={form} layout="vertical">
        <Item label="Code" name="code">
          <Input disabled size="large" />
        </Item>

        <Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Required" }]}
        >
          <Input size="large" />
        </Item>

        <Item label="Population" name="population">
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
