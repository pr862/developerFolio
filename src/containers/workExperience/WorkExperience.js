import React, {useContext} from "react";
import "./WorkExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import {workExperiences} from "../../portfolio";
<<<<<<< HEAD
import "./WorkExperience.scss"; // Make sure this SCSS file exists
=======
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
>>>>>>> 88e96ff (init code)

export default function WorkExperience() {
  const {isDark} = useContext(StyleContext);
  if (workExperiences.display) {
    return (
      <div id="experience">
        <Fade bottom duration={1000} distance="20px">
          <div className="experience-container" id="workExperience">
            <div>
              <h1 className="experience-heading">Experiences</h1>
              <div className="experience-cards-div">
                {workExperiences.experience.map((card, i) => {
                  return (
                    <ExperienceCard
  isDark={isDark}
  cardInfo={{
    company: workExperiences.experience[0].company,
    desc: workExperiences.experience[0].desc,
    date: workExperiences.experience[0].date,
    companylogo: workExperiences.experience[0].companylogo,
    role: workExperiences.experience[0].role,
    descBullets: workExperiences.experience[0].descBullets
  }}
/>

                  );
                })}
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
  return null;
}
