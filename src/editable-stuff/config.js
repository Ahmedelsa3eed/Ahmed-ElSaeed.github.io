// Navigation Bar SECTION
const navBar = {
    show: true,
};

// Main Body SECTION
const mainBody = {
    gradientColors: "#000000, #090909, #131313, #1A1A1A, #202020",
    firstName: "Ahmed",
    middleName: "",
    lastName: "ElSaeed",
    message: "  Software Engineer ⚛ DevOps Engineer",
    icons: [
        {
            image: "fa-github",
            url: "https://github.com/Ahmedelsa3eed",
        },
        {
            image: "fa-facebook",
            url: "https://www.facebook.com/profile.php?id=100004341583419&mibextid=ZbWKwL",
        },
        {
            image: "fa-instagram",
            url: "https://www.instagram.com/el_sa3eed/",
        },
        {
            image: "fa-linkedin",
            url: "https://www.linkedin.com/in/el-saeed/",
        }
    ],
};

const about = {
    show: true,
    heading: "About Me",
    imageLink: require("./Ahmed-ElSaeed.jpg"),
    imageSize: 375,
    message:
    "Ahmed is a driven Computer Engineering student with a fervent passion for software engineering and tackling complex problems. Armed has a solid understanding of DevOps principles, he thrives on streamlining processes and automating tasks to enhance efficiency. Ahmed is committed to crafting robust solutions that stand the test of time, constantly seeking new opportunities to innovate and elevate his skills in the realm of technology.",
    resume: require("./resume.pdf"),
};

const repos = {
    show: true,
    heading: "Recent Projects",
    gitHubUsername: "Ahmedelsa3eed",
    reposLength: 25,
    specificRepos: [],
};

// SKILLS SECTION
const skills = {
    show: false,
    heading: "Skills",
    hardSkills: [
        {name: "Python", value: 90},
        {name: "SQL", value: 75},
        {name: "Data Structures", value: 85},
        {name: "C/C++", value: 65},
        {name: "Java", value: 90},
        {name: "Angular", value: 65},
        {name: "Go", value: 80},
    ],
    softSkills: [
        {name: "Goal-Oriented", value: 80},
        {name: "Collaboration", value: 90},
        {name: "Positivity", value: 75},
        {name: "Adaptability", value: 85},
        {name: "Problem Solving", value: 75},
        {name: "Empathy", value: 90},
        {name: "Organization", value: 70},
        {name: "Creativity", value: 90},
    ],
};

// GET IN TOUCH SECTION
const getInTouch = {
    show: true,
    heading: "Get In Touch",
    message:
        "If you know of any positions available, have any questions, or just want to say hi, please feel free to email me at",
    email: "ahmed.m.elsaeed2@gmail.com",
};

const experiences = {
    show: true,
    heading: "Experiences",
    data: [
        {
            role: 'DevOps Engineer (Undergraduate)',
            companylogo: require('../assets/img/abi.jpeg'),
            date: 'Apr 2024 – Present',
        },
        {
            role: 'Software Engineer (Undergraduate)',
            companylogo: require('../assets/img/mm_logo.png'),
            date: 'July 2022 – Sep 2022',
        },
    ]
}

export {navBar, mainBody, about, repos, skills, getInTouch, experiences};
