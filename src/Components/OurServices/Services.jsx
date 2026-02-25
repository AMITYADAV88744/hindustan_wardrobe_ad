import {
  Box,
  Container,
  Grid,
  Card,
  Typography,
  Avatar,
} from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import BuildIcon from '@mui/icons-material/Build';
import PaymentIcon from '@mui/icons-material/Payment';
import SendIcon from '@mui/icons-material/Send';

const float = keyframes`
  0%,100% { transform: translateY(0px); }
  50% { transform: translateY(-12px); }
`;

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  background: '#E9F0F2',
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: 44,
  fontWeight: 800,
  textAlign: 'center',
  color: '#2E0A4F',
  marginBottom: theme.spacing(8),
}));

const ServiceCard = styled(Card)(({ theme }) => ({
  borderRadius: 16,
  padding: theme.spacing(5, 4),
  textAlign: 'center',
  background: '#fff',
  boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
  transition: '0.3s',
  height: '100%',
  '&:hover': {
    transform: 'translateY(-6px)',
    boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  marginBottom: theme.spacing(3),
  animation: `${float} 3s ease-in-out infinite`,
}));

const DottedPattern = styled(Box)(() => ({
  position: 'absolute',
  width: 100,
  height: 100,
  top: -10,
  right: -10,
  backgroundImage: 'radial-gradient(circle, #D1C4E9 2px, transparent 2px)',
  backgroundSize: '18px 18px',
  opacity: 0.4,
}));

const CircleIcon = styled(Avatar)(({ gradient }) => ({
  width: 85,
  height: 85,
  margin: '0 auto',
  background: gradient,
  '& svg': {
    fontSize: 40,
    color: '#fff',
  },
  position: 'relative',
  zIndex: 2,
}));

const ServiceTitle = styled(Typography)(({ theme }) => ({
  fontSize: 20,
  fontWeight: 700,
  color: '#2E0A4F',
  marginBottom: theme.spacing(2),
}));

const ServiceDescription = styled(Typography)(({ theme }) => ({
  fontSize: 14,
  color: '#6B6F8E',
  lineHeight: 1.7,
}));

const services = [
  {
    icon: <BuildIcon />,
    title: 'Easily Manage',
    description:
      'Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod tempor incididunt ut laboreaa.',
    gradient: 'linear-gradient(135deg, #F062C0 0%, #D81B9C 100%)',
  },
  {
    icon: <PaymentIcon />,
    title: 'Get Payments Easily',
    description:
      'Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod tempor incididunt ut laboreaa.',
    gradient: 'linear-gradient(135deg, #6A5AE0 0%, #5B3DF5 100%)',
  },
  {
    icon: <SendIcon />,
    title: 'Quick Messaging',
    description:
      'Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod tempor incididunt ut laboreaa.',
    gradient: 'linear-gradient(135deg, #F062C0 0%, #D81B9C 100%)',
  },
];

export default function ServicesSection() {
  return (
    <SectionContainer >
      <Container maxWidth="lg">
        <SectionTitle>
          How Can We Help Your
          <br />
          with Appco!
        </SectionTitle>

        <Grid container spacing={4} justifyContent="center" sx={{ mb: 8 }}>
          {services.map((service, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
              <ServiceCard>
                <IconWrapper>
                  <DottedPattern />
                  <CircleIcon gradient={service.gradient}>
                    {service.icon}
                  </CircleIcon>
                </IconWrapper>

                <ServiceTitle>
                  {service.title}
                </ServiceTitle>

                <ServiceDescription>
                  {service.description}
                </ServiceDescription>
              </ServiceCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </SectionContainer>
  );
}