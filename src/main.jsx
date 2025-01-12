import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import RoutesList from "./Router/RouteList.jsx";
import { Provider } from "react-redux";
import Store from "./Redux/store.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={Store}>
        <RouterProvider router={RoutesList} />
    </Provider>
    
  </StrictMode>
);
