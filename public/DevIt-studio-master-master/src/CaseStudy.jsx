import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './CaseStudy.css'; // Add your own CSS styles

const CaseStudy = () => {
    const caseStudies = [
        {
          title: 'Revolutionizing Pet Marketplaces',
          description: 'By implementing a cutting-edge platform, Pet Media Group successfully centralized the management of 6 pet marketplaces valued at $12 million. This strategic move led to an extraordinary 400% revenue growth, showcasing the power of innovative solutions in the competitive pet industry.',
        },
        {
          title: 'Innovative Event Streaming Platform',
          description: 'Reshaping the landscape of event technology, we collaborated with Reservix to transform their MVP into a highly profitable video streaming platform. This revolutionary solution empowered over 7000 organizers, enabling them to host engaging virtual events during the challenging times of the pandemic.',
        },
        {
          title: 'Global Expansion Through Cloud Banking',
          description: 'In a remarkable achievement, we assisted a banking institution in expanding its reach to 36+ countries by seamlessly migrating to a cloud-based infrastructure. The implementation of a ready-made cloud platform and a no-commission payment gateway not only facilitated international transfers but also earned the bank a coveted SEPA certificate.',
        },
        {
          title: 'Strategic Backend Remodeling for eSky',
          description: 'Facing a surge in users, eSky turned to us for a comprehensive backend remodeling. After three years of meticulous refactoring, the company experienced a 22% faster market entry into new territories, showcasing the transformative impact of a revamped backend.',
        },
        {
          title: 'Accelerating B2B Loans with Fintech Innovation',
          description: 'One forward-thinking Fintech client leveraged our expertise to expand their product features, enabling the swift and efficient processing of B2B loans. The result was a streamlined lending platform that surpassed the capabilities of traditional banks, facilitating faster financial support for businesses.',
        },
        {
          title: 'Empowering Technology-First Businesses',
          description: 'Over 160 technology-first businesses experienced significant enhancements in scalability, performance, and product popularity through our custom software development services. Join us on a journey to explore how these businesses achieved transformative results in various industries, including Technology & Innovation, Travel, Fintech & Banking, Real Estate, Marketplaces, Events, and Logistics.',
        },
        {
          title: 'User Discovery for Market Competitiveness',
          description: 'In the dynamic world of app development, we believe in planning first and coding later. Through user discovery, we elevated the market competitiveness of numerous applications well before their launch. Witness the impact of strategic planning on app success.',
        },
        {
          title: 'Revolutionizing Bond Issuance with Obligate',
          description: 'Obligate, a groundbreaking project, witnessed an 80% reduction in bond issuance costs and a remarkable decrease in issuance time from weeks to hours. Our collaboration with Obligate showcases the potential of technology to revolutionize financial processes and drive efficiency.',
        },
        {
          title: 'Effortless Overseas Shopping with Carrofina',
          description: 'Experience the convenience of overseas shopping with Carrofina\'s custom AWS-based application. Through seamless navigation and a user-friendly interface, Carrofina has simplified the shopping experience, making it just a few clicks away for global consumers.',
        },
        {
          title: 'Rapid Product Rebranding and Upgrade with DHL',
          description: 'Embark on a journey with a $20 million startup collaborating with industry giants DHL and Lloyds. In just two weeks, witness the rebranding of a product, followed by a comprehensive upgrade within five months. This showcases the agility and efficiency of our team in meeting tight deadlines and delivering exceptional results.',
        },
        {
          title: 'Scaling Up Ordering Apps with Snappit',
          description: 'Snappit, a dynamic ordering app, scaled up to meet the demands of events with thousands of attendees. Explore the success story of how our solutions empowered Snappit to handle large-scale orders efficiently, ensuring a seamless experience for both users and event organizers.',
        },
        {
          title: 'Revolutionizing Payment Gateways with xpate',
          description: 'E-commerce sellers using xpate\'s payment gateways experienced a paradigm shift. Payouts that used to take hours are now processed in just minutes, providing a rapid and efficient financial ecosystem for businesses. Discover the impact of streamlined payment solutions on e-commerce.',
        },
        {
          title: 'Automating Vendor Finding with XTRF',
          description: 'XTRF, a leading player in the technology and innovation sector, revolutionized vendor finding through automation. Uncover how our solutions propelled XTRF to new heights, making the process of finding vendors faster, more efficient, and seamlessly integrated into their workflow.',
        },
      ];
      

      return (
        <div className="case-study">
          <Container>
            <h2 className="case-study-title">AN AGILE PARTNER FOR 160+ COMPANIES WORLDWIDE</h2>
            <p className="case-study-description">
              Explore software development case studies from companies with similar challenges.
              They asked The Software House to upgrade their digital product and set a direction for resilient software development.
              98% of tech leaders recommend us. Most stay over 3 years.
            </p>
    
            <Row className="mt-5">
              {/* Case Study Cards */}
              {caseStudies.map((study, index) => (
                <Col key={index} md={4} className="mb-4">
                  <Card className="case-study-card">
                    <Card.Body>
                      <Card.Title>{study.title}</Card.Title>
                      <Card.Text>{study.description}</Card.Text>
                      
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
    
            {/* Trusted by bright minds section */}
            {/* Trusted by bright minds section */}
<Row className="mt-5">
  <Col md={6} className="mb-4">
    <h3 className="section-heading">Trusted by bright minds from 24 countries</h3>
    <ul className="section-content">
      <li>170+ available technology professionals</li>
      <li>140+ happy clients from all over the world</li>
      <li>200+ delivered projects in long-term partnerships</li>
    </ul>
  </Col>
</Row>

          </Container>
        </div>
      );
    };
    
    export default CaseStudy;