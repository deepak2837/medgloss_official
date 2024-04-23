import React from 'react';
import { Typography, Grid, Container } from '@mui/material';
import "./techinfo.css"; // Import the CSS file

const TechInfo = ({ title, icon, techData }) => {
  console.log(icon)
  return (
    <Container>
      <Typography variant="h4" gutterBottom style={{ display: 'flex',fontFamily: 'cursive', fontWeight: '400', letterSpacing: '1px', color: '#333', alignItems: 'center', border: '1px solid black', borderRadius: '10px', padding: '8px', textDecoration: 'underline' }}>
        {icon}
        {title}
      </Typography>  
      <Grid container spacing={2} className="CardContainer"> 
        {techData.map((category, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <div className="StyledPaper">
              <div>
                <Typography variant="h5" gutterBottom style={{ borderRadius: '15px', border: '1px solid black', background: 'white', padding: '8px' }}>
                  {category.title}
                </Typography>
                <ul className="StyledList">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <Typography variant="body2">{item}</Typography>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default TechInfo;
