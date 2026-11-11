import React, { useState } from 'react';
import { MapPin, Navigation, Phone, Copy, Check, Clock, Car, Compass, Share2 } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const fullAddress = 'SHCN Quadra 215 Bloco A Lj 25 e 37 - Asa Norte, Brasília - DF, 70874-510';
  const plusCode = '7466+95 Asa Norte, Brasília - DF';
  const googleMapsUrl =
    'https://www.google.com/maps/place/Capri+Panificadora/@-15.7391176,-47.8895645,17z/data=!4m16!1m9!3m8!1s0x935a39842b434683:0x8f41eab48129ede5!2sCapri+Panificadora!8m2!3d-15.7391176!4d-47.8895645!9m1!1b1!16s%2Fg%2F1yg4dj1pv!3m5!1s0x935a39842b434683:0x8f41eab48129ede5!8m2!3d-15.7391176!4d-47.8895645!16s%2Fg%2F1yg4dj1pv';
  const wazeUrl = 'https://waze.com/ul?ll=-15.7391176,-47.8895645&navigate=yes';

  const handleCopy = () => {
    navigator.clipboard.writeText(fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Panificadora Capri - Asa Norte Brasília',
          text: 'Conheça a Capri Panificadora na 215 Norte em Brasília!',
          url: googleMapsUrl,
        });
      } catch {
        // User cancelled or share dismissed
      }
    } else {
      handleCopy();
    }
  };

  return (
    <section id="rotas" className="py-16 lg:py-24 bg-neutral-900/30 border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#E5C378]">
            Localização & Rotas
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-white font-medium">
            Venha nos Visitar na Asa Norte
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base font-light max-w-2xl">
            Localizada na tradicional quadra comercial 215 Norte, com acesso facilitado e vagas disponíveis na entrequadra.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Business Details & Action Buttons */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-lg bg-neutral-900/80 border border-neutral-800 space-y-6">
            
            <div className="space-y-5">
              {/* Address Block */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#E5C378] font-semibold">
                  <MapPin className="w-4 h-4" />
                  <span>Endereço Completo</span>
                </div>
                <p className="text-base text-white font-medium leading-snug">
                  SHCN Quadra 215 Bloco A
                </p>
                <p className="text-sm text-neutral-300">
                  Lojas 25 e 37 - Asa Norte, Brasília - DF
                </p>
                <p className="text-xs text-neutral-400 font-mono tabular-nums">
                  CEP: 70874-510
                </p>
                <p className="text-xs text-neutral-500 font-mono pt-1">
                  Plus Code: <strong className="text-neutral-300 font-normal">{plusCode}</strong>
                </p>
              </div>

              {/* Hours Block */}
              <div className="pt-4 border-t border-neutral-800/80 space-y-1.5">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#E5C378] font-semibold">
                  <Clock className="w-4 h-4" />
                  <span>Funcionamento</span>
                </div>
                <p className="text-sm text-white font-medium">
                  Aberto todos os dias · Fecha às 21:30
                </p>
                <p className="text-xs text-neutral-400">
                  Segunda a Domingo: das 06:00 às 21:30 (Buffet matinal das 06:30 às 11:30)
                </p>
              </div>

              {/* Phone Block */}
              <div className="pt-4 border-t border-neutral-800/80 space-y-1.5">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#E5C378] font-semibold">
                  <Phone className="w-4 h-4" />
                  <span>Telefone para Contato</span>
                </div>
                <a
                  href="tel:6135417698"
                  className="text-lg font-serif font-bold text-[#E5C378] hover:underline"
                >
                  (61) 3541-7698
                </a>
                <p className="text-xs text-neutral-400">
                  Atendimento para encomendas e reservas no salão
                </p>
              </div>

              {/* Conveniences */}
              <div className="pt-4 border-t border-neutral-800/80 space-y-2 text-xs text-neutral-400">
                <div className="flex items-center gap-2">
                  <Car className="w-3.5 h-3.5 text-[#C99B2E]" />
                  <span>Estacionamento público amplo na frente e entrequadra</span>
                </div>
                <div className="flex items-center gap-2">
                  <Compass className="w-3.5 h-3.5 text-[#C99B2E]" />
                  <span>Mesas no ambiente interno refrigerado e varanda arborizada</span>
                </div>
              </div>
            </div>

            {/* Actions Grid */}
            <div className="pt-6 border-t border-neutral-800 space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-3 text-xs font-semibold uppercase tracking-wider text-neutral-950 bg-gradient-to-r from-[#E5C378] to-[#C99B2E] hover:from-[#F3E5AB] hover:to-[#E5C378] rounded transition-all text-center"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Google Maps</span>
                </a>
                <a
                  href={wazeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-3 text-xs font-semibold uppercase tracking-wider text-white bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 rounded transition-all text-center"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#E5C378]" />
                  <span>Waze</span>
                </a>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={handleCopy}
                  className="flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-medium text-neutral-300 hover:text-white bg-neutral-950 hover:bg-neutral-800 border border-neutral-800 rounded transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copiado!' : 'Copiar Endereço'}</span>
                </button>

                <button
                  type="button"
                  onClick={handleShare}
                  className="flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-medium text-neutral-300 hover:text-white bg-neutral-950 hover:bg-neutral-800 border border-neutral-800 rounded transition-colors"
                >
                  <Share2 className="w-3.5 h-3.5 text-[#C99B2E]" />
                  <span>Compartilhar</span>
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Map Representation */}
          <div className="lg:col-span-7 rounded-lg overflow-hidden border border-neutral-800 bg-neutral-950 relative min-h-[400px] flex flex-col">
            
            {/* Real OpenStreetMap / Google coordinates embedded preview */}
            <div className="relative flex-1 w-full min-h-[360px]">
              <iframe
                title="Mapa de localização da Panificadora Capri em Brasília"
                src="https://maps.google.com/maps?q=-15.7391176,-47.8895645&hl=pt-BR&z=16&output=embed"
                className="w-full h-full border-0 filter invert contrast-125 opacity-85"
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              {/* Overlaid Location Card */}
              <div className="absolute top-4 left-4 right-4 sm:right-auto sm:max-w-xs bg-neutral-950/95 border border-[#C99B2E]/40 p-4 rounded-lg shadow-2xl backdrop-blur-md">
                <div className="flex items-start gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#C99B2E]/20 text-[#E5C378] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Capri Panificadora</h4>
                    <p className="text-xs text-neutral-300">SHCN 215 Bloco A · Asa Norte</p>
                    <div className="flex items-center gap-1.5 mt-1 text-[11px] text-[#E5C378]">
                      <span>★ 4,3</span>
                      <span className="text-neutral-400">· 1.182 avaliações</span>
                    </div>
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t border-neutral-800 flex items-center justify-between">
                  <span className="text-[11px] text-emerald-400">Aberto agora</span>
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#E5C378] hover:underline"
                  >
                    Rotas no Maps →
                  </a>
                </div>
              </div>
            </div>

            {/* Map Footer Bar */}
            <div className="p-3 bg-neutral-950 border-t border-neutral-800 flex flex-wrap items-center justify-between gap-3 text-xs text-neutral-400">
              <span>Coordenadas: -15.7391176, -47.8895645</span>
              <span>Referência: Entrequadra 215/216 Norte</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
