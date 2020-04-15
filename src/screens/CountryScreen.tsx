import React, { useState, useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect, ConnectedProps } from "react-redux";
import { notification, Button } from "antd";
import { SmileOutlined, FrownOutlined } from "@ant-design/icons";
import countryApi from "../api/country";
import AutoComplete from "../components/AutoComplete";
import LoadingWrapper from "../components/LoadingWrapper";
import { Container, Title } from "./styles";
import { ICountry } from "../configs/country";
import { loadCountries, selectCountry } from "../actions/country";
import UpdateModal from "../components/UpdateModal";
import PopulationOption from "../components/PopulationOption";

const { Option } = AutoComplete;

const CountryScreen = (props: PropsFromRedux) => {
  const {
    loadCountries: dispatchLoadCountries,
    selectCountry: dispatchSetSelectedCountry,
    countries,
    selectedCountry,
  } = props;
  const [loading, setLoading] = useState<boolean>(false);
  const [loadError, setLoadError] = useState<string>("");
  const [updateModalVisible, setUpdateModalVisible] = useState<boolean>(false);

  useEffect(() => {
    loadCountries();
  }, []);

  const loadCountries = async () => {
    try {
      setLoading(true);
      setLoadError("");
      const response: Array<ICountry> = await countryApi();
      dispatchLoadCountries(response);
      displayNotification("success");
    } catch (err) {
      setLoadError("Something went wrong...");
      displayNotification("error");
    } finally {
      setLoading(false);
    }
  };

  const displayNotification = (type: "success" | "error") => {
    const key = `open${Date.now()}`;
    const retryButton = (
      <Button
        type="primary"
        size="small"
        onClick={() => {
          loadCountries();
          notification.close(key);
        }}
      >
        Try again!
      </Button>
    );
    const configs = {
      success: {
        key,
        message: "Hey",
        description: "Select a country to update its name or population",
        icon: <SmileOutlined style={{ color: "#108ee9" }} />,
      },
      error: {
        key,
        message: "Ops...",
        description: "Something went wrong... ",
        icon: <FrownOutlined style={{ color: "#FF3344" }} />,
        btn: retryButton,
      },
    };
    notification.open({
      ...configs[type],
      placement: "bottomRight",
      duration: 6,
    });
  };

  const handleSort = (a: ICountry, b: ICountry) => {
    const populationA = a.population || 0;
    const populationB = b.population || 0;

    if (populationA < populationB) return 1;
    if (populationA > populationB) return -1;
    return 0;
  };

  return (
    <>
      <LoadingWrapper
        loading={loading}
        loadError={loadError}
        handleRetry={loadCountries}
      >
        <Container>
          <Title>Select a country</Title>
          <AutoComplete
            value={selectedCountry?.name}
            onSelect={(code) => {
              const country = countries.find(
                (country: ICountry) => country.code === code
              );
              dispatchSetSelectedCountry(country);
              setUpdateModalVisible(true);
            }}
          >
            {countries.sort(handleSort).map((country: ICountry) => (
              <Option key={country.name} value={country.code}>
                <PopulationOption {...country} />
              </Option>
            ))}
          </AutoComplete>
        </Container>
      </LoadingWrapper>

      <UpdateModal
        visible={updateModalVisible}
        modalDismiss={() => {
          setUpdateModalVisible(false);
        }}
      />
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
    },
    dispatch
  );

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(CountryScreen);
