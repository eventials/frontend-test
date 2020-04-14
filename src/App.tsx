import React from "react";
import "antd/dist/antd.css";
import Layout from "./components/Layout";
import CountryScreen from "./screens/CountryScreen";

const App = () => {
  return (
    <Layout>
      <CountryScreen />
    </Layout>
  );
};

export default App;
