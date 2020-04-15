import React from "react";
import { IntlProvider } from "react-intl";
import "antd/dist/antd.css";
import Layout from "./components/Layout";
import CountryScreen from "./screens/CountryScreen";
import { connect, ConnectedProps } from "react-redux";
import en_US from "./translations/enUS.json";
import pt_BR from "./translations/ptBR.json";

const translations: any = {
  enUS: en_US,
  ptBR: pt_BR,
};

const App = (props: PropsFromRedux) => {
  const { language } = props;

  return (
    <IntlProvider locale="en" messages={translations[language]}>
      <Layout>
        <CountryScreen />
      </Layout>
    </IntlProvider>
  );
};

const mapStateToProps = (store: any) => ({
  language: store.languageState.language,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(App);
