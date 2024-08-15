import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { SnackbarProvider } from "notistack";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom";
import App from "./App";
import Login from "./components/User/Login";
import Register from "./components/User/Register";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<App />} />{" "}
      <Route path="/login" element={<Login />} />{" "}
      <Route path="Register" element={<Register />} />{" "}
    </Route>
  )
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <SnackbarProvider
        maxSnack={2}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center"
        }}
      >
        <RouterProvider router={router} />{" "}
      </SnackbarProvider>{" "}
    </Provider>{" "}
  </React.StrictMode>,
  document.getElementById("root")
);
