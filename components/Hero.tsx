import React from "react";
import connectionMobile from "./icons/connection_vertical.jpeg";
import connectionDesktop from "./icons/connection.jpeg";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative pt-20 min-h-[75vh] md:h-screen flex items-center justify-center text-center text-white overflow-hidden"
    >
      {/* Mobile */}
      <img
        src={connectionMobile}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover md:hidden"
      />

      {/* Desktop */}
      <img
        src={connectionDesktop}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover hidden md:block"
      />
      <div className="absolute inset-0 bg-blue-900 opacity-70"></div>
      <div className="relative z-10 px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight animate-fade-in-down">
          Destrave seu bussiness english.
          <br />
          <span className="text-blue-300">
            Aprenda a se comunicar em inglês com um nativo.
          </span>
        </h1>
        <p
          className="text-lg md:text-xl max-w-3xl mx-auto mb-8 font-light animate-fade-in-up"
          style={{ animationDelay: "0.5s" }}
        >
          Aprendizado personalizado. Assine um de nossos planos e se destaque no
          mundo empresarial.
        </p>
        <a
          href="https://wa.me/5581982099179?text=Ol%C3%A1!%20Tenho%20interesse%20na%20consultoria%20de%20ingl%C3%AAs."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block font-black text-blue-900 bg-blue-300 shadow-[0_0_25px_rgba(59,130,246,0.6)] rounded-full py-3 px-10
 font-medium transition-all duration-200 hover:scale-105"
        >
          Falar com o consultor no WhatsApp
        </a>
      </div>
    </section>
  );
};

export default Hero;
