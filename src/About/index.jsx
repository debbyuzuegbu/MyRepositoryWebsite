import React from "react";
import {
  AboutTitle,
} from './About.styles';

function About() {
  return (
    <AboutTitle>
      <div className="page">
      <h1>Deborah Uzuegbu</h1>
      <p>
        Here's a quick summary about me:
        <ul>
          <li>
            😊 Pronouns: She/her 💡 Fun fact: I'm currently studying at
            AltSchool Africa School of Software Engineering Class of 2022.
          </li>
          <li>🌱 I’m currently learning JavaScript, Reactjs, and Python.</li>
          <li>
            😊 I’m looking for help with open source projects, hackathons,
            internships, and entry-level opportunities.
          </li>
          <li>
            {" "}
            💼 Job interests: Software Engineer, Front Engineer, or UI Engineer,
            Intern or Junior level.
          </li>
          <li>
            📫You can contact me by emailing me: debbyuzuegbu@gmail.com.
          </li>
          <li>😊 LinkedIn Profile: linkedin.com/in/deborah-uzuegbu</li>
          <li>😊 Instagram handle: debbie_evv</li>
        </ul>
      </p>
      </div>
    </AboutTitle>
  );
}

export default About;
