import React, { useState } from 'react';
import { Cake, Coffee, Wheat, UtensilsCrossed, CheckCircle, Sparkles, Phone, ArrowUpRight } from 'lucide-react';

interface ShowcaseSectionProps {
  onOpenOrderModal: () => void;
}

export const ShowcaseSection: React.FC<ShowcaseSectionProps> = ({ onOpenOrderModal }) => {
  const [activeTab, setActiveTab] = useState<'todos' | 'confeitaria' | 'padaria' | 'buffet' | 'cafeteria'>('todos');

  const specialties = [
    {
      id: 'confeitaria',
      title: 'Confeitaria Artesanal & Bolos Confeitados',
      tagline: 'A vitrine mais doce e elogiada da 215 Norte',
      description:
        'Nossa vitrine refrigerada é abastecida diariamente com bolos inteiros confeitados com morangos frescos, ganaches artesanais, fatias de tortas clássicas, pudins de leite condensado dourados e bolos caseiros tradicionais.',
      image: '/assets/aistudio/_4D8DDDFD-B59A-4210-A196-494C6CDABB92__47b7842e.png',
      isRealPhoto: true,
      highlights: [
        'Bolos confeitados para festa e aniversário',
        'Fatias de tortas holandesa, alemã e limão',
        'Pudim de leite condensado artesanal',
        'Bolos caseiros frescos (cenoura com chocolate, fubá)',
      ],
      badge: 'Destaque da Casa',
    },
    {
      id: 'padaria',
      title: 'Padaria Tradicional & Pães Frescos',
      tagline: 'Fornadas quentinhas ao longo de todo o dia',
      description:
        'O clássico pão francês com casca crocante e miolo leve, pães de fermentação lenta natural, baguetes, ciabattas e o legítimo pão de queijo quentinho com queijo curado da Canastra.',
      image: '/src/assets/images/artisan_sourdough_bread_1794398317317.jpg',
      highlights: [
        'Pão francês quentinho saindo do forno a toda hora',
        'Pão de queijo artesanal da Canastra',
        'Baguetes francesas e ciabattas rústicas',
        'Pães especiais de fermentação lenta',
      ],
      badge: 'Fornadas Diárias',
    },
    {
      id: 'buffet',
      title: 'Buffet de Café da Manhã & Almoço',
      tagline: 'Tradição matinal e executiva na Asa Norte',
      description:
        'Pela manhã, um farto café colonial com frios nobres, frutas da estação, pães, bolos e ovos mexidos. Ao meio-dia, buffet de almoço por quilo com grelhados preparados na hora e receitas caseiras de alto padrão.',
      image: '/src/assets/images/buffet_breakfast_spread_1794398319740.jpg',
      highlights: [
        'Buffet de Café Colonial: das 06:30 às 11:30',
        'Almoço executivo por quilo: das 11:30 às 15:00',
        'Saladas selecionadas, carnes e pratos quentes',
        'Custo médio de R$ 20–40 por pessoa',
      ],
      badge: 'Mais Elogiado',
    },
    {
      id: 'cafeteria',
      title: 'Cafeteria, Lanches & Salgados Nobres',
      tagline: 'Ambiente aconchegante para encontros e pausas',
      description:
        'Coxinhas douradas com recheio cremoso e Catupiry legítimo, empadas de palmito, quiches quentinhas e sanduíches feitos na hora, acompanhados de espressos e cappuccinos com grãos selecionados do Cerrado.',
      image: '/src/assets/images/specialty_coffee_latte_1794398319097.jpg',
      highlights: [
        'Coxinha clássica com Catupiry original',
        'Café espresso tirado na máquina italiana',
        'Cappuccinos cremosos e chocolates quentes',
        'Quiches e folhados crocantes',
      ],
      badge: 'Salão & Cafeteria',
    },
  ];

  const filteredSpecialties = activeTab === 'todos'
    ? specialties
    : specialties.filter((s) => s.id === activeTab);

  return (
    <section id="especialidades" className="py-16 lg:py-24 bg-neutral-950 border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#E5C378]">
              O que oferecemos
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-medium">
              Conheça as Especialidades da Capri
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base font-light">
              Uma experiência completa para o seu café da manhã, almoço em família, lanche da tarde ou encomenda especial para celebrações.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onOpenOrderModal}
              className="flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-neutral-950 bg-gradient-to-r from-[#E5C378] to-[#C99B2E] hover:from-[#F3E5AB] hover:to-[#E5C378] rounded transition-all cursor-pointer shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Solicitar Encomenda</span>
            </button>
          </div>
        </div>

        {/* Tab Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none border-b border-neutral-800">
          {[
            { id: 'todos', label: 'Todos os Setores' },
            { id: 'confeitaria', label: 'Confeitaria & Vitrine' },
            { id: 'padaria', label: 'Padaria & Pães' },
            { id: 'buffet', label: 'Buffet & Refeições' },
            { id: 'cafeteria', label: 'Cafeteria & Salgados' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 text-xs font-medium rounded transition-all whitespace-nowrap cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-neutral-800 text-[#E5C378] border border-[#C99B2E]/60 shadow-sm'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Featured Showcase Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {filteredSpecialties.map((spec) => (
            <div
              key={spec.id}
              className="group flex flex-col justify-between bg-neutral-900/60 border border-neutral-800 hover:border-[#C99B2E]/40 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl"
            >
              {/* Media Container */}
              <div className="relative aspect-[16/10] bg-neutral-950 overflow-hidden">
                <img
                  src={spec.image}
                  alt={spec.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.src.includes('public')) {
                      target.src = `/public${target.getAttribute('src')}`;
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />

                {/* Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-[#E5C378] bg-neutral-950/90 px-2.5 py-1 rounded border border-[#C99B2E]/40 uppercase tracking-wider backdrop-blur-sm">
                    {spec.badge}
                  </span>
                  {spec.isRealPhoto && (
                    <span className="text-[10px] font-medium text-emerald-300 bg-neutral-950/90 px-2 py-0.5 rounded border border-emerald-500/40 backdrop-blur-sm">
                      Foto Real da Casa
                    </span>
                  )}
                </div>

                <div className="absolute bottom-3 left-4 right-4">
                  <p className="text-xs text-[#E5C378] font-medium uppercase tracking-wider">{spec.tagline}</p>
                  <h3 className="text-xl font-serif text-white font-medium">{spec.title}</h3>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 space-y-5 flex-1 flex flex-col justify-between">
                <p className="text-sm text-neutral-300 leading-relaxed font-light">
                  {spec.description}
                </p>

                {/* Highlights List */}
                <div className="pt-3 border-t border-neutral-800/80 space-y-2">
                  <p className="text-[11px] uppercase tracking-wider text-neutral-400 font-semibold">
                    Destaques desta área:
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-300">
                    {spec.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-[#C99B2E] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action Link */}
                <div className="pt-4 border-t border-neutral-800 flex items-center justify-between">
                  <span className="text-xs text-neutral-400">
                    Disponível no balcão e salão
                  </span>
                  <button
                    type="button"
                    onClick={onOpenOrderModal}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#E5C378] hover:text-[#F3E5AB] transition-colors cursor-pointer"
                  >
                    <span>Fazer Encomenda</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dedicated "Nossa Vitrine Real" Spotlight Section */}
        <div id="vitrine-real" className="mt-16 pt-16 border-t border-neutral-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-gradient-to-r from-neutral-900/90 to-neutral-900/40 p-6 sm:p-10 rounded-2xl border border-[#C99B2E]/30 shadow-2xl">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#E5C378] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Tradição & Autenticidade
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium leading-snug">
                Nossa Vitrine de Confeitaria na Quadra 215 Norte
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed font-light">
                Cada bolo, pudim e torta expostos na Capri refletem décadas de carinho com a receita artesanal. Sem truques: você chega na loja e encontra nossa vitrine farta e iluminada com produtos frescos do dia.
              </p>
              
              <div className="space-y-2 text-xs text-neutral-400 pt-2">
                <p className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C99B2E]" />
                  <span>Bolos inteiros confeitados prontos para levar no dia</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C99B2E]" />
                  <span>Fatias generosas servidas geladinhas na cafeteria</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C99B2E]" />
                  <span>Encomendas personalizadas com antecedência para aniversários</span>
                </p>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={onOpenOrderModal}
                  className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-neutral-950 bg-gradient-to-r from-[#E5C378] to-[#C99B2E] hover:from-[#F3E5AB] hover:to-[#E5C378] rounded transition-all cursor-pointer shadow-md"
                >
                  Encomendar Bolo Especial
                </button>
                <a
                  href="tel:6135417698"
                  className="px-4 py-2.5 text-xs font-semibold text-neutral-300 hover:text-white bg-neutral-950 border border-neutral-800 rounded transition-colors inline-flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C99B2E]" />
                  (61) 3541-7698
                </a>
              </div>
            </div>

            {/* Real photo prominent frame */}
            <div className="lg:col-span-7">
              <div className="relative rounded-xl overflow-hidden border border-[#C99B2E]/50 shadow-2xl bg-neutral-950">
                <img
                  src="/assets/aistudio/_4D8DDDFD-B59A-4210-A196-494C6CDABB92__47b7842e.png"
                  alt="Foto real da vitrine de bolos confeitados da Panificadora Capri"
                  className="w-full h-auto max-h-[500px] object-cover"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.src.includes('public')) {
                      target.src = '/public/assets/aistudio/_4D8DDDFD-B59A-4210-A196-494C6CDABB92__47b7842e.png';
                    }
                  }}
                />
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-neutral-950/90 via-neutral-950/50 to-transparent flex items-center justify-between text-xs text-neutral-300">
                  <span className="font-medium text-white">Vitrine Capri Panificadora · Asa Norte, Brasília</span>
                  <span className="text-[#E5C378] text-[11px] font-mono">SHCN 215 Bloco A</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
