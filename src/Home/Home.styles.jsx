import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const HomeContainer = styled.div`
background-color:#0b0e14;
color: #fff;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
height: 100vh;
@media only screen and (max-width:1600px) {
    height: 85vh;
}
`;

export const HomeContent = styled.section`
height: 100%;
width: 100%;
position: relative;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
color: #FFFEFE;
@media only screen and (max-width:375px) {
    text-align: start;
    height: 80%;
}
`;

export const HomeContentText = styled.div`
width: 50%;
padding: 5rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 0 auto;
@media only screen and (max-width:600px) {
    width: 80%;
}
@media only screen and (max-width:375px) {
    position: absolute;
    align-items: flex-start;
}
`;

export const HomeTitle = styled.h1`
font-size: clamp(1rem, 10vw, 5rem);
font-weight: 900;
letter-spacing: 0.5rem;
line-height: 1.0;
`;

export const HomeTitleText = styled.span`
display: block;
margin: 0;
font-size: clamp(1rem, 10vw, 3rem);
`;

export const HomeSubTitle = styled.h2`
font-size: clamp(2rem, 3vw, 4rem);
box-sizing: border-box;
text-align: center;
margin: 0;
font-weight: 300;
/* letter-spacing: 1rem; */
padding-top: 1rem;
`;

export const HomeText = styled.h3`
font-size: clamp(1.5rem, 2.0vw, 2rem);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-weight: 400;
padding: 1rem 1rem;
@media only screen and (max-width:375px) {
    padding: 1.5rem 0;
}
`;

export const HomeBtn = styled(Link)`
text-decoration: none;
outline: none;
border: none;
`;