import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import Switch from "./Switch";
import { lightTheme, darkTheme } from "../themes";
import { GithubContext } from "../context/context";
import { FaHeart } from "react-icons/fa";

const Navbar = () => {
  const { isAuthenticated, loginWithRedirect, logout, user, isLoading } =
    useAuth0();
  const { isDarkTheme } = React.useContext(GithubContext);
  const isUser = isAuthenticated && user;
  return (
    <ThemeProvider theme={!isDarkTheme ? lightTheme : darkTheme}>
      <Wrapper>
        <div>
          {isUser && user.picture && <img src={user.picture} alt={user.name} />}
          {isUser && user.name && (
            <h4>
              Welcome, <strong>{user.name.toUpperCase()}</strong>
            </h4>
          )}

          {/* <Switch /> */}
          {isUser ? (
            <button
              onClick={() => {
                logout({ returnTo: window.location.origin });
              }}
            >
              logout
            </button>
          ) : (
            <button onClick={loginWithRedirect}>login</button>
          )}
        </div>
        <p>
          Made by{" "}
          <a href="https://www.linkedin.com/in/satbir007/">
            <strong>Satbir Singh 🚀</strong>
          </a>
        </p>
      </Wrapper>
    </ThemeProvider>
  );
};

const Wrapper = styled.nav`
  background: ${(props) => props.theme.body};
  text-align: center;
  margin-bottom: 1rem;
  padding: 1rem 2rem 0 2rem;

  div {
    // padding: 1rem 2rem 0 2rem;
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: space-around;
    align-items: center;
    gap: 1.5rem;
    h4 {
      margin-bottom: 0;
      font-weight: 400;
      color: ${(props) => props.theme.text};
    }
    img {
      width: 35px !important;
      height: 35px;
      border-radius: 50%;
      object-fit: cover;
    }
    button {
      background: transparent;
      border: transparent;
      font-size: 1.2rem;
      text-transform: capitalize;
      letter-spacing: var(--spacing);
      color: ${(props) => props.theme.text};
      cursor: pointer;
    }
  }
  p {
    color: ${(props) => props.theme.link};
    text-align: center;
    align-items: center;
    margin: 0.1rem;
    padding-bottom: 10px;
    font-size: 0.8rem;
    a {
      color: ${(props) => props.theme.text};
    }
  }
`;

export default Navbar;
