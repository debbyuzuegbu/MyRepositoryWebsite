import styled from "styled-components";
import { Link } from "react-router-dom";

export const HomeContainer = styled.div`
  background-color: #1e242e;
  color: #fff;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media only screen and (max-width: 1600px) {
    height: 100vh;
  }
`;

export const HomeContent = styled.section`
  /* height: 90%; */
  /* width: 100%; */
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fffefe;
  @media only screen and (max-width: 375px) {
    text-align: start;
    height: 100%;
  }
`;

export const HomeContentText = styled.div`
  padding: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  text-align: center;
  @media only screen and (max-width: 912px) {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media only screen and (max-width: 820px) {
    position: absolute;
    display: flex;
    justify-content: center;
  }

  @media only screen and (max-width: 412px) {
    position: absolute;
    display: flex;
    justify-content: center;
  }
  @media only screen and (max-width: 390px) {
    position: absolute;
    display: flex;
    justify-content: center;
  }
`;

export const HomeTitle = styled.h1`
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0.5rem;
  line-height: 1;
  justify-content: center;
`;

export const HomeTitleText = styled.h1`
  display: block;
  margin: 50px 0 10px;
  max-width: 600px;
  line-height: 30px;
  font-weight: bold;
  text-align: center;
  font-size: 2em;
`;

export const HomeSubTitleText = styled.p`
  display: block;
  margin: 10px 0;
  max-width: 400px;
  line-height: 30px;
  text-align: center;
  font-size: 1em;
`;

export const HomeText = styled.h3`
  font-size: clamp(1.5rem, 2vw, 2rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  padding: 1rem 1rem;
  @media only screen and (max-width: 375px) {
    padding: 1.5rem 0;
  }
`;

export const HomeBtn = styled(Link)`
  text-decoration: none;
  outline: none;
  border: none;
`;
