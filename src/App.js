import { useState } from 'react';
import { Header } from './Components/Header/Header';
import { HeroSection } from './Components/Hero/Hero';
import FeaturesSection from './Components/Features/Features';

function App() {
  const [activeTab, setActiveTab] = useState('Home');

  return (
    <main>
      <Header activeTab={activeTab} onNavClick={setActiveTab} />
      <HeroSection />
      <FeaturesSection/>
    </main>
  );
}

export default App;