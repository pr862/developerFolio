import React from "react";
import "./Progress.scss";
import { illustration, techStack } from "../../portfolio";
import { Fade } from "react-reveal";
import Build from "../../assets/lottie/build.json"; // ✅ Lottie JSON
import DisplayLottie from "../../components/displayLottie/DisplayLottie";

export default function StackProgress() {
  if (!techStack.viewSkillBars) return null;

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="skills-container">
        <div className="skills-bar">
          <h1 className="skills-heading">Proficiency</h1>

          {/* ✅ Add a list of descriptions above the progress bars */}
          <ul className="proficiency-description">
            <li>⚡ Expertise in building responsive UI with HTML, CSS, JS</li>
            <li>⚡ Comfortable with React and component architecture</li>
            <li>⚡ Basic understanding of backend and API integration</li>
          </ul>

          {techStack.experience.map((exp, i) => {
            const progressStyle = {
              width: exp.progressPercentage,
            };
            return (
              <div key={i} className="skill">
                <p>{exp.Stack}</p>
                <div className="meter">
                  <span style={progressStyle}></span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="skills-image">
          {illustration.animated ? (
            <DisplayLottie animationData={Build} />
          ) : (
            <img
              alt="Skills"
              src={require("../../assets/images/skill.svg")}
            />
          )}
        </div>
      </div>
    </Fade>
  );
}
