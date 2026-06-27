// cegi.jsx — Escuela de Gastronomía CEGI
function CegiNav({ onNav, section }) {
  const [open, setOpen] = React.useState(false);
  const links = [["programas", "Programas"], ["metodo", "Por qué CEGI"], ["chefs", "Chefs"], ["ubicacion", "Ubicación"], ["admision", "Admisión"]];
  return (
    <header className="c-nav">
      <CegiLogo size={34} onClick={() => onNav("top")} />
      <nav className="c-links">
        {links.map(([id, label]) => (
          <button key={id} className={"c-link" + (section === id ? " is-active" : "")} onClick={() => onNav(id)}>{label}</button>
        ))}
      </nav>
      <div className="c-nav-right">
        <button className="btn btn-c-accent sm" onClick={() => onNav("admision")}><Icon.whatsapp width="16" height="16" /> Inscríbete</button>
        <button className="c-burger" onClick={() => setOpen(!open)} aria-label="Menú">
          <span /><span /><span />
        </button>
      </div>
      <div className={"c-mobile" + (open ? " is-open" : "")}>
        {links.map(([id, label]) => (
          <button key={id} onClick={() => { onNav(id); setOpen(false); }}>{label}</button>
        ))}
      </div>
    </header>
  );
}

function CegiHero({ onPrograms, onEnroll }) {
  return (
    <section className="c-hero" id="top-c">
      <div className="c-hero-text">
        <p className="c-eyebrow">Centro Educativo Gastronómico · Guayaquil, Ecuador</p>
        <h1 className="c-hero-title">Conviértete en el <em>chef</em> que quieres ser.</h1>
        <p className="c-hero-sub">Una escuela donde la técnica, la disciplina y la creatividad se cocinan juntas. Aprende y emprende junto a nuestros chefs, que guiarán tu pasión por la cocina.</p>
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
        <img src="cegi-cocina.jpeg" alt="Cocina-laboratorio profesional de CEGI" className="c-hero-img" />
        <span className="c-hero-badge">
          <svg className="c-badge-pot" viewBox="0 0 24 24" width="17" height="17" fill="none" aria-hidden="true">
            <g className="c-steam" stroke="var(--c-accent)" strokeWidth="1.5" strokeLinecap="round">
              <path d="M9 5 C9 3.5 10 3.2 10 2" />
              <path d="M12 5 C12 3.3 13 3.2 13 1.8" />
              <path d="M15 5 C15 3.5 16 3.2 16 2" />
            </g>
            <g stroke="var(--c-accent)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none">
              <path d="M5 9 H19" />
              <path d="M6 9 L7 18 C7.1 19.2 8 20 9.2 20 H14.8 C16 20 16.9 19.2 17 18 L18 9" />
              <path d="M5 11 C2.7 11 2.7 15 5 15" />
              <path d="M19 11 C21.3 11 21.3 15 19 15" />
            </g>
          </svg>
          Admisiones abiertas 2026
        </span>
      </div>
    </section>
  );
}

function CegiTrust() {
  const items = ["Pasantías garantizadas", "Cocina-laboratorio profesional", "Bolsa de empleo activa", "Certificación avalada", "Restaurante escuela"];
  return (
    <div className="c-trust">
      <div className="c-trust-track">
        {items.concat(items).map((t, i) => (
          <span key={i} className="c-trust-item"><Icon.check width="15" height="15" /> {t}</span>
        ))}
      </div>
    </div>
  );
}

