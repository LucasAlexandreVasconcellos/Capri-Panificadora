import React from 'react';
import { Star, MapPin, Clock, ArrowRight, Navigation, Sparkles, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenOrderModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenOrderModal }) => {
  return (
    <section id="visao-geral" className="relative overflow-hidden bg-neutral-950 pt-10 pb-16 lg:py-24 border-b border-neutral-900">
      {/* Subtle gold ambient glow */}
      <div 
        className="pointer-events-none absolute -top-40 right-1/4 w-96 h-96 bg-[#C99B2E]/10 rounded-full blur-3xl" 
        aria-hidden="true"
      />
      <div 
        className="pointer-events-none absolute top-1/2 -left-20 w-80 h-80 bg-[#C99B2E]/5 rounded-full blur-3xl" 
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Brand, Headline, Metadata & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Unboxed Metadata Header (No pills, clean typographic layout) */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium text-neutral-400">
              <span className="text-[#E5C378] font-semibold tracking-wide uppercase">Asa Norte · Brasília</span>
              <span aria-hidden="true" className="text-neutral-700">/</span>
              <span>SHCN 215 Bloco A</span>
              <span aria-hidden="true" className="text-neutral-700">/</span>
              <span className="text-emerald-400">Aberto diariamente até 21:30</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.15] text-balance">
                A tradicional padaria e confeitaria que acolhe a <span className="gold-gradient-text italic font-normal">Asa Norte</span>.
              </h1>
              <p className="text-neutral-300 text-base sm:text-lg leading-relaxed max-w-2xl font-light">
                Pães artesanais quentinhos a toda hora, vitrine repleta de bolos confeitados, tortas finas, salgados dourados e o buffet de café da manhã e almoço mais querido da 215 Norte.
              </p>
            </div>

            {/* Real Google Maps Rating & Social Proof Banner */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 py-4 border-y border-neutral-800/90 text-sm">
              <div className="flex items-center gap-2.5">
                <div className="flex items-center text-[#E5C378]">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i === 4 ? 'fill-[#E5C378]/40 text-[#E5C378]' : 'fill-[#E5C378] text-[#E5C378]'}`}
                    />
                  ))}
                </div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-white font-bold text-base tabular-nums">4,3</span>
                  <span className="text-neutral-400 text-xs">
                    (1.182 avaliações no Google)
                  </span>
                </div>
              </div>

              <span aria-hidden="true" className="hidden sm:inline text-neutral-700">·</span>

              <div className="text-xs text-neutral-300">
                <span className="text-neutral-400">Média:</span>{' '}
                <strong className="text-neutral-100 font-semibold tabular-nums">R$ 20–40</strong> por pessoa
              </div>

              <span aria-hidden="true" className="hidden sm:inline text-neutral-700">·</span>

              <div className="text-xs text-neutral-400">
                Refeição no local · Para viagem · Encomendas
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#especialidades"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-neutral-950 bg-gradient-to-r from-[#E5C378] via-[#C99B2E] to-[#A88124] hover:from-[#F3E5AB] hover:to-[#E5C378] rounded transition-all shadow-md group cursor-pointer"
              >
                <span>Conhecer Especialidades</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#rotas"
                className="inline-flex items-center gap-2 px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-neutral-200 hover:text-white bg-neutral-900 hover:bg-neutral-800/90 border border-neutral-700/80 rounded transition-all"
              >
                <Navigation className="w-4 h-4 text-[#C99B2E]" />
                <span>Como Chegar</span>
              </a>

              <button
                type="button"
                onClick={onOpenOrderModal}
                className="inline-flex items-center gap-2 px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#E5C378] hover:text-white bg-transparent hover:bg-neutral-900 border border-[#C99B2E]/40 hover:border-[#C99B2E] rounded transition-all cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#E5C378]" />
                <span>Encomenda de Bolos</span>
              </button>
            </div>

            {/* Address quick line */}
            <div className="flex items-center gap-2.5 text-xs text-neutral-400 pt-1">
              <MapPin className="w-3.5 h-3.5 text-[#C99B2E] shrink-0" />
              <span>SHCN Quadra 215 Bloco A Lojas 25 e 37 · Asa Norte, Brasília - DF</span>
            </div>

          </div>

          {/* Right Column: Real Business Photo Showcase with Gold Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Gold decorative border backdrop */}
              <div 
                className="absolute -inset-1.5 rounded-lg bg-gradient-to-tr from-[#C99B2E]/40 via-neutral-800/50 to-[#E5C378]/30 blur-sm -z-10" 
                aria-hidden="true" 
              />
              
              <div className="relative rounded-lg overflow-hidden border border-[#C99B2E]/40 bg-neutral-900 shadow-2xl">
                <img
                  src="/assets/aistudio/_4D8DDDFD-B59A-4210-A196-494C6CDABB92__47b7842e.png"
                  alt="Vitrine real de confeitaria da Panificadora Capri com bolos confeitados, tortas e pudins"
                  className="w-full aspect-[4/5] sm:aspect-[4/4] object-cover transition-transform duration-700 hover:scale-105"
                  onError={(e) => {
                    // Fallback to relative public path if needed
                    const target = e.currentTarget;
                    if (!target.src.includes('public')) {
                      target.src = '/public/assets/aistudio/_4D8DDDFD-B59A-4210-A196-494C6CDABB92__47b7842e.png';
                    }
                  }}
                />

                {/* Bottom Overlay Label */}
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent flex items-end justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#E5C378] font-semibold flex items-center gap-1.5">
                      <CheckCircle2 className="w-3 h-3 text-[#E5C378]" />
                      Foto Real da Casa
                    </span>
                    <p className="text-sm font-serif text-white font-medium">Nossa Vitrine de Confeitaria na 215 Norte</p>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-neutral-300 bg-neutral-950/80 px-2.5 py-1 rounded border border-neutral-800 backdrop-blur-sm">
                    <Clock className="w-3 h-3 text-[#C99B2E]" />
                    <span>06h–21h30</span>
                  </div>
                </div>
              </div>

              {/* Floating Real Proof Card */}
              <div className="hidden sm:flex items-center gap-3 absolute -bottom-5 -left-5 bg-neutral-900/95 border border-[#C99B2E]/40 p-3.5 rounded-lg shadow-xl backdrop-blur-md">
                <div className="w-10 h-10 rounded-full bg-[#C99B2E]/20 flex items-center justify-center text-[#E5C378] font-serif font-bold text-lg">
                  C
                </div>
                <div>
                  <p className="text-xs font-semibold text-white">Confeitaria Própria</p>
                  <p className="text-[11px] text-neutral-400">Bolos frescos para encomenda ou fatia</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
