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
import Dashboard from "./components/Admin/Dashboard";
import Account from "./components/User/Account";
import ProtectedRoute from "./Routes/ProtectedRoute";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<App />} />{" "}
      <Route path="/login" element={<Login />} />{" "}
      <Route path="/register" element={<Register />} />{" "}
      <Route path="/dashboard" element={<Dashboard />} />{" "}
      <Route
        path="/account"
        element={
          <ProtectedRoute isAdmin={false}>
            {" "}
            <Account />{" "}
          </ProtectedRoute>
        }
      />{" "}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute isAdmin={true}>
            {" "}
            <Dashboard />{" "}
          </ProtectedRoute>
        }
      />{" "}
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
