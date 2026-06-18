// yoyaku.jsx — sitio del restaurante (sushi & comida china)
const { useState, useMemo, useEffect, useRef } = React;

function YoyakuNav({ section, onNav, cartCount, onCart, onBack }) {
  return (
    <header className="y-nav">
      <button className="y-brand" onClick={onBack} title="Volver al portal">
        <span className="y-brand-jp">予約</span>
        <span className="y-brand-name">YOYAKU</span>
      </button>
      <nav className="y-links">
        {[["menu", "Carta"], ["info", "Ubicación"], ["pedido", "Cómo pedir"]].map(([id, label]) => (
          <button key={id} className={"y-link" + (section === id ? " is-active" : "")} onClick={() => onNav(id)}>{label}</button>
        ))}
      </nav>
      <button className="y-cart-btn" onClick={onCart}>
        <Icon.cart width="20" height="20" />
        <span>Pedido</span>
        {cartCount > 0 && <span className="y-cart-count">{cartCount}</span>}
      </button>
    </header>
  );
}

function YoyakuHero({ onMenu }) {
  return (
    <section className="y-hero">
      <div className="y-hero-photo">
        <Photo id="yoyaku-hero" label="FOTO · barra de sushi / plato estrella" />
        <div className="y-hero-scrim" />
      </div>
      <div className="y-hero-inner">
        <p className="y-eyebrow">寿司 · 中華料理 — Quito</p>
        <h1 className="y-hero-title">El arte del sushi,<br />la fuerza del wok.</h1>
        <p className="y-hero-sub">Cocina japonesa y china de autor. Ingredientes frescos, cortes precisos y sabor que viaja desde Asia hasta tu mesa.</p>
        <div className="y-hero-cta">
          <button className="btn btn-accent" onClick={onMenu}>Ver la carta <Icon.arrow width="18" height="18" /></button>
          <a className="btn btn-ghost-light" href={"#info-y"}>Horarios y ubicación</a>
        </div>
      </div>
    </section>
  );
}

function MenuItem({ item, qty, onAdd, onRemove }) {
  return (
    <article className="y-item">
      <div className="y-item-head">
        <h3 className="y-item-name">{item.name}</h3>
        <span className="y-item-price">{money(item.price)}</span>
      </div>
      <p className="y-item-desc">{item.desc}</p>
      <div className="y-item-foot">
        <div className="y-item-tags">{item.tags.map((t) => <MenuTag key={t} kind={t} />)}</div>
        {qty > 0 ? (
          <div className="y-stepper">
            <button onClick={() => onRemove(item)} aria-label="Quitar"><Icon.minus width="16" height="16" /></button>
            <span>{qty}</span>
            <button onClick={() => onAdd(item)} aria-label="Agregar"><Icon.plus width="16" height="16" /></button>
          </div>
        ) : (
          <button className="y-add" onClick={() => onAdd(item)}><Icon.plus width="15" height="15" /> Agregar</button>
        )}
      </div>
    </article>
  );
}

function YoyakuMenu({ cart, onAdd, onRemove }) {
  const [cat, setCat] = useState("rolls");
  const [diet, setDiet] = useState("todos");
  const items = useMemo(() => {
    return YOYAKU_MENU.filter((i) => i.cat === cat).filter((i) => {
      if (diet === "todos") return true;
      if (diet === "veg") return i.tags.includes("veg");
      if (diet === "picante") return i.tags.includes("picante");
      if (diet === "popular") return i.tags.includes("popular");
      return true;
    });
  }, [cat, diet]);
  const qtyOf = (id) => cart.find((c) => c.id === id)?.qty || 0;

  return (
    <section className="y-section" id="menu-y">
      <div className="y-section-head">
        <p className="y-eyebrow dark">お品書き · Carta</p>
        <h2 className="y-h2">Nuestra carta</h2>
      </div>
      <div className="y-cats">
        {YOYAKU_CATEGORIES.map((c) => (
          <button key={c.id} className={"y-cat" + (cat === c.id ? " is-active" : "")} onClick={() => setCat(c.id)}>
            <span className="y-cat-jp">{c.jp}</span>
            <span>{c.label}</span>
          </button>
        ))}
      </div>
      <div className="y-diet">
        {[["todos", "Todos"], ["popular", "Populares"], ["veg", "Veggie"], ["picante", "Picante"]].map(([id, label]) => (
          <button key={id} className={"chip" + (diet === id ? " is-active" : "")} onClick={() => setDiet(id)}>{label}</button>
        ))}
      </div>
      <div className="y-grid">
        {items.map((i) => <MenuItem key={i.id} item={i} qty={qtyOf(i.id)} onAdd={onAdd} onRemove={onRemove} />)}
        {items.length === 0 && <p className="y-empty">No hay platos con ese filtro.</p>}
      </div>
    </section>
  );
}

