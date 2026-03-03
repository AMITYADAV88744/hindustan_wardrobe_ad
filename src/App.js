import { useState } from 'react';
import { Header } from './Components/Header/Header';
import { HeroSection } from './Components/Hero/Hero';
import FeaturesSection from './Components/Features/Features';
import ServicesSection from './Components/OurServices/Services';
import VideoSection from './Components/VideoSection/VideoSection';
import ScreenshotsSection from './Components/Screens/screens';
import Download from './Components/Download/Download';
import Footer from './Components/Footer/Footer';
// import Footer from './Components/footer/footer';

function App() {
  const [activeTab, setActiveTab] = useState('Home');

  return (
    <main>
      <Header activeTab={activeTab} onNavClick={setActiveTab} />
      <HeroSection />
      <FeaturesSection/>
      <ServicesSection/>
      <VideoSection/>
      <ScreenshotsSection/>
      <Download/>
      <Footer/>
    </main>
  );
}

export default App;