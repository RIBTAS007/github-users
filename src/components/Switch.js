import React from "react";
import styled from "styled-components";
import { GithubContext } from "../context/context";
import { MdLightMode } from "react-icons/md";
import { MdNightlight } from "react-icons/md";

const Switch = () => {
  const { onDarkTheme, isDarkTheme } = React.useContext(GithubContext);
  return (
    <Wrapper>
      <div>
        <CustomMdLightMode size={24} color="#FFA500" />
        <StyledToggleSwitch>
          <input type="checkbox" checked={isDarkTheme} onChange={onDarkTheme} />
          <StyledSwitch />
        </StyledToggleSwitch>
        <CustomMdNightlight
          size={24}
          color={
            isDarkTheme === true ? "hsl(186, 100%, 94%)" : "hsl(211, 39%, 23%)"
          }
        />
      </div>
    </Wrapper>
  );
};

const CustomMdLightMode = styled(MdLightMode)``;

const CustomMdNightlight = styled(MdNightlight)`
  /* You can apply any additional styling here */
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  column-gap: 0.1rem;
  justify-content: space-around;
  margin: 1.5rem 0 1rem 0;
`;

const StyledToggleSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 25px;
  margin: 0 0.75rem;

  input[type="checkbox"] {
    display: none;
  }
`;

const StyledSwitch = styled.span`
  position: absolute;
  cursor: pointer;
  background-color: #b6b6b6;
  border-radius: 25px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: background-color 0.2s ease;

  &::before {
    position: absolute;
    content: "";
    left: 2px;
    top: 2px;
    width: 21px;
    height: 21px;
    background-color: #333;
    border-radius: 50%;
    transition: transform 0.3s ease;
  }

  ${StyledToggleSwitch} input[type="checkbox"]:checked + &::before {
    transform: translateX(25px);
    background-color: #333;
  }

  ${StyledToggleSwitch} input[type="checkbox"]:checked + & {
    background-color: var(--clr-primary-8);
  }
`;

export default Switch;
