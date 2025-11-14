import { useEffect, useMemo, useState } from "react";
import PillToggle from "../ui/PillToggle";
import { api } from "../api/client";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Sparkles, Zap, AlertCircle, CheckCircle2, Info } from "lucide-react";

const Card = ({ title, subtitle, children, gradient = false }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    className={`rounded-2xl border p-6 shadow-lg ${
      gradient
        ? "bg-gradient-to-br from-white to-indigo-50/30 border-indigo-200"
        : "bg-white border-slate-200"
    }`}
  >
    <div className="flex items-start justify-between mb-4">
      <div className="flex items-center gap-2">
        <div className="text-lg font-semibold text-slate-900">{title}</div>
        {subtitle ? (
          <div className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded-full">
            {subtitle}
          </div>
        ) : null}
      </div>
    </div>
    <div className="grid gap-4">{children}</div>
  </motion.div>
);

const Field = ({ label, children, hint }) => (
  <div className="rounded-xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-4 hover:shadow-md transition-shadow">
    <div className="text-sm font-medium text-slate-700 mb-2">{label}</div>
    {children}
    {hint ? (
      <div className="text-[11px] text-slate-500 mt-2 flex items-start gap-1">
        <Info size={12} className="mt-0.5 flex-shrink-0" />
        <span>{hint}</span>
      </div>
    ) : null}
  </div>
);

const SubField = ({ label, children }) => (
  <div className="rounded-xl border border-slate-200 bg-white px-3 py-2">
    <div className="text-xs font-medium text-slate-600 mb-1">{label}</div>
    {children}
  </div>
);

const Chip = ({ children, tone = "slate" }) => (
  <span
    className={`inline-flex items-center rounded-full px-2 py-1 text-[11px] font-medium border
      ${
        tone === "violet"
          ? "bg-violet-50 text-violet-700 border-violet-200"
          : tone === "amber"
          ? "bg-amber-50 text-amber-800 border-amber-200"
          : tone === "rose"
          ? "bg-rose-50 text-rose-800 border-rose-200"
          : "bg-slate-50 text-slate-700 border-slate-200"
      }`}
  >
    {children}
  </span>
);

