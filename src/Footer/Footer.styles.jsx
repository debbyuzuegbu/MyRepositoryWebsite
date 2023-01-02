import styled from "styled-components";
import { Container } from "../Globalstyles";
import { Link } from "react-router-dom";

export const FooterSection = styled.section`
  display: flex;
  height: 3em;
  align-items: center;
  justify-content: center;
  color: #fff;
  background-color: #161a1f;
  @media only screen and (max-width: 1200px) {
  }
`;

export const FooterCopyRight = styled(Link)`
  font-size: 12px;
  text-decoration: none;
  outline: none;
  color: #fff;
  @media only screen and (max-width: 1000px) {
    font-size: 8px;
  }
`;
