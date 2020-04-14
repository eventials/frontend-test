import React, { useState, useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  Modal,
  Form,
  Input,
  message,
  notification,
  Button,
  Popconfirm,
} from "antd";
import { TeamOutlined, SmileOutlined } from "@ant-design/icons";
import countryApi from "../api/country";
import AutoComplete, {
  OptionContent,
  PopulationData,
  PopulationCount,
} from "../components/AutoComplete";
import LoadingWrapper from "../components/LoadingWrapper";
import { Container, Title } from "./styles";
import { ICountry } from "../configs/country";
import {
  loadCountries,
  selectCountry,
  updateSelectedCountry,
  deleteSelectedCountry,
} from "../actions/country";

const { Option } = AutoComplete;
const { Item } = Form;

const CountryScreen = (props: any) => {
  const {
    loadCountries: dispatchLoadCountries,
    selectCountry: dispatchSetSelectedCountry,
    updateSelectedCountry: dispatchUpdateSelectedCountry,
    deleteSelectedCountry: dispatchDeleteSelectedCountry,
    countries,
    selectedCountry,
  } = props;
  const [loading, setLoading] = useState<boolean>(false);
  const [loadError, setLoadError] = useState<string>("");
  const [updateModalVisible, setUpdateModalVisible] = useState<boolean>(false);
  const [form] = Form.useForm();

  useEffect(() => {
    loadCountries();
    notification.open({
      message: "Hey!",
      description: "Select a country to update your name or population",
      icon: <SmileOutlined style={{ color: "#108ee9" }} />,
      placement: "bottomRight",
      duration: 6,
    });
  }, []);

  const loadCountries = async () => {
    try {
      setLoading(true);
      setLoadError("");
      const response: Array<ICountry> = await countryApi();
      dispatchLoadCountries(response);
    } catch (err) {
      setLoadError("Something went wrong...");
    } finally {
      setLoading(false);
    }
  };

  const handleSort = (a: ICountry, b: ICountry) => {
    const populationA = a.population || 0;
    const populationB = b.population || 0;

    if (populationA < populationB) return 1;
    if (populationA > populationB) return -1;
    return 0;
  };

  const onSave = () => {
    form
      .validateFields()
      .then((values) => {
        setUpdateModalVisible(false);
        dispatchUpdateSelectedCountry(values);
        message.success(`The country ${values.name} has been updated`);
      })
      .catch(() => {
        message.error("Country name is required!");
      });
  };

  const onDelete = () => {
    message.info(`The country ${selectedCountry.name} has been deleted`);
    dispatchDeleteSelectedCountry();
    setUpdateModalVisible(false);
  };

  const onCancel = () => {
    setUpdateModalVisible(false);
  };

  return (
    <>
      <LoadingWrapper
        loading={loading}
        loadError={loadError}
        handleRetry={loadCountries}
      >
        <Container>
          {/* <Title type="secondary">Select a country</Title> */}
          <Title>Select a country</Title>
          <AutoComplete
            value={selectedCountry?.name}
            onSelect={(code) => {
              const country = countries.find(
                (country: ICountry) => country.code === code
              );
              dispatchSetSelectedCountry(country);
              form.setFieldsValue(country);
              setUpdateModalVisible(true);
            }}
          >
            {countries
              .sort(handleSort)
              .map(({ name, code, population }: ICountry) => (
                <Option key={code} value={code}>
                  <OptionContent>
                    <span>{name}</span>
                    <PopulationData>
                      <TeamOutlined />
                      <PopulationCount>
                        {population || "unknown"}
                      </PopulationCount>
                    </PopulationData>
                  </OptionContent>
                </Option>
              ))}
          </AutoComplete>
        </Container>
      </LoadingWrapper>

      {updateModalVisible && (
        <Modal
          visible={true}
          onCancel={() => setUpdateModalVisible(false)}
          title={selectedCountry?.name}
          footer={[
            <Popconfirm
              title="Are you sure delete this country?"
              onConfirm={onDelete}
              onCancel={() => {}}
              okText="Yes"
              cancelText="No"
            >
              <Button key="delete" type="primary" danger>
                Delete country
              </Button>
            </Popconfirm>,

            <Button key="cancel" onClick={onCancel}>
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
      )}
    </>
  );
};

const mapStateToProps = (store: any) => ({
  ...store.countryState,
});

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      loadCountries,
      selectCountry,
      updateSelectedCountry,
      deleteSelectedCountry,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(CountryScreen);
