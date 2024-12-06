import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import theme from "./Styles/theme";
import GlobalStyles from "./Styles/global";
import { BrowserRouter } from "react-router-dom";

import { Dishes } from "./Components/Dishes";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter />
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Dishes />
    </ThemeProvider>
  </React.StrictMode>
);
