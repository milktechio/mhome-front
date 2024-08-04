import { store } from "./redux/store";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom/client";
import RouterProviderApp from "./Routes/RouteProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProviderApp />
    </Provider>
  </React.StrictMode>
);
