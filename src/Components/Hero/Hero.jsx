import { Box, Button, Typography, Container, styled } from '@mui/material';
import { PlayArrow } from '@mui/icons-material';

const HeroWrapper = styled(Box)({
  position: 'relative',
  width: '100%',
  maxWidth: '100vw',
  overflowX: 'hidden', 
  backgroundColor: '#FFFFFF',
});


const BackgroundLayer = styled(Box)({
  position: 'absolute',
  inset: 0,
  zIndex: 0,
  pointerEvents: 'none',
  overflow: 'hidden',
});

const FloatingCircle = styled(Box)(({ size, top, right, delay }) => ({
  position: 'absolute',
  width: size,
  height: size,
  borderRadius: '50%',
  top,
  right,
  animation: `float 6s ease-in-out infinite`,
  animationDelay: delay,
  '@keyframes float': {
    '0%, 100%': { transform: 'translateY(0px)' },
    '50%': { transform: 'translateY(-25px)' },
  },
}));

const PinkCircle = styled(FloatingCircle)({
  background: '#F8B4D4',
  opacity: 0.6,
});

const PurpleCircle = styled(FloatingCircle)({
  background: '#D474E8',
  opacity: 0.6,
});


const HeroContainer = styled(Container)({
  position: 'relative',
  zIndex: 1,
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'center',
  gap: '60px',
  minHeight: 'calc(100vh - 100px)',
  paddingTop: '60px',
  paddingBottom: '60px',

  '@media (max-width: 968px)': {
    gridTemplateColumns: '1fr',
    gap: '40px',
    minHeight: 'auto',
    paddingTop: '40px',
    paddingBottom: '40px',
  },
});


const LeftContent = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
});

const Label = styled(Typography)({
  fontSize: '12px',
  fontWeight: 600,
  letterSpacing: '2px',
  color: '#7B2CBF',
});

const Title = styled(Typography)({
  fontSize: 'clamp(32px, 5vw, 56px)',
  fontWeight: 800,
  lineHeight: 1.2,
  color: '#1a1a1a',
});

const Description = styled(Typography)({
  fontSize: '16px',
  lineHeight: 1.6,
  color: '#666',
  maxWidth: '500px',
});


const ButtonGroup = styled(Box)({
  display: 'flex',
  gap: '16px',
  flexWrap: 'wrap',
});

const DownloadButton = styled(Button)({
  backgroundColor: '#C41E7B',
  color: 'white',
  textTransform: 'none',
  padding: '12px 32px',
  borderRadius: '28px',
  '&:hover': { backgroundColor: '#A01763' },
});

const PlayButton = styled(Button)({
  width: '48px',
  height: '48px',
  minWidth: '48px',
  borderRadius: '50%',
  backgroundColor: '#E8B4D8',
  color: 'white',
  padding: 0,
  '&:hover': { backgroundColor: '#D895C5' },
});


const RightContent = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const MobileFrame = styled(Box)({
  width: '100%',
  maxWidth: '320px',
  aspectRatio: '9 / 16', 
  backgroundColor: '#fff',
  borderRadius: '40px',
  border: '12px solid #1a1a1a',
  boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
});

const StatusBar = styled(Box)({
  height: '28px',
  background: '#f5f5f5',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 16px',
  fontSize: '12px',
  fontWeight: 600,
});

const MockupContent = styled(Box)({
  flex: 1,
  padding: '24px 16px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
});


export const HeroSection = () => {
  return (
    <HeroWrapper>
      <BackgroundLayer>
        <PinkCircle size="180px" top="15%" right="10%" delay="0s" />
        <PurpleCircle size="220px" top="35%" right="-5%" delay="1s" />
        <PinkCircle size="120px" top="60%" right="15%" delay="0.5s" />
        <PinkCircle size="80px" top="8%" right="25%" delay="1.5s" />
      </BackgroundLayer>

      <HeroContainer maxWidth="lg">
        <LeftContent>
          <Label>APP LANDING PAGE</Label>

          <Title>
            Get things done with Appco
          </Title>

          <Description>
            Dorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore.
          </Description>

          <ButtonGroup>
            <DownloadButton>Download</DownloadButton>
            <PlayButton>
              <PlayArrow />
            </PlayButton>
          </ButtonGroup>
        </LeftContent>

        <RightContent>
          <MobileFrame>
            <StatusBar>
              <span>9:41</span>
              <span>🔋</span>
            </StatusBar>

            <MockupContent>
              <Typography fontWeight={700}>
                Congratulations 🎉
              </Typography>
              <Typography variant="body2" color="text.secondary">
                You've taken your first step.
              </Typography>
            </MockupContent>
          </MobileFrame>
        </RightContent>
      </HeroContainer>
    </HeroWrapper>
  );
};