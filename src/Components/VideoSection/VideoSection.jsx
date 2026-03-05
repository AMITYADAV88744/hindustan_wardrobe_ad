import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  IconButton,
} from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import CloseIcon from '@mui/icons-material/Close';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulseAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const SectionContainer = styled(Box)(({ theme }) => ({
  // background: 'linear-gradient(135deg, #f5f0ff 0%, #fff8f0 100%)',
  padding: theme.spacing(10, 0),
  position: 'relative',
  overflow: 'hidden',
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: '42px',
  fontWeight: '700',
  color: '#1a1a1a',
  textAlign: 'center',
  marginBottom: theme.spacing(2),
  textTransform: 'capitalize',
}));

const SectionDescription = styled(Typography)(({ theme }) => ({
  fontSize: '16px',
  color: '#666',
  textAlign: 'center',
  maxWidth: '600px',
  margin: '0 auto',
  marginBottom: theme.spacing(6),
  lineHeight: '1.6',
}));

const VideoCardContainer = styled(Card)(({ theme }) => ({
  position: 'relative',
  borderRadius: '12px',
  overflow: 'hidden',
  maxWidth: '900px',
  margin: '0 auto',
  cursor: 'pointer',
  animation: `${fadeInUp} 0.8s ease-out`,
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
  },
}));

const VideoImage = styled(Box)(() => ({
  width: '100%',
  position: 'relative',
  paddingBottom: '56.25%',
  '& img': {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
}));

const PlayButtonContainer = styled(Box)(() => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 10,
}));

const PlayButton = styled(Box)(() => ({
  width: '80px',
  height: '80px',
  background: 'linear-gradient(135deg, #C41E7B 0%, #7B2CBF 100%)',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  animation: `${pulseAnimation} 2s ease-in-out infinite`,
  '& svg': {
    width: '40px',
    height: '40px',
    color: 'white',
    marginLeft: '4px',
  },
}));

const Overlay = styled(Box)(() => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'rgba(0, 0, 0, 0.3)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const VideoFeatures = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: theme.spacing(3),
  marginTop: theme.spacing(4),
  flexWrap: 'wrap',
}));

const FeatureBadge = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  padding: theme.spacing(1.5, 2.5),
  background: 'white',
  borderRadius: '20px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
  fontSize: '14px',
  fontWeight: '600',
}));

const Badge = styled(Box)(() => ({
  width: '24px',
  height: '24px',
  background: 'linear-gradient(135deg, #C41E7B 0%, #7B2CBF 100%)',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  fontSize: '12px',
  fontWeight: 'bold',
}));

const ModalOverlay = styled(Box)(() => ({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'rgba(0, 0, 0, 0.8)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000,
}));

const ModalContent = styled(Box)(() => ({
  position: 'relative',
  width: '90vw',
  maxWidth: '1000px',
  borderRadius: '12px',
  overflow: 'hidden',
}));

const CloseButton = styled(IconButton)(() => ({
  position: 'absolute',
  top: 16,
  right: 16,
  zIndex: 1001,
  color: 'white',
}));

export default function VideoSection() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <SectionContainer>
        <Container maxWidth="lg">
          <SectionTitle>See Appco in Action</SectionTitle>

          <SectionDescription>
            Take a closer look at our trending outfits, quality craftsmanship, and styles 
            designed to make every moment fashionable.
          </SectionDescription>

          <VideoCardContainer onClick={() => setShowModal(true)}>
            <VideoImage>
              <img
                src="/appco-demo-video.jpg"
                alt="HW Demo Video"
              />
              <Overlay>
                <PlayButtonContainer>
                  <PlayButton>
                    <PlayArrowIcon />
                  </PlayButton>
                </PlayButtonContainer>
              </Overlay>
            </VideoImage>
          </VideoCardContainer>

          <VideoFeatures>
            <FeatureBadge>
              <Badge>✓</Badge>
              2 min watch
            </FeatureBadge>
            <FeatureBadge>
              <Badge>✓</Badge>
              Subtitles available
            </FeatureBadge>
            <FeatureBadge>
              <Badge>✓</Badge>
              Multiple languages
            </FeatureBadge>
          </VideoFeatures>
        </Container>
      </SectionContainer>

      {showModal && (
        <ModalOverlay onClick={() => setShowModal(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={() => setShowModal(false)}>
              <CloseIcon />
            </CloseButton>

            <Box sx={{ position: 'relative', paddingBottom: '56.25%' }}>
              <iframe
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                }}
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Appco Demo Video"
                allowFullScreen
              />
            </Box>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
}