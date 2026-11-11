export interface SpecialOrderRequest {
  clientName: string;
  clientPhone?: string;
  orderType: string;
  peopleCount: number;
  eventDate: string;
  eventTime: string;
  details?: string;
}

export const formatOrderDate = (dateStr: string): string => {
  if (!dateStr) return '';
  const parts = dateStr.split('-');
  if (parts.length === 3) {
    const [year, month, day] = parts;
    return `${day}/${month}/${year}`;
  }
  return dateStr;
};

export const generateSpecialOrderWhatsAppUrl = (
  order: SpecialOrderRequest,
  phone: string = '556135417698'
): string => {
  let message = `*Olá, Panificadora Capri!* 🎂✨\n`;
  message += `Gostaria de solicitar um orçamento para encomenda especial:\n\n`;
  message += `👤 *Nome:* ${order.clientName.trim()}\n`;
  
  if (order.clientPhone?.trim()) {
    message += `📱 *Telefone:* ${order.clientPhone.trim()}\n`;
  }
  message += `🎉 *Tipo de Encomenda:* ${order.orderType}\n`;
  message += `👥 *Quantidade de Pessoas:* ${order.peopleCount} pessoas\n`;
  message += `📅 *Data Desejada:* ${formatOrderDate(order.eventDate)} às ${order.eventTime}\n`;
  
  if (order.details?.trim()) {
    message += `💬 *Detalhes / Preferências:* ${order.details.trim()}\n`;
  }
  message += `\n_Enviado pelo site oficial da Panificadora Capri (SHCN 215 Bloco A - Asa Norte, Brasília)_`;

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};
