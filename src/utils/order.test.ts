import test from 'node:test';
import assert from 'node:assert/strict';
import { formatOrderDate, generateSpecialOrderWhatsAppUrl } from './order';

test('formatOrderDate formats YYYY-MM-DD to DD/MM/YYYY', () => {
  assert.equal(formatOrderDate('2026-11-20'), '20/11/2026');
  assert.equal(formatOrderDate(''), '');
});

test('generateSpecialOrderWhatsAppUrl creates valid wa.me URL with phone and encoded details', () => {
  const url = generateSpecialOrderWhatsAppUrl({
    clientName: 'Carla Silveira',
    clientPhone: '(61) 98765-4321',
    orderType: 'Bolo de Aniversário & Confeitaria',
    peopleCount: 20,
    eventDate: '2026-12-05',
    eventTime: '15:30',
    details: 'Bolo confeitado com morangos frescos e chocolate',
  });

  assert.ok(url.startsWith('https://wa.me/556135417698'));
  assert.ok(url.includes(encodeURIComponent('Carla Silveira')));
  assert.ok(url.includes(encodeURIComponent('05/12/2026')));
  assert.ok(url.includes(encodeURIComponent('20 pessoas')));
  assert.ok(url.includes(encodeURIComponent('Bolo de Aniversário & Confeitaria')));
});
