import React from "react";
import { AuthWrapper } from "./pages";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import privateRoute from "./pages/PrivateRoute";
import publicRoute from "./pages/PublicRoute";
import { GithubContext } from "./context/context";
import { darkTheme, lightTheme } from "./themes";
import styled, { ThemeProvider } from "styled-components";

function App() {
  const { isAuthenticated, user } = useAuth0();
  const { isDarkTheme } = React.useContext(GithubContext);
  const isUser = isAuthenticated && user;
  const router = createBrowserRouter([
    isUser ? privateRoute() : {},
    ...publicRoute(),
  ]);
  return (
    <AuthWrapper>
      <ThemeProvider theme={!isDarkTheme ? lightTheme : darkTheme}>
        <Wrapper>
          <RouterProvider router={router} />
        </Wrapper>
      </ThemeProvider>
    </AuthWrapper>
  );
}

const Wrapper = styled.div`
  background: ${(props) => props.theme.bg};
`;

export default App;
