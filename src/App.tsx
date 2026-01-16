import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturesSection from './components/FeatureSection';
import WhyUseSection from './components/WhyUseSection'
import RolSection from './components/RolSection'
import RoadMapSection from './components/RoadMapSection';
import BottomCTA from './components/BottomCTA';
import Footer from './components/Footer';
import { Observer } from 'tailwindcss-intersect';
import { useEffect } from 'react';

const App: React.FC = () => {
  
  useEffect(() => {
    Observer.start();
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col bg-softBg">
      <Header />

      <main className="flex-1">
        <Hero />
        <section id="producto">
          <FeaturesSection />
          <WhyUseSection />
        </section>
        <section id="Roles">
          <RolSection/>
        </section>
        <section id="Conectividad">
          <RoadMapSection/>
          <BottomCTA/>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
