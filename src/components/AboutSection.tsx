import React from 'react';
import { Wheat, Award, HeartHandshake, Coffee } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-16 lg:py-24 bg-neutral-900/40 border-b border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Composition with Gold Accents */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative">
              
              {/* Main Image */}
              <div className="relative rounded-lg overflow-hidden border border-[#C99B2E]/30 bg-neutral-950 shadow-2xl">
                <img
                  src="/src/assets/images/artisan_sourdough_bread_1794398317317.jpg"
                  alt="Pão rústico artesanal de fermentação lenta da Capri"
                  className="w-full aspect-[4/3] object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-neutral-300">
                  <span className="text-[#E5C378] font-medium font-serif">Massa Madre & Fermentação Lenta</span>
                  <span className="text-neutral-400">36 horas de maturação</span>
                </div>
              </div>

              {/* Offset Secondary Image */}
              <div className="hidden sm:block absolute -bottom-10 -right-8 w-60 rounded-lg overflow-hidden border-2 border-neutral-900 shadow-2xl">
                <img
                  src="/src/assets/images/specialty_coffee_latte_1794398319097.jpg"
                  alt="Café latte especial servido na Capri Panificadora"
                  className="w-full aspect-square object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

            </div>
          </div>

          {/* Right Column: Narrative Prose & Values */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#E5C378]">
                Nossa Essência
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-white font-medium leading-tight">
                A Alma da Panificação Clássica no Coração da 215 Norte
              </h2>
            </div>

            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-light">
              Fundada com a proposta de unir o requinte da panificação europeia à acolhida tradicional de Brasília, a <strong className="text-white font-medium">Panificadora Capri</strong> se consolidou como uma referência gastronômica na Asa Norte.
            </p>

            <p className="text-neutral-400 text-sm leading-relaxed">
              Cada fornada é tratada como uma obra de arte: respeitamos o tempo natural das leveduras, empregamos farinhas nobres e manteiga pura de primeira linha. Das primeiras horas da manhã, com o cheiro inconfundível de pão saindo do forno, até o cair da tarde com café especial e confeitaria fina, nosso espaço foi desenhado para acolher encontros memoráveis.
            </p>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-neutral-800">
              
              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-neutral-800/80 text-[#E5C378] shrink-0 mt-1">
                  <Wheat className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Fermentação Natural</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Leveduras vivas que garantem alta digestibilidade e casca estaladiça.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-neutral-800/80 text-[#E5C378] shrink-0 mt-1">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Confeitaria Fina</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Tortas clássicas, folhados franceses e receitas autorais de alto padrão.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-neutral-800/80 text-[#E5C378] shrink-0 mt-1">
                  <Coffee className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Cafeteria de Origem</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Grãos 100% arábica selecionados do Cerrado e extrações com precisão barista.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-neutral-800/80 text-[#E5C378] shrink-0 mt-1">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Hospitalidade</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Ambiente climatizado, mesas externas e estacionamento fácil na entrequadra.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
