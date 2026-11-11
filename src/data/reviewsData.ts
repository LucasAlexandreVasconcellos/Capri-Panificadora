export interface ReviewItem {
  id: string;
  author: string;
  date: string;
  rating: number;
  badge?: string;
  comment: string;
  spentPerPerson?: string;
  serviceType?: string;
  favoriteItems?: string[];
}

export const REVIEWS_OVERVIEW = {
  averageRating: 4.3,
  totalReviews: 1182,
  priceRange: 'R$ 20–40',
  reportedByCount: 49,
  serviceTags: ['Refeição no local', 'Para viagem', 'Encomendas especiais'],
  breakdown: [
    { stars: 5, percentage: 68 },
    { stars: 4, percentage: 19 },
    { stars: 3, percentage: 7 },
    { stars: 2, percentage: 3 },
    { stars: 1, percentage: 3 },
  ],
};

export const REVIEWS_LIST: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Rodrigo M. F.',
    date: 'Há 2 semanas',
    rating: 5,
    badge: 'Local Guide · Brasília',
    comment:
      'Uma das melhores panificadoras da Asa Norte. Os pães de fermentação natural são impecáveis, com casca bem crocante e miolo super leve. O café espresso é tirado com perfeição e o atendimento dos garçons é sempre cordial e ágil.',
    spentPerPerson: 'R$ 20–40',
    serviceType: 'Café da manhã no local',
    favoriteItems: ['Pão Italiano Sourdough', 'Cappuccino Capri', 'Croissant Folhado'],
  },
  {
    id: 'rev-2',
    author: 'Camila Vasconcelos',
    date: 'Há 1 mês',
    rating: 5,
    badge: 'Frequentadora Assídua',
    comment:
      'Ambiente super agradável e charmoso na 215 Norte! Tomo café aqui semanalmente para trabalhar ou bater papo. O buffet de café da manhã é muito completo, com frutas frescas, queijos de qualidade e bolos maravilhosos. Recomendo muito!',
    spentPerPerson: 'R$ 20–40',
    serviceType: 'Refeição no local',
    favoriteItems: ['Buffet de Café Colonial', 'Pão de Queijo Canastra'],
  },
  {
    id: 'rev-3',
    author: 'Marcelo Brandão',
    date: 'Há 3 semanas',
    rating: 4,
    badge: 'Morador da Asa Norte',
    comment:
      'Excelente padaria de bairro com padrão de confeitaria fina. A coxinha com catupiry original é imbatível e a torta de limão é na medida certa, sem ser excessivamente doce. Ótima opção para encomendas de fim de semana.',
    spentPerPerson: 'R$ 20–40',
    serviceType: 'Para viagem',
    favoriteItems: ['Coxinha Dourada', 'Torta de Limão Siciliano'],
  },
  {
    id: 'rev-4',
    author: 'Ana Paula Guimarães',
    date: 'Há 2 meses',
    rating: 5,
    badge: 'Local Guide Nível 7',
    comment:
      'Encomendei um kit de aniversário com salgados finos e tábua de frios para uma reunião corporativa em Brasília e foi um sucesso total. Entrega pontual, tudo muito fresco e embalado com extrema elegância.',
    spentPerPerson: 'R$ 40+',
    serviceType: 'Encomenda',
    favoriteItems: ['Tábua Capri Imperial', 'Salgadinhos Finos'],
  },
  {
    id: 'rev-5',
    author: 'Eduardo Silveira',
    date: 'Há 3 semanas',
    rating: 4,
    badge: 'Cliente Frequente',
    comment:
      'Pão quente saindo a toda hora e estacionamento fácil na entrequadra da 215 Norte. O preço é muito justo para a qualidade entregue no plano piloto.',
    spentPerPerson: 'R$ 20–40',
    serviceType: 'Refeição no local',
    favoriteItems: ['Baguete Francesa', 'Espresso Duplo'],
  },
];
