import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        color: 'white',
        py: 4,
        border: '2px solid red',
        borderRadius: '60px 60px 0px 0px',
      }}
    >
      <Container style={{ display: 'flex', flexDirection: 'column' }} maxWidth="xxl">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              Imp. Links
            </Typography>
            <Typography>Question Bank</Typography>
            <Typography>Virtual Surgery</Typography>
            <Typography>Case Studies</Typography>
            <Typography>3D Models</Typography>
            <Typography>Blogs</Typography>
            <Typography>Videos</Typography>
            <Typography>Mock Tests</Typography>
            <Typography>Previous year question papers</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box>
              <Link href="#" passHref>
                <FontAwesomeIcon icon={faFacebook} style={{ fontSize: '1.5rem', marginRight: '1rem' }} />
              </Link>
              <Link href="#" passHref>
                <FontAwesomeIcon icon={faTwitter} style={{ fontSize: '1.5rem', marginRight: '1rem' }} />
              </Link>
              <Link href="#" passHref>
                <FontAwesomeIcon icon={faInstagram} style={{ fontSize: '1.5rem', marginRight: '1rem' }} />
              </Link>
              <Link href="#" passHref>
                <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: '1.5rem' }} />
              </Link>
            </Box>
          </Grid>
        </Grid>
        <Box mt={0} mb= {-3} textAlign="center">
          <Typography variant="body2">Made in love with India</Typography>
          <Typography variant="body2">Copyright &copy; 2024 All rights reserved</Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;