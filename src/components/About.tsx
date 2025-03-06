
import { Check, BarChart3, ArrowUpRight, TrendingUp, LineChart } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const About = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    if (!canvasRef.current) return;
    
    // Set up intersection observer for performance
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      observer.disconnect();
    };
  }, []);
  
  useEffect(() => {
    if (!canvasRef.current || !isVisible) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Optimize canvas rendering
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);
    
    // Animation variables with improved performance
    let animationFrameId: number;
    let points: number[] = [];
    const maxPoints = 40; // Reduced for better performance
    let hue = 280; // Purple hue
    
    // Generate initial points - optimized calculation
    for (let i = 0; i < maxPoints; i++) {
      points.push(Math.sin(i * 0.2) * 50 + 80);
    }
    
    // Optimized animation function with reduced calculations
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr);
      
      // Shift points and add new one - simplified calculation
      points.shift();
      points.push(Math.sin(Date.now() * 0.001) * 30 + 
                 Math.sin(Date.now() * 0.002) * 20 + 80);
      
      // Cached height value for better performance
      const canvasHeight = canvas.height / dpr;
      const canvasWidth = canvas.width / dpr;
      
      // Background gradient - simplified
      const gradient = ctx.createLinearGradient(0, 0, 0, canvasHeight);
      gradient.addColorStop(0, 'rgba(114, 0, 255, 0.15)');
      gradient.addColorStop(1, 'rgba(114, 0, 255, 0.01)');
      
      // Draw area under curve - optimized path
      ctx.beginPath();
      ctx.moveTo(0, canvasHeight);
      
      // Use optimized loop
      for (let i = 0; i < maxPoints; i++) {
        const x = (i / (maxPoints - 1)) * canvasWidth;
        ctx.lineTo(x, canvasHeight - points[i]);
      }
      
      ctx.lineTo(canvasWidth, canvasHeight);
      ctx.closePath();
      ctx.fillStyle = gradient;
      ctx.fill();
      
      // Draw line - optimized
      ctx.beginPath();
      for (let i = 0; i < maxPoints; i++) {
        const x = (i / (maxPoints - 1)) * canvasWidth;
        if (i === 0) {
          ctx.moveTo(x, canvasHeight - points[i]);
        } else {
          ctx.lineTo(x, canvasHeight - points[i]);
        }
      }
      
      ctx.strokeStyle = `hsl(${hue}, 100%, 65%)`;
      ctx.lineWidth = 3;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.stroke();
      
      // Draw fewer points for better performance
      for (let i = 0; i < maxPoints; i += 8) {
        const x = (i / (maxPoints - 1)) * canvasWidth;
        const y = canvasHeight - points[i];
        
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fillStyle = `hsl(${hue}, 100%, 75%)`;
        ctx.fill();
        
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, Math.PI * 2);
        ctx.fillStyle = 'white';
        ctx.fill();
      }
      
      // Update hue less frequently
      hue = (hue + 0.05) % 360;
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);
  
  return (
    <section id="sobre" ref={sectionRef} className="py-20 relative contain-paint">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/20 to-black" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in content-visibility-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              Transformamos sua presença digital em{' '}
              <span className="text-primary-DEFAULT">resultados</span>
            </h2>
            
            <p className="text-base sm:text-lg text-gray-300 max-w-lg">
              Somos especialistas em marketing digital há 2 anos, focados em gerar resultados previsíveis e duradouros para o seu negócio. Nossa abordagem combina estratégia, criatividade e tecnologia.
            </p>

            <div className="space-y-4">
              {[
                { text: "Equipe especializada e dedicada", icon: <BarChart3 className="w-4 h-4 text-white" /> },
                { text: "Estratégias personalizadas para cada cliente", icon: <LineChart className="w-4 h-4 text-white" /> },
                { text: "Resultados mensuráveis e escaláveis", icon: <TrendingUp className="w-4 h-4 text-white" /> },
                { text: "Atendimento próximo e consultivo", icon: <ArrowUpRight className="w-4 h-4 text-white" /> }
              ].map((item, index) => (
                <div 
                  key={item.text} 
                  className="flex items-center gap-3 p-2 rounded-lg transition-all duration-300 hover:bg-[#7A3B96]/10 group relative overflow-hidden"
                  style={{ animationDelay: `${index * 150}ms` }}
                  aria-label={item.text}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#7A3B96]/0 to-[#7A3B96]/0 group-hover:from-[#7A3B96]/5 group-hover:to-[#7A3B96]/10 transition-all duration-500 rounded-lg"></div>
                  <div className="bg-gradient-to-r from-[#7A3B96] to-[#8833FF] rounded-full p-1 flex-shrink-0 group-hover:scale-110 transition-transform relative z-10 shadow-lg shadow-[#7A3B96]/20 group-hover:shadow-[#7A3B96]/40 will-change-transform">
                    {item.icon || <Check className="w-4 h-4 text-white" />}
                  </div>
                  <span className="text-gray-300 text-sm sm:text-base group-hover:text-[#7A3B96] transition-colors relative z-10 font-medium">{item.text}</span>
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#7A3B96] to-[#8833FF] group-hover:w-full transition-all duration-500 will-change-transform"></div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-in [animation-delay:200ms] glass rounded-2xl p-6 overflow-hidden transform-gpu">
            <div className="aspect-video w-full relative z-20">
              <canvas 
                ref={canvasRef} 
                className="w-full h-full rounded-lg" 
                aria-label="Gráfico de crescimento de performance digital"
                role="img"
              ></canvas>
              
              <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md p-3 rounded-lg text-sm text-white/90 flex items-center gap-2 shadow-md">
                <TrendingUp className="w-4 h-4 text-primary-DEFAULT" />
                <span>Performance 2024-2025</span>
              </div>
              
              <div className="absolute top-4 right-4 flex gap-2">
                {[0, 1].map((i) => (
                  <div 
                    key={i}
                    className="w-10 h-10 rounded-full flex items-center justify-center bg-primary-dark/70 backdrop-blur-sm"
                    style={{ 
                      animation: 'float 6s ease-in-out infinite',
                      animationDelay: `${i * 1.5}s`
                    }}
                  >
                    {i === 0 ? (
                      <BarChart3 className="w-5 h-5 text-primary-DEFAULT" />
                    ) : (
                      <TrendingUp className="w-5 h-5 text-primary-DEFAULT" />
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute inset-0 bg-[#7A3B96]/10 blur-3xl z-10 opacity-60" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
