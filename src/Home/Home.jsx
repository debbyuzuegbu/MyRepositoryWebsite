import React from "react"
import {Button} from '../Globalstyles';

import {
    HomeContainer,
    HomeContent,
    HomeContentText,
    HomeTitle,
    HomeTitleText,
    HomeSubTitle,
    HomeText,
    HomeBtn,

} from './Home.styles';

const Home = () =>{
    return(
        <div>
           <HomeContainer>
                   <HomeContentText style={{padding: "10rem"}}>
                            <HomeTitleText>Github</HomeTitleText>
                            <HomeTitleText>View My Repository</HomeTitleText>
                        <HomeTitleText style={{fontSize: "20px", justifyContent:"center"}}>Find Your repository by adding your github username to the search button below</HomeTitleText>
                        <HomeText >
                           <HomeBtn to="/repo">
                           <Button  primary big bigFont bigRadius>View My Repository</Button>
                        </HomeBtn>
                        </HomeText>
                        
                   </HomeContentText>
           </HomeContainer>
        </div>
    )
}

export default Home;