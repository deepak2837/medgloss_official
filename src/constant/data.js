import images from "./images.js";

const Menu = [
  { text: "Home", link: "/" },
  { text: "About us", link: "/about" },
  { text: "Services", link: "" },
  { text: "Technologies", link: "" },
  { text: "Industries", link: "" },
  { text: "Portfolio", link: "" },
  { text: "Blogs", link: "/blog" },
  { text: "Contact", link: "/contact-us" },
];

export const ServicesData = [
  {
    titleone: "Question",
    titletwo: "Bank",
    link: "/question-bank",
    itemclass: "blight",
    imgURL: images.services01,
  },
  {
    titleone: "Virtual",
    titletwo: "Surgery",
    link: "/virtual-surgery",
    itemclass: "bgreen",
    imgURL: images.services02,
  },
  {
    titleone: "Case",
    titletwo: "Studies",
    link: "/case-studies",
    itemclass: "bdark",
    imgURL: images.services03,
  },
  {
    titleone: "3D",
    titletwo: "Models",
    link: "/3Dmodels",
    itemclass: "blight",
    imgURL: images.services04,
  },
  {
    titleone: "Blogs",
    titletwo: "",
    link: "/blog",
    itemclass: "bgreen",
    imgURL: images.services05,
  },
  {
    titleone: "Mock",
    titletwo: "Tests",
    link: "/mock-test",
    itemclass: "bdark",
    imgURL: images.services06,
  },
  {
    titleone: "Videos",
    titletwo: "",
    link: "/videos",
    itemclass: "blight",
    imgURL: images.services07,
  },
];

const CaseStudies = [
  {
    text: "A patient with chronic obstructive pulmonary disease (COPD) successfully managed their condition...",
    link: "/comingsoon",
  },
  {
    text: "A cancer survivor overcame their battle with the disease...",
    link: "/comingsoon",
  },
  {
    text: "A patient with type 2 diabetes achieved significant improvements...",
    link: "/comingsoon",
  },
  {
    text: "A patient with chronic pain found relief through a comprehensive pain management program...",
    link: "/comingsoon",
  },
  {
    text: "A cardiac patient successfully recovered from a heart attack...",
    link: "/comingsoon",
  },
];

const CaseStudies1 = [
  {
    text: "A boutique e-commerce store was struggling to stand out in a competitive market.",
    link: "/comingsoon",
  },
  {
    text: "A tech startup required a compelling online presence...",
    link: "/comingsoon",
  },
  {
    text: "A local service provider lacked an online platform...",
    link: "/comingsoon",
  },
];

const CaseStudies2 = [
  {
    subject: "Anatomy",
    numQuestions: 50,
    date: "2023-05-15",
    difficulty: "Intermediate",
    attempters: ["John Doe", "Jane Smith", "Michael Johnson"],
  },
  {
    subject: "Physiology",
    numQuestions: 75,
    date: "2023-04-20",
    difficulty: "Advanced",
    attempters: ["Emily Wilson", "David Thompson", "Sarah Davis"],
  },
  {
    subject: "Pharmacology",
    numQuestions: 40,
    date: "2023-03-10",
    difficulty: "Beginner",
    attempters: ["Robert Brown", "Jessica Taylor", "Daniel Anderson"],
  },
];

const CaseStudies3 = [
  {
    text: "A boutique e-commerce store was struggling to stand out in a competitive market.",
    link: "/comingsoon",
  },
  {
    text: "A tech startup required a compelling online presence...",
    link: "/comingsoon",
  },
  {
    text: "A local service provider lacked an online platform...",
    link: "/comingsoon",
  },
];

const CaseStudies4 = [
  {
    text: "A boutique e-commerce store was struggling to stand out in a competitive market.",
    link: "/comingsoon",
  },
  {
    text: "A tech startup required a compelling online presence...",
    link: "/comingsoon",
  },
  {
    text: "A local service provider lacked an online platform...",
    link: "/comingsoon",
  },
];

const WorkingProcess = [
  {
    title: "Consultation",
    description:
      "During the initial consultation, we will discuss your business goals and objectives...",
  },
  {
    title: "Documentation",
    description:
      "We will help you to analyse the gap and perform a granular analysis of the requirement...",
  },
  {
    title: "UI/UX Consulting",
    description:
      "We will help you in creating intuitive UI & UX for your product...",
  },
  {
    title: "Development and Deployment",
    description:
      "We will design, develop & deploy your product in this model...",
  },
];

const Team = [
  {
    name: "Harshith",
    position: "CEO and Founder",
    info: "10+ years of experience in Web development...",
    foto: images.team01,
    linkedin: "",
  },
  {
    name: "Deepa",
    position: "Director of Operations",
    info: "7+ years of experience in project management...",
    foto: images.team02,
    linkedin: "",
  },
  {
    name: "Deepak",
    position: "Senior Full Stack Developer",
    info: "5+ years of experience in frontend and backend development...",
    foto: images.team03,
    linkedin: "",
  },
  {
    name: "Alex",
    position: "Database Expert",
    info: "3+ years of experience in handling various databases...",
    foto: images.team04,
    linkedin: "",
  },
  {
    name: "Aryan",
    position: "Devops",
    info: "4+ years of experience in cloud computing...",
    foto: images.team05,
    linkedin: "",
  },
  {
    name: "Ryan",
    position: "UI/UX",
    info: "2+ years of experience in creating compelling designs...",
    foto: images.team06,
    linkedin: "",
  },
];

const Testimonials = [
  {
    name: "Ananya Singh",
    position: "First-year, MBBS , AIIMS(Delhi)",
    testimonial:
      '"Medgloss has completely transformed my learning experience..."',
  },
  {
    name: "Rohan Mehta",
    position: "First-year, MBBS , AIIMS(Delhi)",
    testimonial:
      '"The conceptual and result-oriented question bank provided by Medgloss has been a game-changer..."',
  },
  {
    name: "Priya Kapoor",
    position: "Fourth-year, MBBS ,SMS",
    testimonial: '"Medgloss offers everything I need in one place..."',
  },
  {
    name: "Surbhi Yadav",
    position: "Second-year, MBBS, MS Ramaiah Medical College",
    testimonial: '"Medgloss is my study buddy."',
  },
  {
    name: "Arjun Patel",
    position: "Second-year, MBBS, CMC Vellore",
    testimonial: '"I got everything for free, which my friends use to buy..."',
  },
  {
    name: "Ryan Yadav",
    position: "Third-year, MBBS, AIIMS Deoghar",
    testimonial: '"As a medicos, resources are important..."',
  },
];

// Assign the object to a variable
const data = {
  Menu,
  CaseStudies,
  CaseStudies1,
  CaseStudies2,
  CaseStudies3,
  CaseStudies4,
  WorkingProcess,
  Team,
  Testimonials,
  ServicesData,
};

export default data;
