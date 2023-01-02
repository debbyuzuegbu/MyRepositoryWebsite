import React from "react";
import { Button } from "../Globalstyles";

import {
  HomeContainer,
  HomeContentText,
  HomeTitleText,
  HomeSubTitleText,
  HomeText,
  HomeBtn,
} from "./Home.styles";

const Home = () => {
  return (
    <div>
      <HomeContainer>
        <HomeContentText>
          <HomeTitleText>Github Repository</HomeTitleText>
          <HomeSubTitleText>
            Find Your repository by adding your github username to the search
            button below
          </HomeSubTitleText>
          <HomeText>
            <HomeBtn to="/repo">
              <Button primary big bigFont bigRadius>
                View My Repository
              </Button>
            </HomeBtn>
          </HomeText>
        </HomeContentText>
      </HomeContainer>
    </div>
  );
};

export default Home;
