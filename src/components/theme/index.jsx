import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { injectGlobal, ThemeProvider } from "styled-components";
import "react-toastify/dist/ReactToastify.min.css";

import defaultTheme from "../../configs/theme";

/**
 * Wrapper for the ThemeProvider from styled-components
 */
export default class Theme extends PureComponent {
  /**
   * Add the global styles when we first launch
   */
  componentWillMount() {
    const { theme } = this.props;

    injectGlobal`
      @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400|Oswald:300,400');
      @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
      
      
      html,
      body {
        
        background-color: ${theme.color.background};
        font-size: ${theme.baseFontSize};
        margin: 0;
        -webkit-font-smoothing: antialiased;       
        overflow:hidden; 
        
      }
      
      html {
        padding: 0;
        /* change padding: ${theme.padding}; */
        
      }
      
      body {
        padding: 0;
      }
      
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }
    `;
  }

  /**
   * Render the Theme helper
   *
   */
  render = () => {
    const { children, theme } = this.props;
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
  };
}

Theme.propTypes = {
  children: PropTypes.node.isRequired,

  /**
   * Theme config
   */
  theme: PropTypes.object
};

Theme.defaultProps = {
  theme: defaultTheme
};
