import styled from 'styled-components';
import {Container} from '../Globalstyles';
import {Link} from 'react-router-dom';

export const FooterSection = styled.section`
display: flex;
align-items: center;
color: #fff;
background-color: #181818;
`;

export const FooterContainer = styled(Container)`
display: flex;
flex-direction: column;
align-items: center;
${Container}
`;

export const FooterLabel = styled.label`
display: none;
`;

export const FooterLinkContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
@media only screen and (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
}
`;

export const FooterLinksWrapper = styled.div`
display: flex;
align-items: center;
&:not(:last-child) {
    margin-right: 10rem;
}
@media only screen and (max-width: 900px) {
&:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4rem;
}
}
@media only screen and (max-width:700px){
}
`;

export const FooterLinks = styled.div`
display: flex;
align-items: flex-start;
flex-direction: column;
&:not(:last-child) {
    margin-right: 10rem;
}
`;

export const FooterLinkTitle = styled.h3`
font-size: 24px;
`;

export const FooterLink = styled(Link)`
text-decoration: none;
color: #fff;
margin-bottom: 1rem;
transition: all .4s ease;
&:hover {
    color: #43F3E3;
}
`;

export const FooterCopyRight = styled(Link)`
text-decoration: none;
outline: none;
color: #fff;
margin-top: 3rem;
&:hover {
    color: #43F3E3;
}
`;