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
const SCHEDULE_AM_PM = [
  { label: "Matutino", time: "09:00 – 13:00" },
  { label: "Vespertino", time: "13:30 – 17:30" },
];

const CEGI_PROGRAMS = [
  {
    id: "p1",
    name: "Cocina Profesional",
    title2: "Sous Chef",
    kicker: "Certificación Internacional",
    duration: "18 meses",
    days: "Lunes y Miércoles",
    modality: "Presencial",
    schedule: SCHEDULE_AM_PM,
    stats: { modules: 13, weeks: 88, hours: 696 },
    desc: "Formación integral en cocina profesional: del dominio de las bases y técnicas a la manipulación, conservación y panadería. Sales listo para liderar una cocina.",
    points: ["Bases de cocina", "Técnicas y servicio", "Manipulación y conservación de alimentos", "Panadería y más"],
  },
  {
    id: "p2",
    name: "Pastelería",
    title2: "Pastry Chef",
    kicker: "Certificación Profesional",
    duration: "12 meses",
    days: "Martes y Jueves",
    modality: "Presencial",
    schedule: SCHEDULE_AM_PM,
    stats: { modules: 6, weeks: 24, hours: 192 },
    desc: "Del pan de masa madre a la repostería fina: laminados, chocolatería, postres de plato y diseño de tortas con técnica profesional.",
    points: ["Panadería y bollería", "Repostería fina", "Chocolatería y confitería", "Postres de autor"],
  },
  {
    id: "p3",
    name: "Coctelería & Bartender",
    title2: "Bartender Profesional · A y B",
    kicker: "Certificación Profesional",
    duration: "6 meses",
    days: "Viernes",
    modality: "Presencial",
    schedule: SCHEDULE_AM_PM,
    desc: "Mixología, coctelería clásica y de autor, servicio de bar y manejo profesional de alimentos y bebidas (A y B).",
    points: ["Coctelería clásica y de autor", "Mixología y técnicas de bar", "Servicio y atención A y B", "Montaje y gestión de barra"],
  },
  {
    id: "p4",
    name: "Cursos & Seminarios",
    title2: "Chef de Partie y más",
    kicker: "Formación corta",
    duration: "Variable",
    days: "Horarios flexibles",
    modality: "Presencial",
    schedule: null,
    desc: "Programas cortos y seminarios especializados para potenciar tu perfil: Chef de Partie, técnicas puntuales y tendencias de la industria.",
    points: ["Chef de Partie", "Seminarios especializados", "Técnicas puntuales", "Certificado de participación"],
  },
];

