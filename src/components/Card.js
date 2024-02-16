import React from "react";
import { GithubContext } from "../context/context";
import styled, { ThemeProvider } from "styled-components";
import { MdBusiness, MdLocationOn, MdLink } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { darkTheme, lightTheme } from "../themes";

const Card = () => {
  const { githubUser, isDarkTheme } = React.useContext(GithubContext);
  const {
    avatar_url,
    html_url,
    name,
    company,
    blog,
    bio,
    location,
    twitter_username,
  } = githubUser;
  return (
    <ThemeProvider theme={!isDarkTheme ? lightTheme : darkTheme}>
      <Wrapper>
        <header>
          <img src={avatar_url} alt={name} />
          <div>
            <h4>{name}</h4>

            <p>
              {twitter_username ? (
                <FaTwitter style={{ marginRight: "0.5rem" }} />
              ) : (
                ""
              )}{" "}
              @{twitter_username || ""}
            </p>
          </div>
          <a href={html_url}>follow</a>
        </header>
        <p className="bio">{bio}</p>
        <div className="links">
          <p>
            <MdBusiness></MdBusiness>
            {company}
          </p>
          <p>
            <MdLocationOn></MdLocationOn>
            {location || "earth"}
          </p>
          <p>
            <a href={`https://${blog}`}>
              {" "}
              <MdLink></MdLink> {blog}
            </a>
          </p>
        </div>
      </Wrapper>
    </ThemeProvider>
  );
};
const Wrapper = styled.article`
  background: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  padding: 1.5rem 2rem;
  border-top-right-radius: var(--radius);
  border-bottom-left-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
  position: relative;
  &::before {
    content: "user";
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-100%);
    background: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    border-top-right-radius: var(--radius);
    border-top-left-radius: var(--radius);
    text-transform: capitalize;
    padding: 0.5rem 1rem 0 1rem;
    letter-spacing: var(--spacing);
    font-size: 1rem;
  }
  header {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    column-gap: 1rem;
    margin-bottom: 1rem;
    img {
      width: 75px;
      height: 75px;
      border-radius: 50%;
    }
    h4 {
      margin-bottom: 0.25rem;
    }
    p {
      margin-bottom: 0;
      color: ${(props) => props.theme.link};
      display: flex;
      align-items: center;
    }
    a {
      color: ${(props) => props.theme.link};
      border: 1px solid ${(props) => props.theme.link};

      padding: 0.25rem 0.75rem;
      border-radius: 1rem;
      text-transform: capitalize;
      letter-spacing: var(--spacing);
      transition: var(--transition);
      cursor: pointer;
      &:hover {
        background: ${(props) => props.theme.button};
        color: ${(props) => props.theme.text};
      }
    }
  }
  .bio {
    color: ${(props) => props.theme.text};
  }
  .links {
    p,
    a {
      margin-bottom: 0.25rem;
      color: ${(props) => props.theme.link};
      display: flex;
      align-items: center;
      svg {
        margin-right: 0.5rem;
        font-size: 1.3rem;
      }
    }
    a {
      color: ${(props) => props.theme.link};
      transition: var(--transition);
      svg {
        color: ${(props) => props.theme.svgColor};
      }
      &:hover {
        color: ${(props) => props.theme.svgHoverColor};
      }
    }
  }
`;
export default Card;
