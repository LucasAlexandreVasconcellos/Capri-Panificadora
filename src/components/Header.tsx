import React, { useState } from 'react';
import { Menu, X, Phone, CalendarCheck } from 'lucide-react';

interface HeaderProps {
  onOpenOrderModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenOrderModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800/80 transition-all">
      {/* Top Bar 3-Zone Contract: Brand — 4-5 Nav Links — 1 Primary Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6 sm:gap-8">
        
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="group flex items-center text-lg sm:text-xl font-bold tracking-wider text-neutral-100 whitespace-nowrap shrink-0 transition-opacity hover:opacity-90"
        >
          <span className="font-display uppercase tracking-[0.18em] font-semibold text-neutral-100">
            Capri <span className="text-[#C99B2E]">Panificadora</span>
          </span>
        </a>

        {/* Zone 2: 4-5 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-300">
          <a
            href="#visao-geral"
            className="hover:text-[#F3E5AB] transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Visão Geral
          </a>
          <a
            href="#especialidades"
            className="hover:text-[#F3E5AB] transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Especialidades
          </a>
          <a
            href="#vitrine-real"
            className="hover:text-[#F3E5AB] transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Nossa Vitrine
          </a>
          <a
            href="#sobre"
            className="hover:text-[#F3E5AB] transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Nossa Casa
          </a>
          <a
            href="#avaliacoes"
            className="hover:text-[#F3E5AB] transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Avaliações
          </a>
          <a
            href="#rotas"
            className="hover:text-[#F3E5AB] transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Como Chegar
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            type="button"
            onClick={onOpenOrderModal}
            aria-label="Fazer Encomenda Especial ou Reserva"
            className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-2 sm:py-2.5 text-xs font-semibold uppercase tracking-wider text-neutral-950 bg-gradient-to-r from-[#E5C378] to-[#C99B2E] hover:from-[#F3E5AB] hover:to-[#E5C378] rounded transition-all duration-200 shadow-sm whitespace-nowrap shrink-0 cursor-pointer"
          >
            <CalendarCheck className="w-4 h-4 text-neutral-950 shrink-0" />
            <span className="hidden sm:inline">Fazer Encomenda</span>
          </button>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            className="md:hidden p-2 text-neutral-300 hover:text-white rounded hover:bg-neutral-900 border border-neutral-800 transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-neutral-800 bg-neutral-950 px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2 text-sm font-medium text-neutral-300">
            <a
              href="#visao-geral"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded hover:bg-neutral-900 hover:text-[#E5C378] transition-colors"
            >
              Visão Geral
            </a>
            <a
              href="#especialidades"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded hover:bg-neutral-900 hover:text-[#E5C378] transition-colors"
            >
              Conheça as Especialidades
            </a>
            <a
              href="#vitrine-real"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded hover:bg-neutral-900 hover:text-[#E5C378] transition-colors"
            >
              Vitrine de Confeitaria
            </a>
            <a
              href="#sobre"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded hover:bg-neutral-900 hover:text-[#E5C378] transition-colors"
            >
              A Tradição Capri
            </a>
            <a
              href="#avaliacoes"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded hover:bg-neutral-900 hover:text-[#E5C378] transition-colors"
            >
              Avaliações Google (4,3 ★)
            </a>
            <a
              href="#rotas"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded hover:bg-neutral-900 hover:text-[#E5C378] transition-colors"
            >
              Rotas & Localização
            </a>
          </nav>

          <div className="pt-3 border-t border-neutral-800/80 flex flex-col gap-2">
            <a
              href="tel:6135417698"
              className="flex items-center justify-center gap-2 py-2 text-xs text-neutral-300 hover:text-white bg-neutral-900 rounded border border-neutral-800"
            >
              <Phone className="w-3.5 h-3.5 text-[#C99B2E]" />
              Ligar: (61) 3541-7698
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