// ---------- CEGI: MALLA CURRICULAR (por programa) ----------
const CEGI_CURRICULUM = {
  p1: {
    program: "Cocina Profesional · Sous Chef",
    note: "Certificación Internacional avalada. 13 módulos progresivos.",
    modules: [
      { n: "01", name: "Bases de cocina", weeks: 6, hours: 48, topics: ["Cortes I y II", "Fondos", "Sopas", "Salsas madres", "Vinagretas y mayonesa", "Mantequilla", "Arroces"] },
      { n: "02", name: "Técnicas de servicio", weeks: 6, hours: 48, topics: ["Servicio y calidad", "Tipos de servicio", "Catación de vinos", "Sangría", "Charoles y platos", "Montaje de mesa", "Barismo", "Sorbetes y smoothies"] },
      { n: "04", name: "Manipulación y conservación de alimentos", weeks: 7, hours: 56, topics: ["Higiene de alimentos", "Contaminación de alimentos", "ETA", "Almacenamiento A y B", "Técnicas de conservación", "Métodos de conservación", "Métodos de congelación"] },
      { n: "05", name: "Panadería", weeks: 8, hours: 64, topics: ["Introducción a la panadería", "Formulaciones", "Panadería ecuatoriana", "Panadería europea"] },
      { n: "06", name: "Bares", weeks: 6, hours: 56, topics: ["Tipos de almíbares", "Toppings", "Licores cremosos", "Licores espirituosos", "Cocteles aperitivos", "Cocteles largos", "Cocteles clásicos", "Bebidas milkshake"] },
      { n: "08", name: "Cocina Fría", weeks: 8, hours: 64, topics: ["Ceviches", "Canapés", "Entradas", "Ensaladas", "Mousses", "Fiambres", "Charcutería"] },
      { n: "09", name: "Emprendimiento Gastronómico", weeks: 6, hours: 48, topics: ["Costos", "Administración A y B", "Ingeniería de menú", "Regulaciones de establecimientos", "Emprendimiento en A y B", "Herramientas de ventas en redes"] },
      { n: "10", name: "Fundamentos de Pastelería I", weeks: 8, hours: 64, topics: ["Tipos de merengues", "Frosting", "Tipos de cremas pasteleras", "Masas quebradas", "Decoración y mangueado", "Tipos de masas", "Cupcakes", "Mini tortas"] },
      { n: "12", name: "Cocina Ecuatoriana", weeks: 8, hours: 64, topics: ["Platos típicos costa", "Platos típicos sierra", "Platos típicos amazónica", "Tipos de bebidas ecuatorianas"] },
      { n: "14", name: "Pastelería II", weeks: 7, hours: 56, topics: ["Pastillaje", "Forrado", "Repostería", "Chocolatería", "Tortas navideñas", "Tortas clásicas"] },
      { n: "15", name: "Nutrición", weeks: 4, hours: 32, topics: ["Tipos de alimentación", "Dietas especiales", "Dietas para bajar de peso", "Dieta infantil", "Formulación de dietas"] },
      { n: "16", name: "Cocina Internacional", weeks: 8, hours: 64, topics: ["Cocina española", "Cocina italiana", "Cocina francesa", "Cocina japonesa", "Cocina americana"] },
      { n: "17", name: "Catering y eventos", weeks: 6, hours: 32, topics: ["Eventos y su clasificación", "Planificación y logística", "Catering", "Desarrollo de eventos de graduación"] },
    ],
  },
  p2: {
    program: "Pastelería · Pastry Chef",
    note: "Certificación Profesional. 6 módulos de 4 semanas (32 h c/u).",
    modules: [
      { n: "I", name: "Panadería I", weeks: 4, hours: 32, topics: ["Introducción a la panadería", "Formulaciones", "Formulación de pan de dulce", "Formulación de pan de sal", "Formulación de pan mixto"] },
      { n: "II", name: "Panadería II", weeks: 4, hours: 32, topics: ["Pan ecuatoriano", "Masas hojaldradas", "Panadería internacional", "Panadería tradicional"] },
      { n: "III", name: "Pastelería I", weeks: 4, hours: 32, topics: ["Introducción a la pastelería", "Tipos de merengues", "Tipos de frosting", "Tipos de cremas pasteleras", "Tipos de masas quebradas", "Decoración y mangueados", "Tipos de masas"] },
      { n: "IV", name: "Pastelería II", weeks: 4, hours: 32, topics: ["Mini tortas", "Pastillajes", "Forrados", "Tortas clásicas", "Tortas de vitrinas", "Tortas espejos", "Tortas temáticas", "Postres", "Pop cakes", "Magnum cakes"] },
      { n: "V", name: "Emprendimiento", weeks: 4, hours: 32, topics: ["Costos", "Administración A y B", "Emprendimiento", "Control de inventario", "Receta estándar", "Ingeniería de menú", "Pastelería innovadora"] },
      { n: "VI", name: "Chocolatería", weeks: 4, hours: 32, topics: ["Bombones", "Bombones rellenos", "Bombones con licor", "Huevos de chocolate", "Confitería", "Mousse de chocolate"] },
    ],
  },
};

