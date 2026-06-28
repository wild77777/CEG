// app.jsx — raíz: enrutado entre portal / yoyaku / cegi + Tweaks
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "yoyakuTheme": "sumi",
  "cegiAccent": "#1f9d55"
}/*EDITMODE-END*/;

const YOYAKU_THEMES = [
  { id: "sumi", label: "Sumi · minimal" },
  { id: "kuro", label: "Kuro · premium" },
  { id: "beni", label: "Beni · tradición" },
];

const CEGI_ACCENTS = ["#1f9d55", "#0f7a3d", "#127c6b", "#222a25"];

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [route, setRoute] = React.useState("cegi");

  React.useEffect(() => { window.scrollTo(0, 0); }, [route]);

  return (
    <div className="stage" data-ytheme={t.yoyakuTheme} style={{ "--c-accent": t.cegiAccent }}>
      {route === "hub" && <Hub onEnter={setRoute} />}
      {route === "yoyaku" && <Yoyaku onBack={() => setRoute("hub")} onCegi={() => setRoute("cegi")} />}
      {route === "cegi" && <Cegi onBack={() => setRoute("hub")} onYoyaku={() => setRoute("yoyaku")} />}

      <TweaksPanel>
        <TweakSection label="Portal" />
        <TweakRadio label="Ver sección" value={route}
          options={["hub", "yoyaku", "cegi"]}
          onChange={(v) => setRoute(v)} />

        <TweakSection label="YOYAKU · vibra" />
        <TweakSelect label="Estilo del restaurante" value={t.yoyakuTheme}
          options={YOYAKU_THEMES.map((y) => y.id)}
          onChange={(v) => setTweak("yoyakuTheme", v)} />

        <TweakSection label="CEGI · color" />
        <TweakColor label="Acento del instituto" value={t.cegiAccent}
          options={CEGI_ACCENTS}
          onChange={(v) => setTweak("cegiAccent", v)} />
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
