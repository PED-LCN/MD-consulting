import React from "react";
import {
  WhatsAppIcon,
  CalendarIcon,
  PaymentIcon,
  VideoIcon,
  PolicyPaymentIcon,
  PolicyClockIcon,
  PolicyLockIcon,
} from "./icons/FeatureIcons";

const Step = ({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) => (
  <div className="md:flex items-start md:space-x-8">
    <div className="shrink-0 mb-6 md:mb-0 flex justify-center">
      <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center">
        {icon}
      </div>
    </div>
    <div>
      <h3 className="text-2xl font-bold text-blue-900 mb-3">{title}</h3>
      <p className="text-gray-600 text-lg leading-relaxed">{children}</p>
    </div>
  </div>
);

const PolicyCard = ({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) => (
  <div className="bg-white p-6 rounded-lg shadow-md h-full">
    <div className="flex items-center mb-3">
      {icon}
      <h4 className="font-semibold text-blue-900 text-lg ml-3">{title}</h4>
    </div>
    <p className="text-gray-600">{children}</p>
  </div>
);

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Como Funciona
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            Comece sua jornada para a fluência em 4 passos simples. Nosso
            processo é transparente e focado em você.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-16">
          <Step
            icon={<WhatsAppIcon className="w-12 h-12 text-blue-900" />}
            title="1. Entre em Contato"
          >
            <>
              O primeiro passo é nos chamar no WhatsApp. Vamos conversar sobre
              seus objetivos, nível de inglês e encontrar o plano de consultoria
              ideal para você.
              <a
                href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Tenho%20interesse%20na%20consultoria%20de%20ingl%C3%AAs."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full transition-colors"
              >
                <WhatsAppIcon className="w-5 h-5 mr-2" />
                Iniciar Conversa
              </a>
            </>
          </Step>
          <Step
            icon={<CalendarIcon className="w-12 h-12 text-blue-900" />}
            title="2. Agende Suas Sessões"
          >
            Após a definição do plano, você terá acesso ao nosso sistema de
            agendamento flexível. Escolha os melhores dias e horários para suas
            sessões de conversação.
          </Step>
          <Step
            icon={<PaymentIcon className="w-12 h-12 text-blue-900" />}
            title="3. Realize o Pagamento"
          >
            O pagamento é mensal e pode ser feito de forma prática via Pix ou
            transferência bancária. A confirmação garante a sua vaga e a
            continuidade das sessões.
          </Step>
          <Step
            icon={<VideoIcon className="w-12 h-12 text-blue-900" />}
            title="4. Comece a Praticar!"
          >
            Tudo pronto! No dia e hora marcados, acesse o link da videochamada e
            comece a sua consultoria.
          </Step>
        </div>
      </div>

      <div className="mt-28 bg-blue-900 py-12">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Nossas Políticas
            </h3>
            <p className="max-w-2xl mx-auto text-blue-50 mt-2">
              Transparência e confiança são a base do nosso serviço.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PolicyCard
              icon={<PolicyPaymentIcon className="w-8 h-8 text-green-600" />}
              title="Pagamento"
            >
              Mensal via Pix ou transferência bancária até o dia 05 de cada mês.
            </PolicyCard>
            <PolicyCard
              icon={<PolicyClockIcon className="w-8 h-8 text-yellow-600" />}
              title="Flexibilidade"
            >
              Cancelamentos ou reagendamentos devem ser feitos com 24 horas de
              antecedência.
            </PolicyCard>
            <PolicyCard
              icon={<PolicyLockIcon className="w-8 h-8 text-blue-600" />}
              title="Confidencialidade"
            >
              Todas as informações de negócios discutidas serão tratadas com
              total sigilo (NDA disponível se necessário).
            </PolicyCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
