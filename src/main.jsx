import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import theme from "./Styles/theme";
import GlobalStyles from "./Styles/global";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./Routes";
import { OrderProvider} from './utils'


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <OrderProvider>
    <BrowserRouter />
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
    </OrderProvider>
  </React.StrictMode>
);
