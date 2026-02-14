
import React from 'react';
import { TargetIcon, ChatIcon, GlobeIcon } from './icons/FeatureIcons';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">O Que é a MD Consulting?</h2>
        <p className="max-w-3xl mx-auto text-gray-600 mb-16 text-lg">
          MD Consulting é mais do que apenas uma aula; é uma consultoria personalizada focada na parte mais crucial do aprendizado de um idioma:  
          <span className="font-semibold text-green-600"> comunicação</span>. 
          Garantindo não seja apenas a gramática correta, mas também culturalmente estratégica e persuasiva para o mercado americano.
        </p>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center">
            <div className="bg-yellow-100 p-5 rounded-full mb-4">
              <TargetIcon className="h-10 w-10 text-yellow-500" />
            </div>
            <h3 className="text-xl font-semibold text-blue-900 mb-2">Abordagem Personalizada</h3>
            <p className="text-gray-600">
              Cada sessão é adaptada às suas metas específicas, interesses e nível de proficiência. Focamos no que você precisa melhorar.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-green-100 p-5 rounded-full mb-4">
              <ChatIcon className="h-10 w-10 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-blue-900 mb-2">Tradução Simultânea</h3>
            <p className="text-gray-600">
              Te ajudamos em traduções simultâneas em reuniões online, documentos e e-mails,como também realizamos preparações para apresentações .
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-blue-100 p-5 rounded-full mb-4">
              <GlobeIcon className="h-10 w-10 text-blue-500" />
            </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Fluência Cultural</h3>
              <p className="text-gray-600">             
                Aprenda as nuances da comunicação em inglês, compreendendo os contextos culturais e comerciais que vão além da gramática e do vocabulário.
              </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
