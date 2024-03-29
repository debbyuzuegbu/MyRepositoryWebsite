import styled, {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;600;800&display=swap'); 
*{
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}
html {
    box-sizing: border-box;
    font-size: 62.5%;
    @media only screen and (max-width: 1200px){
        font-size: 58%;
    }
    @media only screen and (min-width: 1980px){
        font-size: 70%;
    }
}
body{
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    line-height: 1.6;
    font-size: 1.6rem;
    background: #1e242e;
    color: #fff;
}
`;

export default GlobalStyles;

export const Container = styled.div`
margin: 0 auto;
padding: 0 40px;
/* max-width: 1300px; */
width: 100%;
@media (max-width:400px){
    padding: 0 10px;
}
@media (max-width:991px) {
    padding: 0 30px;
}
@media (min-width: 1500px) {
    /* max-width: 1500px; */
}
@media (min-width: 1800px) {
    /* max-width: 1800px; */
    padding: 0 30px;
}
`;

export const Button = styled.button`
border-radius: ${({bigRadius}) => bigRadius ? '15px': '12px'};
background-color: ${({primary}) => primary? '#fff': '#1e242e'};
color: ${({primary}) => primary ? '#1e242e': '#fff'};
padding: ${({big}) => big? '14px' : '14px'};
font-size: ${({bigFont}) => bigFont? '18px': '16px'};
outline: none;
cursor: pointer;
border: none;
transition: all .5s ease;
&:hover{
    background-color: ${({primary}) => primary? '#161a1f': '#fff'};  
    transform: translateY(-.5rem) scale(1.02);
    color: #fff;
}
&:active{
    transform: translateY(.5rem);
}
@media only screen and (max-width:1000px) {
    width: 100%;
    padding: ${({big}) => big? '18px 30px' : '10px 20px'};
}
@media only screen and (max-width:375px) {
    padding: ${({big}) => big? '12px 20px' : '10px 20px'};
    font-size: ${({bigFont}) => bigFont? '16px': '18px'};
}
`;

export const OutlineButton = styled.button`
border-radius: ${({bigRadius})=> bigRadius? '40px' : '30px'};
border: 2px solid #0b0e14;
color: #0b0e14;
outline: none;
padding: ${({big}) => big? '15px 60px' : '13px 55px'};
font-size: ${({fontBig}) => fontBig? '22px':'18px'};
transition: all .5s ease;
background-color: #fefefe;
&:hover {
    background-color: #333;
    color: #fff;
    border: none;
    transform: translateY(-.5rem) scale(1.02);
}
&:active{
    transform: translateY(.5rem);
}
@media only screen and (max-width: 1200px) {
    border-radius: ${({bigRadius})=> bigRadius? '20px' : '18px'};
    padding: ${({big}) => big? '9px 30px' : '8px 28px'};
    font-size: ${({fontBig}) => fontBig? '18px':'16px'};
}
@media only screen and (max-width:780px) {
    border: none;
    color: #fff;
    padding: 1rem 2rem;
    background: none;
    transition: all .4s ease;
    &:hover {
        border-bottom: 1px solid #fff; 
        background: none; 
        border-radius: 0;
        color: #fff;
    }
}
`;