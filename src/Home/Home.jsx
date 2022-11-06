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
                            <HomeTitleText>View My</HomeTitleText>
                        <HomeSubTitle>Repositories</HomeSubTitle>
                        <HomeText>
                          <div>find repositories by adding your github repositories 
                           username on the search button above. Happy searching..</div>
                           <HomeBtn to="/repo">
                           <Button primary big bigFont bigRadius>View My Repository</Button>
                        </HomeBtn>
                           
                        </HomeText>
                        
                   </HomeContentText>
           </HomeContainer>
        </div>
    )
}

export default Home;