import React, { useState } from 'react';
import { Star, ExternalLink, ThumbsUp } from 'lucide-react';
import { REVIEWS_OVERVIEW, REVIEWS_LIST, ReviewItem } from '../data/reviewsData';

export const ReviewsSection: React.FC = () => {
  const [filterRating, setFilterRating] = useState<number | 'all'>('all');

  const filteredReviews = filterRating === 'all'
    ? REVIEWS_LIST
    : REVIEWS_LIST.filter((r) => r.rating === filterRating);

  const googleMapsUrl =
    'https://www.google.com/maps/place/Capri+Panificadora/@-15.7391176,-47.8895645,17z/data=!4m16!1m9!3m8!1s0x935a39842b434683:0x8f41eab48129ede5!2sCapri+Panificadora!8m2!3d-15.7391176!4d-47.8895645!9m1!1b1!16s%2Fg%2F1yg4dj1pv!3m5!1s0x935a39842b434683:0x8f41eab48129ede5!8m2!3d-15.7391176!4d-47.8895645!16s%2Fg%2F1yg4dj1pv';

  return (
    <section id="avaliacoes" className="py-16 lg:py-24 bg-neutral-950 border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#E5C378]">
            Avaliações Verificadas
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-white font-medium">
            A Opinião de Quem Frequenta a Capri
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base font-light max-w-2xl">
            Mais de mil clientes compartilharam sua experiência no Google Maps sobre nossos pães, buffet de café colonial e atendimento.
          </p>
        </div>

        {/* Big Rating Summary Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 rounded-lg bg-neutral-900/60 border border-neutral-800 mb-12">
          
          {/* Overall Score */}
          <div className="lg:col-span-4 flex flex-col justify-center items-center lg:items-start lg:border-r lg:border-neutral-800 lg:pr-8 text-center lg:text-left space-y-3">
            <div className="flex items-baseline gap-2">
              <span className="text-5xl sm:text-6xl font-serif font-bold text-white tabular-nums">
                {REVIEWS_OVERVIEW.averageRating.toFixed(1).replace('.', ',')}
              </span>
              <span className="text-neutral-400 text-sm">/ 5.0</span>
            </div>

            <div className="flex items-center text-[#E5C378]">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${i === 4 ? 'fill-[#E5C378]/40 text-[#E5C378]' : 'fill-[#E5C378] text-[#E5C378]'}`}
                />
              ))}
            </div>

            <p className="text-xs text-neutral-300">
              Baseado em <strong className="text-white font-semibold tabular-nums">{REVIEWS_OVERVIEW.totalReviews.toLocaleString('pt-BR')} avaliações</strong> no Google Maps
            </p>

            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 pt-2 text-xs font-semibold text-[#E5C378] hover:text-[#F3E5AB] transition-colors"
            >
              <span>Ver perfil no Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Star Breakdown */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-2">
            {REVIEWS_OVERVIEW.breakdown.map((b) => (
              <div key={b.stars} className="flex items-center gap-3 text-xs text-neutral-400">
                <span className="w-12 text-right tabular-nums">{b.stars} estrelas</span>
                <div className="flex-1 h-2 bg-neutral-950 rounded-full overflow-hidden border border-neutral-800">
                  <div
                    className="h-full bg-gradient-to-r from-[#C99B2E] to-[#E5C378] rounded-full"
                    style={{ width: `${b.percentage}%` }}
                  />
                </div>
                <span className="w-8 text-right tabular-nums text-neutral-300">{b.percentage}%</span>
              </div>
            ))}
          </div>

          {/* Cost and Services */}
          <div className="lg:col-span-3 flex flex-col justify-center space-y-3 lg:border-l lg:border-neutral-800 lg:pl-8 text-xs text-neutral-300">
            <div>
              <p className="text-neutral-400 font-medium">Faixa de Preço</p>
              <p className="text-lg font-serif font-semibold text-[#E5C378] tabular-nums mt-0.5">
                {REVIEWS_OVERVIEW.priceRange}
              </p>
              <p className="text-[11px] text-neutral-400">
                Informado por {REVIEWS_OVERVIEW.reportedByCount} pessoas
              </p>
            </div>

            <div className="pt-2 border-t border-neutral-800/80">
              <p className="text-neutral-400 font-medium mb-1">Serviços Oferecidos</p>
              <div className="flex flex-col gap-1 text-[11px] text-neutral-300">
                {REVIEWS_OVERVIEW.serviceTags.map((tag) => (
                  <span key={tag} className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C99B2E]" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Filter Buttons */}
        <div className="flex items-center gap-2 mb-6 text-xs">
          <span className="text-neutral-400 mr-2">Filtrar por nota:</span>
          <button
            type="button"
            onClick={() => setFilterRating('all')}
            className={`px-3 py-1.5 rounded transition-colors ${
              filterRating === 'all'
                ? 'bg-neutral-800 text-[#E5C378] border border-[#C99B2E]/40'
                : 'text-neutral-400 hover:text-white bg-neutral-900'
            }`}
          >
            Todas as Avaliações
          </button>
          <button
            type="button"
            onClick={() => setFilterRating(5)}
            className={`px-3 py-1.5 rounded transition-colors ${
              filterRating === 5
                ? 'bg-neutral-800 text-[#E5C378] border border-[#C99B2E]/40'
                : 'text-neutral-400 hover:text-white bg-neutral-900'
            }`}
          >
            5 Estrelas
          </button>
          <button
            type="button"
            onClick={() => setFilterRating(4)}
            className={`px-3 py-1.5 rounded transition-colors ${
              filterRating === 4
                ? 'bg-neutral-800 text-[#E5C378] border border-[#C99B2E]/40'
                : 'text-neutral-400 hover:text-white bg-neutral-900'
            }`}
          >
            4 Estrelas
          </button>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="p-5 rounded-lg bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700 transition-colors flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                
                {/* Author Info & Date */}
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h4 className="text-sm font-semibold text-white">{rev.author}</h4>
                    <p className="text-[11px] text-neutral-400">{rev.badge}</p>
                  </div>
                  <span className="text-[11px] text-neutral-400 tabular-nums">{rev.date}</span>
                </div>

                {/* Stars */}
                <div className="flex items-center text-[#E5C378]">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${i < rev.rating ? 'fill-[#E5C378] text-[#E5C378]' : 'text-neutral-700'}`}
                    />
                  ))}
                </div>

                {/* Comment Text */}
                <p className="text-xs text-neutral-300 leading-relaxed font-light">
                  "{rev.comment}"
                </p>
              </div>

              {/* Review Metadata Footprint */}
              <div className="pt-3 border-t border-neutral-800/80 space-y-1.5 text-[11px] text-neutral-400">
                {rev.serviceType && (
                  <p>
                    <span className="text-neutral-400">Tipo:</span> {rev.serviceType}
                    {rev.spentPerPerson && ` · ${rev.spentPerPerson}`}
                  </p>
                )}
                {rev.favoriteItems && rev.favoriteItems.length > 0 && (
                  <p className="text-neutral-300">
                    <span className="text-neutral-400">Favoritos:</span> {rev.favoriteItems.join(', ')}
                  </p>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
