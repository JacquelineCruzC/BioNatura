// Datos de contacto de Bio Natural.
// IMPORTANTE: estos datos son de ejemplo (inventados). Reemplázalos por los reales.

export const CONTACT = {
  phoneDisplay: "55 1234 5678",
  phoneTel: "tel:+525512345678",
  whatsappDisplay: "55 2345 6789",
  whatsappNumber: "525523456789",
  email: "hola@bionatural.mx",
  addressLine1: "Av. de los Manantiales 123",
  addressLine2: "Col. Centro, C.P. 06000, Ciudad de México",
  addressFull: "Av. de los Manantiales 123, Col. Centro, C.P. 06000, Ciudad de México",
  hoursWeek: "Lunes a sábado · 8:00 a 20:00",
  hoursSunday: "Domingo · 9:00 a 14:00",
  payments: "Efectivo, tarjeta o transferencia",
  lat: 19.4326,
  lon: -99.1332,
};

export const WHATSAPP_URL = `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(
  "Hola Bio Natural, quiero pedir agua purificada.",
)}`;

const bbox = `${CONTACT.lon - 0.01},${CONTACT.lat - 0.005},${CONTACT.lon + 0.01},${CONTACT.lat + 0.005}`;

export const MAP_EMBED_URL = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${CONTACT.lat},${CONTACT.lon}`;

export const MAP_LINK_URL = `https://www.openstreetmap.org/?mlat=${CONTACT.lat}&mlon=${CONTACT.lon}#map=16/${CONTACT.lat}/${CONTACT.lon}`;
