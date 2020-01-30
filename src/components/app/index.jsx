
import React from 'react';
import Theme from '../theme';
import Layout from '../layout';
import H1 from './H1';

import { BrowserRouter } from "react-router-dom";
import Routes from "../../routes";

export default () => (
    <BrowserRouter>
        <Theme>
          <Routes/>
        </Theme>
    </BrowserRouter>
);
