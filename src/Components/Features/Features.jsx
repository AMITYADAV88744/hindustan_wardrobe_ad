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
  50% { transform: translateY(-15px); }
`;

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
`;


const FloatingCircle = styled(Box)(({ delay = 0, size = 30 }) => ({
  position: 'absolute',
  width: size,
  height: size,
  borderRadius: '50%',
  animation: `${float} 4s ease-in-out infinite`,
  animationDelay: `${delay}s`,
  opacity: 0.6,
}));

const FeatureCard = styled(Card)(() => ({
  border: 'none',
  boxShadow: '0 5px 20px rgba(0, 0, 0, 0.08)',
  borderRadius: '12px',
  transition: 'all 0.3s ease',
  animation: `${fadeInUp} 0.6s ease-out forwards`,
  '&:hover': {
    transform: 'translateY(-6px)',
    boxShadow: '0 15px 40px rgba(0, 0, 0, 0.15)',
  },
}));

const FeatureIcon = styled(Avatar)(({ theme }) => ({
  width: 60,
  height: 60,
  background: 'linear-gradient(135deg, #7B2CBF 0%, #C41E7B 100%)',
  marginBottom: theme.spacing(2),
  color: 'white',
}));

const ScrollToTopButton = styled(Fab)(({ theme }) => ({
  position: 'fixed',
  bottom: theme.spacing(3),
  right: theme.spacing(3),
  background: 'linear-gradient(135deg, #7B2CBF 0%, #C41E7B 100%)',
  color: 'white',
  zIndex: 50,
  '&:hover': {
    transform: 'translateY(-4px)',
  },
}));

const features = [
  {
    id: 1,
    title: 'Easy to Customize',
    description: 'Aorem psum olorsit amet ectetur adipiscing elit, sed dov.',
    icon: <BuildIcon />,
  },
  {
    id: 2,
    title: 'Extreme Security',
    description: 'Aorem psum olorsit amet ectetur adipiscing elit, sed dov.',
    icon: <SecurityIcon />,
  },
  {
    id: 3,
    title: 'Customer Support',
    description: 'Aorem psum olorsit amet ectetur adipiscing elit, sed dov.',
    icon: <SupportAgentIcon />,
  },
  {
    id: 4,
    title: 'Creative Design',
    description: 'Aorem psum olorsit amet ectetur adipiscing elit, sed dov.',
    icon: <PaletteIcon />,
  },
];


export default function FeaturesSection() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box
      sx={{
        position: 'relative',
        py: { xs: 6, md: 10 },
        overflowX: 'hidden', 
      }}
    >
      <FloatingCircle
        size={25}
        sx={{
          background: 'linear-gradient(135deg, #C41E7B 0%, #E98FB8 100%)',
          top: { xs: 40, md: 100 },
          right: { xs: 20, md: 50 },
        }}
      />
      <FloatingCircle
        size={20}
        delay={1}
        sx={{
          background: 'linear-gradient(135deg, #7B2CBF 0%, #C41E7B 100%)',
          bottom: { xs: 80, md: 150 },
          left: { xs: 10, md: 30 },
        }}
      />

      <Container maxWidth="lg">
        <Grid
          container
          spacing={{ xs: 4, md: 6 }}
          justifyContent="center"
        >
          <Grid
            item
            xs={12}
            md={10}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: '28px', sm: '34px', md: '48px' },
                fontWeight: 800,
                mb: 4,
                lineHeight: 1.2,
                textAlign: 'center',
                maxWidth: '700px',
              }}
            >
              Some of the best features Of Our App!
            </Typography>

            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              justifyContent="center"
            >
              {features.map((feature, index) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={6}
                  key={feature.id}
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <FeatureCard
                    sx={{
                      width: '100%',
                      maxWidth: '320px',
                      textAlign: 'center',
                      animationDelay: `${0.1 * (index + 1)}s`,
                    }}
                  >
                    <CardContent>
                      <FeatureIcon sx={{ mx: 'auto' }}>
                        {feature.icon}
                      </FeatureIcon>

                      <Typography fontWeight={700} mb={1}>
                        {feature.title}
                      </Typography>

                      <Typography fontSize="14px" color="#888">
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