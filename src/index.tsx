import { store } from "./redux/store";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import RouterProviderApp from "./Routes/RouteProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <Provider store={store}>
      <RouterProviderApp />
    </Provider>
  </>
);