// ---------- CEGI: CHEFS / PROFESORES ----------
const CEGI_CHEFS = [
  { id: "c1", name: "Lic. Jesús Zambrano", role: "Director de Carrera · CEO de CEGI", specialty: "Dirección académica y gestión", years: "20 años creando profesionales" },
  { id: "c2", name: "Chef Lady Vargas", role: "Dirigente de Panadería", specialty: "Panadería profesional", years: "15 años de experiencia" },
  { id: "c3", name: "Pastry Chef Viviana Ríos Freire", role: "Pastelería", specialty: "Pastelería fina y repostería", years: "16 años de experiencia" },
  { id: "c4", name: "Fernando Rubira", role: "Mixólogo · Coctelería", specialty: "Mixología y servicio de bar", years: "20 años de experiencia" },
];

// ---------- CEGI: PILARES / METODOLOGÍA ----------
const CEGI_PILLARS = [
  { id: "f1", k: "01", t: "Aprender haciendo", d: "El 80% del tiempo es práctica real en cocina-laboratorio. Cocinas desde el primer día, no desde el segundo año." },
  { id: "f2", k: "02", t: "Chefs en activo", d: "Te forman profesionales que siguen al frente de cocinas y restaurantes. Técnica vigente, no teoría de manual." },
  { id: "f3", k: "03", t: "Grupos pequeños", d: "Máximo 16 estudiantes por estación. Atención cercana, corrección inmediata y tu propio puesto de trabajo." },
  { id: "f4", k: "04", t: "Puente al empleo", d: "Pasantías en restaurantes aliados y bolsa de empleo. Sales con experiencia real y contactos en la industria." },
];

// ---------- CEGI: PROCESO DE ADMISIÓN ----------
const CEGI_PROCESS = [
  { n: "01", t: "Solicita información", d: "Llena el formulario y un asesor te envía el plan de estudios, costos y fechas." },
  { n: "02", t: "Entrevista personal", d: "Conversamos sobre tus metas y resolvemos todas tus dudas, sin compromiso." },
  { n: "03", t: "Reserva tu cupo", d: "Formaliza tu matrícula y asegura tu puesto en la cohorte que elijas." },
  { n: "04", t: "¡Bienvenido a CEGI!", d: "Recibes tu kit de cocina, uniforme y arrancas tu formación." },
];

// ---------- CEGI: TESTIMONIOS ----------
const CEGI_TESTIMONIALS = [
  { id: "t1", quote: "Entré sin saber sostener un cuchillo y salí liderando una cocina. La práctica constante lo cambia todo.", name: "Daniela Aguirre", role: "Egresada · Sous chef en Guayaquil" },
  { id: "t2", quote: "La especialización en sushi me abrió las puertas. Hoy manejo mi propia barra los fines de semana.", name: "Mateo Ordóñez", role: "Egresado · Cocina Asiática" },
  { id: "t3", quote: "Los chefs te exigen como en una cocina real. Esa presión bien guiada me preparó para el mundo profesional.", name: "Valeria Muñoz", role: "Egresada · Pastería & Panadería" },
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
  cegiAddress: "Gabriel José Luque y Francisco Avilés · Guayaquil, Ecuador",
  cegiCity: "Guayaquil · Ecuador",
  cegiPhone: "0985304070",
  cegiPhonePretty: "+593 98 530 4070",
  cegiEmail: "admisiones@cegi.edu.ec",
  cegiMapLink: "https://www.google.com/maps/search/?api=1&query=Gabriel%20Jos%C3%A9%20Luque%20y%20Francisco%20Avil%C3%A9s%2C%20Guayaquil%2C%20Ecuador",
  cegiMapEmbed: "https://maps.google.com/maps?q=Gabriel%20Jos%C3%A9%20Luque%20y%20Francisco%20Avil%C3%A9s%2C%20Guayaquil%2C%20Ecuador&z=16&output=embed",
  deposit: 10,
};

Object.assign(window, {
  YOYAKU_CATEGORIES, YOYAKU_MENU,
  CEGI_PROGRAMS, CEGI_CHEFS, CEGI_CURRICULUM, CEGI_PILLARS, CEGI_PROCESS, CEGI_TESTIMONIALS, INFO,
});
