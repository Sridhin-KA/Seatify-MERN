import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "./app/store";

import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Movies from "./pages/Movies.jsx"
import Register from "./pages/Register.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";

// ✅ Router setup
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // layout
    children: [
      {
        path: "",
        element:  (
          <PrivateRoute requireEmployee={true}>
            <Movies />
          </PrivateRoute>
        )
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "movies",
        element: 
       (
          <PrivateRoute requireEmployee={true}>
            <Movies />
          </PrivateRoute>
        )
      
      },
       {
        path: "register",
        element: <Register />
      }
    ]
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} /> {/* ✅ replace App */}
    </Provider>
  </StrictMode>
);