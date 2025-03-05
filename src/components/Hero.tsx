
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  const openDiagnosticForm = () => {
    window.location.href = 'https://form.respondi.app/eODFSoBX';
  };

  return (
    <div id="inicio" className="min-h-[90vh] flex items-center relative overflow-hidden bg-gradient-to-b from-white via-primary-light/5 to-white dark:from-black dark:to-primary-dark/20">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-DEFAULT/5 to-secondary-DEFAULT/5 dark:from-primary-dark/80 dark:to-black/50 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#7100FF,transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h4 className="text-primary-DEFAULT font-medium tracking-wide animate-fade-in [animation-delay:200ms]">
            BEM-VINDO À FLY AGENCY
          </h4>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white leading-tight animate-fade-in [animation-delay:400ms] w-full tracking-normal sm:tracking-wide md:tracking-wide lg:tracking-wide">
            A partir de agora, seu maior problema será<br />
            <span className="bg-gradient-to-r from-[#7100FF] to-[#8833FF] bg-clip-text text-transparent">
              ter clientes demais
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto animate-fade-in [animation-delay:600ms] leading-snug md:leading-normal sm:px-6 px-4">
            Tenha acesso a estratégias avançadas de marketing <span className="xs:hidden sm:inline"> </span><br className="hidden md:block" />
            para escalar seu negócio com tráfego pago, automação e conteúdo profissional.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in [animation-delay:800ms] pb-0">
            <button 
              onClick={scrollToContact}
              className="purple-gradient hover:opacity-90 text-white px-8 py-4 rounded-full transition-all duration-300 flex items-center gap-2 group hover:shadow-lg hover:shadow-primary-DEFAULT/20 hover-shine transform hover:scale-105"
            >
              Agendar Consultoria Gratuita
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={openDiagnosticForm}
              className="text-gray-800 dark:text-white hover:text-primary-DEFAULT border border-gray-300 dark:border-gray-700 bg-white/50 dark:bg-black/30 px-6 py-3 rounded-full transition-all duration-300 text-sm md:text-base flex items-center gap-2 group hover:border-primary-DEFAULT"
            >
              Tenha um diagnóstico exclusivo
              <ArrowRight className="group-hover:translate-x-1 transition-transform text-primary-DEFAULT" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