function YoyakuInfo() {
  return (
    <section className="y-info" id="info-y">
      <div className="y-info-grid">
        <div className="y-info-photo">
          <Photo id="yoyaku-local" label="FOTO · fachada / salón del local" />
        </div>
        <div className="y-info-text">
          <p className="y-eyebrow dark">案内 · Visítanos</p>
          <h2 className="y-h2">Ubicación y horarios</h2>
          <div className="y-info-row">
            <Icon.pin width="22" height="22" className="y-info-ic" />
            <div>
              <strong>Dirección</strong>
              <p>{INFO.yoyakuAddress}</p>
            </div>
          </div>
          <div className="y-info-row">
            <Icon.clock width="22" height="22" className="y-info-ic" />
            <div>
              <strong>Horarios</strong>
              <ul className="y-hours">
                {INFO.yoyakuHours.map((h, idx) => (
                  <li key={idx}><span>{h.d}</span><span className="y-hours-dots" /><span>{h.h}</span></li>
                ))}
              </ul>
            </div>
          </div>
          <a className="btn btn-accent" href={`https://wa.me/${INFO.whatsapp}`} target="_blank" rel="noopener">
            <Icon.whatsapp width="18" height="18" /> Escríbenos por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

function YoyakuHowTo() {
  const steps = [
    { n: "01", t: "Arma tu pedido", d: "Elige tus platos de la carta y agrégalos al pedido." },
    { n: "02", t: "Confirma por WhatsApp", d: "Envíanos tu pedido con un toque. Te confirmamos disponibilidad y tiempo." },
    { n: "03", t: "Separa con $10", d: `Aparta tu pedido con $${INFO.deposit} de seña. El resto lo pagas al recibir.` },
    { n: "04", t: "¡A disfrutar!", d: "Recibe tu pedido fresco en la puerta de tu casa." },
  ];
  return (
    <section className="y-howto" id="pedido-y">
      <div className="y-section-head center">
        <p className="y-eyebrow">注文方法</p>
        <h2 className="y-h2 light">Cómo pedir</h2>
        <p className="y-howto-sub">Pedidos por WhatsApp. Separas con ${INFO.deposit} y pagas el resto al recibir.</p>
      </div>
      <div className="y-steps">
        {steps.map((s) => (
          <div key={s.n} className="y-step">
            <span className="y-step-n">{s.n}</span>
            <h4>{s.t}</h4>
            <p>{s.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function CartDrawer({ open, cart, onClose, onAdd, onRemove, onClear }) {
  const [form, setForm] = useState({ name: "", address: "", ref: "" });
  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const deposit = INFO.deposit;
  const rest = Math.max(0, subtotal - deposit);
  const canSend = cart.length > 0 && form.name.trim() && form.address.trim();

  const buildMessage = () => {
    let m = `¡Hola YOYAKU! Quiero hacer un pedido:\n\n`;
    cart.forEach((i) => { m += `• ${i.qty}× ${i.name} — ${money(i.price * i.qty)}\n`; });
    m += `\nSubtotal: ${money(subtotal)}`;
    m += `\nSeña (separar): ${money(deposit)}`;
    m += `\nSaldo al recibir: ${money(rest)}\n`;
    m += `\nNombre: ${form.name}`;
    m += `\nDirección: ${form.address}`;
    if (form.ref.trim()) m += `\nReferencia: ${form.ref}`;
    return encodeURIComponent(m);
  };
  const waLink = `https://wa.me/${INFO.whatsapp}?text=${buildMessage()}`;

  return (
    <>
      <div className={"y-overlay" + (open ? " is-open" : "")} onClick={onClose} />
      <aside className={"y-drawer" + (open ? " is-open" : "")} aria-hidden={!open}>
        <div className="y-drawer-head">
          <h3>Tu pedido</h3>
          <button className="y-icon-btn" onClick={onClose}><Icon.close width="22" height="22" /></button>
        </div>

        {cart.length === 0 ? (
          <div className="y-drawer-empty">
            <Icon.cart width="40" height="40" />
            <p>Tu pedido está vacío.</p>
            <span>Agrega platos de la carta para empezar.</span>
          </div>
        ) : (
          <>
            <div className="y-drawer-items">
              {cart.map((i) => (
                <div key={i.id} className="y-drawer-item">
                  <div>
                    <p className="y-di-name">{i.name}</p>
                    <p className="y-di-price">{money(i.price)} c/u</p>
                  </div>
                  <div className="y-stepper sm">
                    <button onClick={() => onRemove(i)}><Icon.minus width="14" height="14" /></button>
                    <span>{i.qty}</span>
                    <button onClick={() => onAdd(i)}><Icon.plus width="14" height="14" /></button>
                  </div>
                  <span className="y-di-total">{money(i.price * i.qty)}</span>
                </div>
              ))}
            </div>

            <div className="y-drawer-form">
              <label>Nombre<input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Tu nombre" /></label>
              <label>Dirección de entrega<input value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} placeholder="Calle, número, sector" /></label>
              <label>Referencia (opcional)<input value={form.ref} onChange={(e) => setForm({ ...form, ref: e.target.value })} placeholder="Color de casa, piso, etc." /></label>
            </div>

            <div className="y-summary">
              <div className="y-sum-row"><span>Subtotal</span><span>{money(subtotal)}</span></div>
              <div className="y-sum-row hi"><span>Separa con seña</span><span>{money(deposit)}</span></div>
              <div className="y-sum-row"><span>Saldo al recibir</span><span>{money(rest)}</span></div>
              <p className="y-sum-note">Confirma tu pedido por WhatsApp. Apartas con ${INFO.deposit} y pagas el resto contra entrega.</p>
            </div>

            <div className="y-drawer-foot">
              <button className="y-clear" onClick={onClear}>Vaciar</button>
              <a className={"btn btn-accent y-send" + (canSend ? "" : " is-disabled")} href={canSend ? waLink : undefined} target="_blank" rel="noopener"
                 onClick={(e) => { if (!canSend) e.preventDefault(); }}>
                <Icon.whatsapp width="18" height="18" /> Enviar por WhatsApp
              </a>
            </div>
            {!canSend && cart.length > 0 && <p className="y-need">Completa nombre y dirección para enviar.</p>}
          </>
        )}
      </aside>
    </>
  );
}

function YoyakuFooter({ onBack, onCegi }) {
  return (
    <footer className="y-footer">
      <div className="y-footer-top">
        <div>
          <span className="y-brand-jp big">予約</span>
          <p className="y-foot-name">YOYAKU</p>
          <p className="y-foot-tag">Sushi & cocina china · Quito</p>
        </div>
        <div className="y-foot-cols">
          <div><strong>Pedidos</strong><a href={`https://wa.me/${INFO.whatsapp}`} target="_blank" rel="noopener">{INFO.whatsappPretty}</a></div>
          <div><strong>Dirección</strong><span>{INFO.yoyakuAddress}</span></div>
          <div><strong>Instituto</strong><button className="y-foot-link" onClick={onCegi}>Conoce CEGI →</button></div>
        </div>
      </div>
      <div className="y-footer-bottom">
        <span>© 2026 YOYAKU</span>
        <span>Una marca del ecosistema CEGI</span>
      </div>
    </footer>
  );
}

function Yoyaku({ onBack, onCegi }) {
  const [cart, setCart] = useState([]);
  const [drawer, setDrawer] = useState(false);
  const cartCount = cart.reduce((s, i) => s + i.qty, 0);

  const add = (item) => setCart((c) => {
    const ex = c.find((x) => x.id === item.id);
    if (ex) return c.map((x) => x.id === item.id ? { ...x, qty: x.qty + 1 } : x);
    return [...c, { id: item.id, name: item.name, price: item.price, qty: 1 }];
  });
  const remove = (item) => setCart((c) => c.flatMap((x) => x.id === item.id ? (x.qty > 1 ? [{ ...x, qty: x.qty - 1 }] : []) : [x]));
  const clear = () => setCart([]);

  const scrollTo = (id) => {
    const el = document.getElementById(id + "-y");
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 70, behavior: "smooth" });
  };
  const [section, setSection] = useState("menu");
  const onNav = (id) => { setSection(id); scrollTo(id); };

  return (
    <div className="yoyaku">
      <YoyakuNav section={section} onNav={onNav} cartCount={cartCount} onCart={() => setDrawer(true)} onBack={onBack} />
      <YoyakuHero onMenu={() => onNav("menu")} />
      <YoyakuMenu cart={cart} onAdd={add} onRemove={remove} />
      <YoyakuInfo />
      <YoyakuHowTo />
      <YoyakuFooter onBack={onBack} onCegi={onCegi} />
      {cartCount > 0 && (
        <button className="y-fab" onClick={() => setDrawer(true)}>
          <Icon.cart width="20" height="20" /> Ver pedido · {cartCount}
        </button>
      )}
      <CartDrawer open={drawer} cart={cart} onClose={() => setDrawer(false)} onAdd={add} onRemove={remove} onClear={clear} />
    </div>
  );
}

Object.assign(window, { Yoyaku });
