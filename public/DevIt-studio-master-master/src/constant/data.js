import images from './images';

const Menu = [
    {
        text: 'Home',
        link: '/',
    },
    {
        text: 'About us',
        link: '/about',
    },
    {
        text: 'Services',
        link: '',
    },
    {
        text: 'Technologies',
        link: '',
    }, {
        text: 'Industries',
        link: '',
    },
    {
        text: 'Portfolio',
        link: '',
    },
  
    {
        text: 'Blogs',
        link: '/blog',
    },
     {
        text: 'Contact',
        link: '/contact-us',
    }, 
];
const ServicesData = [
    {
        titleone: 'Mobile Application',
        titletwo: 'Development',
        link: '/services/mobile-app-development',
        itemclass: 'blight',
        imgURL: images.services01,
    },
    {
        titleone: 'Web',
        titletwo: 'Development',
        link: '/services/web-app-development',
        itemclass: 'bgreen',
        imgURL: images.services02,
    },
    {
        titleone: 'Cloud ',
        titletwo: 'Services',
        link: '/services/cloud-services',
        itemclass: 'bdark',
        imgURL: images.services03,
    },
    {
        titleone: 'Software',
        titletwo: 'Testing',
        link: '/services/software-testing',
        itemclass: 'blight',
        imgURL: images.services04,
    },
    {
        titleone: 'Database',
        titletwo: 'Operations',
        link: '/services/database-operations',
        itemclass: 'bgreen',
        imgURL: images.services05,
    },
    {
        titleone: 'Data Engineering',
        titletwo: 'Services',
        link: '/services/data-engineering',
        itemclass: 'bdark',
        imgURL: images.services06,
    }, {
        titleone: 'IoT',
        titletwo: '',
        link: '/services/internet-of-things',
        itemclass: 'blight',
        imgURL: images.services07,
    }
]
const CaseStudies = [
    {
        text: 'A boutique e-commerce store was struggling to stand out in a competitive market.',
        link: '/casestudy',
    },
    {
        text: ' A tech startup required a compelling online presence to attract investors and customers.',
        link: '/casestudy',
    },
    {
        text: 'A local service provider lacked an online platform to connect with customers and streamline service offerings.',
        link: '/casestudy',
    },
];

const WorkingProcess = [
    {
        title: 'Consultation',
        description: 'During the initial consultation, we will discuss your business goals and objectives. This will allow us to understand your needs and tailor our services to best fit your requirements.',
    },
    {
        title: 'Documentation',
        description: 'We will help you to analyse the gap and perform a granular analysis of the requirement,accordindly we will prepare such documents like Navigation Flow,Wireframes,Use Case Document,Cloud Infrastructure & Services,Application’s Offline Capabilities,API Requirement Document,Integration Document',
    },
    {
        title: 'UI/UX Consulting',
        description: 'We will help you in creating intuitive UI & UX for your product, by designing User Journey , UX Research Plan, Information Architect ,Competitive Case Study,User Segmentation & Profiling ,Visual Designs ,Interactive Prototype, Low & High Fidelity Wireframes , Brand &Style Guidelines',
    },
    {
        title: 'Development and Deployment',
        description: 'We will desIgn, develop & deploy your product in this model Solutioning DevOps , Database Schema , Product Development ,  Client Server Setup and  Deployment Pipeline Setup ',
    }
];

const Team = [
    {
        name: 'Harshith',
        position: 'CEO and Founder',
        info: '10+ years of experience in Web development. Expertise in all technology stack',
        foto: images.team01,
        linkedin: '',
    },
    {
        name: 'Deepa',
        position: 'Director of Operations',
        info: '7+ years of experience in project management and team leadership. Strong organizational and communication skills',
        foto: images.team02,
        linkedin: '',
    },
    {
        name: 'Deepak',
        position: 'Senior Full Stack Developer',
        info: '5+ years of experience in frontend and backend development. Proficient scaling and web optimization',
        foto: images.team03,
        linkedin: '',
    },
    {
        name: 'Alex',
        position: 'Database Expert',
        info: '3+ years of experience in handling various databases. Skilled in mongodb,sql,postgres and many more ',
        foto: images.team04,
        linkedin: '',
    },
    {
        name: 'Aryan',
        position: 'Devops',
        info: '4+ years of experience in cloud computing. Proficient in managining aws and azure platforms stuffs',
        foto: images.team05,
        linkedin: '',
    },
    {
        name: 'Ryan',
        position: 'UI/UX',
        info: '2+ years of experience in creating compelling designs, SEO-optimized content for various industries',
        foto: images.team06,
        linkedin: '',
    },

];

const Testimonials = [
    {
        name: 'Vinay Yadav',
        position: 'Marketing Director at Captivas',
        testimonial: '"these guys just made my business grow by 100% , i am very happy working with these guys"',
    },
    {
        name: 'Kaira Verma',
        position: 'Sr. Manager at himlayan club',
        testimonial: '" have seen a significant value by the online presence of our club that was just possible due to these wonderful guys "',
    },
    {
        name: 'Kavita',
        position: 'Co-founder of vclub clothing brand',
        testimonial: '"We have been working with NEW LIGHT Associates for last 6 months and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend NEW LIGHT Associates to any company looking to grow their online presence."',
    },
    {
        name: 'Jaideep Kumar',
        position: 'Managing Director at takshilla insistute',
        testimonial: '" have seen a huge increase in revenues and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend NEW LIGHT Associates to any company looking to grow their online presence."',
    },
];
export default { Menu, CaseStudies, WorkingProcess, Team, Testimonials, ServicesData };