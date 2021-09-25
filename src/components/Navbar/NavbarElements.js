import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaPizzaSlice } from "react-icons/fa";

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  background: transparent;
  font-weight: 700;
  height: 5rem;
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  color: var(--white);
  font-size: 3rem;
  text-decoration: none;
  -webkit-text-stroke: 2px hsl(92.1, 43.9%, 38.4%);
  cursor: pointer;

  @media screen and (max-width: 25em) {
    position: absolute;
    top: 0.62rem;
    left: 1.56rem;
  }
`;

export const NavIcon = styled.div`
  display: block;
  color: var(--white);
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;

  p {
    font-weight: bold;
    transform: translate(-175%, 100%);

    @media screen and (max-width: 30em) {
      font-size: 1rem;
      position: relative;
      right: -30px;
    }
  }
`;

export const Bars = styled(FaPizzaSlice)`
  font-size: 2rem;
  transform: translate(-50%, -15%);

  @media screen and (max-width: 30em) {
    font-size: 1.5rem;
    position: absolute;
    right: 0;
  }
`;
