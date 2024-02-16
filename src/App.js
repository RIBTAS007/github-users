import React from "react";
import { AuthWrapper } from "./pages";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import privateRoute from "./pages/PrivateRoute";
import publicRoute from "./pages/PublicRoute";

function App() {
  const { isAuthenticated, user } = useAuth0();
  const isUser = isAuthenticated && user;
  const router = createBrowserRouter([
    isUser ? privateRoute() : {},
    ...publicRoute(),
  ]);
  return (
    <AuthWrapper>
      <RouterProvider router={router} />
    </AuthWrapper>
  );
}

export default App;
