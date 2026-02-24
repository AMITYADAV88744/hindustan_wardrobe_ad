import { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Avatar,
  Fab,
} from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import BuildIcon from '@mui/icons-material/Build';
import SecurityIcon from '@mui/icons-material/Shield';
import SupportAgentIcon from '@mui/icons-material/Headset';
import PaletteIcon from '@mui/icons-material/Palette';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
`;

const floatSlow = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-30px); }
`;

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
`;

const FloatingCircle = styled(Box)(({ delay = 0, size = 40 }) => ({
  position: 'absolute',
  width: size,
  height: size,
  borderRadius: '50%',
  animation: `${float} 4s ease-in-out infinite`,
  animationDelay: `${delay}s`,
}));

const FeatureCard = styled(Card)(() => ({
  border: 'none',
  boxShadow: '0 5px 20px rgba(0, 0, 0, 0.08)',
  borderRadius: '12px',
  transition: 'all 0.3s ease',
  animation: `${fadeInUp} 0.6s ease-out forwards`,
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 15px 40px rgba(0, 0, 0, 0.15)',
  },
}));

const FeatureIcon = styled(Avatar)(({ theme }) => ({
  width: 70,
  height: 70,
  background: 'linear-gradient(135deg, #7B2CBF 0%, #C41E7B 100%)',
  marginBottom: theme.spacing(2),
  color: 'white',
  fontSize: '32px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const MobileImage = styled(Box)(() => ({
  position: 'relative',
  animation: `${fadeInUp} 0.8s ease-out 0.2s both`,
  '& img': {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '8px',
  },
}));

const CircularGradient = styled(Box)(() => ({
  position: 'absolute',
  width: '500px',
  height: '500px',
  borderRadius: '50%',
  background: 'conic-gradient(from 0deg, #C41E7B 0%, #7B2CBF 50%, #C41E7B 100%)',
  left: '-150px',
  top: '50px',
  opacity: 0.15,
  animation: `${floatSlow} 6s ease-in-out infinite`,
  zIndex: 0,
}));

const ScrollToTopButton = styled(Fab)(() => ({
  position: 'fixed',
  bottom: '40px',
  right: '40px',
  background: 'linear-gradient(135deg, #7B2CBF 0%, #C41E7B 100%)',
  color: 'white',
  '&:hover': {
    background: 'linear-gradient(135deg, #6B20B0 0%, #B8147A 100%)',
    transform: 'translateY(-4px)',
  },
  zIndex: 50,
  animation: `${fadeInUp} 0.6s ease-out 0.4s both`,
}));

const features = [
  {
    id: 1,
    title: 'Easy to Customize',
    description: 'Aorem psum olorsit amet ectetur adipiscing elit, sed dov.',
    icon: <BuildIcon sx={{ fontSize: 32 }} />,
  },
  {
    id: 2,
    title: 'Extreme Security',
    description: 'Aorem psum olorsit amet ectetur adipiscing elit, sed dov.',
    icon: <SecurityIcon sx={{ fontSize: 32 }} />,
  },
  {
    id: 3,
    title: 'Customer Support',
    description: 'Aorem psum olorsit amet ectetur adipiscing elit, sed dov.',
    icon: <SupportAgentIcon sx={{ fontSize: 32 }} />,
  },
  {
    id: 4,
    title: 'Creative Design',
    description: 'Aorem psum olorsit amet ectetur adipiscing elit, sed dov.',
    icon: <PaletteIcon sx={{ fontSize: 32 }} />,
  },
];

export default function FeaturesSection() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  const handleScroll = () => {
    setShowScrollTop(window.scrollY > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box sx={{ position: 'relative', py: { xs: 6, md: 10 }, overflow: 'hidden' }}>
      <FloatingCircle
        sx={{
          background: 'linear-gradient(135deg, #C41E7B 0%, #E98FB8 100%)',
          top: '100px',
          right: '50px',
        }}
        size={30}
      />
      <FloatingCircle
        sx={{
          background: 'linear-gradient(135deg, #E98FB8 0%, #C41E7B 100%)',
          bottom: '150px',
          left: '30px',
        }}
        size={25}
        delay={1}
      />
      <FloatingCircle
        sx={{
          background: 'linear-gradient(135deg, #7B2CBF 0%, #C41E7B 100%)',
          top: '50%',
          right: '10%',
        }}
        size={20}
        delay={2}
      />

      <CircularGradient />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'center' }}>
            {/* <MobileImage sx={{ zIndex: 2, maxWidth: '320px' }}>
              <img src="/mobile-mockup.jpg" alt="Mobile app mockup" />
            </MobileImage> */}
          </Grid>

          <Grid item xs={12} md={7}>
            <Typography
              sx={{
                fontSize: { xs: '32px', md: '48px' },
                fontWeight: 800,
                color: '#1a0033',
                mb: 4,
                lineHeight: 1.2,
                animation: `${fadeInUp} 0.6s ease-out`,
              }}
            >
              Some of the best features Of Our App!
            </Typography>

            <Grid container spacing={3}>
              {features.map((feature, index) => (
                <Grid item xs={12} sm={6} key={feature.id}>
                  <FeatureCard
                    sx={{
                      animationDelay: `${0.1 * (index + 1)}s`,
                    }}
                  >
                    <CardContent>
                      <FeatureIcon>{feature.icon}</FeatureIcon>
                      <Typography
                        sx={{
                          fontWeight: 700,
                          fontSize: '18px',
                          mb: 1,
                          color: '#1a0033',
                        }}
                      >
                        {feature.title}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: '14px',
                          color: '#888',
                          lineHeight: 1.6,
                        }}
                      >
                        {feature.description}
                      </Typography>
                    </CardContent>
                  </FeatureCard>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>

      {showScrollTop && (
        <ScrollToTopButton onClick={scrollToTop}>
          <KeyboardArrowUpIcon />
        </ScrollToTopButton>
      )}
    </Box>
  );
}