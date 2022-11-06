import styled from 'styled-components';

export const WorksCardContent = styled.div`
margin-top: 1rem;
display: grid;
column-gap: 0.1rem;
row-Gap: 1rem; 
grid-template-columns: auto auto auto;
padding: 2rem;

@media only screen and (max-width:375px){
    flex-direction: column;
}
`;

export const WorksCard = styled.div`
font-size: 12px;
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
width: 20rem;
height: 20rem;
background-color: #fff;
box-shadow: 0px 5px 40px rgba(0, 0, 0, 0.19);
border-radius: 20px;
transition: all .5s ease;
&:not(:last-child) {
    margin-right: 5rem;
    @media only screen and (min-width: 1300px){
        margin-right: 10rem;
    }
    @media only screen and (min-width: 1500px){
        margin-right: 20rem;
    }
    @media only screen and (max-width:900px){
        margin-bottom: 10rem;
        margin-right: 0;
    }
    @media only screen and (max-width: 800px){
        box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.12);
    }
    
}
@media only screen and (max-width:900px){
        width: 50rem;
}
@media only screen and (max-width:500px){
        width: 30rem;
}
@media only screen and (min-width:1890px){
        width: 40rem;
}
&:hover {
    box-shadow:  0px 10px 80px rgba(0, 0, 0, 0.21);
    transform: scale(1.05);
    background-color: #43F3E3;
    color: #fff;
    
}
`;

export const WorksCardTitle = styled.h3`
font-weight: bold;
padding-top: 1rem;
box-sizing: border-box;
`;

export const WorksCardText = styled.p`
box-sizing: border-box;
`;