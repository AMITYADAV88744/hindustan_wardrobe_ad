import { useState } from 'react';
import { Header } from './Components/Header/Header';
import { HeroSection } from './Components/Hero/Hero';
import FeaturesSection from './Components/Features/Features';
import ServicesSection from './Components/OurServices/Services';
import VideoSection from './Components/VideoSection/VideoSection';

function App() {
  const [activeTab, setActiveTab] = useState('Home');

  return (
    <main>
      <Header activeTab={activeTab} onNavClick={setActiveTab} />
      <HeroSection />
      <FeaturesSection/>
      <ServicesSection/>
      <VideoSection/>
    </main>
  );
}

export default App;