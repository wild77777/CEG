// data.jsx — contenido de YOYAKU (restaurante) y CEGI (instituto)

// ---------- YOYAKU: CARTA ----------
const YOYAKU_CATEGORIES = [
  { id: "rolls",   label: "Sushi Rolls",       jp: "巻き" },
  { id: "nigiri",  label: "Nigiri & Sashimi",  jp: "握り" },
  { id: "dimsum",  label: "Dim Sum & Entradas",jp: "点心" },
  { id: "wok",     label: "Wok & Calientes",   jp: "鍋" },
  { id: "bebidas", label: "Bebidas",           jp: "飲み物" },
];

const YOYAKU_MENU = [
  // Rolls
  { id: "r1", cat: "rolls", name: "Dragon Roll", desc: "Langostino tempura, palta, anguila glaseada y salsa unagi.", price: 12.5, tags: ["popular"] },
  { id: "r2", cat: "rolls", name: "Spicy Tuna Roll", desc: "Atún fresco, mayo picante, cebollín y semillas de ajonjolí.", price: 10.0, tags: ["picante", "popular"] },
  { id: "r3", cat: "rolls", name: "California Especial", desc: "Kanikama, palta, pepino y masago. El clásico de la casa.", price: 8.5, tags: [] },
  { id: "r4", cat: "rolls", name: "Salmón Furai", desc: "Salmón apanado, queso crema, cebollín y topping crocante.", price: 11.0, tags: [] },
  { id: "r5", cat: "rolls", name: "Veggie Garden", desc: "Palta, pepino, espárrago, mango y zanahoria encurtida.", price: 8.0, tags: ["veg"] },
  { id: "r6", cat: "rolls", name: "Volcano Roll", desc: "Roll horneado con mix de mariscos gratinados y salsa picante.", price: 13.0, tags: ["picante"] },

  // Nigiri & Sashimi
  { id: "n1", cat: "nigiri", name: "Nigiri Salmón (2u)", desc: "Corte de salmón sobre arroz avinagrado.", price: 6.0, tags: [] },
  { id: "n2", cat: "nigiri", name: "Nigiri Atún (2u)", desc: "Lomo de atún rojo sobre arroz.", price: 6.5, tags: [] },
  { id: "n3", cat: "nigiri", name: "Sashimi Mixto (9u)", desc: "Selección del chef: salmón, atún y pez blanco.", price: 16.0, tags: ["popular"] },
  { id: "n4", cat: "nigiri", name: "Nigiri Anguila (2u)", desc: "Anguila glaseada con salsa unagi.", price: 7.5, tags: [] },

  // Dim Sum & Entradas
  { id: "d1", cat: "dimsum", name: "Gyozas de Cerdo (5u)", desc: "Empanaditas selladas a la plancha con salsa ponzu.", price: 6.5, tags: ["popular"] },
  { id: "d2", cat: "dimsum", name: "Har Gow (4u)", desc: "Dumplings de langostino al vapor, masa traslúcida.", price: 7.0, tags: [] },
  { id: "d3", cat: "dimsum", name: "Rollitos Primavera (4u)", desc: "Crocantes, rellenos de vegetales y fideo de arroz.", price: 5.5, tags: ["veg"] },
  { id: "d4", cat: "dimsum", name: "Edamame", desc: "Vainas de soya al vapor con sal marina.", price: 4.5, tags: ["veg"] },
  { id: "d5", cat: "dimsum", name: "Bao de Cerdo (2u)", desc: "Pan al vapor relleno de cerdo char siu y pepino.", price: 7.5, tags: ["popular"] },

  // Wok & Calientes
  { id: "w1", cat: "wok", name: "Chaulafán Especial", desc: "Arroz salteado al wok con cerdo, pollo, langostino y huevo.", price: 9.5, tags: ["popular"] },
  { id: "w2", cat: "wok", name: "Pollo Tso", desc: "Pollo crocante en salsa agridulce ligeramente picante.", price: 10.0, tags: ["picante"] },
  { id: "w3", cat: "wok", name: "Tallarín Yakisoba", desc: "Fideo salteado con vegetales y proteína a elección.", price: 9.0, tags: [] },
  { id: "w4", cat: "wok", name: "Langostinos al Tamarindo", desc: "Langostinos salteados en salsa de tamarindo y jengibre.", price: 13.5, tags: [] },

  // Bebidas
  { id: "b1", cat: "bebidas", name: "Té Verde Sencha", desc: "Servido caliente o frío.", price: 2.5, tags: [] },
  { id: "b2", cat: "bebidas", name: "Limonada de Jengibre", desc: "Casera, con un toque de menta.", price: 3.0, tags: [] },
  { id: "b3", cat: "bebidas", name: "Ramune", desc: "Soda japonesa de bolita. Sabores varios.", price: 3.5, tags: [] },
];

