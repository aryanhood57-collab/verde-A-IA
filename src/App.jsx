import { useState, useEffect, useRef } from "react";

const WORD = "SOSTENIBLE";
const COURSE = "Gestión Ambiental — EDA1002";
const PROGRAM = "Técnico Superior en Inteligencia Artificial";
const GROUP = "IA-3-1 | II Cuatrimestre 2026";
const VERSION = "A";

const TEAMS = ["ALFA", "GAMMA", "ÉPSILON"];

const retos = [
  {
    id: 1,
    block: "🔥 BLOQUE 1 — CALENTAMIENTO",
    blockColor: "#16a34a",
    time: 600,
    title: "El precio invisible",
    context: `Un centro de datos panameño procesa 500,000 consultas diarias de IA. Su indicador PUE es 1.8 y consume 2 MW/h continuos. Para comparar: 300 hogares panameños consumen aproximadamente 0.3 kW/h cada uno.`,
    analysis: `Tu equipo debe analizar: (1) ¿Cuántos hogares panameños equivalen al consumo de ese centro de datos? (2) ¿Qué estrategias de eficiencia energética podrían reducir el PUE de 1.8 a 1.2? (3) Si Panamá genera el 65% de su electricidad con fuentes renovables, ¿cuál sería el impacto real en emisiones de CO₂? Documenten sus cálculos y argumentos antes de responder.`,
    question: `¿Cuál de los siguientes factores tiene MAYOR impacto directo en la huella hídrica de un centro de datos?`,
    options: [
      "El número total de servidores activos simultáneamente",
      "El sistema de enfriamiento por agua (cooling towers)",
      "La velocidad de procesamiento de los chips GPU",
      "El tipo de sistema operativo instalado en los servidores",
    ],
    correct: 1,
    letter: "S",
    explanation: "Los sistemas de enfriamiento por agua (cooling towers) son responsables del 40–80% del consumo hídrico total de un data center. El agua se usa para disipar el calor generado por los servidores. Un data center grande puede consumar millones de litros diarios solo en refrigeración.",
  },
  {
    id: 2,
    block: "🔥 BLOQUE 1 — CALENTAMIENTO",
    blockColor: "#16a34a",
    time: 600,
    title: "ODS en conflicto",
    context: `Una empresa panameña implementa IA para optimizar rutas logísticas (alineado al ODS 9: Industria e Innovación), pero el entrenamiento del modelo de IA consume electricidad proveniente en un 60% de fuentes fósiles (en contradicción con el ODS 13: Acción Climática).`,
    analysis: `Tu equipo debe debatir: (1) ¿Existe realmente un conflicto entre el ODS 9 y el ODS 13 en este caso, o es posible compatibilizarlos? (2) ¿Cómo se puede avanzar hacia el ODS 11 (ciudades inteligentes) sin comprometer el ODS 12 (producción responsable) en el contexto de automatización urbana en Panamá? (3) ¿Qué cambios técnicos o de política pública resolverían esta tensión? Elaboren una postura argumentada.`,
    question: `En una auditoría ambiental de un sistema de IA, ¿cuál de estos indicadores corresponde DIRECTAMENTE al cumplimiento del ODS 7 (Energía Asequible y No Contaminante)?`,
    options: [
      "Número de usuarios que acceden al sistema de IA por mes",
      "Porcentaje de energía renovable en el suministro eléctrico del data center",
      "Velocidad de respuesta del algoritmo medida en milisegundos",
      "Nivel de satisfacción del usuario final con la interfaz del sistema",
    ],
    correct: 1,
    letter: "O",
    explanation: "El ODS 7 se enfoca en garantizar acceso a energía asequible, segura, sostenible y moderna. En el contexto de sistemas de IA, el indicador más directo es la proporción de energía renovable usada para alimentar las operaciones del data center, ya que mide directamente la sostenibilidad de la fuente energética.",
  },
  {
    id: 3,
    block: "🔥 BLOQUE 1 — CALENTAMIENTO",
    blockColor: "#16a34a",
    time: 600,
    title: "Ciclo de vida oculto",
    context: `Un servidor de IA tiene una vida útil operativa de 5 años. En su fabricación intervienen: cobalto extraído en la República Democrática del Congo, litio de Chile y neodimio de China. Consume energía constantemente durante su operación. Al finalizar su vida útil en Panamá, no existe infraestructura formal certificada para el reciclaje de residuos electrónicos (e-waste).`,
    analysis: `Apliquen el Análisis de Ciclo de Vida (ACV): fase de extracción de materias primas, fabricación, transporte, operación y disposición final. Identifiquen cuál fase genera mayor impacto acumulado considerando: tiempo de duración, intensidad de consumo y efectos transfronterizos. Argumenten su respuesta con datos específicos.`,
    question: `Según el Análisis de Ciclo de Vida (ACV) aplicado a servidores de IA, ¿en cuál fase se genera el MAYOR impacto ambiental acumulado a lo largo de toda su vida útil?`,
    options: [
      "Fase de operación diaria (consumo energético continuo durante años)",
      "Fase de fabricación de componentes electrónicos en fábrica",
      "Fase de transporte internacional desde países fabricantes",
      "Fase de disposición final del e-waste al término de vida útil",
    ],
    correct: 0,
    letter: "S",
    explanation: "Aunque la fabricación tiene alto impacto puntual, la fase de OPERACIÓN genera el mayor impacto ACUMULADO: un servidor consume energía 24/7 durante 5 años. Estudios del MIT y Lawrence Berkeley National Laboratory confirman que entre el 70% y 80% de la huella de carbono total de un servidor proviene de su operación continua, no de su fabricación.",
  },
  {
    id: 4,
    block: "⚙️ BLOQUE 2 — NÚCLEO TÉCNICO",
    blockColor: "#1d4ed8",
    time: 480,
    title: "Laguna legal",
    context: `Una startup de IA en Ciudad de Panamá opera 3 centros de datos con un consumo hídrico combinado de 800,000 litros mensuales para sistemas de enfriamiento. La Ley 41/1998 establece que las instalaciones con impacto ambiental moderado requieren un Estudio de Impacto Ambiental (EIA) de categoría B. La empresa argumenta públicamente que, al ser una empresa de software y servicios digitales, no genera impactos físicos en el ambiente y, por tanto, no está obligada a obtener un EIA.`,
    analysis: `Analicen el argumento legal de la empresa desde tres ángulos: (1) ¿Es válido jurídicamente el argumento de ser "empresa de software"? (2) ¿Qué define si una actividad requiere EIA según la Ley 41/1998? (3) ¿Qué otros instrumentos legales panameños podrían aplicar dado el consumo hídrico declarado? Identifiquen la laguna o error en el razonamiento de la empresa.`,
    question: `¿Qué instrumento jurídico panameño OBLIGA a esta empresa a gestionar formalmente sus aspectos ambientales, independientemente de su clasificación como empresa de software?`,
    options: [
      "Únicamente la Ley 54/2022 sobre transformación digital de Panamá",
      "La Ley 41/1998, artículo 24, que exige EIA por el nivel de impacto ambiental generado",
      "Exclusivamente el Decreto Ejecutivo 57/2000 sobre regulación de recursos hídricos",
      "No existe marco legal aplicable a empresas tecnológicas en Panamá actualmente",
    ],
    correct: 1,
    letter: "T",
    explanation: "La Ley 41/1998 (Ley General de Ambiente) en su artículo 24 establece que la obligación de EIA se determina por el nivel de impacto generado en el ambiente, NO por la clasificación sectorial de la empresa. Un consumo de 800,000 litros/mes de agua y el calor disipado constituyen impactos físicos reales que activan la obligación, independientemente de si la empresa se autodefine como 'de software'.",
  },
  {
    id: 5,
    block: "⚙️ BLOQUE 2 — NÚCLEO TÉCNICO",
    blockColor: "#1d4ed8",
    time: 480,
    title: "Auditoría ISO",
    context: `Durante una auditoría de certificación ISO 14001:2015 a un sistema de IA implementado en hospitales del Sistema Nacional de Salud de Panamá, el equipo auditor detecta lo siguiente: la organización (1) tiene documentados todos sus aspectos e impactos ambientales significativos, (2) ha establecido objetivos de reducción de consumo energético y generación de e-waste, pero (3) NO realiza seguimiento trimestral de sus indicadores ambientales ni mide el grado de cumplimiento de sus objetivos en ningún momento del año.`,
    analysis: `El equipo auditor debe emitir un hallazgo de No Conformidad. Usando el ciclo PHVA (Planificar-Hacer-Verificar-Actuar) de ISO 14001:2015, determinen: (1) ¿En cuál fase exacta se ubica la No Conformidad? (2) ¿Qué cláusula específica de ISO 14001 se incumple? (3) ¿Qué acción correctiva concreta propondrían para subsanar esta No Conformidad? Argumenten técnicamente.`,
    question: `¿En qué fase del ciclo PHVA de ISO 14001:2015 se presenta la No Conformidad identificada en esta organización?`,
    options: [
      "Planificar (P) — porque no han identificado correctamente sus aspectos ambientales",
      "Hacer (H) — porque no han implementado los controles operacionales necesarios",
      "Verificar (V) — porque no realizan seguimiento ni medición de sus indicadores",
      "Actuar (A) — porque la dirección no ha revisado formalmente el sistema de gestión",
    ],
    correct: 2,
    letter: "E",
    explanation: "La cláusula 9.1 de ISO 14001:2015 (Seguimiento, medición, análisis y evaluación) corresponde a la fase VERIFICAR del ciclo PHVA. La organización planifica (tiene aspectos documentados) y hace (tiene objetivos), pero no verifica: no mide si está cumpliendo sus objetivos ni hace seguimiento a sus indicadores. Esta es la No Conformidad específica: ausencia de monitoreo y medición periódica.",
  },
  {
    id: 6,
    block: "⚙️ BLOQUE 2 — NÚCLEO TÉCNICO",
    blockColor: "#1d4ed8",
    time: 480,
    title: "Matriz de impacto",
    context: `Un algoritmo de visión artificial implementado en una fábrica en la Zona Franca de Colón detecta defectos de manufactura en tiempo real. El sistema genera los siguientes aspectos ambientales: A1) Calor residual disipado al ambiente, A2) Consumo eléctrico continuo 24/7, A3) Transmisión de datos a servidores en la nube ubicados en EE.UU., A4) Reducción del 30% en desperdicio de materia prima por detección temprana de defectos. La empresa clasifica el aspecto A4 como un impacto ambiental negativo en su Matriz de Aspectos e Impactos.`,
    analysis: `Apliquen la metodología de la Matriz de Leopold: (1) Asignen magnitud (1–10) e importancia (1–10) a cada aspecto. (2) Expliquen por qué la empresa comete un error técnico al clasificar A4 como aspecto negativo. (3) ¿Cómo debería registrarse correctamente A4 en una Matriz de Aspectos e Impactos según ISO 14001? Justifiquen con criterios técnicos.`,
    question: `En una Matriz de Aspectos e Impactos Ambientales (ISO 14001:2015), ¿cuál de los siguientes aspectos debería clasificarse como SIGNIFICATIVO según los criterios de evaluación técnica?`,
    options: [
      "Uso de papel bond en las oficinas administrativas del edificio",
      "Consumo eléctrico de 2 MW/h continuo en zona de alta disponibilidad hídrica",
      "Emisión de calor al ambiente en zona industrial con inventario hídrico vulnerable identificado",
      "Descarga de aguas grises previamente tratadas con parámetros dentro de la norma ANAM",
    ],
    correct: 2,
    letter: "N",
    explanation: "La significancia de un aspecto ambiental se determina por la combinación de severidad del impacto + probabilidad de ocurrencia + contexto receptor. La emisión de calor en una zona con 'inventario hídrico vulnerable' escala en significancia porque el calor afecta la temperatura del agua (impacto sobre recurso ya comprometido). Los otros tres aspectos tienen bajo impacto por magnitud pequeña (papel) o porque los impactos están controlados/dentro de norma.",
  },
  {
    id: 7,
    block: "⚙️ BLOQUE 2 — NÚCLEO TÉCNICO",
    blockColor: "#1d4ed8",
    time: 480,
    title: "KPI o trampa",
    context: `Una empresa de tecnología panameña propone los siguientes indicadores ambientales para demostrar su compromiso con la IA verde: KPI-1: "Reducir las emisiones de CO₂ en un 10% al año" (no especifica línea base, año de inicio ni método de medición). KPI-2: "Aumentar la eficiencia energética de los sistemas" (sin unidad de medida ni porcentaje objetivo). KPI-3: "Mantener un PUE ≤ 1.4 para el 80% del tiempo operativo, medido y documentado trimestralmente por auditor interno". KPI-4: "Destinar cero e-waste a vertederos no certificados, verificado anualmente por un auditor externo acreditado".`,
    analysis: `Apliquen los criterios SMART (Específico, Medible, Alcanzable, Relevante, Temporal) a cada KPI. Clasifiquen cuáles cumplen TODOS los criterios SMART, cuáles son parcialmente válidos y cuáles son inaceptables técnicamente. Argumenten qué correcciones requiere cada KPI inválido para convertirse en un indicador técnicamente aceptable.`,
    question: `Aplicando estrictamente los criterios SMART para indicadores de gestión ambiental, ¿cuántos de los cuatro KPIs propuestos cumplen la totalidad de los criterios requeridos?`,
    options: [
      "Cuatro — todos los KPIs cumplen al menos parcialmente los criterios SMART",
      "Uno — únicamente KPI-3 cumple la totalidad de los criterios SMART",
      "Dos — KPI-3 y KPI-4 son igualmente válidos según los criterios SMART",
      "Ninguno — los indicadores de tipo SMART no aplican a empresas de tecnología",
    ],
    correct: 1,
    letter: "I",
    explanation: "Solo KPI-3 cumple TODOS los criterios SMART: es Específico (PUE ≤ 1.4), Medible (valor numérico definido), Alcanzable (estándar de industria), Relevante (métrica directa de eficiencia energética) y Temporal (medición trimestral documentada). KPI-4 falla en 'Temporal' porque la verificación es anual pero no especifica período de referencia. KPI-1 carece de línea base (no es Específico). KPI-2 no tiene unidad de medida (no es Medible).",
  },
  {
    id: 8,
    block: "🚀 BLOQUE 3 — SPRINT FINAL",
    blockColor: "#7c3aed",
    time: 300,
    title: "El algoritmo sesgado",
    context: `Un modelo de inteligencia artificial entrenado para evaluar solicitudes de crédito bancario en Panamá tiene una huella de carbono de 284 toneladas de CO₂ equivalente (aproximadamente igual a 60 vuelos transatlánticos). Adicionalmente, el modelo reproduce sesgos históricos presentes en los datos de entrenamiento, resultando en tasas de rechazo sistemáticamente más altas para solicitantes de comunidades rurales de la región de Chiriquí. La empresa financiera argumenta que el impacto ambiental del entrenamiento del modelo está "justificado" por la mayor eficiencia financiera operativa que genera.`,
    analysis: `Evalúen este caso desde el marco de la gestión ambiental integral: ¿Puede justificarse una huella de carbono de 284 tCO₂ con argumentos de eficiencia financiera? ¿Los sesgos algorítmicos contra comunidades rurales constituyen un impacto ambiental o social bajo la Ley 41/1998? ¿Qué instrumentos de evaluación ambiental deberían aplicarse?`,
    question: `Desde la perspectiva de la gestión ambiental integral (Ley 41/1998 + ISO 14001:2015), ¿cuál es el enfoque técnicamente CORRECTO para evaluar este sistema de IA?`,
    options: [
      "El impacto ambiental y el impacto social se evalúan como dimensiones completamente separadas e independientes",
      "ISO 14001 solo aplica a empresas con más de 50 empleados en el sector industrial tradicional",
      "La huella de carbono y los impactos sobre comunidades vulnerables son aspectos ambientales interrelacionados que requieren evaluación integrada",
      "Un EIA de categoría A emitido por MiAMBIENTE es suficiente para autorizar cualquier sistema de IA en Panamá",
    ],
    correct: 2,
    letter: "B",
    explanation: "La Ley 41/1998 y el principio de desarrollo sostenible reconocen que los sistemas ambientales, sociales y económicos son interdependientes. ISO 14001:2015 también contempla el contexto de la organización incluyendo las partes interesadas afectadas. Los impactos sobre comunidades vulnerables (justicia ambiental) son reconocidos internacionalmente como dimensión ambiental. Evaluar solo el CO₂ e ignorar los impactos sociales constituye una visión fragmentada e incompleta de la gestión ambiental.",
  },
  {
    id: 9,
    block: "🚀 BLOQUE 3 — SPRINT FINAL",
    blockColor: "#7c3aed",
    time: 300,
    title: "Escenario crítico: Panamá 2030",
    context: `Proyección 2030: Panamá planifica la instalación de 15 nuevos centros de datos en Colón y Panamá Oeste, con un consumo energético estimado de 800 MW. La capacidad de generación renovable actual de Panamá es de 3,200 MW (según ACP). El Canal de Panamá requiere aproximadamente 3,500 millones de litros de agua por año para sus operaciones. Los nuevos centros de datos competirían directamente por recursos hídricos con las operaciones del Canal y con comunidades de la Comarca Ngäbe-Buglé.`,
    analysis: `Aplicando el marco VUCA-BANI y la Ley 41/1998: (1) ¿Qué instrumentos de gestión ambiental panameños deben activarse ANTES de aprobar estas instalaciones? (2) ¿Qué actores institucionales deben intervenir (MiAMBIENTE, ACP, ASEP, Comarca Ngäbe-Buglé, otros)? (3) ¿Qué principio ambiental de la Ley 41 se activa primero ante la competencia por recursos hídricos escasos? Construyan una respuesta argumentada con mención de instrumentos legales específicos.`,
    question: `En el escenario de competencia por recursos hídricos entre los nuevos data centers, el Canal de Panamá y la Comarca Ngäbe-Buglé, ¿qué principio ambiental fundamental de la Ley 41/1998 debe activarse en PRIMER lugar?`,
    options: [
      "Principio de responsabilidad compartida entre todos los actores involucrados",
      "Principio precautorio: adoptar medidas preventivas ante la posibilidad de daño ambiental grave o irreversible",
      "Principio de quien contamina paga: imponer tasas a los data centers por uso hídrico",
      "Principio de participación ciudadana: consultar solo a las comunidades directamente afectadas",
    ],
    correct: 1,
    letter: "L",
    explanation: "El principio precautorio (artículo 4, inciso 4 de la Ley 41/1998) establece que cuando exista peligro de daño grave o irreversible al ambiente, la falta de certeza científica absoluta no debe usarse como razón para postergar medidas de protección. Ante la posibilidad de comprometer el suministro hídrico del Canal (infraestructura estratégica nacional) y de comunidades indígenas, el principio precautorio se activa PRIMERO, ANTES de autorizar las instalaciones.",
  },
  {
    id: 10,
    block: "🚀 BLOQUE 3 — SPRINT FINAL",
    blockColor: "#7c3aed",
    time: 300,
    title: "Decisión final: ¿IA verde o IA lavada?",
    context: `La empresa "TechPanamá S.A." publica en sus redes sociales un informe de sostenibilidad donde declara ser "carbono neutro" con el siguiente argumento: planta 10,000 árboles anuales en la provincia de Darién. Sin embargo, los datos técnicos verificables muestran: consume 50 MW de energía (40% proveniente de fuentes fósiles), no posee Estudio de Impacto Ambiental aprobado por MiAMBIENTE, sus servidores descargan agua caliente tratada al Río Matasnillo (ciudad de Panamá), y no cuenta con certificación ISO 14001 vigente. Los árboles plantados están en una provincia diferente a donde se generan los impactos ambientales directos.`,
    analysis: `Evalúen la declaración de "carbono neutro" usando los criterios de la norma ISO 14064 (cuantificación de GEI), los principios de la Ley 41/1998 y la definición técnica de compensación de carbono. Identifiquen todas las inconsistencias técnicas y legales presentes en el informe de TechPanamá. ¿Qué responsabilidad legal podría enfrentar esta empresa ante MiAMBIENTE?`,
    question: `El informe de sostenibilidad de TechPanamá S.A. que declara ser "carbono neutro" por plantar árboles en Darién mientras opera sin EIA y descarga al Río Matasnillo es un ejemplo de:`,
    options: [
      "Buenas prácticas de compensación ambiental reconocidas y autorizadas por la Ley 41/1998",
      "Greenwashing: declaraciones ambientales engañosas sin respaldo técnico ni legal verificable",
      "Economía circular aplicada correctamente al sector tecnológico panameño",
      "Cumplimiento parcial aceptable de ISO 14001:2015 durante una fase de transición certificada",
    ],
    correct: 1,
    letter: "E",
    explanation: "El greenwashing (lavado verde) ocurre cuando una organización hace declaraciones ambientales falsas o engañosas para aparentar sostenibilidad sin cumplirla realmente. TechPanamá presenta múltiples señales clásicas: compensación geográficamente desvinculada del impacto (árboles en Darién, daños en Ciudad de Panamá), declaración de 'carbono neutro' sin metodología ISO 14064 verificable, operación sin instrumentos legales requeridos (EIA) y descarga activa a cuerpos de agua. La ISO 14021 regula las 'autodeclaraciones ambientales' y prohíbe exactamente este tipo de afirmaciones no verificables.",
  },
];

