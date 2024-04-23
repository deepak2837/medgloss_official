import { Routes, Route } from "react-router-dom";
import NotFoundPage from "./components/lib/notFound/NotFoundPage";
import BlogPage from "./pages/blog/BlogPage";
import About from "./pages/about/About";
import DetailView from "./pages/blog/DetailView";
import DetailView1 from "./pages/blog/DetailView1.jsx";
import DetailView2 from "./pages/blog/DetailView2.jsx";
import DetailView3 from "./pages/blog/DetailView3.jsx";
import DetailView4 from "./pages/blog/DetailView4.jsx";
import DetailView5 from "./pages/blog/DetailView5.jsx";
import DetailView6 from "./pages/blog/DetailView6.jsx";
import DetailView7 from "./pages/blog/DetailView7.jsx";
import DetailView8 from "./pages/blog/DetailView8.jsx";
import DetailView9 from "./pages/blog/DetailView9.jsx";
import Contact from "./pages/contact/Contact";
import Contacted from "./Contacted.jsx"
import Navbar from "./components/layouts/header/Navbar";
import Footer from "./components/layouts/footer/Footer";
import Layout from "./Layout";
import ProjectPage from "./pages/portfolio/ProjectPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Testimonials, CaseStudies, Contacts, Hero, Process, Services, Team, CTA } from './container';
import Teams from "./container/Teams.jsx"
import { Menu } from './components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faCode } from '@fortawesome/free-solid-svg-icons';
import { FaReact, FaNodeJs, FaSwift, FaJava, FaJsSquare, FaDatabase, FaRegDotCircle, FaWordpress, FaDrupal, FaJoomla, FaMicrochip, FaCloudscale, FaDev, FaDocker, FaCogs, FaAws, FaMicrosoft, FaGoogle, FaHtml5, FaCss3, FaRaspberryPi, FaBluetooth, FaShieldAlt, FaMicroscope, FaPython, FaNode, FaAngular } from 'react-icons/fa';
import { SiAndroid, SiAngular, SiApache, SiApacheairflow, SiApachecassandra, SiApple, SiBootstrap, SiContentful, SiDjango, SiGhost, SiJenkins, SiJest, SiKotlin, SiKubernetes, SiMailchimp, SiPostgresql, SiPytest, SiPython, SiRuby, SiRubyonrails, SiStrapi, SiTerraform, SiTmobile, SiVuedotjs } from 'react-icons/si';
import Service from "./Services";
import { SiSelenium, SiMongodb, SiArduino, SiApachehadoop, SiSparkpost } from "react-icons/si";
import MobileAppDevelopment from "./pages/Mobileappdevelopment"
import { BsFastForwardCircle } from "react-icons/bs";
import TechInfo from "./././Techpage"
import FrontEndServices from "./FrontEndServices.jsx"
import BackendServices from "./Backend-development.jsx";
import RetailSoftwareComponent from "./retail.jsx";
import HealthcareSoftwareComponent from "./healthcare.jsx";
import FinanceComponent from "./Finance.jsx";
import InsuranceComponent from "./InsuranceComponent.jsx"
import SoftwareAndHiTechComponent from "./SoftwareAndHiTechComponent.jsx"
import AutomotiveSoftwareComponent from "./AutomotiveSoftwareComponent.jsx"
import TelecommunicationSoftwareComponent from "./TelecommunicationSoftwareComponent.jsx"
import CaseStudy from "./CaseStudy.jsx";
import OurLocation from "./location.jsx";
import PrivacyPolicy from "./privacy.jsx";
const App = () => {

const nodeData = {
  icon: <FaNode style={{ marginRight: '30px', borderRadius: "50px", border: '1px solid #4c99e0' }} size={70} />,
  title: "Node.js Development Services We Provide",
  techData: [
    {
      title: 'Web Frameworks',
      items: ['Express.js', 'Nest.js', 'Koa.js', 'Hapi.js', 'Fastify', 'Adonis.js'],
    },
    {
      title: 'Database Libraries',
      items: ['Sequelize', 'Mongoose', 'Firebase Admin SDK', 'Knex.js', 'TypeORM'],
    },
    {
      title: 'Testing and Development Tools',
      items: ['Babel', 'Mocha', 'Jest', 'Nodemon', 'PM2'],
    },
    {
      title: 'Additional Libraries and Tools',
      items: ['Pino', 'Bull', 'Node-RED', 'Puppeteer', 'npm (Node Package Manager)', 'Async/Await', 'Socket.io'],
    },
  ],
};

const angularData = {
  icon: <FaAngular style={{ marginRight: '30px', borderRadius: "50px", border: '1px solid #4c99e0' }} size={70} />,
  title: "Angular Development Services We Provide",
  techData: [
    {
      title: 'Development Tools and Libraries',
      items: ['Angular CLI', 'TypeScript', 'RxJS', 'Angular Universal', 'Angular DevTools', 'Karma', 'Jasmine'],
    },
    {
      title: 'UI Component Libraries',
      items: ['Angular Material', 'PrimeNG', 'ngx-charts', 'ngx-datatable', 'Ngx-leaflet'],
    },
    {
      title: 'State Management',
      items: ['NgRx', 'Akita', 'Ngxs'],
    },
    {
      title: 'Miscellaneous Libraries and Utilities',
      items: ['ngx-cookie-service', 'ngx-permissions', 'ngx-uploader', 'ngx-pwa/local-storage', 'ngx-translate', 'Angular Router'],
    },
  ],
};

const javaData = {
  icon: <FaJava style={{ marginRight: '30px', borderRadius: "50px", border: '1px solid #4c99e0' }} size={70} />,
  title: "Java Development Services We Provide",
  techData: [
    {
      title: 'Web Frameworks and Tools',
      items: ['Spring Framework', 'Play Framework', 'Ratpack', 'Vert.x', 'Quarkus', 'Micronaut'],
    },
    {
      title: 'Build and Dependency Management',
      items: ['Apache Maven', 'Gradle', 'Apache Ant'],
    },
    {
      title: 'Testing and Quality Assurance',
      items: ['JUnit', 'Cucumber', 'TestNG'],
    },
    {
      title: 'IDEs and Development Tools',
      items: ['Eclipse IDE', 'IntelliJ IDEA', 'Apache Tomcat'],
    },
    {
      title: 'Data Persistence and ORM',
      items: ['Hibernate', 'JOOQ', 'EclipseLink'],
    },
    {
      title: 'Big Data and Streaming',
      items: ['Apache Kafka', 'Apache Spark', 'Apache Flink'],
    },
    {
      title: 'Containerization and Deployment',
      items: ['Docker', 'JHipster', 'Kubernetes'],
    },
  ],
};

const dotNetData = {
  icon: <FaMicrosoft style={{ marginRight: '30px', borderRadius: "50px", border: '1px solid #4c99e0' }} size={70} />,
  title: ".NET Development Services We Provide",
  techData: [
    {
      title: 'Frameworks & Platforms',
      items: ['ASP.NET', 'ASP.NET Core', '.NET Framework', '.NET Core', 'Ooui', 'SharpLang', 'Windows Presentation Foundation', 'Azure Cloud Development', 'Xamarin'],
    },
    {
      title: 'Clouds & DevOps',
      items: ['Microsoft Azure', 'Amazon Web Services (AWS)', 'Google Cloud', 'OpenStack', 'Docker', 'Kubernetes'],
    },
    {
      title: 'Components, Libraries & APIs',
      items: ['Entity Framework', 'JSON.NET', 'ASP.NET Web API', 'ASP.NET Core Web API', 'REST API', 'AutoMapper', 'SignalR'],
    },
    {
      title: 'Integrated Development Environments',
      items: ['Visual Studio', 'Visual Studio Core', 'JetBrains Rider', 'Syncfusion'],
    },
    {
      title: 'Testing, Monitoring, QA & Reporting',
      items: ['MSTest', 'SpecFlow', 'NUnit', 'Power BI'],
    },
  ],
};
  return (
    <>
      <Menu />


      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<ProjectPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/123" element={<DetailView />} />
        <Route path="/blog/120" element={<DetailView1 />} />
        <Route path="/blog/121" element={<DetailView2 />} />
        <Route path="/blog/122" element={<DetailView3 />} />
        <Route path="/blog/124" element={<DetailView4 />} />
        <Route path="/blog/125" element={<DetailView5 />} />
        <Route path="/blog/126" element={<DetailView6 />} />
        <Route path="/blog/127" element={<DetailView7 />} />
        <Route path="/blog/128" element={<DetailView8 />} />
        <Route path="/blog/129" element={<DetailView9 />} />
        <Route path="/contact-us" element={<Contacted />} />
        <Route path="/teams" element={<Teams />} />
        <Route
          path="/services/mobile-app-development"
          element={
            <Service
              title="Mobile App Development"
              imageLinks={[
                "https://www.tripwire.com/sites/default/files/2022-10/mobile-app-development_0.jpg",
                "https://www.zestminds.com/blog/wp-content/uploads/2021/07/How-to-Choose-the-Right-Mobile-App-Development-Company.png",
                "https://blog.techrev.us/wp-content/uploads/2023/02/why-hybrid-mobile-app-development-is-a-smart-choice-for-businesses.jpg",
              ]}
              technologiesUsed={[
                { name: 'React Native', icon: <FaReact size={50} /> },
                { name: 'Node.js', icon: <FaNodeJs size={50} /> },
                { name: 'Swift', icon: <FaSwift size={50} /> },
                { name: 'Kotlin', icon: <SiKotlin size={50} /> },
                { name: 'Android', icon: <SiAndroid size={50} /> },
                { name: 'iOS', icon: <SiApple size={50} /> },
                { name: 'Java', icon: <FaJava size={50} /> },
                { name: 'JavaScript', icon: <FaJsSquare size={50} /> },
                { name: 'WordPress', icon: <FaWordpress size={50} /> },



              ]}
              strengths={[
                'Expertise in Cross-platform Development', 'Comprehensive Testing Strategies', 'Collaborative Client Engagement',
                'Agile Development Methodology', 'Effective Code Quality Practices',
                'Scalable and Secure Solutions',
                'User-Centric Design Approach',
              ]}
            />
          }
        />

        <Route
          path="/services/web-app-development"
          element={
            <Service
              title="Web Application Development"
              imageLinks={[
                "https://t3.ftcdn.net/jpg/02/14/53/92/360_F_214539232_YnUrtuwUEt84gHuU0qG8l7OwZvH4rnPG.jpg",
                "https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg",
                "https://mishpacha.com/wp-content/uploads/2022/07/So-You-Want-to-Be-a%E2%80%A6-Web-Developer-R.jpg",
              ]}
              technologiesUsed={[
                { name: 'React', icon: <FaReact size={50} /> },
                { name: 'Angular', icon: <SiAngular size={50} /> },
                { name: 'Vue.js', icon: <SiVuedotjs size={50} /> },
                { name: 'JavaScript', icon: <FaJsSquare size={50} /> },
                { name: 'HTML5', icon: <FaHtml5 size={50} /> },
                { name: 'CSS3', icon: <FaCss3 size={50} /> },
                { name: 'Bootstrap', icon: <SiBootstrap size={50} /> },

                { name: 'Python', icon: <SiPython size={50} /> },
                { name: 'Django', icon: <SiDjango size={50} /> },
                { name: 'Java', icon: <FaJava size={50} /> },
                { name: 'Ruby', icon: <SiRuby size={50} /> },
                { name: 'Rails', icon: <SiRubyonrails size={50} /> },
                // Add more relevant technologies and icons
              ]}

              strengths={[
                'Proven Track Record of Timely Project Delivery', 'Dedicated Support and Maintenance Services', 'Responsive and Cross-Browser Compatibility',
                'Agile Web Development Methodology',
                'Scalable and Efficient Web Solutions',
                'User-Friendly Interface Design',


              ]}

            />

          }
        />

        <Route
          path="/services/cloud-services"
          element={<Service
            title="Cloud Services"
            imageLinks={[
              "https://www.simplilearn.com/ice9/free_resources_article_thumb/What_are_the_Types_of_Cloud_Computing_and_Cloud_Services.jpg",
              "https://www.frost.com/wp-content/uploads/2023/03/GettyImages-1360520538_baja.jpg",
              "https://assets-global.website-files.com/633e084a7aa2dea2e52d6c3d/6364e9ff33d5004c87b4838d_6240588b4ed0a0c3eabc7947_Cloud%2520Based%2520Computing.jpeg",
            ]}
            technologiesUsed={[
              { name: 'AWS', icon: <FaAws size={50} /> },
              { name: 'Azure', icon: <FaMicrosoft size={50} /> },
              { name: 'Google Cloud', icon: <FaGoogle size={50} /> },
              { name: 'Docker', icon: <FaDocker size={50} /> },
              { name: 'Kubernetes', icon: <SiKubernetes size={50} /> },
              { name: 'Jenkins', icon: <SiJenkins size={50} /> },
              { name: 'Terraform', icon: <SiTerraform size={50} /> },
              // Add more relevant technologies and icons
            ]}
            strengths={['Continuous Integration and Deployment (CI/CD)', 'Cloud-Based Application Development', 'Scalable and Reliable Cloud Solutions',

              'Cloud Infrastructure Management',
              'Data Security and Compliance',

              'Infrastructure as Code (IaC)',
              'Microservices Architecture',

              'Serverless Computing',
            ]}
          />


          }
        />

        <Route
          path="/services/software-testing"
          element={<Service
            title="Software Testing"
            imageLinks={[
              "https://usersnap.com/blog/wp-content/uploads/2021/03/7-Common-Types-of-Software-Testing@1x-1280x720.png",
              "https://clickup.com/blog/wp-content/uploads/2023/04/modern-QA-testing-tools-1.png",
              "https://testerpro.vn/wp-content/uploads/2021/08/Manual-va-Automation-Testing.webp",
            ]}
            technologiesUsed={[
              { name: 'Selenium', icon: <SiSelenium size={50} /> },
              { name: 'JUnit', icon: <FaJava size={50} /> },
              { name: 'Cypress', icon: <FaJsSquare size={50} /> },
              { name: 'Postman', icon: <SiMailchimp size={50} /> },
              { name: 'Appium', icon: <SiTmobile size={50} /> },
              { name: 'Jest', icon: <SiJest size={50} /> },
              { name: 'Jest', icon: <SiPytest size={50} /> },// Add more relevant technologies and icons

            ]}
            strengths={['Performance and Load Testing for Robust Applications',
              'Mobile App Testing and Cross-Browser Compatibility', 'Integration with DevOps Tools (e.g., Jenkins, Git)', 'Effective Manual Testing and Quality Assurance',

              'Comprehensive Automated Testing Solutions',

              'Expertise in Test-Driven Development (TDD)',

            ]}
          />
          }

        />

        <Route
          path="/services/database-operations"
          element={<Service
            title="Database Operations"
            imageLinks={[
              "data:image/png;base64,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",
              "https://media.licdn.com/dms/image/C4E12AQG-jdUBcEdBIg/article-cover_image-shrink_720_1280/0/1520202876971?e=2147483647&v=beta&t=9ExUfGBSDL2zVBOmpT8teV6Z4zq1ZHEJeNT7aeiCbJU",
              "https://thumb.tildacdn.com/tild3435-3264-4133-a234-343238313432/-/resize/824x/-/format/webp/SQL_structure.png",
            ]}
            technologiesUsed={[
              { name: 'MongoDB', icon: <SiMongodb size={50} /> },
              { name: 'MySQL', icon: <FaDatabase size={50} /> },
              { name: 'Redis', icon: <FaRegDotCircle size={50} /> },
              { name: 'PostgreSQL', icon: <SiPostgresql size={50} /> },
              { name: 'Microsoft SQL Server', icon: <FaMicrosoft size={50} /> },
              { name: 'Oracle Database', icon: <BsFastForwardCircle size={50} /> },
              // Add more relevant technologies and icons
            ]}
            strengths={[
              'Database Migration and Maintenance',
              'Data Security and Backup Solutions',
              'Efficient Query Performance Tuning',
              'Database Design and Optimization',
            ]}
          />


          }
        />

        <Route
          path="/services/data-engineering"
          element={<Service
            title="Data Engineering Services"
            imageLinks={[
              "https://www.w2ssolutions.com/images/service-inner/data-engineering-devprocess.svg",
              "https://cdn-images-1.medium.com/fit/t/1600/480/0*GBXFPbfyGCcpyzB4.jpeg",
              "https://terralogic.com/wp-content/uploads/2023/10/Frame-1.png",
            ]}
            technologiesUsed={[
              { name: 'Apache Kafka', icon: <SiApache size={50} /> },
              { name: 'Apache Spark', icon: <SiSparkpost size={50} /> },
              { name: 'Hadoop', icon: <SiApachehadoop size={50} /> },
              { name: 'Flink', icon: <SiApachehadoop size={50} /> },
              { name: 'Airflow', icon: <SiApacheairflow size={50} /> },
              { name: 'Cassandra', icon: <SiApachecassandra size={50} /> },
              // Add more relevant technologies and icons
            ]}
            strengths={['Data Integration and Transformation',
              'Big Data Processing and Analytics',
              'Data Pipeline Development',
              'Real-time Data Streaming',

            ]}
          />


          }
        />

        {/* CMS Service */}
        <Route
          path="/services/cms"
          element={<Service
            title="CMS"
            imageLinks={[
              "https://blog.hubspot.com/hs-fs/hubfs/Image%20Pack-CMS%20-72-png.webp?width=650&height=394&name=Image%20Pack-CMS%20-72-png.webp",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY7kJGRAuxmmlMi5WcG7drM5JeemtQAbDJmA&usqp=CAU",
              "https://www.javatpoint.com/fullformpages/images/cms.jpg",
            ]}
            technologiesUsed={[
              { name: 'WordPress', icon: <FaWordpress size={50} /> },
              { name: 'Drupal', icon: <FaDrupal size={50} /> },
              { name: 'Joomla', icon: <FaJoomla size={50} /> },
              { name: 'Strapi', icon: <SiStrapi size={50} /> },
              { name: 'Contentful', icon: <SiContentful size={50} /> },
              { name: 'Ghost', icon: <SiGhost size={50} /> },
              // Add more relevant technologies and icons
            ]}
            strengths={['Content Authoring and Workflow Management',
              'Customizable and User-Friendly CMS',
              'SEO-Friendly Content Management',

              'Plugin and Module Development',
            ]}
          />


          }
        />

        <Route
          path="/services/internet-of-things"
          element={<Service
            title="Internet of Things (IoT)"
            imageLinks={[
              "https://www.datamation.com/wp-content/uploads/2021/04/IOT-4.png",
              "https://www.simplilearn.com/ice9/free_resources_article_thumb/iot_devices.jpg",
              "https://www.valuecoders.com/blog/wp-content/uploads/2019/09/1a.jpg",
            ]}
            technologiesUsed={[
              { name: 'MQTT', icon: <FaMicrochip size={50} /> },
              { name: 'IoT Platforms', icon: <FaCloudscale size={50} /> },
              { name: 'Arduino', icon: <SiArduino size={50} /> },
              { name: 'Raspberry Pi', icon: <FaRaspberryPi size={50} /> },
              { name: 'Cloud IoT', icon: <FaGoogle size={50} /> },
              { name: 'Azure IoT', icon: <FaMicrosoft size={50} /> },
              { name: 'AWS IoT', icon: <FaAws size={50} /> },
              { name: 'BLE', icon: <FaBluetooth size={50} /> },
              { name: 'IoT Security', icon: <FaShieldAlt size={50} /> },
              { name: 'Smart Sensors', icon: <FaMicroscope size={50} /> },
              // Add more relevant technologies and icons
            ]}
            strengths={[
              'IoT Device Connectivity and Management', 'IoT Security and Privacy Measures',
              'IoT Application Development', 'Real-time Data Processing',


            ]}
          />


          }
        />
        <Route path="/react"   element={<TechInfo  icon={<FaReact style={{marginRight: '30px',borderRadius:"50px",border: '1px solid #4c99e0'}} size={50}/>} title="         React Development Services We Provide" techData={[
          {
            title: 'Core Libraries and Frameworks',
            items: ['React (React JS)', 'React Native', 'Next.js', 'Gatsby'],
          },
          {
            title: 'State Management',
            items: ['Redux', 'MobX', 'Apollo Client', 'React Query'],
          },
          {
            title: 'User Interface Development',
            items: [
              'Material-UI',
              'Styled Components',
              'Chakra UI',
              'Reactstrap',
              'Emotion',
              'Tailwind',
            ],
          },
          {
            title: 'Code Handling & Optimization',
            items: [
              'TypeScript',
              'Webpack',
              'Babel',
              'ESLint',
              'Prettier',
            ],
          },
          {
            title: 'Testing and Validation',
            items: ['Enzyme', 'React Testing Library', 'Jest', 'Yup', 'Cypress'],
          },
          {
            title: 'Routing and Form Management',
            items: ['React Router', 'Formik', 'React Hook Form'],
          },
          {
            title: 'Auxiliary Tools and Libraries',
            items: [
              'Storybook',
              'React i18next',
              'react-intl',
              'React Virtualized',
              'React Window',
            ],
          },
        ]} />} />
       <Route
  path="/python"
  element={
    <TechInfo
      icon={<FaPython style={{marginRight: '30px',borderRadius:"50px",border: '1px solid #4c99e0'}} size={70} />}
      title="Python Development Services We Provide"
      techData={[
        {
          title: 'Web Frameworks',
          items: ['Flask', 'Django', 'Bottle', 'Pyramid', 'CherryPy'],
        },
        {
          title: 'Machine Learning and Data Science',
          items: ['PyTorch', 'TensorFlow', 'NumPy', 'pandas'],
        },
        {
          title: 'Database and ORM',
          items: ['SQLAlchemy', 'SQLAlchemy-Utils', 'Django ORM', 'Pony ORM'],
        },
        {
          title: 'Testing and QA',
          items: ['pytest', 'Hypothesis', 'doctest'],
        },
        {
          title: 'Asynchronous Processing',
          items: ['Celery', 'Huey', 'asyncio'],
        },
        {
          title: 'Development Tools and Environments',
          items: ['Jupyter Notebook', 'Docker', 'PyCharm', 'Poetry'],
        },
      ]}
    />
  }
/>
<Route path="/frontend-development" element={<FrontEndServices />} />
<Route path="/backend-development" element={<BackendServices />} />
<Route path="/node" element={<TechInfo {...nodeData}/>} />
    <Route path="/angular" element={<TechInfo {...angularData} />} />
    <Route path="/java" element={<TechInfo {...javaData}/>} />
    <Route path="/net" element={<TechInfo {...dotNetData} />} />
    <Route path="/retail" element={<RetailSoftwareComponent />} />
    <Route path="/healthcare" element={<HealthcareSoftwareComponent />} />
    <Route path="/insurance" element={<InsuranceComponent />} />
    <Route path="/finance" element={<FinanceComponent/>} />
    <Route path="/software" element={<SoftwareAndHiTechComponent/>} />
    <Route path="/automative" element={<AutomotiveSoftwareComponent/>} />
    <Route path="/telecommunication" element={<TelecommunicationSoftwareComponent />} />
    <Route path="/casestudy" element={<CaseStudy />} />
    <Route path="/location" element={<OurLocation />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="privacy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
