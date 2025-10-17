import { useEffect, useMemo, useState } from "react";
import PillToggle from "../ui/PillToggle";
import { api } from "../api/client";

const Card = ({ title, subtitle, children }) => (
  <div className="card rounded-2xl border border-slate-200 bg-white/70 backdrop-blur p-5 shadow-sm">
    <div className="flex items-start justify-between">
      <div className="text-base font-semibold text-slate-800">{title}</div>
      {subtitle ? (
        <div className="text-xs text-slate-400">{subtitle}</div>
      ) : null}
    </div>
    <div className="mt-4 grid gap-4">{children}</div>
  </div>
);

const Field = ({ label, children, hint }) => (
  <div className="rounded-2xl border border-slate-200 bg-white p-4">
    <div className="text-sm font-medium text-slate-700 mb-2">{label}</div>
    {children}
    {hint ? (
      <div className="text-[11px] text-slate-400 mt-2">{hint}</div>
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

        <div className="flex items-center gap-3">
          <button
            onClick={handleRun}
            disabled={loading}
            className="rounded-xl bg-violet-600 text-white px-4 py-2 text-sm font-medium shadow hover:bg-violet-700 disabled:opacity-60"
          >
            {loading ? "Consultando..." : "Obtener recomendación"}
          </button>
          {loading ? (
            <span className="text-xs text-slate-400">Evaluando reglas…</span>
          ) : null}
        </div>
      </div>

      <div className="grid gap-6">
        <Card title="Resultado">
          <div className="flex flex-wrap gap-2 mb-3">{summaryChips}</div>

          {!result && (
            <div className="text-sm text-slate-500">
              Configura tus preferencias y haz clic en{" "}
              <b>Obtener recomendación</b>.
            </div>
          )}

          {result?.ok && (
            <>
              {result?.recomendaciones?.length > 0 ? (
                <div className="rounded-xl border border-violet-200 bg-violet-50 p-4">
                  <div className="text-sm text-violet-700">Recomendación</div>
                  <div className="text-lg font-semibold text-violet-900">
                    {result.recomendaciones[0].valor}
                  </div>
                  <div className="text-xs text-violet-700/70 mt-1">
                    Regla: {result.recomendaciones[0].regla}
                  </div>
                </div>
              ) : result?.top ? (
                <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
                  <div className="text-sm text-amber-700">Atención</div>
                  <div className="text-lg font-semibold text-amber-900">
                    {result.top.valor}
                  </div>
                  <div className="text-xs text-amber-700/70 mt-1">
                    Regla: {result.top.regla}
                  </div>
                </div>
              ) : (
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <div className="text-sm text-slate-700">
                    Sin coincidencias
                  </div>
                  <div className="text-xs text-slate-500 mt-1 leading-5">
                    No encontramos una regla aplicable con los insumos actuales.
                    <br />
                    Prueba alguna de estas opciones:
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
                </div>
              )}
            </>
          )}

          {result?.ok && result?.recomendaciones?.length > 1 ? (
            <div className="mt-4">
              <div className="text-sm font-semibold text-slate-700 mb-1">
                Otras coincidencias
              </div>
              <ul className="grid gap-2">
                {result.recomendaciones.slice(1).map((r, i) => (
                  <li
                    key={`rec-${i}`}
                    className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700"
                  >
                    {r.valor}{" "}
                    <span className="ml-2 text-[11px] opacity-70">
                      ({r.regla})
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {result?.ok &&
          (result?.fallas?.critical?.length ||
            result?.fallas?.warning?.length ||
            result?.fallas?.info?.length) ? (
            <div className="mt-4 grid gap-3">
              {result.fallas.critical?.length ? (
                <div>
                  <div className="text-sm font-semibold text-rose-700 mb-2">
                    Advertencias críticas
                  </div>
                  <ul className="grid gap-2">
                    {result.fallas.critical.map((f, i) => (
                      <li
                        key={`c-${i}`}
                        className="rounded-xl border border-rose-200 bg-rose-50 text-rose-900 px-3 py-2 text-sm"
                      >
                        {f.valor}{" "}
                        <span className="ml-2 text-xs opacity-70">
                          ({f.regla})
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
                <div>
                  <div className="text-sm font-semibold text-amber-700 mb-2">
                    Advertencias
                  </div>
                  <ul className="grid gap-2">
                    {result.fallas.warning.map((f, i) => (
                      <li
                        key={`w-${i}`}
                        className="rounded-xl border border-amber-200 bg-amber-50 text-amber-900 px-3 py-2 text-sm"
                      >
                        {f.valor}{" "}
                        <span className="ml-2 text-xs opacity-70">
                          ({f.regla})
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
                <div>
                  <div className="text-sm font-semibold text-slate-600 mb-2">
                    Notas
                  </div>
                  <ul className="grid gap-2">
                    {result.fallas.info.map((f, i) => (
                      <li
                        key={`i-${i}`}
                        className="rounded-xl border border-slate-200 bg-slate-50 text-slate-700 px-3 py-2 text-sm"
                      >
                        {f.valor}{" "}
                        <span className="ml-2 text-xs opacity-70">
                          ({f.regla})
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
            </div>
          ) : null}

          {result && !result.ok && (
            <div className="rounded-xl border border-rose-200 bg-rose-50 p-3 text-sm text-rose-700">
              {result.message || "Error"}
            </div>
          )}
        </Card>

        <Card title="Payload que se envía">
          <pre className="text-xs leading-5 whitespace-pre-wrap rounded-xl border border-slate-200 bg-slate-50 p-3 text-slate-700">
            {JSON.stringify(facts, null, 2)}
          </pre>
        </Card>
      </div>
    </div>
  );
}
