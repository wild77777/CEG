// cegi.jsx — sitio del instituto de gastronomía
function CegiNav({ onNav, onBack, section }) {
  return (
    <header className="c-nav">
      <button className="c-brand" onClick={onBack} title="Volver al portal">
        <span className="c-brand-mark">CEGI</span>
        <span className="c-brand-sub">Instituto de Gastronomía</span>
      </button>
      <nav className="c-links">
        {[["programas", "Programas"], ["chefs", "Chefs"], ["campus", "Campus"], ["inscripcion", "Inscripción"]].map(([id, label]) => (
          <button key={id} className={"c-link" + (section === id ? " is-active" : "")} onClick={() => onNav(id)}>{label}</button>
        ))}
      </nav>
      <button className="btn btn-c-accent sm" onClick={() => onNav("inscripcion")}>Inscríbete</button>
    </header>
  );
}

function CegiHero({ onPrograms, onEnroll }) {
  return (
    <section className="c-hero">
      <div className="c-hero-text">
        <p className="c-eyebrow">Centro de Estudios Gastronómicos Internacional</p>
        <h1 className="c-hero-title">Forma tu carrera en la <em>cocina</em> que amas.</h1>
        <p className="c-hero-sub">Un instituto donde la técnica, la disciplina y la creatividad se cocinan juntas. De la cocina profesional al sushi de autor — aprende haciendo, junto a chefs en activo.</p>
        <div className="c-hero-cta">
          <button className="btn btn-c-accent" onClick={onPrograms}>Ver programas <Icon.arrow width="18" height="18" /></button>
          <button className="btn btn-c-ghost" onClick={onEnroll}>Solicitar información</button>
        </div>
        <div className="c-hero-stats">
          <div><strong>+20</strong><span>años formando chefs</span></div>
          <div><strong>4</strong><span>programas</span></div>
          <div><strong>100%</strong><span>cocina-laboratorio</span></div>
        </div>
      </div>
      <div className="c-hero-photo">
        <Photo id="cegi-hero" label="FOTO · estudiantes en cocina-laboratorio" />
      </div>
    </section>
  );
}