function CegiCert() {
  return (
    <section className="c-cert">
      <div className="c-cert-inner">
        <div className="c-cert-seal">
          <Icon.globe width="34" height="34" />
          <span className="c-cert-seal-top">World</span>
          <span className="c-cert-seal-bot">Chefs</span>
        </div>
        <div className="c-cert-text">
          <p className="c-eyebrow light">Certificación internacional</p>
          <h2 className="c-h2 light">Avalados por World Chefs</h2>
          <p className="c-cert-lead">Ecuador se incorpora al programa de Certificación Internacional <strong>World Chefs</strong>. Tu formación en CEGI cuenta con un aval reconocido que te abre puertas en cocinas de todo el mundo.</p>
          <div className="c-cert-stats">
            <div><strong>110</strong><span>países</span></div>
            <div><strong>5</strong><span>continentes</span></div>
            <div><strong>Global</strong><span>reconocimiento</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CegiFormat() {
  const stats = [
    { v: "2", u: "días", d: "por semana" },
    { v: "4h", u: "clases", d: "intensivas" },
    { v: "8h", u: "clases", d: "semanales" },
  ];
  return (
    <section className="c-format">
      <div className="c-format-head">
        <p className="c-eyebrow">Formato de estudio</p>
        <h2 className="c-h2">Pensado para tu ritmo</h2>
        <p className="c-section-lead">Horarios compatibles con tu vida. Práctica intensiva concentrada en pocos días, para que avances sin pausar todo lo demás.</p>
      </div>
      <div className="c-format-grid">
        {stats.map((s, i) => (
          <div key={i} className="c-format-item">
            <strong>{s.v}</strong>
            <span className="c-format-u">{s.u}</span>
            <span className="c-format-d">{s.d}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function CegiPillars() {
  return (
    <section className="c-method" id="metodo-c">
      <div className="c-method-head">
        <p className="c-eyebrow">Nuestro método</p>
        <h2 className="c-h2">Por qué estudiar en CEGI</h2>
        <p className="c-method-lead">No formamos espectadores. Formamos cocineros que entran a una cocina profesional y saben exactamente qué hacer.</p>
      </div>
      <div className="c-pillars">
        {CEGI_PILLARS.map((p) => (
          <article key={p.id} className="c-pillar">
            <span className="c-pillar-k">{p.k}</span>
            <h3>{p.t}</h3>
            <p>{p.d}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function CurriculumModal({ programId, onClose, onEnroll }) {
  const open = !!programId;
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [open, onClose]);

  const data = programId ? CEGI_CURRICULUM[programId] : null;
  const prog = programId ? CEGI_PROGRAMS.find((p) => p.id === programId) : null;

  if (!open || !data || !prog) return null;

  return (
    <>
      <div className="c-modal-overlay is-open" onClick={onClose} />
      <div className="c-modal is-open" role="dialog" aria-modal="true">
          <>
            <header className="c-modal-head">
              <div>
                <span className="c-eyebrow">Malla curricular</span>
                <h3>{data.program}</h3>
                <p className="c-modal-note">{data.note}</p>
              </div>
              <button className="c-modal-close" onClick={onClose} aria-label="Cerrar"><Icon.close width="24" height="24" /></button>
            </header>

            <div className="c-modal-stats">
              <div><strong>{prog.stats.modules}</strong><span>módulos</span></div>
              <div><strong>{prog.stats.weeks}</strong><span>semanas</span></div>
              <div><strong>{prog.stats.hours}</strong><span>horas</span></div>
              <div><strong>{prog.duration}</strong><span>de duración</span></div>
            </div>

            <div className="c-modal-body">
              <div className="c-mod-grid">
                {data.modules.map((m) => (
                  <article key={m.n} className="c-mod">
                    <div className="c-mod-top">
                      <span className="c-mod-n">Módulo {m.n}</span>
                      <span className="c-mod-dur">{m.weeks} sem · {m.hours} h</span>
                    </div>
                    <h4 className="c-mod-name">{m.name}</h4>
                    <ul className="c-mod-topics">
                      {m.topics.map((t, i) => <li key={i}>{t}</li>)}
                    </ul>
                  </article>
                ))}
              </div>
            </div>

            <footer className="c-modal-foot">
              <div className="c-modal-foot-text">
                <strong>¿Te gusta este programa?</strong>
                <span>Reserva tu cupo hoy. Cupos limitados por aula.</span>
              </div>
              <button className="btn btn-c-accent" onClick={() => { onClose(); onEnroll(prog.name); }}>
                Inscribirme en {prog.title2 || prog.name} <Icon.arrow width="18" height="18" />
              </button>
            </footer>
          </>
      </div>
    </>
  );
}

function CegiPrograms({ onEnroll }) {
  const [open, setOpen] = React.useState(CEGI_PROGRAMS[0].id);
  const [malla, setMalla] = React.useState(null);
  return (
    <section className="c-section" id="programas-c">
      <div className="c-section-head">
        <p className="c-eyebrow">Oferta académica</p>
        <h2 className="c-h2">Programas y certificaciones</h2>
        <p className="c-section-lead">Certificaciones internacionales y profesionales avaladas por World Chefs. Elige según tu meta, tu tiempo y tu horario.</p>
      </div>
      <div className="c-programs">
        {CEGI_PROGRAMS.map((p) => {
          const isOpen = open === p.id;
          const hasMalla = !!CEGI_CURRICULUM[p.id];
          return (
            <article key={p.id} className={"c-program" + (isOpen ? " is-open" : "")}>
              <button className="c-program-head" onClick={() => setOpen(isOpen ? null : p.id)}>
                <div>
                  <span className="c-program-kicker">{p.kicker}</span>
                  <h3>{p.name}{p.title2 && <span className="c-program-alt"> · {p.title2}</span>}</h3>
                  <p className="c-program-meta">{p.duration} · {p.modality} · {p.days}</p>
                </div>
                <span className={"c-program-toggle" + (isOpen ? " is-open" : "")}><Icon.plus width="20" height="20" /></span>
              </button>
              <div className="c-program-body" style={{ maxHeight: isOpen ? 560 : 0 }}>
                <div className="c-program-inner">
                  <p>{p.desc}</p>
                  {p.stats && (
                    <div className="c-prog-stats">
                      <div><strong>{p.stats.modules}</strong><span>módulos</span></div>
                      <div><strong>{p.stats.weeks}</strong><span>semanas</span></div>
                      <div><strong>{p.stats.hours}</strong><span>horas</span></div>
                    </div>
                  )}
                  <ul>{p.points.map((pt, i) => <li key={i}><Icon.check width="16" height="16" /> {pt}</li>)}</ul>
                  {p.schedule && (
                    <div className="c-program-sched">
                      <span className="c-sched-label"><Icon.clock width="15" height="15" /> Horarios</span>
                      <div className="c-sched-opts">
                        {p.schedule.map((s, i) => (
                          <div key={i} className="c-sched-opt"><strong>{s.label}</strong><span>{s.time}</span></div>
                        ))}
                      </div>
                    </div>
                  )}
                  <div className="c-program-actions">
                    {hasMalla && (
                      <button className="btn btn-c-ghost sm" onClick={() => setMalla(p.id)}>Ver malla curricular</button>
                    )}
                    <button className="btn btn-c-accent sm" onClick={() => onEnroll(p.name)}>Quiero este programa</button>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
      <CurriculumModal programId={malla} onClose={() => setMalla(null)} onEnroll={onEnroll} />
    </section>
  );
}

function CegiChefs() {
  return (
    <section className="c-chefs" id="chefs-c">
      <div className="c-section-head">
        <p className="c-eyebrow light">El equipo</p>
        <h2 className="c-h2 light">Chefs & profesores</h2>
        <p className="c-section-lead light">Aprende de quienes lo viven todos los días en cocinas reales.</p>
      </div>
      <div className="c-chef-grid">
        {CEGI_CHEFS.map((c) => (
          <article key={c.id} className="c-chef">
            <div className="c-chef-photo">
              <img src={"chef-" + c.id + ".webp"} alt={c.name} className="c-chef-img" />
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
        <p className="c-section-lead">Cocinas equipadas como las de un restaurante. Aquí entrenas en condiciones reales.</p>
      </div>
      <div className="c-gallery">
        {slots.map((s) => (
          <div key={s.id} className={"c-gal " + s.span}>
            <img src={"gallery-" + s.id + ".webp"} alt={s.label} className="c-gal-img" />
          </div>
        ))}
      </div>
    </section>
  );
}

function CegiAvales() {
  const avales = [
    { src: "aval-worldchefs.png", name: "World Association of Chefs Societies", short: "WorldChefs" },
    { src: "aval-aega.png", name: "Asociación de Escuelas de Gastronomía de las Américas", short: "AEGA" },
    { src: "aval-ace.png", name: "Asociación de Chefs del Ecuador", short: "ACE" },
  ];
  return (
    <section className="c-avales" id="avales-c">
      <div className="c-section-head center">
        <p className="c-eyebrow">Respaldo internacional</p>
        <h2 className="c-h2">Avalados y afiliados</h2>
        <p className="c-section-lead">Nuestra formación está respaldada por asociaciones gastronómicas reconocidas a nivel nacional e internacional.</p>
      </div>
      <div className="c-avales-row">
        {avales.map((a) => (
          <figure key={a.short} className="c-aval">
            <img src={a.src} alt={a.name} title={a.name} />
          </figure>
        ))}
      </div>
    </section>
  );
}

function CegiTestimonials() {
  return (
    <section className="c-testi">
      <div className="c-section-head center">
        <p className="c-eyebrow">Egresados</p>
        <h2 className="c-h2">Lo que dicen quienes ya pasaron por aquí</h2>
      </div>
      <div className="c-testi-grid">
        {CEGI_TESTIMONIALS.map((t) => (
          <figure key={t.id} className="c-quote">
            <span className="c-quote-mark">“</span>
            <blockquote>{t.quote}</blockquote>
            <figcaption>
              <span className="c-quote-name">{t.name}</span>
              <span className="c-quote-role">{t.role}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function CegiProcess() {
  return (
    <section className="c-process">
      <div className="c-section-head center">
        <p className="c-eyebrow light">Cómo entrar</p>
        <h2 className="c-h2 light">Tu proceso de admisión</h2>
      </div>
      <div className="c-steps">
        {CEGI_PROCESS.map((s, i) => (
          <div key={s.n} className="c-step">
            <span className="c-step-n">{s.n}</span>
            <h4>{s.t}</h4>
            <p>{s.d}</p>
            {i < CEGI_PROCESS.length - 1 && <span className="c-step-line" />}
          </div>
        ))}
      </div>
    </section>
  );
}

function CegiLocation() {
  return (
    <section className="c-loc" id="ubicacion-c">
      <div className="c-loc-grid">
        <div className="c-loc-info">
          <p className="c-eyebrow">Dónde estamos</p>
          <h2 className="c-h2">Visita nuestro campus</h2>
          <p className="c-loc-lead">Te esperamos en Guayaquil. Agenda una visita guiada y conoce las cocinas-laboratorio donde te formarás.</p>
          <ul className="c-loc-list">
            <li><Icon.pin width="20" height="20" /><div><strong>Dirección</strong><span>{INFO.cegiAddress}</span></div></li>
            <li><Icon.clock width="20" height="20" /><div><strong>Atención</strong><span>Lunes a Viernes · 08:00 – 18:00</span></div></li>
            <li><Icon.whatsapp width="20" height="20" /><div><strong>Contacto</strong><a href={`https://wa.me/593985304070`} target="_blank" rel="noopener" className="c-loc-tel">{INFO.cegiPhonePretty}</a></div></li>
          </ul>
          <a className="btn btn-c-accent" href={INFO.cegiMapLink} target="_blank" rel="noopener">
            <Icon.pin width="18" height="18" /> Cómo llegar
          </a>
        </div>
        <div className="c-loc-map">
          <iframe
            title="Ubicación CEGI en Guayaquil"
            src={INFO.cegiMapEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}

function CegiEnroll({ preselect }) {
  const [form, setForm] = React.useState({ name: "", email: "", phone: "", program: CEGI_PROGRAMS[0].name, msg: "" });
  const [sent, setSent] = React.useState(false);
  const [touched, setTouched] = React.useState(false);
  React.useEffect(() => { if (preselect) setForm((f) => ({ ...f, program: preselect })); }, [preselect]);
  const valid = form.name.trim() && /\S+@\S+\.\S+/.test(form.email) && form.phone.trim();
  const submit = (e) => {
    e.preventDefault();
    setTouched(true);
    if (!valid) return;
    let m = `¡Hola CEGI! Quiero información para inscribirme.\n\n`;
    m += `Programa de interés: ${form.program}\n`;
    m += `Nombre: ${form.name}\n`;
    m += `Correo: ${form.email}\n`;
    m += `Teléfono: ${form.phone}`;
    if (form.msg.trim()) m += `\nMensaje: ${form.msg}`;
    window.open(`https://wa.me/593985304070?text=${encodeURIComponent(m)}`, "_blank");
    setSent(true);
  };
  return (
    <section className="c-enroll" id="admision-c">
      <div className="c-enroll-grid">
        <div className="c-enroll-info">
          <p className="c-eyebrow">Admisiones abiertas</p>
          <h2 className="c-h2">Da el primer paso</h2>
          <p className="c-enroll-lead">Déjanos tus datos y un asesor académico te contactará con el plan de estudios, costos y fechas de inicio.</p>
          <ul className="c-enroll-contact">
            <li><Icon.pin width="18" height="18" /> {INFO.cegiAddress}</li>
            <li><Icon.clock width="18" height="18" /> Lun a Vie · 08:00 – 18:00</li>
            <li><Icon.spark width="18" height="18" /> {INFO.cegiEmail}</li>
            <li><Icon.whatsapp width="18" height="18" /> {INFO.cegiPhonePretty}</li>
          </ul>
        </div>
        <div className="c-enroll-card">
          {sent ? (
            <div className="c-sent">
              <div className="c-sent-ic"><Icon.check width="34" height="34" /></div>
              <h3>¡Solicitud enviada!</h3>
              <p>Gracias, {form.name.split(" ")[0]}. Abrimos WhatsApp con tu solicitud sobre <strong>{form.program}</strong>. Si no se abrió, escríbenos al {INFO.cegiPhonePretty}.</p>
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
              <button type="submit" className="btn btn-c-accent full"><Icon.whatsapp width="18" height="18" /> Enviar solicitud por WhatsApp</button>
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
          <CegiLogo size={42} light={true} showSub={false} />
          <p>Centro Educativo Gastronómico · ¡Orientando profesionales!</p>
        </div>
        <div className="c-foot-cols">
          <div><strong>Admisiones</strong><span>{INFO.cegiEmail}</span><span>{INFO.cegiPhonePretty}</span></div>
          <div><strong>Campus</strong><span>{INFO.cegiAddress}</span></div>
          <div><strong>Restaurante escuela</strong><button className="c-foot-link" onClick={onYoyaku}>Visita YOYAKU →</button></div>
        </div>
      </div>
      <div className="c-footer-bottom">
        <span>© 2026 CEGI · Escuela de Gastronomía</span>
        <span>{INFO.cegiCity}</span>
      </div>
    </footer>
  );
}

function Cegi({ onBack, onYoyaku }) {
  const [section, setSection] = React.useState("top");
  const [preselect, setPreselect] = React.useState(null);
  const scrollTo = (id) => {
    if (id === "top") { window.scrollTo({ top: 0, behavior: "smooth" }); return; }
    const el = document.getElementById(id + "-c");
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 68, behavior: "smooth" });
  };
  const onNav = (id) => { setSection(id); scrollTo(id); };
  const goEnroll = (programName) => { if (programName) setPreselect(programName); onNav("admision"); };
  return (
    <div className="cegi">
      <CegiNav section={section} onNav={onNav} />
      <CegiHero onPrograms={() => onNav("programas")} onEnroll={() => goEnroll()} />
      <CegiTrust />
      <CegiCert />
      <CegiFormat />
      <CegiPillars />
      <CegiPrograms onEnroll={goEnroll} />
      <CegiChefs />
      <CegiAvales />
      <CegiTestimonials />
      <CegiGallery />
      <CegiProcess />
      <CegiLocation />
      <CegiEnroll preselect={preselect} />
      <CegiFooter onYoyaku={onYoyaku} />
    </div>
  );
}

Object.assign(window, { Cegi });