export default function ExpertDemo() {
  const [alcohol, setAlcohol] = useState("no");
  const [hielo, setHielo] = useState("no");
  const [sabor, setSabor] = useState("acido");

  const [azucar, setAzucar] = useState("no");
  const [bitter, setBitter] = useState("no");
  const [vermutSeco, setVermutSeco] = useState("no");
  const [absenta, setAbsenta] = useState("no");

  const [burbujeante, setBurbujeante] = useState("no");
  const [gingerBeer, setGingerBeer] = useState("no");
  const [tonica, setTonica] = useState("no");
  const [soda, setSoda] = useState("no");
  const [espumante, setEspumante] = useState("no");
  const [pomelo, setPomelo] = useState("no");
  const [prosecco, setProsecco] = useState("no");


  const [base, setBase] = useState("gin");
  const [citrico, setCitrico] = useState("no");

  const [pina, setPina] = useState("no");
  const [coco, setCoco] = useState("no");
  const [maracuya, setMaracuya] = useState("no");
  const [mango, setMango] = useState("no");
  const [arandano, setArandano] = useState("no");
  const [orgeat, setOrgeat] = useState("no");
  const [frutaMentaPepino, setFrutaMentaPepino] = useState("no");

  const [bitterRojo, setBitterRojo] = useState("no");
  const [vermutRojo, setVermutRojo] = useState("no");
  const [aperol, setAperol] = useState("no");

  const [lacteo, setLacteo] = useState("no");
  const [cafe, setCafe] = useState("no");

  useEffect(() => {
    if (burbujeante !== "si") {
      setGingerBeer("no");
      setTonica("no");
      setSoda("no");
      setEspumante("no");
      setPomelo("no");
      setProsecco("no");
    }
  }, [burbujeante]);

  useEffect(() => {
    if (sabor !== "acido") {
      setBase("gin");
      setCitrico("no");
    }
    if (sabor !== "dulce") {
      setPina("no");
      setCoco("no");
      setMaracuya("no");
      setMango("no");
      setArandano("no");
      setOrgeat("no");
      setFrutaMentaPepino("no");
    }
    if (sabor !== "amargo") {
      setBitterRojo("no");
      setVermutRojo("no");
      setAperol("no");
    }
    if (sabor !== "seco") {
      setAbsenta("no");
    }
    if (sabor !== "cremoso") {
      setLacteo("no");
      setCafe("no");
    }
  }, [sabor]);

  const facts = useMemo(() => {
    const f = [];
    f.push({ feature: "pref_alcohol", value: alcohol });
    f.push({ feature: "disp_hielo", value: hielo });
    f.push({ feature: "sabor_pref", value: sabor });

    if (sabor === "acido") {
      f.push({ feature: "base", value: base });
      f.push({ feature: "disp_citrico", value: citrico });
    }

    if (sabor === "dulce") {
      if (pina === "si") f.push({ feature: "disp_piña", value: "si" });
      if (coco === "si") f.push({ feature: "disp_coco", value: "si" });
      if (maracuya === "si") f.push({ feature: "disp_maracuya", value: "si" });
      if (mango === "si") f.push({ feature: "disp_mango", value: "si" });
      if (arandano === "si") f.push({ feature: "disp_arandano", value: "si" });
      if (orgeat === "si") f.push({ feature: "disp_orgeat", value: "si" });
      if (frutaMentaPepino === "si")
        f.push({ feature: "disp_fruta_menta_pepino", value: "si" });
    }

    if (sabor === "amargo") {
      if (bitterRojo === "si")
        f.push({ feature: "disp_bitter_rojo", value: "si" });
      if (vermutRojo === "si")
        f.push({ feature: "disp_vermut_rojo", value: "si" });
      if (aperol === "si") f.push({ feature: "disp_aperol", value: "si" });
    }

    if (sabor === "seco") {
      if (absenta === "si") f.push({ feature: "disp_absenta", value: "si" });
      if (vermutSeco !== "no")
        f.push({ feature: "disp_vermut_seco", value: vermutSeco });
      if (bitter !== "no") f.push({ feature: "disp_bitter", value: bitter });
    } else {
      if (vermutSeco !== "no")
        f.push({ feature: "disp_vermut_seco", value: vermutSeco });
      if (bitter !== "no") f.push({ feature: "disp_bitter", value: bitter });
    }

    if (azucar !== "no") f.push({ feature: "disp_azucar", value: azucar });

    f.push({ feature: "pref_burbujeante", value: burbujeante });
    if (burbujeante === "si") {
      if (espumante === "si")
        f.push({ feature: "disp_espumante", value: "si" });
      if (prosecco === "si") f.push({ feature: "disp_prosecco", value: "si" });
      if (gingerBeer === "si")
        f.push({ feature: "disp_ginger_beer", value: "si" });
      if (tonica === "si") f.push({ feature: "disp_tonica", value: "si" });
      if (soda === "si") f.push({ feature: "disp_soda", value: "si" });
      if (pomelo === "si") f.push({ feature: "disp_pomelo", value: "si" });
    }

    // Cremoso
    if (sabor === "cremoso") {
      if (lacteo === "si") f.push({ feature: "disp_lacteo", value: "si" });
      if (cafe === "si") f.push({ feature: "disp_cafe", value: "si" });
    }

    return f;
  }, [
    alcohol,
    hielo,
    sabor,
    base,
    citrico,
    pina,
    coco,
    maracuya,
    mango,
    arandano,
    orgeat,
    frutaMentaPepino,
    bitterRojo,
    vermutRojo,
    aperol,
    azucar,
    bitter,
    vermutSeco,
    absenta,
    burbujeante,
    espumante,
    prosecco,
    gingerBeer,
    tonica,
    soda,
    pomelo,
    lacteo,
    cafe,
  ]);

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  async function handleRun() {
    try {
      setLoading(true);
      setResult(null);
      const data = await api("/expert/recomendar", {
        method: "POST",
        body: JSON.stringify({ facts }),
      });
      setResult(data);
    } catch (e) {
      console.error(e);
      setResult({ ok: false, message: "Error consultando motor" });
    } finally {
      setLoading(false);
    }
  }

  const summaryChips = useMemo(() => {
    const chips = [];
    chips.push(
      <Chip key="a" tone="violet">
        Alcohol: {alcohol}
      </Chip>
    );
    chips.push(<Chip key="h">Hielo: {hielo}</Chip>);
    chips.push(<Chip key="s">Sabor: {sabor}</Chip>);

    if (pina === "si") chips.push(<Chip key="pi">Piña</Chip>);
    if (coco === "si") chips.push(<Chip key="co">Coco</Chip>);
    if (maracuya === "si") chips.push(<Chip key="ma">Maracuyá</Chip>);
    if (mango === "si") chips.push(<Chip key="mg">Mango</Chip>);
    if (arandano === "si") chips.push(<Chip key="ar">Arándano</Chip>);
    if (orgeat === "si") chips.push(<Chip key="or">Orgeat</Chip>);
    if (frutaMentaPepino === "si")
      chips.push(<Chip key="fmp">Fruta/Menta/Pepino</Chip>);

    if (bitterRojo === "si") chips.push(<Chip key="br">Bitter rojo</Chip>);
    if (vermutRojo === "si") chips.push(<Chip key="vr">Vermut rojo</Chip>);
    if (aperol === "si") chips.push(<Chip key="ap">Aperol</Chip>);

    if (azucar !== "no") chips.push(<Chip key="az">Azúcar</Chip>);
    if (bitter !== "no") chips.push(<Chip key="bi">Bitter</Chip>);
    if (vermutSeco !== "no") chips.push(<Chip key="vs">Vermut seco</Chip>);
    if (absenta === "si") chips.push(<Chip key="ab">Absenta</Chip>);

    if (sabor === "acido") {
      chips.push(<Chip key="ba">Base: {base}</Chip>);
      chips.push(<Chip key="ci">Cítrico: {citrico}</Chip>);
    }

    chips.push(
      <Chip key="hb" tone="violet">
        Highball: {burbujeante}
      </Chip>
    );
    if (burbujeante === "si") {
      if (espumante === "si") chips.push(<Chip key="es">Espumante</Chip>);
      if (prosecco === "si") chips.push(<Chip key="pr">Prosecco</Chip>);
      if (gingerBeer === "si") chips.push(<Chip key="gb">Ginger beer</Chip>);
      if (tonica === "si") chips.push(<Chip key="to">Tónica</Chip>);
      if (soda === "si") chips.push(<Chip key="so">Soda</Chip>);
      if (pomelo === "si") chips.push(<Chip key="po">Pomelo</Chip>);
    }

    if (lacteo === "si") chips.push(<Chip key="la">Lácteo</Chip>);
    if (cafe === "si") chips.push(<Chip key="ca">Café</Chip>);

    return chips;
  }, [
    alcohol,
    hielo,
    sabor,
    pina,
    coco,
    maracuya,
    mango,
    arandano,
    orgeat,
    frutaMentaPepino,
    bitterRojo,
    vermutRojo,
    aperol,
    azucar,
    bitter,
    vermutSeco,
    absenta,
    base,
    citrico,
    burbujeante,
    espumante,
    prosecco,
    gingerBeer,
    tonica,
    soda,
    pomelo,
    lacteo,
    cafe,
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50/20 to-violet-50/20">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur flex items-center justify-center">
              <Sparkles size={20} />
            </div>
            <h1 className="text-3xl font-bold">Sistema Experto de Recomendaciones</h1>
          </div>
          <p className="text-indigo-100 max-w-2xl">
            Configura tus preferencias e ingredientes disponibles para obtener la
            recomendación perfecta de coctel personalizada para ti.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8 grid gap-6 lg:grid-cols-2">
      <div className="grid gap-6">
        <Card title="Preferencias básicas">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="¿Alcohol?">
              <PillToggle value={alcohol} onChange={setAlcohol} />
            </Field>
            <Field label="¿Hielo?">
              <PillToggle value={hielo} onChange={setHielo} />
            </Field>

            <Field label="Sabor preferido">
              <select
                value={sabor}
                onChange={(e) => setSabor(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-200"
              >
                <option value="acido">Ácido</option>
                <option value="dulce">Dulce / Tropical</option>
                <option value="amargo">Amargo / Aperitivo</option>
                <option value="seco">Seco / Espirituoso</option>
                <option value="cremoso">Cremoso</option>
              </select>
            </Field>

            {sabor === "acido" && (
              <>
                <Field label="Base (para tragos ácidos)">
                  <select
                    value={base}
                    onChange={(e) => setBase(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-200"
                  >
                    <option value="ron">Ron</option>
                    <option value="tequila">Tequila</option>
                    <option value="whisky">Whisky</option>
                    <option value="gin">Gin</option>
                    <option value="vodka">Vodka</option>
                  </select>
                </Field>
                <Field label="¿Cítrico disponible? (limón/lima/pomelo)">
                  <PillToggle value={citrico} onChange={setCitrico} />
                </Field>
              </>
            )}

            {sabor === "dulce" && (
              <Field label="Frutas / Dulces">
                <div className="grid grid-cols-2 gap-3">
                  <SubField label="Piña">
                    <PillToggle value={pina} onChange={setPina} size="sm" />
                  </SubField>
                  <SubField label="Coco">
                    <PillToggle value={coco} onChange={setCoco} size="sm" />
                  </SubField>
                  <SubField label="Maracuyá">
                    <PillToggle
                      value={maracuya}
                      onChange={setMaracuya}
                      size="sm"
                    />
                  </SubField>
                  <SubField label="Mango">
                    <PillToggle value={mango} onChange={setMango} size="sm" />
                  </SubField>
                  <SubField label="Arándano">
                    <PillToggle
                      value={arandano}
                      onChange={setArandano}
                      size="sm"
                    />
                  </SubField>
                  <SubField label="Orgeat">
                    <PillToggle value={orgeat} onChange={setOrgeat} size="sm" />
                  </SubField>
                  <SubField label="Fruta/Menta/Pepino">
                    <PillToggle
                      value={frutaMentaPepino}
                      onChange={setFrutaMentaPepino}
                      size="sm"
                    />
                  </SubField>
                </div>
              </Field>
            )}

            {sabor === "amargo" && (
              <Field label="Aperitivos">
                <div className="grid grid-cols-2 gap-3">
                  <SubField label="Bitter rojo">
                    <PillToggle
                      value={bitterRojo}
                      onChange={setBitterRojo}
                      size="sm"
                    />
                  </SubField>
                  <SubField label="Vermut rojo">
                    <PillToggle
                      value={vermutRojo}
                      onChange={setVermutRojo}
                      size="sm"
                    />
                  </SubField>
                  <SubField label="Aperol">
                    <PillToggle value={aperol} onChange={setAperol} size="sm" />
                  </SubField>
                </div>
              </Field>
            )}

            {sabor === "seco" && (
              <Field label="Seco / Espirituoso">
                <div className="grid grid-cols-2 gap-3">
                  <SubField label="Bitter">
                    <PillToggle value={bitter} onChange={setBitter} size="sm" />
                  </SubField>
                  <SubField label="Vermut seco">
                    <PillToggle
                      value={vermutSeco}
                      onChange={setVermutSeco}
                      size="sm"
                    />
                  </SubField>
                  <SubField label="Absenta">
                    <PillToggle
                      value={absenta}
                      onChange={setAbsenta}
                      size="sm"
                    />
                  </SubField>
                </div>
              </Field>
            )}

            {sabor === "cremoso" && (
              <Field label="Cremoso">
                <div className="grid grid-cols-2 gap-3">
                  <SubField label="Lácteo">
                    <PillToggle value={lacteo} onChange={setLacteo} size="sm" />
                  </SubField>
                  <SubField label="Café">
                    <PillToggle value={cafe} onChange={setCafe} size="sm" />
                  </SubField>
                </div>
              </Field>
            )}
          </div>
        </Card>

        <Card title="Ingredientes / Seco" subtitle="Opcional">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <SubField label="¿Azúcar?">
              <PillToggle value={azucar} onChange={setAzucar} size="sm" />
            </SubField>
            <SubField label="¿Bitter?">
              <PillToggle value={bitter} onChange={setBitter} size="sm" />
            </SubField>
            <SubField label="¿Vermut seco?">
              <PillToggle
                value={vermutSeco}
                onChange={setVermutSeco}
                size="sm"
              />
            </SubField>
          </div>
        </Card>

        <Card title="Highballs" subtitle="Opcional">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="¿Burbujeante?">
              <PillToggle value={burbujeante} onChange={setBurbujeante} />
            </Field>

            <SubField label="Ginger beer">
              <PillToggle
                value={gingerBeer}
                onChange={setGingerBeer}
                disabled={burbujeante !== "si"}
                size="sm"
              />
            </SubField>

            <SubField label="Tónica">
              <PillToggle
                value={tonica}
                onChange={setTonica}
                disabled={burbujeante !== "si"}
                size="sm"
              />
            </SubField>

            <SubField label="Soda">
              <PillToggle
                value={soda}
                onChange={setSoda}
                disabled={burbujeante !== "si"}
                size="sm"
              />
            </SubField>

            <SubField label="Espumante">
              <PillToggle
                value={espumante}
                onChange={setEspumante}
                disabled={burbujeante !== "si"}
                size="sm"
              />
            </SubField>

            <SubField label="Prosecco">
              <PillToggle
                value={prosecco}
                onChange={setProsecco}
                disabled={burbujeante !== "si"}
                size="sm"
              />
            </SubField>

            <SubField label="Pomelo">
              <PillToggle
                value={pomelo}
                onChange={setPomelo}
                disabled={burbujeante !== "si"}
                size="sm"
              />
            </SubField>
          </div>
        </Card>

        <motion.div
          className="flex items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <button
            onClick={handleRun}
            disabled={loading}
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white px-6 py-3 text-sm font-semibold shadow-lg hover:shadow-xl hover:scale-105 disabled:opacity-60 disabled:hover:scale-100 transition-all"
          >
            <Zap size={18} />
            {loading ? "Consultando..." : "Obtener recomendación"}
          </button>
          {loading ? (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 text-sm text-slate-600"
            >
              <div className="w-4 h-4 border-2 border-indigo-600 border-t-transparent rounded-full animate-spin" />
              Evaluando reglas…
            </motion.div>
          ) : null}
        </motion.div>
      </div>

      <div className="grid gap-6">
        <Card title="🎯 Resultado" gradient>
          <div className="flex flex-wrap gap-2 mb-4">{summaryChips}</div>

          {!result && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12 text-slate-500"
            >
              <Sparkles size={48} className="mx-auto mb-4 text-slate-300" />
              <p className="text-sm">
                Configura tus preferencias y haz clic en{" "}
                <b className="text-indigo-600">Obtener recomendación</b> para descubrir
                tu coctel perfecto.
              </p>
            </motion.div>
          )}

          {result?.ok && (
            <>
              {result?.recomendaciones?.length > 0 ? (
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="rounded-2xl border-2 border-emerald-300 bg-gradient-to-br from-emerald-50 to-emerald-100 p-6 shadow-lg"
                >
                  <div className="flex items-center gap-2 text-emerald-700 mb-2">
                    <CheckCircle2 size={20} />
                    <span className="text-sm font-medium">Recomendación perfecta</span>
                  </div>
                  <div className="text-2xl font-bold text-emerald-900 mb-2">
                    🍹 {result.recomendaciones[0].valor}
                  </div>
                  <div className="text-xs text-emerald-700/80 bg-emerald-200/50 rounded-lg px-3 py-1 inline-block">
                    Regla aplicada: {result.recomendaciones[0].regla}
                  </div>
                </motion.div>
              ) : result?.top ? (
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="rounded-2xl border-2 border-amber-300 bg-gradient-to-br from-amber-50 to-amber-100 p-6 shadow-lg"
                >
                  <div className="flex items-center gap-2 text-amber-700 mb-2">
                    <AlertCircle size={20} />
                    <span className="text-sm font-medium">Advertencia detectada</span>
                  </div>
                  <div className="text-xl font-bold text-amber-900 mb-2">
                    {result.top.valor}
                  </div>
                  <div className="text-xs text-amber-700/80 bg-amber-200/50 rounded-lg px-3 py-1 inline-block">
                    Regla: {result.top.regla}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="rounded-2xl border border-slate-300 bg-gradient-to-br from-slate-50 to-slate-100 p-6"
                >
                  <div className="flex items-center gap-2 text-slate-700 mb-3">
                    <Info size={20} />
                    <span className="text-sm font-semibold">Sin coincidencias</span>
                  </div>
                  <div className="text-sm text-slate-600 leading-relaxed mb-3">
                    No encontramos una regla aplicable con los insumos actuales.
                  </div>
                  <div className="text-xs text-slate-500 bg-white rounded-lg p-3 border border-slate-200">
                    <div className="font-medium text-slate-700 mb-2">
                      💡 Prueba alguna de estas opciones:
                    </div>
                    <ul className="list-disc ml-5 mt-1">
                      <li>
                        Activa <b>burbujeante</b> y alguna opción (p. ej.{" "}
                        <i>tónica</i>, <i>soda</i>, <i>espumante</i> o{" "}
                        <i>prosecco</i>).
                      </li>
                      <li>
                        Para “dulce”, marca <b>piña/coco</b> o{" "}
                        <b>maracuyá/mango</b> si están disponibles.
                      </li>
                      <li>
                        Elige otro sabor (ácido / seco / amargo / cremoso) según
                        los insumos.
                      </li>
                    </ul>
                  </div>
                </motion.div>
              )}
            </>
          )}

          {result?.ok && result?.recomendaciones?.length > 1 ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-4"
            >
              <div className="text-sm font-semibold text-slate-700 mb-3 flex items-center gap-2">
                <Sparkles size={16} className="text-indigo-600" />
                Otras coincidencias
              </div>
              <ul className="grid gap-2">
                {result.recomendaciones.slice(1).map((r, i) => (
                  <motion.li
                    key={`rec-${i}`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="rounded-xl border border-indigo-200 bg-gradient-to-r from-indigo-50 to-white px-4 py-3 text-sm text-slate-700 hover:shadow-md transition-shadow"
                  >
                    <span className="font-medium">{r.valor}</span>
                    <span className="ml-2 text-xs text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                      {r.regla}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ) : null}

          {result?.ok &&
          (result?.fallas?.critical?.length ||
            result?.fallas?.warning?.length ||
            result?.fallas?.info?.length) ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-4 grid gap-4"
            >
              {result.fallas.critical?.length ? (
                <div className="rounded-xl border-2 border-rose-200 bg-rose-50/50 p-4">
                  <div className="text-sm font-semibold text-rose-700 mb-3 flex items-center gap-2">
                    <AlertCircle size={16} />
                    Advertencias críticas
                  </div>
                  <ul className="grid gap-2">
                    {result.fallas.critical.map((f, i) => (
                      <li
                        key={`c-${i}`}
                        className="rounded-lg border border-rose-300 bg-white text-rose-900 px-3 py-2 text-sm"
                      >
                        <span className="font-medium">{f.valor}</span>
                        <span className="ml-2 text-xs text-rose-700 bg-rose-100 px-2 py-0.5 rounded-full">
                          {f.regla}
                        </span>
                        {f.category ? (
                          <span className="ml-2 inline-flex items-center rounded-full border border-slate-200 px-2 py-0.5 text-[11px] text-slate-600">
                            {f.category}
                          </span>
                        ) : null}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {result.fallas.warning?.length ? (
                <div className="rounded-xl border-2 border-amber-200 bg-amber-50/50 p-4">
                  <div className="text-sm font-semibold text-amber-700 mb-3 flex items-center gap-2">
                    <AlertCircle size={16} />
                    Advertencias
                  </div>
                  <ul className="grid gap-2">
                    {result.fallas.warning.map((f, i) => (
                      <li
                        key={`w-${i}`}
                        className="rounded-lg border border-amber-300 bg-white text-amber-900 px-3 py-2 text-sm"
                      >
                        <span className="font-medium">{f.valor}</span>
                        <span className="ml-2 text-xs text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full">
                          {f.regla}
                        </span>
                        {f.category ? (
                          <span className="ml-2 inline-flex items-center rounded-full border border-slate-200 px-2 py-0.5 text-[11px] text-slate-700">
                            {f.category}
                          </span>
                        ) : null}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {result.fallas.info?.length ? (
                <div className="rounded-xl border-2 border-blue-200 bg-blue-50/50 p-4">
                  <div className="text-sm font-semibold text-blue-700 mb-3 flex items-center gap-2">
                    <Info size={16} />
                    Notas informativas
                  </div>
                  <ul className="grid gap-2">
                    {result.fallas.info.map((f, i) => (
                      <li
                        key={`i-${i}`}
                        className="rounded-lg border border-blue-300 bg-white text-blue-900 px-3 py-2 text-sm"
                      >
                        <span className="font-medium">{f.valor}</span>
                        <span className="ml-2 text-xs text-blue-700 bg-blue-100 px-2 py-0.5 rounded-full">
                          {f.regla}
                        </span>
                        {f.category ? (
                          <span className="ml-2 inline-flex items-center rounded-full border border-slate-200 px-2 py-0.5 text-[11px] text-slate-600">
                            {f.category}
                          </span>
                        ) : null}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </motion.div>
          ) : null}

          {result && !result.ok && (
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="rounded-xl border-2 border-rose-300 bg-rose-50 p-4 text-sm text-rose-700 flex items-start gap-2"
            >
              <AlertCircle size={18} className="flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold mb-1">Error al obtener recomendación</div>
                <div className="text-rose-600">{result.message || "Error desconocido"}</div>
              </div>
            </motion.div>
          )}
        </Card>

        <Card title="📊 Datos enviados">
          <details className="group">
            <summary className="cursor-pointer text-sm text-indigo-600 hover:text-indigo-700 font-medium mb-2 flex items-center gap-2">
              <span className="group-open:rotate-90 transition-transform">▶</span>
              Ver JSON de la consulta
            </summary>
            <pre className="text-xs leading-5 whitespace-pre-wrap rounded-xl border border-slate-200 bg-slate-900 p-4 text-emerald-400 overflow-auto max-h-96 font-mono">
              {JSON.stringify(facts, null, 2)}
            </pre>
          </details>
        </Card>
      </div>
    </div>
    </div>
  );
}
