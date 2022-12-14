import styled from "styled-components";

export const MyRepoCardContent = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 1rem;
  justify-content: center;
  

  @media only screen and (max-width: 375px) {
    display: flex;
    flex-direction: column;
  }
`;

export const MyRepoCard = styled.div`
  font-size: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 20rem;
  padding-bottom: 5em;
  margin-top: 1em;
  margin-bottom: 1em;
  background-color: #fff;
  box-shadow: 0px 5px 40px rgba(0, 0, 0, 0.19);
  border-radius: 20px;
  transition: all 0.5s ease;
  &:not(:last-child) {
    margin-right: 5rem;

    @media only screen and (max-width: 900px) {
      margin-right: 0;
    }
    @media only screen and (max-width: 800px) {
      box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.12);
    }
    @media only screen and (max-width: 414px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    @media only screen and (max-width: 375px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  }

  &:hover {
    box-shadow: 0px 10px 80px rgba(0, 0, 0, 0.21);
    transform: scale(1.05);
    background-color: #43f3e3;
    color: #0b0e14;
  }
`;

export const Button = styled.button`
  border-radius: ${({ bigRadius }) => (bigRadius ? "20px" : "8px")};
  background-color: ${({ primary }) => (primary ? "#43F3E3" : "#0b0e14")};
  color: ${({ primary }) => (primary ? "#0b0e14" : "#fff")};
  padding: ${({ big }) => (big ? "10px 15px" : "5px 9px")};
  margin: auto 3px;
  font-size: ${({ bigFont }) => (bigFont ? "20px" : "18px")};
  outline: none;
  cursor: pointer;
  border: none;
  transition: all 0.5s ease;
  &:hover {
    background-color: ${({ primary }) => (primary ? "#fff" : "#43F3E3")};
    transform: translateY(-0.5rem) scale(1.02);
    color: #0b0e14;
  }
  &:active {
    transform: translateY(0.5rem);
  }
`;

export const MyRepoCardTitle = styled.h3`
  font-weight: bold;
  padding-top: 1rem;
  box-sizing: border-box;
`;

export const MyRepoCardText = styled.p`
  box-sizing: border-box;
`;
