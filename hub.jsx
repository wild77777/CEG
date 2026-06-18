// hub.jsx — portal de entrada: elige CEGI o YOYAKU
function Hub({ onEnter }) {
  const [hover, setHover] = React.useState(null);
  return (
    <div className={"hub" + (hover ? " hub--" + hover : "")}>
      <div className="hub-top">
        <span className="hub-eyebrow">Ecosistema gastronómico</span>
        <span className="hub-divider" />
        <span className="hub-loc">Quito · Ecuador</span>
      </div>

      <div className="hub-panels">
        {/* CEGI */}
        <button
          className="hub-panel hub-cegi"
          onMouseEnter={() => setHover("cegi")}
          onMouseLeave={() => setHover(null)}
          onClick={() => onEnter("cegi")}
        >
          <div className="hub-bg"><Photo id="hub-cegi" label="FOTO · cocina / estudiantes" /><span className="hub-scrim" /></div>
          <div className="hub-content">
            <span className="hub-tag">El instituto</span>
            <h2 className="hub-name">CEGI</h2>
            <p className="hub-desc">Centro de Estudios Gastronómicos Internacional. Forma tu carrera en la cocina.</p>
            <span className="hub-enter">Entrar al instituto <Icon.arrow width="18" height="18" /></span>
          </div>
        </button>

        {/* YOYAKU */}
        <button
          className="hub-panel hub-yoyaku"
          onMouseEnter={() => setHover("yoyaku")}
          onMouseLeave={() => setHover(null)}
          onClick={() => onEnter("yoyaku")}
        >
          <div className="hub-bg"><Photo id="hub-yoyaku" label="FOTO · sushi / plato" /><span className="hub-scrim dark" /></div>
          <div className="hub-content">
            <span className="hub-tag">El restaurante</span>
            <h2 className="hub-name">YOYAKU <span className="hub-jp">予約</span></h2>
            <p className="hub-desc">Sushi y cocina china de autor. Pide por WhatsApp y disfruta en casa.</p>
            <span className="hub-enter">Ver la carta <Icon.arrow width="18" height="18" /></span>
          </div>
        </button>
      </div>

      <div className="hub-foot">
        <span>© 2026 CEGI &amp; YOYAKU</span>
        <span className="hub-foot-hint">Elige una experiencia para entrar</span>
      </div>
    </div>
  );
}

Object.assign(window, { Hub });
