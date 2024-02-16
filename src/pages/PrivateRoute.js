import React from "react";
import { Route, Navigate } from "react-router-dom";

import AppLayout from "../components/AppLayout";
import Error from "./Error";
import Dashboard from "./Dashboard";

// const PrivateRoute = ({ children, ...rest }) => {
//   const isUser = true;
//   return (
//     <Route
//       {...rest}
//       element={isUser ? children : <Navigate to="/login" replace />}
//     />
//   );
// };

// const PrivateRoute = ({ children, ...rest }) => {
//   const isUser = true;
//   return isUser ? children : <Navigate to="/login" />;
// };
// export default PrivateRoute;

export default function privateRoute() {
  return {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Dashboard />, errorElement: <Error /> },
      { path: "*", element: <Navigate to="/" replace /> },
    ],
  };
}
