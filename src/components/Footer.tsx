import React from 'react';
import { MapPin, Phone, Clock, Star, ExternalLink, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const googleMapsUrl =
    'https://www.google.com/maps/place/Capri+Panificadora/@-15.7391176,-47.8895645,17z/data=!4m16!1m9!3m8!1s0x935a39842b434683:0x8f41eab48129ede5!2sCapri+Panificadora!8m2!3d-15.7391176!4d-47.8895645!9m1!1b1!16s%2Fg%2F1yg4dj1pv!3m5!1s0x935a39842b434683:0x8f41eab48129ede5!8m2!3d-15.7391176!4d-47.8895645!16s%2Fg%2F1yg4dj1pv';

  return (
    <footer className="bg-neutral-950 text-neutral-400 border-t border-neutral-900 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-neutral-900">
          
          {/* Brand & Mission (Col 1) */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#" className="inline-block">
              <span className="font-display uppercase tracking-[0.2em] text-xl font-bold text-white">
                Capri <span className="text-[#C99B2E]">Panificadora</span>
              </span>
            </a>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-sm font-light">
              Tradição em pães artesanais de fermentação natural, confeitaria fina europeia e cafeteria de origem. Seu ponto de encontro diário na Asa Norte, Brasília.
            </p>

            <div className="flex items-center gap-2 pt-1 text-xs text-neutral-300">
              <div className="flex text-[#E5C378]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#E5C378] text-[#E5C378]" />
                ))}
              </div>
              <span>4,3 de avaliação no Google</span>
              <span aria-hidden="true" className="text-neutral-700">·</span>
              <span>1.182 opiniões</span>
            </div>
          </div>

          {/* Quick Links (Col 2) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-white font-semibold">
              Navegação
            </h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>
                <a href="#visao-geral" className="hover:text-[#E5C378] transition-colors">
                  Visão Geral
                </a>
              </li>
              <li>
                <a href="#especialidades" className="hover:text-[#E5C378] transition-colors">
                  Especialidades da Casa
                </a>
              </li>
              <li>
                <a href="#vitrine-real" className="hover:text-[#E5C378] transition-colors">
                  Vitrine de Confeitaria
                </a>
              </li>
              <li>
                <a href="#avaliacoes" className="hover:text-[#E5C378] transition-colors">
                  Avaliações no Google
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-[#E5C378] transition-colors">
                  Nossa História
                </a>
              </li>
              <li>
                <a href="#rotas" className="hover:text-[#E5C378] transition-colors">
                  Como Chegar & Rotas
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Hours (Col 3) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-white font-semibold">
              Atendimento & Endereço
            </h4>
            <div className="space-y-2.5 text-xs text-neutral-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C99B2E] shrink-0 mt-0.5" />
                <span>
                  SHCN Quadra 215 Bloco A Lj 25 e 37 - Asa Norte, Brasília - DF, 70874-510
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#C99B2E] shrink-0" />
                <span>Segunda a Domingo · 06:00 às 21:30</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C99B2E] shrink-0" />
                <a href="tel:6135417698" className="hover:text-[#E5C378] transition-colors text-white font-semibold">
                  (61) 3541-7698
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#E5C378] hover:underline"
              >
                <span>Ver no Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-neutral-500">
          <p>© {new Date().getFullYear()} Panificadora Capri. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1">
            Asa Norte, Brasília - DF · Tradição & Qualidade
          </p>
        </div>

      </div>
    </footer>
  );
};
