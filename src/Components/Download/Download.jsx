import React from "react";
import { Box, Container, Grid, Typography, Stack } from "@mui/material";
import AppleIcon from "@mui/icons-material/Apple";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const Download = () => {
  const ButtonContent = ({ Icon, label }) => (
    <Box
      component="a"
      href="#"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 1,
        backgroundColor: "#000",
        color: "#fff",
        padding: { xs: "6px 12px", sm: "8px 16px" },
        borderRadius: "10px",
        textDecoration: "none",
        maxWidth: { xs: "180px", sm: "200px" }, // limit max width
        width: "auto", // fit content naturally
        fontSize: { xs: 11, sm: 14 },
        flexShrink: 0,
      }}
    >
      <Icon sx={{ width: { xs: 16, sm: 20 }, height: { xs: 16, sm: 20 } }} />
      <Typography sx={{ fontSize: { xs: 11, sm: 14 }, fontWeight: 600 }}>
        {label}
      </Typography>
    </Box>
  );

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: "linear-gradient(135deg, #6a11cb 0%, #ff2d8d 100%)",
        color: "#fff",
        py: { xs: 6, md: 0 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          {/* Left Section */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h3"
              fontWeight={700}
              gutterBottom
              sx={{
                lineHeight: 1.2,
                fontSize: { xs: "1.5rem", sm: "2rem", md: "3rem" },
              }}
            >
              Our App Available For <br />
              Any Device Download <br />
              now
            </Typography>

            <Typography
              variant="body1"
              sx={{
                opacity: 0.9,
                maxWidth: 480,
                mb: 4,
                fontSize: { xs: 12, sm: 14, md: 16 },
              }}
            >
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore fug.
            </Typography>

            {/* Stack buttons vertically on mobile, horizontally on larger screens */}
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              alignItems={{ xs: "flex-start", sm: "center" }}
            >
              <ButtonContent Icon={AppleIcon} label="App Store" />
              <ButtonContent Icon={PlayArrowIcon} label="Google Play" />
            </Stack>
          </Grid>

          {/* Right Section */}
          <Grid item xs={12} md={6} textAlign="center">
            <Box
              component="img"
              src="/mockup.png"
              alt="App dashboard mockup"
              sx={{
                width: "100%",
                maxWidth: 520,
                mx: "auto",
                filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.35))",
                mt: { xs: 4, md: 0 },
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Download;