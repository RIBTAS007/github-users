import React from "react";

import { Navigate } from "react-router-dom";
import Login from "./Login";

export default function publicRoute() {
  return [
    { path: "/login", element: <Login /> },
    { path: "*", element: <Navigate to="/login" replace /> },
  ];
}
