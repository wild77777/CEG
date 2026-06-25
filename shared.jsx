// shared.jsx — primitivas compartidas entre HUB, YOYAKU y CEGI

const money = (n) => "$" + n.toFixed(2);

// Placeholder de imagen con drag-drop (usa <image-slot>). El usuario arrastra su foto.
function Photo({ id, label, style, shape = "rounded", radius = 0, className }) {
  // Render del custom element. Persiste por id en localStorage del proyecto.
  return React.createElement("image-slot", {
    id,
    shape,
    radius: String(radius),
    placeholder: label || "Arrastra una imagen",
    class: className || "",
    style: { display: "block", width: "100%", height: "100%", ...(style || {}) },
  });
}

// Iconos minimalistas (stroke). Nada de SVG complejo.
const Icon = {
  arrow: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}>
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  cart: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}>
      <path d="M3 4h2l2.4 12.2a1 1 0 0 0 1 .8h8.7a1 1 0 0 0 1-.8L21 8H6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="9" cy="20" r="1.3" /><circle cx="18" cy="20" r="1.3" />
    </svg>
  ),
  whatsapp: (p) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1 0 12 2zm5.8 14.2c-.2.7-1.4 1.3-2 1.4-.5.1-1.2.1-1.9-.1-.4-.1-1-.3-1.7-.6-3-1.3-5-4.4-5.1-4.6-.2-.2-1.3-1.7-1.3-3.2s.8-2.3 1.1-2.6c.3-.3.6-.4.8-.4h.6c.2 0 .4 0 .7.5l.9 2.1c.1.2.1.4 0 .6l-.4.6-.4.4c-.1.1-.3.3-.1.5.1.3.7 1.1 1.4 1.8.9.8 1.7 1.1 2 1.2.2.1.4.1.5-.1l.7-.9c.2-.2.4-.2.6-.1l2 .9c.3.2.5.3.5.4.1.2.1.8-.1 1.5z" />
    </svg>
  ),
  plus: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}>
      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
    </svg>
  ),
  minus: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}>
      <path d="M5 12h14" strokeLinecap="round" />
    </svg>
  ),
  globe: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" strokeLinecap="round" />
    </svg>
  ),
  close: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}>
      <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
    </svg>
  ),
  pin: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}>
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11z" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="2.4" />
    </svg>
  ),
  clock: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}>
      <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  check: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
      <path d="M5 12l4.5 4.5L19 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  spark: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}>
      <path d="M12 3v18M3 12h18M6 6l12 12M18 6L6 18" strokeLinecap="round" />
    </svg>
  ),
};

// Tag de plato (picante / veg / popular)
function MenuTag({ kind }) {
  const map = {
    picante: { label: "Picante", c: "#d8442b" },
    veg: { label: "Veggie", c: "#3f7d3f" },
    popular: { label: "Popular", c: "var(--y-accent)" },
  };
  const m = map[kind];
  if (!m) return null;
  return (
    <span style={{
      fontFamily: "var(--mono)", fontSize: 10, letterSpacing: ".12em",
      textTransform: "uppercase", color: m.c, border: `1px solid ${m.c}`,
      borderRadius: 999, padding: "2px 8px", whiteSpace: "nowrap",
    }}>{m.label}</span>
  );
}

// Logo CEGI oficial (vector HD): olla + "CEGI" + barra roja + descriptor
function CegiLogo({ size = 40, showSub = true, light = false, onClick }) {
  const ink = light ? "#ffffff" : "#15265e";
  const red = "#d11f26";
  const sw = Math.max(2.4, 64 * 0.045);
  return (
    <button className="cegi-logo" onClick={onClick} style={{ background: "none", border: "none", padding: 0, cursor: onClick ? "pointer" : "default", textAlign: "left", display: "flex", alignItems: "center", gap: size * 0.22, whiteSpace: "nowrap" }}>
      {/* olla */}
      <svg viewBox="0 0 64 60" width={size * 1.15} height={size * 1.08} style={{ flexShrink: 0 }} aria-hidden="true">
        <g fill="none" stroke={ink} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
          <rect x="27" y="4" width="10" height="6" rx="3" fill={ink} stroke="none" />
          <path d="M13 25 C16 13 48 13 51 25" />
          <path d="M9 26 H55" />
          <path d="M13 28 L16 50 C16.4 53 18 54.5 21 54.5 H43 C46 54.5 47.6 53 48 50 L51 28" />
          <path d="M13 31 C6.5 31 6.5 41 13 41" />
          <path d="M51 31 C57.5 31 57.5 41 51 41" />
        </g>
      </svg>
      {/* CEGI + tagline */}
      <span style={{ display: "flex", flexDirection: "column", gap: size * 0.04 }}>
        <span style={{ fontFamily: "var(--c-sans)", fontWeight: 800, fontSize: size * 1.18, lineHeight: .92, letterSpacing: "-.01em", color: ink }}>CEGI</span>
        {showSub && <span style={{ fontFamily: "var(--c-sans)", fontSize: Math.max(7, size * 0.2), letterSpacing: ".1em", textTransform: "uppercase", color: light ? "rgba(255,255,255,.72)" : red, fontWeight: 700 }}>¡Orientando profesionales!</span>}
      </span>
      {/* barra roja + descriptor */}
      {showSub && (
        <span style={{ display: "flex", alignItems: "center", gap: size * 0.2 }}>
          <span style={{ width: Math.max(2, size * 0.07), height: size * 1.05, background: red, borderRadius: 2 }} />
          <span style={{ fontFamily: "var(--c-sans)", fontWeight: 700, fontSize: size * 0.31, lineHeight: 1.08, color: ink }}>
            Centro Educativo<br />Gastronómico
          </span>
        </span>
      )}
    </button>
  );
}

Object.assign(window, { money, Photo, Icon, MenuTag, CegiLogo });
