import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaGithubSquare } from "react-icons/fa";
import { Container } from "../Globalstyles";

export const Nav = styled.nav`
  font-family: "Montserrat", sans-serif;
  position: sticky;
  top: 0;
  z-index: 999;
  background-color: #161a1f;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  border-radius: 5px;
  border: none;
  font-family: 'Montserrat', sans-serif;
  padding: 5px;
  font-size: 12px;
  &:hover{
    background-color: #1e242e;  
    transform: translateX(-.5rem) scale(0.05);
    color: #fff;
}
&:active{
    transform: translateY(.5rem);
}
`;


export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  ${Container};
`;

export const NavLogo = styled(Link)`
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 400;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.08);
  }
`;

export const NavIcon = styled(FaGithubSquare)`
  margin-right: 0.8rem;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(2);
  }
`;

export const MenuIcon = styled.div`
  display: none;
  @media (max-width: 1000px) {
    display: block;
    margin-bottom: 10px;
    transform: translate(-50%, 20%);
    font-size: 2rem;
    cursor: pointer;
  }
`;

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;
  @media only screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    height: 70vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? "0" : "-100%")};
    background-color: #0b0e14;
    transition: all 0.5s ease;
  }
`;

export const MenuItem = styled.li`
  list-style: none;
  @media only screen and (max-width: 1000px) {
    width: 100%;
    &:hover {
      border: none;
    }
  }
`;

export const MenuLink = styled(Link)`
  text-decoration: none;
  font-size: 1rem;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  height: 100%;
  transition: all 0.2s ease;
  &:hover {
    color: #43f3e3;
    transform: traslateY(-3rem);
  }
  &:active {
    transform: traslateY(3rem);
    color: #43f3e3;
  }
  @media only screen and (max-width: 1000px) {
    display: block;
    padding: 3rem;
    text-align: center;
    transition: all 0.2s ease;
  }
`;

export const MenuItemBtn = styled.li`
  list-style: none;
  @media screen and (max-width: 1000px) {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 120px;
  }
`;

export const MenuLinkBtn = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;
