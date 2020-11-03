
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Asif Mushtaq",
  title: "Hi all, I'm Asif Mushtaq",
  subTitle: emoji("I am a 23 years old Software Engineer 🚀, who loves to play with different technologies. My expertise are in React, React Native i started out as Front-End Developer but than i found love with Back-End and Devops and so the journey continues."),
  resumeLink: "https://drive.google.com/drive/u/0/my-drive"
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
    {
      schoolName: "The Peace School & College",
      logo: require("./assets/images/peaceLogo.png"),
      subHeader: "Higher Secondary School Certificate (HSSC)",
      duration: "April 2013 - April 2015",
      desc: "Studied Pre Engineering",
      descBullets: [
        "Graduated with A Grade",
        "Member of official Cricket team.",
        "played other games badminton,football."
      ]
    },
    {
      schoolName: "The Peace School & College",
      logo: require("./assets/images/peaceLogo.png"),
      subHeader: "Secondary School Certificate (SSC)",
      duration: "April 2011 - April 2013",
      desc: "Studied Computer Science, Physics, Chemistry, Mathematics ",
      descBullets: [
        "Graduated with A+ Grade",
        "Member of official Cricket team."
      ]
    }
  ]
}

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Api Integration",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "React / React Native application developer",
      company: "Linknbit",
      companylogo: require("./assets/images/linknbitLogo.png"),
      date: "Sep 2019 – Present",
      desc: "Working for this Software Development and IT Solutions Agency. My main roles includes developing Web Applications and Hybrid Mobile Applications.",
     
    },
    {
      role: "React / React Native application developer",
      company: "Fiverr",
      companylogo: require("./assets/images/fiverrLogo.png"),
      date: "June 2020 – Oct 2020",
      descBullets: [
        "Managed  projects frontend from start to finish ",
        "Done 3 projects of building frontend of native apps.",
        "Translated requirements into polished, high-level designs"
       ]
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
      name: "Global Aviation Solutions (Currently Involved)",
      link: "http://saayahealth.com/"
    },
    {
      name: "Classified Ads (same as OLX Pakistan)  (Currently Involved)",
      link: "http://nextu.se/"
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

  title: "Projects (14)",
  // subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: null,
      title: "Global Aviation Solution",    
      description: "GAS is a  Web-based application for aviation management  .Operator can create permit of incoming flights, Admin can monitor flight details ,permit Apllication ,flight route ,reject or accept permit ,create roles end to end system chat.worked at building the frontend and flow of application with mock server using fuse theme "
    },
    {
      url: null,
      title: "Classified Ads",    
      description: "Ads posting website same functionalities  as olx pakistan working with frontend and api integration (currently involved)"
    },
    {
      url: null,
      title: "Dum-Dashboard",    
      description: "Modeling agency Dashboard for Fashion designers and marketers.admin as  approves users, add people, and hire models at will."
    },
    {
      url: null,
      title: "Coupon-sahl-dashboard",    
      description: "Coupons Dashboard for shopping.admin can create,edit,delete coupons and stores. "
    },
    {
      url: "https://play.google.com/store/apps/details?id=com.coupon_sahl_app",
      title: "Coupon-sahl-app ",    
      description: "Coupon sahl app for shopping.user can register via  social media links,serach ,share, buy a coupon using coupon store link. "
    },
    {
      url: null,
      title: "Yugen-app ",    
      description: "Yugen app for streaming live games.user can register, create profile ,post,like post ,share post, comment post.user can view live streams,teams,players. worked for making frontend of screens and apiintegration.  "
    },
    {
      url: "https://play.google.com/store/apps/details?id=com.zesttygroup.bezestty",
      title: "be-zestty-app",    
      description: "Food ordering app.worked for making frontend of screens."
    },
    {
      url: "https://play.google.com/store/apps/details?id=com.dum.co",
      title: "Dynasty Unleash Models",    
      description: "Modeling agency App for Fashion designers and marketers.Users can register, create profile, add people, and hire models at will. "
    },
    {
      url: "https://expo.io/@sufyan/projects/dokkani",
      title: "Dokanni.co",    
      description: "Ecommerce Mobile App , where people can buy things belonging to different categories.User can register, select products, add products to cart.User add products to wish list and checkout"
    },
    {
      url: null,
      title: "Football-buzz",    
      description: "Live match updates Mobile App , where user can view live scores,statistics,standings of football match. user can also view the upcomimg matches.worked for making frontend of screens."
    },
    {
      url: "https://expo.io/@asifmushtaq1/projects/myfirst-app",
      title: "Suha - Multipurpose Ecommerce Mobile Template ",    
      description: "A  e-commerce shop template build just for practicing react native for building the frontend design."
    },
    {
      url: "https://play.google.com/store/apps/details?id=com.panacsystems.odikko",
      title: "Odikko - Shopping Simplified",    
      description: "Oddikko app for Food Ordering.people can buy things belonging to different categories.User can register, select products, add products to cart.User add products to wish list and checkout. "
    },
    {
      url: null,
      title: "Ziffy-app",    
      description: "Ziffy app for Food Ordering.people can buy things belonging to different categories.User can register, select products, add products to cart.User add products to wish list and checkout."
    },
    {
      url: null,
      title: "Manbids",    
      description: "services posting Mobile App , where people can post jobs belonging to different categories.User can register, view and bids on jobs.Worked re-designed with modern features & coded with the latest technology."
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
