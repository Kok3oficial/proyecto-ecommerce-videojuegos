import React from 'react';
import { Box, Container, Typography, Link, IconButton, Grid } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'indigo',
        color: 'white',
        py: 4,
        mt: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          {/* Enlaces a redes sociales */}
          <Grid item>
            <IconButton component={Link} href="https://www.facebook.com" target="_blank" aria-label="Facebook" sx={{ color: 'white' }}>
              <Facebook />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton component={Link} href="https://www.twitter.com" target="_blank" aria-label="Twitter" sx={{ color: 'white' }}>
              <Twitter />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton component={Link} href="https://www.instagram.com" target="_blank" aria-label="Instagram" sx={{ color: 'white' }}>
              <Instagram />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton component={Link} href="https://www.linkedin.com" target="_blank" aria-label="LinkedIn" sx={{ color: 'white' }}>
              <LinkedIn />
            </IconButton>
          </Grid>
        </Grid>

        {/* Texto de copyright */}
        <Typography
          variant="body2"
          color="inherit"
          align="center"
          sx={{ mt: 2, fontSize: '0.75rem' }}
        >
          {'Created by Webmaster Jorge Rodríguez'}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;