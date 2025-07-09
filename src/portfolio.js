/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  title: "Hi, I'm Princy Vithani.",
  subtitle: "Web Developer | Coder | Learner",
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/pr862",
  linkedin: "https://www.linkedin.com/in/princyvithani/",
  gmail: "princyvithani09@gmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Crafting the Web",
  subTitle: "PASSIONATE FRONTEND DEVELOPER EXPLORING THE DIGITAL UNIVERSE",
  skills: [
    emoji(
      "⚡ Building responsive and accessible UIs with HTML, CSS & JavaScript"
    ),
    emoji(
      "⚡ Creating seamless experiences using React.js and modern frameworks"
    ),
    emoji(
      "⚡ Connecting APIs & tools like Firebase, REST, and Git to bring data to life"
    )
  ],
  softwareSkills: [
    {skillName: "HTML5", fontAwesomeClassname: "fab fa-html5"},
    {skillName: "CSS3", fontAwesomeClassname: "fab fa-css3-alt"},
    {skillName: "JavaScript", fontAwesomeClassname: "fab fa-js"},
    {skillName: "React", fontAwesomeClassname: "fab fa-react"},
    {skillName: "Git", fontAwesomeClassname: "fab fa-git"},
    {skillName: "Firebase", fontAwesomeClassname: "fas fa-fire"}
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "SHREE SWAMI ATMANAND SARASWATI INSTITUTE OF TECHNOLOGY",
      subHeader: "Bachelor in Computer Engineering",
      duration: "2022 - Present",
      desc: "Focusing on Web Development and Software Fundamentals"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "65%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      title: "Work Experience",
      subtitle:
        "I have completed an internship at Canopas where I worked on real-world projects and improved my development skills.",
      experiences: [
        {
          role: "Frontend Developer Intern",
          company: "Canopas",
          companylogo: require("./assets/images/images.jpeg"),
          date: "June 2025 – Present",
          desc: "Working on developing and maintaining modern, responsive UI using React, SCSS, and reusable components.",
          descBullets: [
            "Built user interfaces with clean and maintainable code",
            "Collaborated with the design and backend teams",
            "Worked with Git and GitHub for version control"
          ]
        }
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on
const bigProjects = {
  title: "Mini Projects",
  subtitle: "Projects I'm currently building and customizing",
  projects: [
    {
      projectName: "DevFolio",
      projectDesc:
        "A personalized portfolio site built using React and DeveloperFolio, showcasing my internship and frontend projects.",
      footerLink: [
        {
          name: "GitHub Repo",
          url: "https://github.com/pr862/developerFolio"
        }
      ]
    }
  ],
  display: true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements & Certifications 🏆"),
  subtitle: "My internship certification and learning milestones.",

  achievementsCards: [
    {
      title: "Internship at Canopas",
      subtitle:
        "Completed a frontend development internship at Canopas, working on real-world React projects and UI design.",
      image: require("./assets/images/images.jpeg"), // Replace with your logo image path
      imageAlt: "Canopas Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/174QX13ffIVCAMwFx9_xrScAwd8SC4mEd/view?usp=sharing" // Replace with your actual certificate URL (e.g., Google Drive link)
        }
      ]
    }
  ],
  display: true
};

// Blogs Section
const blogSection = {
  title: "Tech Stack Highlights",
  subtitle:
    "These are the essential tools I use to design, code, and manage modern frontend projects.",
  displayMediumBlogs: "false",
  blogs: [
    {
      url: "https://create-react-app.dev/docs/adding-a-sass-stylesheet/",
      title: "React & SCSS",
      description:
        "Official guide on how to integrate SCSS (Sass) with React using Create React App for modular and maintainable styling."
    },
    {
      url: "https://www.freecodecamp.org/learn",
      title: "JavaScript & Git",
      description:
        "FreeCodeCamp’s hands-on curriculum to learn JavaScript fundamentals and Git version control for real-world web development."
    }
  ],
  display: true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle:
    "I love sharing my developer journey, learnings, and insights about frontend development.",

  // Replace the link below with your actual podcast URL or embed link
  podcast: [
    "https://anchor.fm/examplepodcast/embed/episodes/Internship-Experience-at-Canopas-e1a2b3c"
  ],
  display: false // Set to false if you want to hide this section
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My inbox is open — feel free to reach out!",
  number: "+91-XXXXXXXXXX", // Replace with your actual number if you want it public
  email_address: "princyvithani09@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
