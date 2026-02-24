import { Box, Button, Typography, Container, styled } from '@mui/material';
import { PlayArrow } from '@mui/icons-material';

const HeroContainer = styled(Container)({
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
  animation: 'slideInLeft 0.8s ease-out',
  '@keyframes slideInLeft': {
    from: { opacity: 0, transform: 'translateX(-50px)' },
    to: { opacity: 1, transform: 'translateX(0)' },
  },
});

const Label = styled(Typography)({
  fontSize: '12px',
  fontWeight: '600',
  letterSpacing: '2px',
  color: '#7B2CBF',
  textTransform: 'uppercase',
});

const Title = styled(Typography)({
  fontSize: '56px',
  fontWeight: '800',
  lineHeight: '1.2',
  color: '#1a1a1a',
  '@media (max-width: 768px)': {
    fontSize: '36px',
  },
});

const Description = styled(Typography)({
  fontSize: '16px',
  lineHeight: '1.6',
  color: '#666666',
  maxWidth: '400px',
});

const ButtonGroup = styled(Box)({
  display: 'flex',
  gap: '16px',
  alignItems: 'center',
  marginTop: '8px',
  flexWrap: 'wrap',
  '@media (max-width: 768px)': {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
});

const DownloadButton = styled(Button)({
  backgroundColor: '#C41E7B',
  color: 'white',
  textTransform: 'none',
  fontSize: '16px',
  fontWeight: '600',
  padding: '12px 32px',
  borderRadius: '28px',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: '#A01763',
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 24px rgba(196, 30, 123, 0.3)',
  },
});

const PlayButton = styled(Button)({
  width: '48px',
  height: '48px',
  minWidth: '48px',
  borderRadius: '50%',
  backgroundColor: '#E8B4D8',
  color: 'white',
  padding: '0',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: '#D895C5',
    transform: 'scale(1.1)',
    boxShadow: '0 8px 24px rgba(196, 30, 123, 0.2)',
  },
});

const RightContent = styled(Box)({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '500px',
  animation: 'slideInRight 0.8s ease-out',
  '@keyframes slideInRight': {
    from: { opacity: 0, transform: 'translateX(50px)' },
    to: { opacity: 1, transform: 'translateX(0)' },
  },
  '@media (max-width: 968px)': {
    minHeight: '400px',
  },
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
    '50%': { transform: 'translateY(-30px)' },
  },
}));

const PinkCircle = styled(FloatingCircle)({
  background: '#F8B4D4',
});

const PurpleCircle = styled(FloatingCircle)({
  background: '#D474E8',
});

const MockupContainer = styled(Box)({
  position: 'relative',
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 2,
});

const MobileFrame = styled(Box)({
  position: 'relative',
  width: '300px',
  height: '520px',
  backgroundColor: 'white',
  borderRadius: '40px',
  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
  overflow: 'hidden',
  border: '12px solid #1a1a1a',
  display: 'flex',
  flexDirection: 'column',
  animation: 'bounceIn 0.6s ease-out 0.3s both',
  '@keyframes bounceIn': {
    from: { opacity: 0, transform: 'scale(0.8)' },
    to: { opacity: 1, transform: 'scale(1)' },
  },
});

const StatusBar = styled(Box)({
  height: '28px',
  background: '#f5f5f5',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingLeft: '16px',
  paddingRight: '16px',
  fontSize: '12px',
  fontWeight: '600',
  borderBottom: '1px solid #efefef',
});

const MockupContent = styled(Box)({
  flex: 1,
  padding: '24px 16px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '16px',
  background: 'white',
  position: 'relative',
});

const Balloon = styled(Box)(({ left, delay, color }) => ({
  width: '40px',
  height: '50px',
  background: color,
  borderRadius: '50% 50% 50% 0',
  transform: 'rotate(-45deg)',
  position: 'absolute',
  left,
  bottom: '20px',
  animation: `bounce 2s ease-in-out infinite`,
  animationDelay: delay,
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-20px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '1px',
    height: '20px',
    background: '#999',
  },
  '@keyframes bounce': {
    '0%, 100%': { transform: 'rotate(-45deg) translateY(0)' },
    '50%': { transform: 'rotate(-45deg) translateY(-20px)' },
  },
}));

const Gift = styled(Box)({
  width: '30px',
  height: '30px',
  background: 'linear-gradient(135deg, #FFD93D 0%, #FFB700 100%)',
  borderRadius: '4px',
  animation: 'spin 4s linear infinite',
  '@keyframes spin': {
    from: { transform: 'rotateY(0deg)' },
    to: { transform: 'rotateY(360deg)' },
  },
});

const ConfettiPiece = styled(Box)(({ delay, duration }) => ({
  width: '6px',
  height: '6px',
  background: '#FFB700',
  position: 'absolute',
  borderRadius: '50%',
  animation: `fall ${duration} linear infinite`,
  animationDelay: delay,
  '@keyframes fall': {
    from: { transform: 'translateY(-20px)', opacity: 1 },
    to: { transform: 'translateY(40px)', opacity: 0 },
  },
}));


const MessageText = styled(Typography)({
  fontSize: '12px',
  lineHeight: '1.4',
  color: '#666',
  textAlign: 'center',
  marginTop: '12px',
});

export const HeroSection = () => {
  return (
    <Box sx={{ position: 'relative', backgroundColor: '#FFFFFF', overflow: 'hidden' }}>
      <PinkCircle size="180px" top="120px" right="100px" delay="0s" />
      <PurpleCircle size="240px" top="220px" right="-80px" delay="1s" />
      <PinkCircle size="120px" top="380px" right="40px" delay="0.5s" />
      <PinkCircle size="80px" top="80px" right="280px" delay="1.5s" />

      <HeroContainer maxWidth="lg">
        <LeftContent>
          <Label>APP LANDING PAGE</Label>
          <Title>Get things done with Appco</Title>
          <Description>
            Dorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusm tempor incididunt ulabore et dolore magna aliqua.
          </Description>

          <ButtonGroup>
            <DownloadButton>Download</DownloadButton>
            <PlayButton>
              <PlayArrow sx={{ fontSize: '24px' }} />
            </PlayButton>
          </ButtonGroup>
        </LeftContent>

        <RightContent>
          <MockupContainer>
            <MobileFrame>
              <StatusBar>
                <span>9:41</span>
                <Box sx={{ display: 'flex', gap: '4px' }}>
                  <span>📶</span>
                  <span>🔋</span>
                </Box>
              </StatusBar>

              <MockupContent>
                <Typography sx={{ fontSize: '18px', fontWeight: '700' }}>
                  Congratulations
                </Typography>

                <Balloon left="20px" delay="0s" color="#FFB700" />
                <Balloon left="100px" delay="0.3s" color="#5B4FE8" />
                <Balloon left="180px" delay="0.6s" color="#FF69B4" />

                <Gift />

                <ConfettiPiece delay="0s" duration="1.5s" sx={{ left: '60px', top: '80px' }} />
                <ConfettiPiece delay="0.2s" duration="1.5s" sx={{ left: '120px', top: '100px' }} />
                <ConfettiPiece delay="0.4s" duration="1.5s" sx={{ left: '180px', top: '80px' }} />

                <MessageText>
                  You've taken your first step
                </MessageText>

                <MessageText sx={{ fontWeight: '500', color: '#999' }}>
                  It may take a while for our transactions to be visible.
                </MessageText>

              </MockupContent>
            </MobileFrame>
          </MockupContainer>
        </RightContent>
      </HeroContainer>
    </Box>
  );
};