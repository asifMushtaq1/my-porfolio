
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Asif Mushtaq",
  title: "Hi all, I'm Asif Mushtaq",
  subTitle: emoji("Hi, I am Asif Mushtaq, a Software Engineering graduate with passion for Development. I have 1-2 years of experience in intermediate and complex level projects."),
  resumeLink: "https://docs.google.com/document/d/12Ii6x9-HFMku_VwbCgk2iJ1bt3BMuPlNdvtD3DbJn1s/edit"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/asifMushtaq1",
  linkedin: "https://www.linkedin.com/in/asif-mushtaq-5187b8114/",
  gmail: "asifmushtaq829@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "https://github.com/asifMushtaq1"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "CRAZY FRONTEND DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji("⚡ Integration of third party services such as Firebase / Node.js")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "react native",
      fontAwesomeClassname: "fas fa-mobile-alt"
    },
    {
      skillName: "api integration",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "",
      fontAwesomeClassname: ""
    },
    {
      skillName: "",
      fontAwesomeClassname: ""
    },
    {
      skillName: "",
      fontAwesomeClassname: ""
    }
  ]
};

// Your education background

const educationInfo = {
  viewEducation: true, // Set it to true to see education section
  schools: [
    {
      schoolName: "Institute Of Management Sciences ",
      logo: require("./assets/images/imsciencesLogo.jpg"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2015 - September 2019",
      desc: "Received CHIEF MINISTER EDUCATIONAL ENDOWMENT FUND (CMEEF).",
      descBullets: [
        "Member of MEGATHON '16 ",
        "Member of Official Cricket Team",
        "Graduated with 2.93 CGPA",
        "Thesis: Career Guidance",
        "Career Guidance (Final Year Project) ",
        "Career Guide is a Web-based application. This website is specifically targeting students that are graduating from schools & college. There is a large number of Students who have lack of Information and guidance to mentor them in the field where they can pursue their career. The software will provide a list, which contains all fields with maximum information to give a full idea about any field."
      ]
    },
  ]
}

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [

    {
      Stack: "Frontend/ReactJs",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Api Integration",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full Stack Developer",
      company: "Linknbit",
      companylogo: require("./assets/images/linknbitLogo.png"),
      date: "Sep 2019 – Present",
      desc: "Working for this  Software Development and IT Solutions Agency. My main roles includes development of new web and mobile based user interface,working closely with CTO to understand the scope of project, what ways to adopt in developing the project and then work on it.Working and collaborating with the rest of the engineering team, assigning task and taking daily reports. working with product team and graphic designer, documentation regarding project management.Responsible for API design and development of RESTful Services for the enterprise product in the business.Responsible for all the requirements/functionalities working flawlessly and reporting to manager.",
     
    },
   
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "asifmushtaq1", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  // subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      name: "Misooq (same as OLX Pakistan)  (Currently Involved)",
      link: "https://www.misooq.com"
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achivementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle: "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing" },
        { name: "Award Letter", url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing" },
        { name: "Google Code-in Blog", url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html" }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle: "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [{ name: "View Google Assistant Action", url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en" }]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        { name: "Certification", url: "" },
        { name: "Final Project", url: "https://pakistan-olx-1.firebaseapp.com/" }
      ]
    }
  ]
};

// Blogs Section

const blogSection = {

  title: "Big Projects",
  // subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://www.misooq.com",
      title: "Misooq",    
      description: "The free online marketplace website to buy and sell locally. MISOOQ assures you of a great shopping experience where you can Buy and Sell, faster load time & wide selection across categories"
    },
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or wanna hire? My Inbox is open for all.",
  number: "+92-3355272943",
  email_address: "asifmushtaq829@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName : "twitter"//Replace "twitter" with your twitter username without @

};
export { greeting, socialMediaLinks, skillsSection, educationInfo, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
