import React from "react";

const CheckIcon = () => (
  <svg
    className="w-5 h-5 text-green-500 shrink-0"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

const PricingCard = ({
  plan,
  price,
  features,
  popular = false,
}: {
  plan: string;
  price: string;
  features: string[];
  popular?: boolean;
}) => {
  const whatsappMessage = `Ol%C3%A1!%20Tenho%20interesse%20no%20plano%20${plan}%20da%20consultoria%20de%20ingl%C3%AAs.`;
  const whatsappLink = `https://wa.me/5511999999999?text=${whatsappMessage}`;

  return (
    <div
      className={`border rounded-xl p-8 flex flex-col h-full ${popular ? "border-blue-900 border-2 relative" : "border-gray-200"}`}
    >
      {popular && (
        <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-blue-900 text-white text-xs font-bold px-4 py-1 rounded-full uppercase">
          Recomendado
        </div>
      )}
      <h3 className="text-2xl font-semibold text-blue-900 mb-2">{plan}</h3>
      <p className="text-4xl font-bold text-blue-900 mb-6">
        {price}
        <span className="text-lg font-normal text-gray-500">/mês</span>
      </p>
      <ul className="space-y-4 mb-8 grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <CheckIcon />
            <span className="ml-3 text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className={`w-full text-center font-bold py-3 px-6 rounded-full transition-transform duration-300 hover:scale-105 ${
          popular
            ? "bg-yellow-400 text-blue-900 hover:bg-yellow-500"
            : "bg-blue-100 text-blue-900 hover:bg-blue-200"
        }`}
      >
        Escolha o plano
      </a>
    </div>
  );
};

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Encotre o plano certo pra você.
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Invista na sua fluência com nossos planos de consultoria flexíveis.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <PricingCard
            plan="Coaching Executivo"
            price="R$ 1.000"
            features={[
              "2 horas semanais",
              "Coaching bussiness English",
              "Reuniões, Apresentações",
              "Networking",
            ]}
          />
          <PricingCard
            plan="Global Business Partner"
            price="R$2.500"
            features={[
              "4 horas semanais",
              "Revisão de até 5 e-mails ou documentos profissionais por semana",
              "Prioridade no agendamento para chamadas de negócios urgentes",
            ]}
            popular={true}
          />
          <PricingCard
            plan="Suporte Concierge Completo"
            price="R$5.000"
            features={[
              "Suporte integral",
              " interpretação presencial ou virtual em reuniões internacionais",
              "tradução técnica de documentos",
              "Até 10 horas de suporte dedicado por mês",
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