const BLOCK_LABELS = {
  "🔥 BLOQUE 1 — CALENTAMIENTO": { retos: [1, 2, 3], time: "10 min/reto" },
  "⚙️ BLOQUE 2 — NÚCLEO TÉCNICO": { retos: [4, 5, 6, 7], time: "8 min/reto" },
  "🚀 BLOQUE 3 — SPRINT FINAL": { retos: [8, 9, 10], time: "5 min/reto" },
};

function formatTime(s) {
  const m = Math.floor(s / 60).toString().padStart(2, "0");
  const sec = (s % 60).toString().padStart(2, "0");
  return `${m}:${sec}`;
}

export default function App() {
  const [screen, setScreen] = useState("login");
  const [team, setTeam] = useState("");
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [openAnswer, setOpenAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [letters, setLetters] = useState([]);
  const [timer, setTimer] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [showExplain, setShowExplain] = useState(false);
  const [wrongAttempts, setWrongAttempts] = useState(0);
  const [shake, setShake] = useState(false);
  const timerRef = useRef(null);
  const totalRef = useRef(null);

  useEffect(() => {
    if (screen === "game") {
      setTimer(retos[current].time);
      clearInterval(timerRef.current);
      timerRef.current = setInterval(() => {
        setTimer((t) => (t > 0 ? t - 1 : 0));
      }, 1000);
      return () => clearInterval(timerRef.current);
    }
  }, [screen, current]);

  useEffect(() => {
    if (screen === "game") {
      clearInterval(totalRef.current);
      totalRef.current = setInterval(() => {
        setTotalTime((t) => t + 1);
      }, 1000);
      return () => clearInterval(totalRef.current);
    }
  }, [screen]);

  const timerPct = retos[current] ? (timer / retos[current].time) * 100 : 0;
  const timerColor = timerPct > 50 ? "#22c55e" : timerPct > 20 ? "#f59e0b" : "#ef4444";

  function handleSubmit() {
    if (selected === null) return;
    const isCorrect = selected === retos[current].correct;
    setSubmitted(true);
    setCorrect(isCorrect);
    if (isCorrect) {
      setLetters((prev) => [...prev, retos[current].letter]);
      setShowExplain(true);
      clearInterval(timerRef.current);
      setWrongAttempts(0);
    } else {
      setWrongAttempts((n) => n + 1);
      setShake(true);
      setTimeout(() => {
        setShake(false);
        setSubmitted(false);
        setSelected(null);
      }, 1500);
    }
  }

  function handleNext() {
    if (current < retos.length - 1) {
      setCurrent((c) => c + 1);
      setSelected(null);
      setSubmitted(false);
      setCorrect(false);
      setOpenAnswer("");
      setShowExplain(false);
      setWrongAttempts(0);
    } else {
      clearInterval(totalRef.current);
      setScreen("end");
    }
  }

  if (screen === "login") {
    return (
      <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f2d1f 100%)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "24px", fontFamily: "Arial, sans-serif" }}>
        <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(34,197,94,0.3)", borderRadius: "16px", padding: "40px 32px", maxWidth: "420px", width: "100%", textAlign: "center" }}>
          <div style={{ fontSize: "48px", marginBottom: "16px" }}>🤖</div>
          <div style={{ color: "#22c55e", fontSize: "11px", letterSpacing: "4px", fontWeight: "700", marginBottom: "8px", textTransform: "uppercase" }}>Operación</div>
          <div style={{ color: "#ffffff", fontSize: "28px", fontWeight: "900", letterSpacing: "3px", marginBottom: "4px" }}>CÓDIGO VERDE</div>
          <div style={{ color: "#94a3b8", fontSize: "12px", marginBottom: "4px" }}>Versión A · {GROUP}</div>
          <div style={{ color: "#64748b", fontSize: "11px", marginBottom: "28px" }}>{PROGRAM}</div>
          <div style={{ height: "1px", background: "rgba(34,197,94,0.2)", marginBottom: "28px" }} />
          <p style={{ color: "#cbd5e1", fontSize: "13px", marginBottom: "20px" }}>Selecciona tu equipo para comenzar la misión:</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "28px" }}>
            {TEAMS.map((t) => (
              <button key={t} onClick={() => setTeam(t)} style={{ background: team === t ? "rgba(34,197,94,0.25)" : "rgba(255,255,255,0.05)", border: team === t ? "2px solid #22c55e" : "1px solid rgba(255,255,255,0.1)", color: team === t ? "#22c55e" : "#94a3b8", padding: "12px", borderRadius: "8px", fontSize: "14px", fontWeight: "700", letterSpacing: "2px", cursor: "pointer", transition: "all 0.2s" }}>
                EQUIPO {t}
              </button>
            ))}
          </div>
          <div style={{ background: "rgba(34,197,94,0.06)", border: "1px solid rgba(34,197,94,0.2)", borderRadius: "10px", padding: "14px", marginBottom: "24px", textAlign: "left" }}>
            <p style={{ color: "#22c55e", fontSize: "11px", fontWeight: "700", marginBottom: "8px", letterSpacing: "1px" }}>⚠️ REGLAS DE LA MISIÓN</p>
            <p style={{ color: "#94a3b8", fontSize: "11px", lineHeight: "1.7", margin: 0 }}>
              • 10 retos · 90 minutos totales<br />
              • Cada reto tiene 2 partes: análisis en equipo + respuesta de opción múltiple<br />
              • <strong style={{ color: "#fbbf24" }}>Si respondes incorrectamente NO podrás avanzar</strong> hasta seleccionar la respuesta correcta<br />
              • Cada respuesta correcta desbloquea una letra de la palabra secreta<br />
              • Al completar los 10 retos: captura de pantalla y publica en el <strong style={{ color: "#22c55e" }}>Canal General de TEAMS</strong>
            </p>
          </div>
          <button onClick={() => { if (team) setScreen("game"); }} disabled={!team} style={{ width: "100%", background: team ? "linear-gradient(135deg, #16a34a, #15803d)" : "#1e293b", border: team ? "none" : "1px solid #334155", color: team ? "#ffffff" : "#475569", padding: "14px", borderRadius: "10px", fontSize: "15px", fontWeight: "700", letterSpacing: "1px", cursor: team ? "pointer" : "not-allowed", transition: "all 0.2s" }}>
            {team ? `⚡ INICIAR MISIÓN — EQUIPO ${team}` : "Selecciona un equipo primero"}
          </button>
        </div>
      </div>
    );
  }

  if (screen === "game") {
    const r = retos[current];
    return (
      <div style={{ minHeight: "100vh", background: "linear-gradient(180deg, #0f172a 0%, #0f2d1f 100%)", fontFamily: "Arial, sans-serif", padding: "16px" }}>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
          <div>
            <div style={{ color: "#22c55e", fontSize: "10px", fontWeight: "700", letterSpacing: "2px" }}>VERSIÓN A · EQUIPO {team}</div>
            <div style={{ color: "#475569", fontSize: "10px" }}>⏱ Total: {formatTime(totalTime)}</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ color: timerColor, fontSize: "28px", fontWeight: "900", fontFamily: "monospace" }}>{formatTime(timer)}</div>
            <div style={{ height: "3px", width: "80px", background: "#1e293b", borderRadius: "2px" }}>
              <div style={{ height: "100%", width: `${timerPct}%`, background: timerColor, borderRadius: "2px", transition: "width 1s linear, background 0.5s" }} />
            </div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ color: "#64748b", fontSize: "10px" }}>RETO</div>
            <div style={{ color: "#ffffff", fontSize: "20px", fontWeight: "900" }}>{current + 1}/10</div>
          </div>
        </div>

        {/* Letras desbloqueadas */}
        <div style={{ display: "flex", gap: "4px", justifyContent: "center", marginBottom: "16px" }}>
          {WORD.split("").map((l, i) => (
            <div key={i} style={{ width: "28px", height: "32px", borderRadius: "4px", border: i < letters.length ? "1px solid #22c55e" : "1px solid #1e293b", background: i < letters.length ? "rgba(34,197,94,0.15)" : "#0f172a", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: "900", color: i < letters.length ? "#22c55e" : "#1e293b", letterSpacing: "0", transition: "all 0.4s" }}>
              {i < letters.length ? letters[i] : "?"}
            </div>
          ))}
        </div>

        {/* Bloque */}
        <div style={{ background: r.blockColor + "22", border: `1px solid ${r.blockColor}55`, borderRadius: "8px", padding: "6px 12px", marginBottom: "12px", textAlign: "center" }}>
          <span style={{ color: r.blockColor, fontSize: "11px", fontWeight: "700", letterSpacing: "1px" }}>{r.block}</span>
        </div>

        {/* Tarjeta de reto */}
        <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "12px", padding: "20px", marginBottom: "12px" }}>
          <div style={{ color: "#22c55e", fontSize: "10px", fontWeight: "700", letterSpacing: "2px", marginBottom: "6px" }}>RETO {current + 1} — {r.title.toUpperCase()}</div>

          <div style={{ background: "rgba(30,58,95,0.4)", borderLeft: "3px solid #3b82f6", borderRadius: "0 8px 8px 0", padding: "12px", marginBottom: "12px" }}>
            <div style={{ color: "#60a5fa", fontSize: "10px", fontWeight: "700", letterSpacing: "1px", marginBottom: "6px" }}>📋 CONTEXTO DEL CASO</div>
            <p style={{ color: "#cbd5e1", fontSize: "12px", lineHeight: "1.7", margin: 0 }}>{r.context}</p>
          </div>

          <div style={{ background: "rgba(124,58,237,0.15)", borderLeft: "3px solid #7c3aed", borderRadius: "0 8px 8px 0", padding: "12px", marginBottom: "16px" }}>
            <div style={{ color: "#a78bfa", fontSize: "10px", fontWeight: "700", letterSpacing: "1px", marginBottom: "6px" }}>🧠 ANÁLISIS EN EQUIPO (discutan antes de responder)</div>
            <p style={{ color: "#ddd6fe", fontSize: "12px", lineHeight: "1.7", margin: 0 }}>{r.analysis}</p>
          </div>

          <div style={{ color: "#f1f5f9", fontSize: "13px", fontWeight: "600", marginBottom: "14px", lineHeight: "1.5" }}>{r.question}</div>

          <div className={shake ? "shake" : ""} style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {r.options.map((opt, i) => {
              let bg = "rgba(255,255,255,0.04)";
              let border = "rgba(255,255,255,0.1)";
              let color = "#94a3b8";
              if (submitted && correct && i === r.correct) { bg = "rgba(34,197,94,0.2)"; border = "#22c55e"; color = "#22c55e"; }
              if (submitted && !correct && i === selected) { bg = "rgba(239,68,68,0.2)"; border = "#ef4444"; color = "#ef4444"; }
              if (!submitted && i === selected) { bg = "rgba(34,197,94,0.1)"; border = "#22c55e55"; color = "#e2e8f0"; }
              return (
                <button key={i} onClick={() => { if (!submitted || (!correct)) setSelected(i); }} disabled={submitted && correct} style={{ background: bg, border: `1px solid ${border}`, color, padding: "12px 14px", borderRadius: "8px", fontSize: "12px", textAlign: "left", cursor: "pointer", lineHeight: "1.5", transition: "all 0.2s" }}>
                  <span style={{ fontWeight: "700", marginRight: "8px" }}>{String.fromCharCode(65 + i)})</span>{opt}
                </button>
              );
            })}
          </div>

          {submitted && !correct && (
            <div style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)", borderRadius: "8px", padding: "10px", marginTop: "12px", textAlign: "center" }}>
              <p style={{ color: "#f87171", fontSize: "12px", fontWeight: "700", margin: 0 }}>❌ Respuesta incorrecta — intento {wrongAttempts}. Vuelvan a analizar el caso y seleccionen de nuevo.</p>
            </div>
          )}

          {!submitted && (
            <button onClick={handleSubmit} disabled={selected === null} style={{ width: "100%", marginTop: "14px", background: selected !== null ? "linear-gradient(135deg, #16a34a, #15803d)" : "#1e293b", border: "none", color: selected !== null ? "#fff" : "#475569", padding: "13px", borderRadius: "8px", fontSize: "13px", fontWeight: "700", cursor: selected !== null ? "pointer" : "not-allowed", letterSpacing: "1px" }}>
              CONFIRMAR RESPUESTA
            </button>
          )}

          {showExplain && (
            <div style={{ marginTop: "14px", background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.3)", borderRadius: "10px", padding: "14px" }}>
              <div style={{ color: "#22c55e", fontSize: "11px", fontWeight: "700", letterSpacing: "1px", marginBottom: "8px" }}>✅ ¡CORRECTO! · LETRA DESBLOQUEADA: <span style={{ fontSize: "18px", fontWeight: "900" }}>{r.letter}</span></div>
              <p style={{ color: "#86efac", fontSize: "12px", lineHeight: "1.7", margin: "0 0 12px" }}>{r.explanation}</p>
              <button onClick={handleNext} style={{ width: "100%", background: "linear-gradient(135deg, #7c3aed, #6d28d9)", border: "none", color: "#fff", padding: "12px", borderRadius: "8px", fontSize: "13px", fontWeight: "700", cursor: "pointer", letterSpacing: "1px" }}>
                {current < retos.length - 1 ? `SIGUIENTE RETO →` : "🏁 FINALIZAR MISIÓN"}
              </button>
            </div>
          )}
        </div>

        <style>{`@keyframes shake { 0%,100%{transform:translateX(0)} 20%{transform:translateX(-8px)} 40%{transform:translateX(8px)} 60%{transform:translateX(-6px)} 80%{transform:translateX(6px)} } .shake{animation:shake 0.5s ease-in-out}`}</style>
      </div>
    );
  }

  if (screen === "end") {
    return (
      <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #0f172a, #0f2d1f)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "24px", fontFamily: "Arial, sans-serif" }}>
        <div style={{ background: "rgba(34,197,94,0.06)", border: "1px solid rgba(34,197,94,0.4)", borderRadius: "20px", padding: "40px 32px", maxWidth: "420px", width: "100%", textAlign: "center" }}>
          <div style={{ fontSize: "56px", marginBottom: "16px" }}>🏆</div>
          <div style={{ color: "#22c55e", fontSize: "12px", fontWeight: "700", letterSpacing: "4px", marginBottom: "8px" }}>MISIÓN COMPLETADA</div>
          <div style={{ color: "#ffffff", fontSize: "22px", fontWeight: "900", marginBottom: "4px" }}>EQUIPO {team}</div>
          <div style={{ color: "#64748b", fontSize: "12px", marginBottom: "28px" }}>{GROUP} — Versión A</div>

          <div style={{ marginBottom: "24px" }}>
            <p style={{ color: "#94a3b8", fontSize: "12px", marginBottom: "10px" }}>PALABRA DESCIFRADA:</p>
            <div style={{ display: "flex", gap: "4px", justifyContent: "center", flexWrap: "wrap" }}>
              {WORD.split("").map((l, i) => (
                <div key={i} style={{ width: "36px", height: "42px", background: "rgba(34,197,94,0.2)", border: "2px solid #22c55e", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", fontWeight: "900", color: "#22c55e" }}>{l}</div>
              ))}
            </div>
          </div>

          <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: "12px", padding: "16px", marginBottom: "24px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
              <span style={{ color: "#64748b", fontSize: "12px" }}>Tiempo total empleado:</span>
              <span style={{ color: "#22c55e", fontWeight: "700", fontSize: "14px" }}>{formatTime(totalTime)}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ color: "#64748b", fontSize: "12px" }}>Retos completados:</span>
              <span style={{ color: "#22c55e", fontWeight: "700", fontSize: "14px" }}>10 / 10</span>
            </div>
          </div>

          <div style={{ background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.2)", borderRadius: "10px", padding: "16px", marginBottom: "8px" }}>
            <p style={{ color: "#22c55e", fontSize: "12px", fontWeight: "700", marginBottom: "8px", letterSpacing: "1px" }}>📸 SIGUIENTE PASO</p>
            <p style={{ color: "#94a3b8", fontSize: "12px", lineHeight: "1.7", margin: 0 }}>
              Toma una <strong style={{ color: "#e2e8f0" }}>captura de pantalla</strong> de esta pantalla y publícala en el <strong style={{ color: "#22c55e" }}>Canal General del grupo IA-3-1 en Microsoft TEAMS</strong> indicando el nombre de tu equipo.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