// ---------- CEGI: PROGRAMAS ----------
const CEGI_PROGRAMS = [
  {
    id: "p1",
    name: "Cocina Profesional",
    kicker: "Carrera insignia",
    duration: "18 meses",
    modality: "Presencial · Lun a Vie",
    desc: "Formación integral en técnicas de cocina caliente y fría, fondos, salsas madre, emplatado y gestión de cocina profesional.",
    points: ["Técnicas clásicas y contemporáneas", "Prácticas en cocina-laboratorio", "Pasantía en restaurante aliado"],
  },
  {
    id: "p2",
    name: "Cocina Asiática & Sushi",
    kicker: "Especialización",
    duration: "6 meses",
    modality: "Presencial · Sáb intensivo",
    desc: "Inmersión en cocina japonesa y china: corte de pescado, arroz avinagrado, dim sum, wok y montaje de barra de sushi.",
    points: ["Barra de sushi profesional", "Manejo de wok y vaporeras", "Mentoría del equipo YOYAKU"],
  },
  {
    id: "p3",
    name: "Pastelería & Panadería",
    kicker: "Carrera",
    duration: "12 meses",
    modality: "Presencial · Lun a Vie",
    desc: "Del pan de masa madre a la repostería fina: laminados, chocolatería, postres de plato y diseño de tortas.",
    points: ["Laboratorio de panadería", "Chocolatería y confitería", "Diseño de postres de autor"],
  },
  {
    id: "p4",
    name: "Gestión Gastronómica",
    kicker: "Diplomado",
    duration: "8 meses",
    modality: "Híbrido · Nocturno",
    desc: "Costos, escandallos, control de inventarios, marketing y apertura de negocios de alimentos y bebidas.",
    points: ["Ingeniería de menú y costos", "Marketing y redes", "Plan de negocio final"],
  },
];

// ---------- CEGI: CHEFS / PROFESORES ----------
const CEGI_CHEFS = [
  { id: "c1", name: "Chef Mariana Salcedo", role: "Directora Académica", specialty: "Cocina contemporánea ecuatoriana", years: "20 años de trayectoria" },
  { id: "c2", name: "Chef Kenji Tanaka", role: "Líder de Cocina Asiática", specialty: "Sushi y cocina japonesa · Itamae", years: "Barra YOYAKU" },
  { id: "c3", name: "Chef Andrés Pino", role: "Jefe de Pastelería", specialty: "Repostería fina y chocolatería", years: "Le Cordon Bleu, París" },
  { id: "c4", name: "Chef Lucía Vera", role: "Docente de Gestión", specialty: "Costos y administración de A&B", years: "15 años en hotelería" },
];

// ---------- CONTACTO / DATOS ----------
const INFO = {
  whatsapp: "593999999999", // reemplazar por número real
  whatsappPretty: "+593 99 999 9999",
  yoyakuAddress: "Av. Principal 123 y Calle Secundaria, Quito",
  yoyakuHours: [
    { d: "Lunes – Jueves", h: "12:00 – 22:00" },
    { d: "Viernes – Sábado", h: "12:00 – 23:30" },
    { d: "Domingo", h: "13:00 – 21:00" },
  ],
  cegiAddress: "Campus Gastronómico · Av. de la Cultura 456, Quito",
  cegiPhone: "+593 2 222 2222",
  cegiEmail: "admisiones@cegi.edu.ec",
  deposit: 10,
};

Object.assign(window, {
  YOYAKU_CATEGORIES, YOYAKU_MENU,
  CEGI_PROGRAMS, CEGI_CHEFS, INFO,
});
