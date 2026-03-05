import {
  Box,
  Container,
  Grid,
  Card,
  Typography,
  Avatar,
} from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import EventIcon from '@mui/icons-material/Event';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';


const float = keyframes`
  0%,100% { transform: translateY(0px); }
  50% { transform: translateY(-12px); }
`;


const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(6, 2),
  background: '#E9F0F2',
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  textAlign: 'center',
  color: '#2E0A4F',
  marginBottom: theme.spacing(6),
  fontSize: '28px',

  [theme.breakpoints.up('sm')]: {
    fontSize: '34px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '44px',
    marginBottom: theme.spacing(8),
  },
}));


const ServiceCard = styled(Card)(({ theme }) => ({
  borderRadius: 16,
  padding: theme.spacing(4),
  textAlign: 'center',
  background: '#fff',
  boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
  transition: '0.3s',
  width: '100%',

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
  width: 80,
  height: 80,
  top: -10,
  right: -10,
  backgroundImage:
    'radial-gradient(circle, #D1C4E9 2px, transparent 2px)',
  backgroundSize: '16px 16px',
  opacity: 0.4,
}));

const CircleIcon = styled(Avatar)(({ gradient }) => ({
  width: 80,
  height: 80,
  margin: '0 auto',
  background: gradient,
  position: 'relative',
  zIndex: 2,

  '& svg': {
    fontSize: 36,
    color: '#fff',
  },
}));


const ServiceTitle = styled(Typography)(({ theme }) => ({
  fontSize: 20,
  fontWeight: 700,
  color: '#2E0A4F',
  marginBottom: theme.spacing(2),
}));

const ServiceDescription = styled(Typography)(() => ({
  fontSize: 14,
  color: '#6B6F8E',
  lineHeight: 1.7,
}));


const services = [
  {
    icon: <CheckroomIcon />,
    title: 'Browse Stylish Outfits',
    description:
      'Explore a curated collection of designer outfits for weddings, parties, and special occasions.',
    gradient: 'linear-gradient(135deg, #F062C0 0%, #D81B9C 100%)',
  },
  {
    icon: <EventIcon />,
    title: 'Rent for Your Occasion',
    description:
      'Select the perfect outfit for your event and rent it for the days you need without buying.',
    gradient: 'linear-gradient(135deg, #6A5AE0 0%, #5B3DF5 100%)',
  },
  {
    icon: <LocalShippingIcon />,
    title: 'Delivery & Easy Return',
    description:
      'Get your outfit delivered to your doorstep and return it easily after your event is over.',
    gradient: 'linear-gradient(135deg, #F062C0 0%, #D81B9C 100%)',
  },
];


export default function ServicesSection() {
  return (
    <SectionContainer>
      <Container maxWidth="lg">
        <SectionTitle>
          How Renting Works
          <br />
          at Hindustan Wardrobe
        </SectionTitle>

        <Grid
          container
          spacing={4}
          justifyContent="center"
          sx={{
            maxWidth: '1100px',
            margin: '0 auto',
          }}
        >
          {services.map((service, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={index}
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <ServiceCard
                sx={{
                  maxWidth: '320px',
                  width: '100%',
                }}
              >
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