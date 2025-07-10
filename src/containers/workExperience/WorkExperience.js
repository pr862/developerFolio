import React from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import {workExperiences} from "../../portfolio";
import "./WorkExperience.scss"; // Make sure this SCSS file exists

function WorkExperience() {
  if (!workExperiences.display) return null;

  return (
    <section className="work-experience-section" id="workExperience">
      <div className="container">
        {workExperiences.experience.map((block, i) => (
          <div className="experience-block" key={i}>
            <h2 className="experience-block-title">{block.title}</h2>
            <p className="experience-block-subtitle">{block.subtitle}</p>
            <div className="experience-cards-div">
              {block.experiences.map((exp, j) => (
                <ExperienceCard key={j} experience={exp} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WorkExperience;
