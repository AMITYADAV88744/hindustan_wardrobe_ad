import React, { useState, useEffect } from "react";
import { Box, Container, useTheme, useMediaQuery } from "@mui/material";
import { styled, keyframes } from "@mui/material/styles";

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
`;

const horizontalScroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  background: "#f8f9ff",
  position: "relative",
  overflow: "hidden",
}));

const MainWrapper = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 1.5fr",
  gap: theme.spacing(10),
  alignItems: "center",
  [theme.breakpoints.down("lg")]: {
    gridTemplateColumns: "1fr 1.2fr",
    gap: theme.spacing(8),
  },
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr",
    gap: theme.spacing(4),
  },
}));

const TextSection = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(3),
  animation: `${fadeInUp} 0.8s ease-out 0.2s both`,
}));

const SectionTitle = styled("h2")(({ theme }) => ({
  fontSize: "48px",
  fontWeight: 700,
  color: "#0d0d2b",
  lineHeight: 1.2,
  [theme.breakpoints.down("md")]: { fontSize: "36px" },
}));

const DescriptionText = styled("p")(({ theme }) => ({
  fontSize: "16px",
  color: "#999",
  lineHeight: 1.8,
  [theme.breakpoints.down("md")]: { fontSize: "15px" },
}));

const CarouselSection = styled(Box)(({ theme }) => ({
  position: "relative",
  minHeight: "540px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  animation: `${fadeInUp} 0.8s ease-out 0.3s both`,
  [theme.breakpoints.down("md")]: { minHeight: "520px" },
}));

const MobilePhoneFrame = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "300px",
  height: "600px",
  background: "#000",
  borderRadius: "50px",
  border: "12px solid #1a1a1a",
  boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
  padding: "12px",
  flexShrink: 0,
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: "50%",
    transform: "translateX(-50%)",
    width: "150px",
    height: "28px",
    background: "#000",
    borderRadius: "0 0 30px 30px",
    zIndex: 10,
  },
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: "8px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "40px",
    height: "5px",
    background: "#000",
    borderRadius: "10px",
    zIndex: 10,
  },
  [theme.breakpoints.down("md")]: {
    width: "260px",
    height: "520px",
    border: "10px solid #1a1a1a",
    padding: "10px",
  },
}));

const PhoneScreen = styled(Box)({
  position: "absolute",
  top: "12px",
  left: "12px",
  right: "12px",
  bottom: "12px",
  borderRadius: "44px",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  zIndex: 1,
});

const FloatingCircle = styled(Box)(({ size, top, left }) => ({
  position: "absolute",
  width: `${size}px`,
  height: `${size}px`,
  borderRadius: "50%",
  background: "rgba(199, 30, 123, 0.08)",
  top,
  left,
  animation: `${float} 8s ease-in-out infinite`,
  zIndex: 0,
}));

export default function ScreenshotsSection() {
  const screenshots = [
    { id: 1, src: "/app-screenshot-1.jpg", alt: "App screen 1" },
    { id: 2, src: "/app-screenshot-2.jpg", alt: "App screen 2" },
    { id: 3, src: "/app-screenshot-3.jpg", alt: "App screen 3" },
    { id: 4, src: "/app-screenshot-4.jpg", alt: "App screen 4" },
    { id: 5, src: "/app-screenshot-5.jpg", alt: "App screen 5" },
  ];

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    if (!isMobile) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % screenshots.length);
    }, 2000); 
    return () => clearInterval(interval);
  }, [isMobile, screenshots.length]);

  const doubledScreenshots = [...screenshots, ...screenshots];

  return (
    <SectionContainer>
      <FloatingCircle size={100} top="5%" left="2%" />
      <FloatingCircle size={70} top="75%" left="88%" />
      <FloatingCircle size={50} top="40%" left="90%" />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <MainWrapper>
          <TextSection>
            <SectionTitle>Hindusthan wardrobe Apps Screenshot</SectionTitle>
            <DescriptionText>
              Lorem ipsum dolor sit amet, consecadipicsing elit, sed do eiusmod tempor incididunt ut ore et dolore magna aliqua. Quis ipsum suspendisse gravida. Risus commodo viverra maeceasan lacus vel facilisis.
            </DescriptionText>
          </TextSection>

          <CarouselSection>
            {isMobile ? (
              <MobilePhoneFrame key={screenshots[currentIndex].id}>
                <PhoneScreen
                  sx={{ backgroundImage: `url(${screenshots[currentIndex].src})` }}
                />
              </MobilePhoneFrame>
            ) : (
              <Box
                sx={{
                  display: "flex",
                  gap: 4,
                  animation: `${horizontalScroll} 30s linear infinite`,
                }}
              >
                {doubledScreenshots.map((screenshot, index) => (
                  <MobilePhoneFrame key={`${screenshot.id}-${index}`}>
                    <PhoneScreen
                      sx={{ backgroundImage: `url(${screenshot.src})` }}
                    />
                  </MobilePhoneFrame>
                ))}
              </Box>
            )}
          </CarouselSection>
        </MainWrapper>
      </Container>
    </SectionContainer>
  );
}