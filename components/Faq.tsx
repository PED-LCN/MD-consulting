import React, { useState } from "react";

// FIX: Defined props type as a separate type alias to resolve excess property checking error on `key`.
type FaqItemProps = {
  question: string;
  answer: string;
};

const FaqItem = ({ question, answer }: FaqItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-6">
      <button
        className="w-full flex justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h4 className="text-lg font-medium text-blue-900">{question}</h4>
        <svg
          className={`w-5 h-5 text-blue-900 transition-transform duration-300 ${isOpen ? "transform rotate-180" : ""}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 mt-4" : "max-h-0"}`}
      >
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

const Faq: React.FC = () => {
  const faqData = [
    {
      question: "Quem será seu instrutor de Inglês?",
      answer:
        "Nosso Instrutor é falante de inglês nativo, residente no Brasil. Entendendo as suas dificuldades e as exigências do mercado internacional, fornecerá tudo o que você precisa para aprimorar suas habilidades.",
    },
    {
      question: "E se eu precisar remarcar uma sessão?",
      answer:
        "Entendemos que imprevistos acontecem! Você pode remarcar qualquer sessão até 24 horas antes, entrando em contato com o instrutor via WhatsApp.",
    },
    {
      question: "Este produto é adequado para iniciantes ?",
      answer:
        "........",
    },
    {
      question: "Que tecnologia eu preciso para as sessões online?",
      answer:
        "Tudo que você precisa é uma conexão estável com a internet e um dispositivo com câmera e microfone (como um computador, tablet ou smartphone). Realizamos as sessões por meio de plataformas comuns de videoconferência, como o Google Meet ou o Zoom.",
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Tem dúvidas? Nós temos as respostas. Aqui estão algumas perguntas
            frequentes dos nossos clientes.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          {faqData.map((item, index) => (
            <FaqItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
