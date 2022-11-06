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
                   <HomeContentText>
                            <HomeTitleText>Github</HomeTitleText>
                            <HomeTitleText>View My Repository</HomeTitleText>
                        <HomeSubTitle>Find Your repository by adding your github repositories to the search button</HomeSubTitle>
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