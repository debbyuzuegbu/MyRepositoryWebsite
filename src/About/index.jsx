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
            ð Pronouns: She/her ð¡ Fun fact: I'm currently studying at
            AltSchool Africa School of Software Engineering Class of 2022.
          </li>
          <li>ð± Iâm currently learning JavaScript, Reactjs, and Python.</li>
          <li>
            ð Iâm looking for help with open source projects, hackathons,
            internships, and entry-level opportunities.
          </li>
          <li>
            {" "}
            ð¼ Job interests: Software Engineer, Front Engineer, or UI Engineer,
            Intern or Junior level.
          </li>
          <li>
            ð«You can contact me by emailing me: debbyuzuegbu@gmail.com.
          </li>
          <li>ð LinkedIn Profile: linkedin.com/in/deborah-uzuegbu</li>
          <li>ð Instagram handle: debbie_evv</li>
        </ul>
      </p>
      </div>
    </AboutTitle>
  );
}

export default About;
