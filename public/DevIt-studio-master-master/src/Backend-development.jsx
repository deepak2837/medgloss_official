import React from 'react';
import { Typography, Grid, Container, styled } from '@mui/material';
import { FaPython, FaJava, FaAws } from 'react-icons/fa';
import { SiDjango,  SiMicrosoftsqlserver, SiExpressvpn } from 'react-icons/si';
import "./front.css"
const ServiceContainer = styled('div')({
  textAlign: 'center',
  padding: '20px',
  borderRadius: '12px',
  background: '#4c99e0',
  color: 'black',
  minHeight: '300px',
  fontFamily: 'Poppins, sans-serif',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
  },
});

const ServiceIcon = styled('div')({
  fontSize: '3rem',
  marginBottom: '10px',
});

const BackendServices = () => {
  const servicesData = [
    {
      title: 'Custom Backend Development',
      description:
        'The backbone of web and software apps, backend (server-side) development is the process of creating a functional infrastructure. Our backend developers work on the server, database, and application integration to construct and maintain the server side of apps. We use a range of tools and languages like Python, Java, Django, and Ruby on Rails.',
      icon: <FaPython/>,
    },
    {
      title: 'Enterprise Backend Services',
      description:
        'Designed to support the complex needs of large businesses, our enterprise backend solutions demand reliability, security, scalability, and industry standards compliance. We use advanced database management solutions like Microsoft SQL Server and MongoDB, cloud services like AWS and Azure, and other tools to construct the backends of robust enterprise systems.',
      icon: <SiMicrosoftsqlserver />,
    },
    {
      title: 'Backend API Development and Integration',
      description:
        'From integrating apps with third-party services to supporting the entire infrastructure, backend API development plays an important role in data handling, communication, and business logic. Using frameworks and tools like Express.js, Django, Postman, SoapUI, and Swagger/OpenAPI',
      icon: <SiExpressvpn />,
    },
    {
      title: 'Cloud Backend Solutions',
      description:
        'Cloud backend services offer scalability, accessibility, and flexibility. Collaborating with frontend developers and leveraging cloud computing platforms like AWS, FaaS tools, and more, we build the backend of user-friendly cloud-based mobile and web applications.',
      icon: <FaAws />,
    },
    {
      title: 'Backend CRM Development',
      description:
        'Design and maintain a customer relationship management (CRM) system that allows you to manage relationships, provide insights, and track your operational activities. We create the server-side components responsible for business logic, integrations, data management, and other functionalities. Using common backend languages like Java, Python, and Ruby, along with database systems, frameworks, security tools, and more, we focus on crafting a user-friendly, modular design.',
      icon: <SiDjango />,
    },
    {
      title: 'Backend Testing',
      description:
        'Confirm that your backend is robust and reliable. Testing ensures appropriate data management and seamless integration between the application components. Combining manual and automated approaches, our engineers test for performance, end-to-end security, functionality, and more. We leverage a range of tools, from Postman for API testing to OWASP ZAP for security vulnerability scanning.',
      icon: <FaJava />,
    },
  ];

  return (
    <Container>
      <Typography style={{ textAlign: "center", marginTop: "20px", padding: "10px", borderRadius: "15px", border: "2px solid black",fontFamily: 'cursive', fontWeight: '400', letterSpacing: '1px', color: '#333' }} variant="h4" gutterBottom>
        Backend Development Services We Provide
      </Typography>
      <Grid container spacing={2}>
      <div align="dummy">
	<code><img width="50" src="https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png" alt="HTML" title="HTML"/></code>
	<code><img width="50" src="https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png" alt="CSS" title="CSS"/></code>
	<code><img width="50" src="https://user-images.githubusercontent.com/25181517/183898054-b3d693d4-dafb-4808-a509-bab54cf5de34.png" alt="Bootstrap" title="Bootstrap"/></code>
	<code><img width="50" src="https://user-images.githubusercontent.com/25181517/202896760-337261ed-ee92-4979-84c4-d4b829c7355d.png" alt="Tailwind CSS" title="Tailwind CSS"/></code>
	<code><img width="50" src="https://user-images.githubusercontent.com/25181517/192158957-b1256181-356c-46a3-beb9-487af08a6266.png" alt="Wordpress" title="Wordpress"/></code>
	<code><img width="50" src="https://user-images.githubusercontent.com/25181517/189716855-2c69ca7a-5149-4647-936d-780610911353.png" alt="Firebase" title="Firebase"/></code>
	<code><img width="50" src="https://github.com/marwin1991/profile-technology-icons/assets/54946572/0ed1571c-e3df-4f34-94df-102c0afbdb2b" alt="Strapi" title="Strapi"/></code>
	<code><img width="50" src="https://user-images.githubusercontent.com/25181517/189715289-df3ee512-6eca-463f-a0f4-c10d94a06b2f.png" alt="Figma" title="Figma"/></code>
	<code><img width="50" src="https://user-images.githubusercontent.com/25181517/189716058-71f74b6f-5936-40b5-92e3-00381e35ccb9.png" alt="Material Design" title="Material Design"/></code>
	<code><img width="50" src="https://user-images.githubusercontent.com/25181517/189716630-fe6c084c-6c66-43af-aa49-64c8aea4a5c2.png" alt="Material UI" title="Material UI"/></code>
	<code><img width="50" src="https://user-images.githubusercontent.com/25181517/190887639-d0ba4ec9-ddbe-45dd-bea1-4db83846503e.png" alt="Chakra UI" title="Chakra UI"/></code>
	<code><img width="50" src="https://user-images.githubusercontent.com/25181517/190887795-99cb0921-e57f-430b-a111-e165deedaa36.png" alt="Ant Design" title="Ant Design"/></code>
	<code><img width="50" src="https://github.com/marwin1991/profile-technology-icons/assets/136815194/02494c7c-de6a-43a6-9293-6369696842ed" alt="Canva" title="Canva"/></code>
	<code><img width="50" src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png" alt="JavaScript" title="JavaScript"/></code>
	<code><img width="50" src="https://user-images.githubusercontent.com/25181517/183890595-779a7e64-3f43-4634-bad2-eceef4e80268.png" alt="Angular" title="Angular"/></code>
	<code><img width="50" src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png" alt="React" title="React"/></code>
	<code><img width="50" src="https://user-images.githubusercontent.com/25181517/117448124-a2da9800-af3e-11eb-85d2-bd1b69b65603.png" alt="Vue.js" title="Vue.js"/></code>
	<code><img width="50" src="https://user-images.githubusercontent.com/25181517/187896150-cc1dcb12-d490-445c-8e4d-1275cd2388d6.png" alt="Redux" title="Redux"/></code>
	<code><img width="50" src="https://user-images.githubusercontent.com/25181517/187955008-981340e6-b4cc-441b-80cf-7a5e94d29e7e.png" alt="webpack" title="webpack"/></code>
	<code><img width="50" src="https://github.com/marwin1991/profile-technology-icons/assets/136815194/c49c6dbd-992a-4f14-9cf4-ff40cb5344ed" alt="Gulp" title="Gulp"/></code>
	<code><img width="50" src="https://github.com/marwin1991/profile-technology-icons/assets/136815194/2bd495ca-29d8-4415-8e8c-a1979721816a" alt="Gatsby" title="Gatsby"/></code>
	<code><img width="50" src="https://github.com/marwin1991/profile-technology-icons/assets/136815194/ebd92b15-970a-45b8-8c4c-0ecf69b17cdc" alt="Nuxt.js" title="Nuxt.js"/></code>
	<code><img width="50" src="https://github.com/marwin1991/profile-technology-icons/assets/136815194/50c63e54-074f-494b-b786-01eb7870c927" alt="Vuetify.js" title="Vuetify.js"/></code>
	<code><img width="50" src="https://github.com/marwin1991/profile-technology-icons/assets/136815194/387d7c1e-9cda-4a59-a037-c873fb3218e6" alt="Ember.js" title="Ember.js"/></code>
	<code><img width="50" src="https://github.com/marwin1991/profile-technology-icons/assets/62091613/b40892ef-efb8-4b0e-a6b5-d1cfc2f3fc35" alt="Vite" title="Vite"/></code>
	<code><img width="50" src="https://user-images.githubusercontent.com/25181517/117201470-f6d56780-adec-11eb-8f7c-e70e376cfd07.png" alt="Spring" title="Spring"/></code>
	<code><img width="50" src="https://user-images.githubusercontent.com/25181517/183891303-41f257f8-6b3d-487c-aa56-c497b880d0fb.png" alt="Spring Boot" title="Spring Boot"/></code>
	<code><img width="50" src="https://github.com/marwin1991/profile-technology-icons/assets/62091613/9bf5650b-e534-4eae-8a26-8379d076f3b4" alt="Django" title="Django"/></code>
	<code><img width="50" src="https://user-images.githubusercontent.com/25181517/121406611-a8246b80-c95e-11eb-9b11-b771486377f6.png" alt="iOS" title="iOS"/></code>
</div>
        {servicesData.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ServiceContainer>
              <ServiceIcon>{service.icon}</ServiceIcon>
              <Typography variant="h5" gutterBottom>
                {service.title}
              </Typography>
              <Typography variant="body2">{service.description}</Typography>
            </ServiceContainer>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default BackendServices;
