import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { Store } from "./Utlis/Store";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <Provider store={Store}>
    <App />
  </Provider>
);