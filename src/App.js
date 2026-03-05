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

  const handleNavClick = (tab) => {
    setActiveTab(tab);

    const sectionMap = {
      Home: 'hero',
      Feature: 'features',
      Pages: 'screenshots'
    };

    const id = sectionMap[tab];
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <main>
      <Header activeTab={activeTab} onNavClick={handleNavClick} />

      <div id="hero">
        <HeroSection />
      </div>

      <div id="features">
        <FeaturesSection />
      </div>

      <ServicesSection/>
      <VideoSection/>

      <div id="screenshots">
        <ScreenshotsSection/>
      </div>

      <Download/>
      <Footer/>
    </main>
  );
}

export default App;