import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Benefits from "./components/Benefits";
import HowItWorks from "./components/HowItWorks";
import Pricing from "./components/Pricing";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import WhatsAppIcon from "./components/icons/whatsAppIcon";

const App: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800 antialiased">
      <Header />
      <main>
        <WhatsAppIcon />
        <Hero />
        <About />
        <Benefits />
        <HowItWorks />
        <Pricing />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
