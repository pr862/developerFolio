import React, {createRef} from "react";
import "./ExperienceCard.scss";

export default function ExperienceCard({isDark}) {
  const imgRef = createRef();

  const descBullets = [
    "Built user interfaces with clean and maintainable code",
    "Collaborated with the design and backend teams",
    "Worked with Git and GitHub for version control"
  ];

  return (
    <div className={isDark ? "experience-card-dark" : "experience-card"}>
      {/* ✅ Only one experience-banner */}
      <div
        className="experience-banner"
        style={{background: "linear-gradient(135deg, #6e3497, #ba55d3)"}}
      >
        <div className="experience-blurred_div"></div>
        <div className="experience-div-company">
          <h5 className="experience-text-company">Canopas</h5>
        </div>

        <img
          crossOrigin={"anonymous"}
          ref={imgRef}
          className="experience-roundedimg"
          src={require("../../assets/images/images.jpeg")}
          alt="Canopas"
        />
      </div>

      <div className="experience-text-details">
        <h5
          className={
            isDark
              ? "experience-text-role dark-mode-text"
              : "experience-text-role"
          }
        >
          Frontend Developer Intern
        </h5>
        <h5
          className={
            isDark
              ? "experience-text-date dark-mode-text"
              : "experience-text-date"
          }
        >
          June 2025 – Present
        </h5>
        <p
          className={
            isDark
              ? "subTitle experience-text-desc dark-mode-text"
              : "subTitle experience-text-desc"
          }
        >
          Worked on developing and maintaining modern, responsive UI using
          React, SCSS, and reusable components.
        </p>
        <ul>
          {descBullets.map((item, i) => (
            <li
              key={i}
              className={isDark ? "subTitle dark-mode-text" : "subTitle"}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
