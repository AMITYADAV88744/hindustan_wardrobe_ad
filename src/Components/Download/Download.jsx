import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Stack
} from "@mui/material";
import AppleIcon from "@mui/icons-material/Apple";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const Download = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: "linear-gradient(135deg, #6a11cb 0%, #ff2d8d 100%)",
        color: "#fff"
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          
          <Grid item xs={12} md={6}>
            <Typography
              variant="h3"
              fontWeight={700}
              gutterBottom
              sx={{ lineHeight: 1.2 }}
            >
              Our App Available For <br />
              Any Device Download <br />
              now
            </Typography>

            <Typography
              variant="body1"
              sx={{ opacity: 0.9, maxWidth: 480, mb: 4 }}
            >
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore fug.
            </Typography>

            <Stack direction="row" spacing={2}>
              <Box
                component="a"
                href="#"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  backgroundColor: '#000',
                  color: '#fff',
                  padding: '10px 18px',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  minWidth: '170px',
                  transition: '0.3s',
                  '&:hover': {
                    transform: 'translateY(-3px)',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
                  }
                }}
              >
                <img
                  src={AppleIcon}
                  alt="apple"
                  style={{ width: 24, marginRight: 10 }}
                />
                <Box>
                  <Typography sx={{ fontSize: 12 }}>
                    Download on the
                  </Typography>
                  <Typography sx={{ fontSize: 16, fontWeight: 600 }}>
                    App Store
                  </Typography>
                </Box>
              </Box>

              <Box
                component="a"
                href="#"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  backgroundColor: '#000',
                  color: '#fff',
                  padding: '10px 18px',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  minWidth: '170px',
                  transition: '0.3s',
                  '&:hover': {
                    transform: 'translateY(-3px)',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
                  }
                }}
              >
                <img
                  src={PlayArrowIcon}
                  alt="play"
                  style={{ width: 24, marginRight: 10 }}
                />
                <Box>
                  <Typography sx={{ fontSize: 12 }}>
                    Get it on
                  </Typography>
                  <Typography sx={{ fontSize: 16, fontWeight: 600 }}>
                    Google Play
                  </Typography>
                </Box>
              </Box>
            </Stack>
          </Grid>

          <Grid item xs={12} md={6} textAlign="center">
            <Box
              component="img"
              src="/mockup.png" 
              alt="App dashboard mockup"
              sx={{
                width: "100%",
                maxWidth: 520,
                mx: "auto",
                filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.35))"
              }}
            />
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default Download;