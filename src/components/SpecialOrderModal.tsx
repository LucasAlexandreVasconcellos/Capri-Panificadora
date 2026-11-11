import React, { useState } from 'react';
import { X, Sparkles, Send } from 'lucide-react';
import { generateSpecialOrderWhatsAppUrl } from '../utils/order';

interface SpecialOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SpecialOrderModal: React.FC<SpecialOrderModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [orderType, setOrderType] = useState('Bolo & Confeitaria Fina');
  const [peopleCount, setPeopleCount] = useState(15);
  const [eventDate, setEventDate] = useState('');
  const [eventTime, setEventTime] = useState('10:00');
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [details, setDetails] = useState('');
  const [formError, setFormError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim()) {
      setFormError('Por favor, informe seu nome.');
      return;
    }
    if (!eventDate) {
      setFormError('Por favor, selecione a data desejada para a encomenda.');
      return;
    }

    setFormError('');

    const url = generateSpecialOrderWhatsAppUrl({
      clientName,
      clientPhone,
      orderType,
      peopleCount,
      eventDate,
      eventTime,
      details,
    });

    window.open(url, '_blank');
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="special-order-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/80 backdrop-blur-sm animate-fade-in"
    >
      <div 
        className="relative w-full max-w-lg bg-neutral-900 border border-[#C99B2E]/40 rounded-lg shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-neutral-800 bg-neutral-950 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Sparkles className="w-5 h-5 text-[#E5C378]" />
            <div>
              <h3 id="special-order-title" className="font-serif text-lg font-semibold text-white">
                Encomenda Especial & Eventos
              </h3>
              <p className="text-xs text-neutral-400">
                Bolos personalizados, coffee breaks e kits para festas
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar formulário de encomenda"
            className="p-1.5 text-neutral-400 hover:text-white rounded hover:bg-neutral-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[80vh] overflow-y-auto">
          {formError && (
            <div className="p-3 text-xs text-red-300 bg-red-950/50 border border-red-800 rounded">
              {formError}
            </div>
          )}

          {/* Type of Order */}
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-neutral-300 block">
              Tipo de Encomenda
            </label>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {[
                'Bolo & Confeitaria Fina',
                'Kit Salgados Finos',
                'Tábua de Frios Imperial',
                'Coffee Break Corporativo',
              ].map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setOrderType(type)}
                  className={`p-2.5 rounded text-left transition-colors border ${
                    orderType === type
                      ? 'bg-neutral-800 text-[#E5C378] border-[#C99B2E]/60 font-semibold'
                      : 'bg-neutral-950 text-neutral-400 border-neutral-800 hover:text-white'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* People Count Slider */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs">
              <span className="text-neutral-300 font-medium">Quantidade Estimada de Pessoas:</span>
              <span className="text-[#E5C378] font-bold tabular-nums">{peopleCount} pessoas</span>
            </div>
            <input
              type="range"
              min={5}
              max={100}
              step={5}
              value={peopleCount}
              onChange={(e) => setPeopleCount(Number(e.target.value))}
              className="w-full accent-[#C99B2E] cursor-pointer"
            />
          </div>

          {/* Date & Time */}
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <label htmlFor="event-date" className="text-xs text-neutral-300 font-medium">
                Data do Evento <span className="text-amber-400">*</span>
              </label>
              <input
                id="event-date"
                type="date"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-neutral-950 border border-neutral-800 focus:border-[#C99B2E] rounded text-white focus:outline-none"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="event-time" className="text-xs text-neutral-300 font-medium">
                Horário Previsto
              </label>
              <input
                id="event-time"
                type="time"
                value={eventTime}
                onChange={(e) => setEventTime(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-neutral-950 border border-neutral-800 focus:border-[#C99B2E] rounded text-white focus:outline-none"
              />
            </div>
          </div>

          {/* Client Name & Phone */}
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <label htmlFor="modal-client-name" className="text-xs text-neutral-300 font-medium">
                Seu Nome <span className="text-amber-400">*</span>
              </label>
              <input
                id="modal-client-name"
                type="text"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                placeholder="Ex: Beatriz Lima"
                className="w-full px-3 py-2 text-xs bg-neutral-950 border border-neutral-800 focus:border-[#C99B2E] rounded text-white placeholder-neutral-500 focus:outline-none"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="modal-client-phone" className="text-xs text-neutral-300 font-medium">
                Telefone / WhatsApp
              </label>
              <input
                id="modal-client-phone"
                type="tel"
                value={clientPhone}
                onChange={(e) => setClientPhone(e.target.value)}
                placeholder="(61) 99999-9999"
                className="w-full px-3 py-2 text-xs bg-neutral-950 border border-neutral-800 focus:border-[#C99B2E] rounded text-white placeholder-neutral-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Details / Special Requests */}
          <div className="space-y-1">
            <label htmlFor="modal-details" className="text-xs text-neutral-300 font-medium">
              Preferências de sabor, tema ou restrições alimentares
            </label>
            <textarea
              id="modal-details"
              rows={3}
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder="Ex: Bolo Red Velvet com frutas vermelhas, salgadinhos sem pimenta, tábua com queijo brie..."
              className="w-full px-3 py-2 text-xs bg-neutral-950 border border-neutral-800 focus:border-[#C99B2E] rounded text-white placeholder-neutral-500 focus:outline-none resize-none"
            />
          </div>

          {/* Submit CTA */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold uppercase tracking-wider text-neutral-950 bg-gradient-to-r from-[#E5C378] via-[#C99B2E] to-[#A88124] hover:from-[#F3E5AB] hover:to-[#E5C378] rounded transition-all cursor-pointer shadow-md"
            >
              <Send className="w-4 h-4" />
              <span>Solicitar Orçamento no WhatsApp</span>
            </button>
            <p className="text-center text-[11px] text-neutral-500 mt-2">
              Nossa equipe de confeitaria responderá com as opções de cardápio e valores.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
