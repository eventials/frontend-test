import React from 'react';
import 'antd/dist/antd.css';
import en_US  from 'antd/es/locale/en_US'
import Routes from './routes/index';
import { ConfigProvider } from 'antd';


const App = () => {
  return(
    <ConfigProvider locale={en_US}>
      <Routes/>
    </ConfigProvider>
  )
}

export default App;
