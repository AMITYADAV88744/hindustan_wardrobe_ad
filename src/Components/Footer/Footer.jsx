import {
  Box,
  Grid,
  Typography,
  Link,
} from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

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

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#0d0d2b',
  color: '#fff',
  padding: theme.spacing(8, 0, 4),
  width: '100%',
}));

const FooterContent = styled(Box)({
  animation: `${fadeInUp} 0.8s ease-out`,
});

const LogoSection = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));

const AppcoLogo = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  marginBottom: theme.spacing(2),
  fontSize: '24px',
  fontWeight: '700',
}));

const LogoText = styled(Typography)(({ theme }) => ({
  fontSize: '20px',
  fontWeight: '700',
  background: 'linear-gradient(90deg, #C41E7B 0%, #7B2CBF 100%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  marginTop: theme.spacing(1),
}));

const FooterSection = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: '16px',
  fontWeight: '700',
  marginBottom: theme.spacing(2),
  color: '#fff',
}));

const FooterLink = styled(Link)(({ theme }) => ({
  display: 'block',
  fontSize: '14px',
  color: '#aaa',
  marginBottom: theme.spacing(1.5),
  textDecoration: 'none',
  transition: 'color 0.3s ease',
  cursor: 'pointer',
  '&:hover': {
    color: '#C41E7B',
  },
}));

const SocialIcons = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1.5),
  marginTop: theme.spacing(2),
  '& svg': {
    width: '20px',
    height: '20px',
    cursor: 'pointer',
    color: '#aaa',
    transition: 'color 0.3s ease',
    '&:hover': {
      color: '#C41E7B',
    },
  },
}));

const FooterBottom = styled(Box)(({ theme }) => ({
  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
  paddingTop: theme.spacing(4),
  marginTop: theme.spacing(4),
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: theme.spacing(4),
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
    textAlign: 'center',
  },
}));

const CopyrightText = styled(Typography)({
  fontSize: '13px',
  color: '#666',
});

const BottomLinks = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  gap: theme.spacing(3),
  [theme.breakpoints.down('md')]: {
    justifyContent: 'center',
  },
}));

const BottomLink = styled(Link)(({ theme }) => ({
  fontSize: '13px',
  color: '#aaa',
  textDecoration: 'none',
  transition: 'color 0.3s ease',
  cursor: 'pointer',
  '&:hover': {
    color: '#C41E7B',
  },
}));

export default function Footer() {
  return (
    <FooterContainer component="footer">
      <Box sx={{ px: { xs: 2, sm: 3, md: 4, lg: 6 } }}>
        <FooterContent>
          <Grid container spacing={6}>
            <Grid item xs={12} sm={6} md={4}>
              <LogoSection>
                <AppcoLogo>
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      background:
                        'linear-gradient(135deg, #C41E7B 0%, #7B2CBF 100%)',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                      fontWeight: 700,
                    }}
                  >
                    H
                  </Box>
                </AppcoLogo>

                <LogoText>Hindusthan wardrobe</LogoText>

                <Typography
                  sx={{
                    fontSize: 13,
                    color: '#aaa',
                    mt: 2,
                    lineHeight: 1.6,
                  }}
                >
                 Hindusthan wardrobe is a powerful app designed to help you manage your
                  tasks and boost your productivity.
                </Typography>

                <SocialIcons>
                  <FacebookIcon />
                  <TwitterIcon />
                  <LinkedInIcon />
                  <InstagramIcon />
                </SocialIcons>
              </LogoSection>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <FooterSection>
                <SectionTitle>Product</SectionTitle>
                <FooterLink>Features</FooterLink>
              </FooterSection>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <FooterSection>
                <SectionTitle>Company</SectionTitle>
                <FooterLink>Contact</FooterLink>
              </FooterSection>
            </Grid>
          </Grid>

          {/* Bottom */}
          <FooterBottom>
            <CopyrightText>
              © {new Date().getFullYear()} Appco. All rights reserved.
            </CopyrightText>

            <BottomLinks>
              <BottomLink>Privacy Policy</BottomLink>
              <BottomLink>Terms of Service</BottomLink>
              <BottomLink>Cookie Policy</BottomLink>
            </BottomLinks>
          </FooterBottom>
        </FooterContent>
      </Box>
    </FooterContainer>
  );
}