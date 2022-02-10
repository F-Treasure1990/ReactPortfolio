import React from "react";
import ReactDOM from "react-dom";
import App from "App";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { store } from "Store/store";
import { GlobalReset } from "styles/GlobalReset.jsx";
import MasterTheme from "Components/MasterTheme";
import { MediaQ } from "styles/Mediaqueries";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={MediaQ}>
        <MasterTheme>
          <GlobalReset />
          <App />
        </MasterTheme>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
