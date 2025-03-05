
import { Check } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/20 to-black" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              Transformamos sua presença digital em{' '}
              <span className="text-primary-DEFAULT">resultados</span>
            </h2>
            
            <p className="text-base sm:text-lg text-gray-300">
              Somos especialistas em marketing digital há 2 anos, focados em gerar resultados previsíveis e duradouros para o seu negócio. Nossa abordagem combina estratégia, criatividade e tecnologia.
            </p>

            <div className="space-y-4">
              {[
                "Equipe especializada e dedicada",
                "Estratégias personalizadas para cada cliente",
                "Resultados mensuráveis e escaláveis",
                "Atendimento próximo e consultivo"
              ].map((item, index) => (
                <div 
                  key={item} 
                  className="flex items-center gap-3 p-2 rounded-lg transition-all duration-300 hover:bg-[#7A3B96]/10 group relative overflow-hidden"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#7A3B96]/0 to-[#7A3B96]/0 group-hover:from-[#7A3B96]/5 group-hover:to-[#7A3B96]/10 transition-all duration-500 rounded-lg"></div>
                  <div className="bg-gradient-to-r from-[#7A3B96] to-[#8833FF] rounded-full p-1 flex-shrink-0 group-hover:scale-110 transition-transform relative z-10 shadow-lg shadow-[#7A3B96]/20 group-hover:shadow-[#7A3B96]/40">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-300 text-sm sm:text-base group-hover:text-[#7A3B96] transition-colors relative z-10 font-medium">{item}</span>
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#7A3B96] to-[#8833FF] group-hover:w-full transition-all duration-500"></div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-in [animation-delay:200ms]">
            <div className="glass rounded-2xl p-8 relative z-20">
              <img 
                src="/lovable-uploads/6bd99f5e-51de-4017-9443-ff4c6db07f6c.png" 
                alt="Fly Agency" 
                className="w-full rounded-lg"
              />
            </div>
            <div className="absolute inset-0 bg-[#7A3B96]/20 blur-3xl z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
