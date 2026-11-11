import React from 'react';
import { Clock, MapPin, DollarSign, Phone } from 'lucide-react';

export const QuickInfoBar: React.FC = () => {
  return (
    <div className="w-full bg-neutral-900/60 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          
          {/* Card 1: Horário */}
          <div className="flex items-start gap-3 p-3 rounded bg-neutral-950/40 border border-neutral-800/60">
            <div className="p-2 rounded bg-[#C99B2E]/10 text-[#E5C378] shrink-0 mt-0.5">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wider text-neutral-400 font-medium">Horário de Funcionamento</p>
              <p className="text-sm font-semibold text-white">Aberto até 21:30</p>
              <p className="text-xs text-neutral-400">Segunda a Domingo · 06h às 21h30</p>
            </div>
          </div>

          {/* Card 2: Localização */}
          <div className="flex items-start gap-3 p-3 rounded bg-neutral-950/40 border border-neutral-800/60">
            <div className="p-2 rounded bg-[#C99B2E]/10 text-[#E5C378] shrink-0 mt-0.5">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wider text-neutral-400 font-medium">Endereço em Brasília</p>
              <p className="text-sm font-semibold text-white">SHCN 215 Bloco A</p>
              <p className="text-xs text-neutral-400 truncate max-w-[200px]" title="Lojas 25 e 37 - Asa Norte">
                Lojas 25 e 37 · Asa Norte
              </p>
            </div>
          </div>

          {/* Card 3: Faixa de Preço */}
          <div className="flex items-start gap-3 p-3 rounded bg-neutral-950/40 border border-neutral-800/60">
            <div className="p-2 rounded bg-[#C99B2E]/10 text-[#E5C378] shrink-0 mt-0.5">
              <DollarSign className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wider text-neutral-400 font-medium">Faixa de Preço Média</p>
              <p className="text-sm font-semibold text-white tabular-nums">R$ 20–40 por pessoa</p>
              <p className="text-xs text-neutral-400">Excelente custo-benefício</p>
            </div>
          </div>

          {/* Card 4: Contato */}
          <div className="flex items-start gap-3 p-3 rounded bg-neutral-950/40 border border-neutral-800/60">
            <div className="p-2 rounded bg-[#C99B2E]/10 text-[#E5C378] shrink-0 mt-0.5">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wider text-neutral-400 font-medium">Atendimento & Encomendas</p>
              <a
                href="tel:6135417698"
                className="text-sm font-semibold text-[#E5C378] hover:underline"
              >
                (61) 3541-7698
              </a>
              <p className="text-xs text-neutral-400">Balcão e WhatsApp</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