function CegiPrograms({ onEnroll }) {
  const [open, setOpen] = React.useState(null);
  return (
    <section className="c-section" id="programas-c">
      <div className="c-section-head">
        <p className="c-eyebrow">Oferta académica</p>
        <h2 className="c-h2">Programas & cursos</h2>
      </div>
      <div className="c-programs">
        {CEGI_PROGRAMS.map((p) => {
          const isOpen = open === p.id;
          return (
            <article key={p.id} className={"c-program" + (isOpen ? " is-open" : "")}>
              <button className="c-program-head" onClick={() => setOpen(isOpen ? null : p.id)}>
                <div>
                  <span className="c-program-kicker">{p.kicker}</span>
                  <h3>{p.name}</h3>
                  <p className="c-program-meta">{p.duration} · {p.modality}</p>
                </div>
                <span className={"c-program-toggle" + (isOpen ? " is-open" : "")}><Icon.plus width="20" height="20" /></span>
              </button>
              <div className="c-program-body" style={{ maxHeight: isOpen ? 320 : 0 }}>
                <div className="c-program-inner">
                  <p>{p.desc}</p>
                  <ul>{p.points.map((pt, i) => <li key={i}><Icon.check width="16" height="16" /> {pt}</li>)}</ul>
                  <button className="btn btn-c-accent sm" onClick={onEnroll}>Quiero este programa</button>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function CegiChefs() {
  return (
    <section className="c-chefs" id="chefs-c">
      <div className="c-section-head">
        <p className="c-eyebrow light">El equipo</p>
        <h2 className="c-h2 light">Chefs & profesores</h2>
      </div>
      <div className="c-chef-grid">
        {CEGI_CHEFS.map((c) => (
          <article key={c.id} className="c-chef">
            <div className="c-chef-photo">
              <Photo id={"chef-" + c.id} label="RETRATO" />
            </div>
            <h3>{c.name}</h3>
            <p className="c-chef-role">{c.role}</p>
            <p className="c-chef-spec">{c.specialty}</p>
            <span className="c-chef-years">{c.years}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

function CegiGallery() {
  const slots = [
    { id: "g1", label: "Cocina-laboratorio", span: "tall" },
    { id: "g2", label: "Clase de pastelería", span: "" },
    { id: "g3", label: "Barra de sushi", span: "" },
    { id: "g4", label: "Emplatado final", span: "wide" },
    { id: "g5", label: "Estudiantes en práctica", span: "" },
  ];
  return (
    <section className="c-section" id="campus-c">
      <div className="c-section-head">
        <p className="c-eyebrow">Nuestro espacio</p>
        <h2 className="c-h2">El campus</h2>
      </div>
      <div className="c-gallery">
        {slots.map((s) => (
          <div key={s.id} className={"c-gal " + s.span}>
            <Photo id={"cegi-" + s.id} label={"FOTO · " + s.label} />
          </div>
        ))}
      </div>
    </section>
  );
}

function CegiEnroll() {
  const [form, setForm] = React.useState({ name: "", email: "", phone: "", program: CEGI_PROGRAMS[0].name, msg: "" });
  const [sent, setSent] = React.useState(false);
  const [touched, setTouched] = React.useState(false);
  const valid = form.name.trim() && /\S+@\S+\.\S+/.test(form.email) && form.phone.trim();
  const submit = (e) => {
    e.preventDefault();
    setTouched(true);
    if (valid) setSent(true);
  };
  return (
    <section className="c-enroll" id="inscripcion-c">
      <div className="c-enroll-grid">
        <div className="c-enroll-info">
          <p className="c-eyebrow">Admisiones abiertas</p>
          <h2 className="c-h2">Inscríbete</h2>
          <p className="c-enroll-lead">Déjanos tus datos y un asesor académico te contactará con el plan de estudios, costos y fechas de inicio.</p>
          <ul className="c-enroll-contact">
            <li><Icon.pin width="18" height="18" /> {INFO.cegiAddress}</li>
            <li><Icon.clock width="18" height="18" /> Lun a Vie · 08:00 – 18:00</li>
            <li><Icon.spark width="18" height="18" /> {INFO.cegiEmail}</li>
            <li><Icon.whatsapp width="18" height="18" /> {INFO.cegiPhone}</li>
          </ul>
        </div>
        <div className="c-enroll-card">
          {sent ? (
            <div className="c-sent">
              <div className="c-sent-ic"><Icon.check width="34" height="34" /></div>
              <h3>¡Solicitud enviada!</h3>
              <p>Gracias, {form.name.split(" ")[0]}. Un asesor de CEGI te contactará pronto sobre <strong>{form.program}</strong>.</p>
              <button className="btn btn-c-ghost sm" onClick={() => { setSent(false); setForm({ name: "", email: "", phone: "", program: CEGI_PROGRAMS[0].name, msg: "" }); setTouched(false); }}>Enviar otra</button>
            </div>
          ) : (
            <form onSubmit={submit} noValidate>
              <h3>Solicita información</h3>
              <label className={touched && !form.name.trim() ? "err" : ""}>Nombre completo
                <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Nombre y apellido" />
              </label>
              <div className="c-form-row">
                <label className={touched && !/\S+@\S+\.\S+/.test(form.email) ? "err" : ""}>Correo
                  <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="tu@correo.com" />
                </label>
                <label className={touched && !form.phone.trim() ? "err" : ""}>Teléfono
                  <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="09 9999 9999" />
                </label>
              </div>
              <label>Programa de interés
                <select value={form.program} onChange={(e) => setForm({ ...form, program: e.target.value })}>
                  {CEGI_PROGRAMS.map((p) => <option key={p.id}>{p.name}</option>)}
                </select>
              </label>
              <label>Mensaje (opcional)
                <textarea rows="3" value={form.msg} onChange={(e) => setForm({ ...form, msg: e.target.value })} placeholder="Cuéntanos sobre ti..." />
              </label>
              <button type="submit" className="btn btn-c-accent full">Enviar solicitud</button>
              {touched && !valid && <p className="c-form-err">Completa nombre, correo válido y teléfono.</p>}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function CegiFooter({ onYoyaku }) {
  return (
    <footer className="c-footer">
      <div className="c-footer-top">
        <div className="c-foot-brand">
          <span className="c-brand-mark big">CEGI</span>
          <p>Centro de Estudios Gastronómicos Internacional</p>
        </div>
        <div className="c-foot-cols">
          <div><strong>Admisiones</strong><span>{INFO.cegiEmail}</span><span>{INFO.cegiPhone}</span></div>
          <div><strong>Campus</strong><span>{INFO.cegiAddress}</span></div>
          <div><strong>Restaurante escuela</strong><button className="c-foot-link" onClick={onYoyaku}>Visita YOYAKU →</button></div>
        </div>
      </div>
      <div className="c-footer-bottom">
        <span>© 2026 CEGI · Instituto de Gastronomía</span>
        <span>Quito · Ecuador</span>
      </div>
    </footer>
  );
}

function Cegi({ onBack, onYoyaku }) {
  const [section, setSection] = React.useState("programas");
  const scrollTo = (id) => {
    const el = document.getElementById(id + "-c");
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 68, behavior: "smooth" });
  };
  const onNav = (id) => { setSection(id); scrollTo(id); };
  return (
    <div className="cegi">
      <CegiNav section={section} onNav={onNav} onBack={onBack} />
      <CegiHero onPrograms={() => onNav("programas")} onEnroll={() => onNav("inscripcion")} />
      <CegiPrograms onEnroll={() => onNav("inscripcion")} />
      <CegiChefs />
      <CegiGallery />
      <CegiEnroll />
      <CegiFooter onYoyaku={onYoyaku} />
    </div>
  );
}

Object.assign(window, { Cegi });
