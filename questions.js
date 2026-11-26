const BANCO_PREGUNTAS = [
  // ================= GUÍA 1 (1 - 48) =================
  {
    id: 1,
    categoria: "Planificación",
    pregunta: "Diagramas que constan de una serie de filas y columnas. En la primera columna se indican las actividades a realizar y en las siguientes la duración de cada actividad mediante barras.",
    respuestas: ["De Gantt", "De precedencia", "De actividad en nodos"],
    correcta: "De Gantt",
    explicacion: "El diagrama de Gantt representa las tareas en filas y su duración temporal mediante barras horizontales sobre una escala de tiempo."
  },
  {
    id: 2,
    categoria: "Ciclo de Vida",
    pregunta: "Ciclo de vida que no tiene bucles de retroalimentación.",
    respuestas: ["Espiral", "Cascada", "Entrega evolutiva"],
    correcta: "Cascada",
    explicacion: "El modelo en cascada (Waterfall) es secuencial y lineal: cada fase debe completarse antes de pasar a la siguiente, sin bucles de retroalimentación formales."
  },
  {
    id: 3,
    categoria: "Ciclo de Vida",
    pregunta: "Define el comienzo, final y fases de un proyecto, además de bucles de retroalimentación.",
    respuestas: ["Metodología", "Estándar", "Ciclo de vida"],
    correcta: "Ciclo de vida",
    explicacion: "El ciclo de vida del proyecto establece las fases desde el inicio hasta el cierre y cómo interactúan o se retroalimentan entre sí."
  },
  {
    id: 4,
    categoria: "Planificación",
    pregunta: "Técnica desarrollada a finales de los 50 por Morgan R. Walker, de DuPont, y James E. Kelley, Jr., de Remington Rand. Busca una solución óptima en tiempo y costes.",
    respuestas: ["EDT", "Diagrama de Gantt", "CPM"],
    correcta: "CPM",
    explicacion: "El Método del Camino Crítico (CPM, Critical Path Method) fue creado por DuPont y Remington Rand para calcular la duración mínima y optimizar tiempo y costes."
  },
  {
    id: 5,
    categoria: "Planificación",
    pregunta: "Actividad de duración nula que se utiliza como marcador de fechas o punto de control dentro del proyecto.",
    respuestas: ["Holgura", "Precedencia", "Hito"],
    correcta: "Hito",
    explicacion: "Un hito (milestone) tiene duración cero y marca eventos clave o puntos de control importantes en el cronograma."
  },
  {
    id: 6,
    categoria: "Ciclo de Vida",
    pregunta: "Segunda fase en la vida de un proyecto.",
    respuestas: ["Gestión", "Control", "Dirección"],
    correcta: "Gestión",
    explicacion: "Desde la perspectiva de dirección, las tres fases son: 1) Preparación, 2) Gestión (seguimiento y control) y 3) Cierre o terminación."
  },
  {
    id: 7,
    categoria: "Roles & Stakeholders",
    pregunta: "Persona, organización o grupo que usará los resultados del proyecto a nivel operativo. Dan pistas sobre el problema de funcionamiento y responden de que el sistema funcione de manera eficiente.",
    respuestas: ["Cliente", "Usuario", "Stakeholders"],
    correcta: "Usuario",
    explicacion: "El usuario opera el sistema o resultado final del proyecto, mientras que el cliente es quien aporta los recursos financieros."
  },
  {
    id: 8,
    categoria: "Control & EVM",
    pregunta: "Método objetivo para medir el desempeño del proyecto en alcance, tiempo y costes.",
    respuestas: ["EDT", "CPM", "EVM"],
    correcta: "EVM",
    explicacion: "La Gestión del Valor Ganado (EVM, Earned Value Management) integra alcance, cronograma y costes para evaluar objetivamente el rendimiento del proyecto."
  },
  {
    id: 9,
    categoria: "Control & EVM",
    pregunta: "Los principios fundamentales del control de proyectos son:",
    respuestas: [
      "Prevención, Calidad, Acción.",
      "Prevención, Detección, Acción.",
      "Prevención, Implementación, Acción."
    ],
    correcta: "Prevención, Detección, Acción.",
    explicacion: "El control eficaz se basa en prevenir desviaciones, detectarlas a tiempo mediante seguimiento y ejecutar acciones correctoras."
  },
  {
    id: 10,
    categoria: "Control & EVM",
    pregunta: "En EDT/EVM, nos permite hacer una estimación del coste final del proyecto.",
    respuestas: ["SPI", "CPI", "EAC"],
    correcta: "EAC",
    explicacion: "EAC (Estimate At Completion / Estimación a la Conclusión) proyecta el coste total esperado del proyecto al finalizar."
  },
  {
    id: 11,
    categoria: "Planificación",
    pregunta: "Plan de gestión del proyecto: documento que recoge los resultados de la subfase de planificación y que es la salida de la misma y el punto de comienzo de la fase de desarrollo.",
    respuestas: ["VERDADERO", "FALSO"],
    correcta: "VERDADERO",
    explicacion: "El Plan de Gestión del Proyecto (o Plan de Proyecto Maestro) consolida la planificación y sirve como hoja de ruta para la ejecución y el control."
  },
  {
    id: 12,
    categoria: "Fundamentos",
    pregunta: "Un estándar define cómo hay que hacer y normalmente es parte de o es utilizado por una metodología.",
    respuestas: ["VERDADERO", "FALSO"],
    correcta: "VERDADERO",
    explicacion: "Los estándares establecen normas, buenas prácticas o pautas de referencia que las metodologías adaptan e integran en sus procedimientos."
  },
  {
    id: 13,
    categoria: "Fundamentos",
    pregunta: "Un proyecto debe tener un principio y un final.",
    respuestas: ["VERDADERO", "FALSO"],
    correcta: "VERDADERO",
    explicacion: "La temporalidad es una característica esencial de todo proyecto: tiene un inicio y un final definidos."
  },
  {
    id: 14,
    categoria: "Planificación",
    pregunta: "La planificación es la etapa más delicada de la vida de un proyecto. Fallar en la planificación es planificar el fallo y el éxito de un proyecto.",
    respuestas: ["VERDADERO", "FALSO"],
    correcta: "VERDADERO",
    explicacion: "Una planificación deficiente compromete alcance, plazos y costes desde el origen; planificar bien es clave para el éxito."
  },
  {
    id: 15,
    categoria: "Fundamentos",
    pregunta: "El diseño de un proyecto implica definir objetivos alcanzables y relevantes, y decidir qué propuestas viables deben convertirse en proyectos y cuáles no.",
    respuestas: ["VERDADERO", "FALSO"],
    correcta: "VERDADERO",
    explicacion: "Durante el diseño y conceptualización se evalúa la viabilidad y se concretan objetivos claros antes de comprometer recursos."
  },
  {
    id: 16,
    categoria: "Fundamentos",
    pregunta: "Los proyectos son el conjunto de actividades continuas y repetitivas que se realizan de manera habitual en una organización.",
    respuestas: ["VERDADERO", "FALSO"],
    correcta: "FALSO",
    explicacion: "Las actividades continuas y repetitivas son operaciones. Los proyectos son esfuerzos temporales para crear un producto, servicio o resultado único."
  },
  {
    id: 17,
    categoria: "Calidad",
    pregunta: "ISO 9000:2015 define calidad como el conjunto de características de un producto o servicio relacionadas con su capacidad de satisfacer necesidades implícitas y explícitas.",
    respuestas: ["VERDADERO", "FALSO"],
    correcta: "VERDADERO",
    explicacion: "En el marco del curso, la definición de calidad bajo ISO se asocia a la capacidad de satisfacer necesidades explícitas e implícitas del cliente/usuario."
  },
  {
    id: 18,
    categoria: "Roles & Stakeholders",
    pregunta: "Para ser un buen director de proyectos tecnológicos basta con conocimientos tecnológicos y técnicos.",
    respuestas: ["VERDADERO", "FALSO"],
    correcta: "FALSO",
    explicacion: "Además de conocimientos técnicos, el director de proyecto necesita habilidades de control administrativo, gestión de riesgos y habilidades interpersonales/liderazgo."
  },
  {
    id: 19,
    categoria: "Planificación",
    pregunta: "Programa de trabajo: planificación temporal de las actividades y utilización de recursos. Es el calendario que enlaza tareas con recursos y permite estimar los costes del proyecto.",
    respuestas: ["VERDADERO", "FALSO"],
    correcta: "VERDADERO",
    explicacion: "El programa de trabajo vincula tareas, tiempos y recursos asignados, facilitando el cálculo del presupuesto."
  },
  {
    id: 20,
    categoria: "Planificación",
    pregunta: "Un diagrama de Gantt contiene explícitamente las dependencias entre las distintas tareas de un proyecto.",
    respuestas: ["VERDADERO", "FALSO"],
    correcta: "FALSO",
    explicacion: "El diagrama de Gantt clásico muestra actividades y duraciones en el tiempo, pero no explicita por sí solo la red de dependencias como PERT o CPM."
  },
  {
    id: 21,
    categoria: "Ágil & Scrum",
    pregunta: "Metodología de gestión ágil que utiliza un tablero con tarjetas que representan las actividades del proyecto.",
    respuestas: ["PERT", "Kanban", "Scrum"],
    correcta: "Kanban",
    explicacion: "Kanban utiliza tableros visuales con columnas de estado y tarjetas para gestionar el flujo de trabajo y limitar el trabajo en curso (WIP)."
  },
  {
    id: 22,
    categoria: "Ciclo de Vida",
    pregunta: "Desde el punto de vista de su dirección, un proyecto se divide en tres fases:",
    respuestas: [
      "Preparación, Gestión y Cierre",
      "Preparación, Calendarización y Calidad",
      "Preparación, Gestión y Alcance"
    ],
    correcta: "Preparación, Gestión y Cierre",
    explicacion: "Las tres macrofases directivas son Preparación (definición/planificación), Gestión (seguimiento y control) y Cierre (terminación)."
  },
  {
    id: 23,
    categoria: "Planificación",
    pregunta: "Actividades que requieren atención inmediata de acuerdo con la Matriz de Administración del Tiempo.",
    respuestas: ["Relevantes", "Importantes", "Urgentes"],
    correcta: "Urgentes",
    explicacion: "En la matriz de Eisenhower (Administración del Tiempo), lo urgente demanda atención inmediata, mientras que lo importante aporta valor a largo plazo."
  },
  {
    id: 24,
    categoria: "Fundamentos",
    pregunta: "Conjunto de procedimientos basados en principios lógicos, utilizados para alcanzar una gama de objetivos.",
    respuestas: ["Estándares", "Metodologías", "Procesos"],
    correcta: "Metodologías",
    explicacion: "Una metodología es un conjunto estructurado de procedimientos y técnicas basados en principios lógicos para lograr los objetivos del proyecto."
  },
  {
    id: 25,
    categoria: "Planificación",
    pregunta: "En la planificación se concretan los tres cimientos del proyecto, que son:",
    respuestas: [
      "Alcance, Diseño, Cierre",
      "Alcance, Planificación, Duración",
      "Alcance, Coste económico, Duración"
    ],
    correcta: "Alcance, Coste económico, Duración",
    explicacion: "Los tres cimientos o restricciones fundamentales que se concretan en la planificación son Alcance, Coste económico y Duración."
  },
  {
    id: 26,
    categoria: "Planificación",
    pregunta: "Gráficos para planificar las actividades de la WBS, porque entre ellas hay dependencias: unas deben terminar del todo o en parte antes de que empiecen otras.",
    respuestas: ["Diagrama de Gantt", "Diagrama de PERT", "Diagrama CPM"],
    correcta: "Diagrama de PERT",
    explicacion: "El diagrama de PERT modela gráficamente las dependencias y precedencias entre actividades de la WBS/EDT."
  },
  {
    id: 27,
    categoria: "Fundamentos",
    pregunta: "Elementos del triángulo de la gestión de proyectos:",
    respuestas: [
      "Alcance, eficiencia y tiempo",
      "Tiempo, coste y alcance",
      "Coste, recursos y tiempo"
    ],
    correcta: "Tiempo, coste y alcance",
    explicacion: "La triple restricción clásica (triángulo de la gestión de proyectos) está formada por Tiempo, Coste y Alcance (con la Calidad en el centro)."
  },
  {
    id: 28,
    categoria: "Fundamentos",
    pregunta: "Un proyecto es una secuencia bien definida de eventos con principio y final, dirigida a un objetivo claro, realizada por personas dentro de parámetros de tiempo, coste, recursos y calidad.",
    respuestas: ["VERDADERO", "FALSO"],
    correcta: "VERDADERO",
    explicacion: "Esta definición recoge todos los atributos esenciales de un proyecto: temporalidad, objetivo claro, equipo humano y restricciones de tiempo, coste, recursos y calidad."
  },
  {
    id: 29,
    categoria: "Calidad",
    pregunta: "Es recomendable entregar más funcionalidades o características de las requeridas.",
    respuestas: ["VERDADERO", "FALSO"],
    correcta: "FALSO",
    explicacion: "Entregar extras no solicitados (gold plating) consume tiempo y presupuesto sin aportar valor validado por el cliente y puede introducir riesgos innecesarios."
  },
  {
    id: 30,
    categoria: "Planificación",
    pregunta: "Aunque el diseño y la planificación son de naturaleza secuencial, pueden solaparse en el tiempo e interaccionar.",
    respuestas: ["VERDADERO", "FALSO"],
    correcta: "VERDADERO",
    explicacion: "En la práctica, el diseño y la planificación se retroalimentan y pueden solaparse parcialmente para refinar el alcance y la viabilidad."
  },
  {
    id: 31,
    categoria: "Planificación",
    pregunta: "Planificación: conjunto de actividades y tareas secuenciales que permiten elaborar un plan o programa de trabajo, con recursos, uso en el tiempo, resultados esperados, actividades e hitos.",
    respuestas: ["VERDADERO", "FALSO"],
    correcta: "VERDADERO",
    explicacion: "Planificar consiste precisamente en estructurar actividades, hitos, recursos y tiempos en un programa de trabajo coherente."
  },
  {
    id: 32,
    categoria: "Cierre",
    pregunta: "El cierre se centra en clarificar el problema a solucionar, definiendo el producto a obtener o servicio a proporcionar.",
    respuestas: ["VERDADERO", "FALSO"],
    correcta: "FALSO",
    explicacion: "Clarificar el problema y definir el producto corresponde a la fase de preparación/conceptualización, no al cierre."
  },
  {
    id: 33,
    categoria: "PMBOK®",
    pregunta: "La Guía de los Fundamentos de la Dirección de Proyectos (PMBOK), en su segunda edición, se convirtió en un estándar ANSI en el año 2000.",
    respuestas: ["VERDADERO", "FALSO"],
    correcta: "VERDADERO",
    explicacion: "La segunda edición del PMBOK® (año 2000) fue reconocida como estándar nacional estadounidense (ANSI/PMI 99-001-2000)."
  },
  {
    id: 34,
    categoria: "Roles & Stakeholders",
    pregunta: "En un proyecto hay roles de individuos u organizaciones activamente involucrados, o cuyos intereses pueden verse afectados por la ejecución y el término. Nos referimos a:",
    respuestas: ["Cliente", "Project manager", "Stakeholders"],
    correcta: "Stakeholders",
    explicacion: "Los stakeholders o interesados son todas las personas u organizaciones que participan o pueden verse afectadas positiva o negativamente por el proyecto."
  },
  {
    id: 35,
    categoria: "Control & EVM",
    pregunta: "Seguimiento y control de la ejecución: comparar dónde estamos y dónde debemos estar, y emprender acciones correctoras.",
    respuestas: ["Preparación", "Gestión", "Cierre"],
    correcta: "Gestión",
    explicacion: "El seguimiento, la medición del avance respecto al plan y la aplicación de acciones correctoras conforman la fase de Gestión."
  },
  {
    id: 36,
    categoria: "Roles & Stakeholders",
    pregunta: "Término utilizado cuando se encarga el desarrollo del proyecto a otra unidad de la misma organización.",
    respuestas: ["In-house", "Freelance", "Subcontratación"],
    correcta: "In-house",
    explicacion: "El desarrollo in-house (interno) se realiza dentro de la propia organización, sin externalizarlo a terceros."
  },
  {
    id: 37,
    categoria: "Roles & Stakeholders",
    pregunta: "Persona, organización o grupo que proporciona los recursos financieros para un proyecto.",
    respuestas: ["Cliente", "Usuario", "Stakeholders"],
    correcta: "Cliente",
    explicacion: "El cliente (o patrocinador financiero) aporta los recursos económicos y aprueba la entrega, a diferencia del usuario que opera el sistema."
  },
  {
    id: 38,
    categoria: "Calidad",
    pregunta: "Grado en el que un conjunto de características cumple con requisitos predefinidos.",
    respuestas: ["Estándar", "Calidad", "Certificación"],
    correcta: "Calidad",
    explicacion: "La calidad mide en qué grado las características inherentes de un producto o servicio cumplen con los requisitos establecidos."
  },
  {
    id: 39,
    categoria: "Ciclo de Vida",
    pregunta: "Primera fase en la vida de un proyecto:",
    respuestas: ["Diseño", "Planificación", "Preparación"],
    correcta: "Preparación",
    explicacion: "En la división directiva en tres fases (Preparación, Gestión y Cierre), la primera fase es la Preparación (que engloba diseño y planificación)."
  },
  {
    id: 40,
    categoria: "Planificación",
    pregunta: "En un EDT se ve claramente la dependencia entre las tareas y el orden en que deben ejecutarse.",
    respuestas: ["VERDADERO", "FALSO"],
    correcta: "FALSO",
    explicacion: "La EDT (Estructura de Desglose del Trabajo / WBS) muestra una descomposición jerárquica de entregables, no las dependencias temporales ni el orden de ejecución."
  },
  {
    id: 41,
    categoria: "Control & EVM",
    pregunta: "Gestionar el riesgo significa evitar todos los riesgos. La gestión del riesgo puede eliminar los riesgos y prevenir todos los fracasos.",
    respuestas: ["VERDADERO", "FALSO"],
    correcta: "FALSO",
    explicacion: "Es imposible eliminar todos los riesgos. La gestión de riesgos busca identificarlos, evaluarlos, mitigarlos y preparar respuestas para reducir su impacto."
  },
  {
    id: 42,
    categoria: "Fundamentos",
    pregunta: "Características de los proyectos: temporal, único y gradual.",
    respuestas: ["VERDADERO", "FALSO"],
    correcta: "VERDADERO",
    explicacion: "Todo proyecto es temporal (tiene principio y fin), único (producto o resultado irrepetible) y de elaboración gradual (se detalla progresivamente)."
  },
  {
    id: 43,
    categoria: "Control & EVM",
    pregunta: "Los riesgos proceden de acontecimientos que, si ocurren, pueden tener un efecto positivo o negativo. El riesgo tiene una causa y, si se produce, un impacto.",
    respuestas: ["VERDADERO", "FALSO"],
    correcta: "VERDADERO",
    explicacion: "Un riesgo es un evento incierto que puede generar una amenaza (impacto negativo) o una oportunidad (impacto positivo)."
  },
  {
    id: 44,
    categoria: "Fundamentos",
    pregunta: "La metodología de gestión de un proyecto es la misma que la metodología de su desarrollo.",
    respuestas: ["VERDADERO", "FALSO"],
    correcta: "FALSO",
    explicacion: "La metodología de gestión dirige y coordina el proyecto (alcance, tiempo, costes, riesgos), mientras que la de desarrollo define cómo construir técnicamente el producto."
  },
  {
    id: 45,
    categoria: "PMBOK®",
    pregunta: "Estándar para manejar y administrar proyectos que es reconocido más ampliamente.",
    respuestas: ["PMP", "PMI", "PMBOK"],
    correcta: "PMBOK",
    explicacion: "El PMBOK® (Project Management Body of Knowledge) publicado por el PMI es el estándar más reconocido internacionalmente para la dirección de proyectos."
  },
  {
    id: 46,
    categoria: "Ágil & Scrum",
    pregunta: "Esta metodología de gestión ágil proviene de finales de los años 40, proviene de una palabra japonesa. Actualmente se ha extendido a múltiples ámbitos. Resulta muy intuitiva, fácil de utilizar y destaca por gestionar las distintas tareas de un proyecto de una manera muy visual.",
    respuestas: ["Kanban", "SCRUM", "CPM"],
    correcta: "Kanban",
    explicacion: "Kanban nació en Toyota (Japón) a finales de los años 40 y significa 'tarjeta visual', destacando por su tablero visual de flujo de tareas."
  },
  {
    id: 47,
    categoria: "Fundamentos",
    pregunta: "El éxito de la gestión de un Proyecto Tecnológico consistirá en llevarlo a cabo:",
    respuestas: [
      "En el plazo marcado. Dentro del presupuesto establecido. Dentro de los objetivos de la organización.",
      "Dentro de lo planificado para cada área. Dentro del presupuesto establecido. De acuerdo con las funcionalidades acordadas.",
      "En el plazo marcado. Dentro del presupuesto establecido. De acuerdo con las funcionalidades acordadas."
    ],
    correcta: "En el plazo marcado. Dentro del presupuesto establecido. De acuerdo con las funcionalidades acordadas.",
    explicacion: "El éxito operativo de la gestión exige cumplir simultáneamente con el plazo, el presupuesto y las funcionalidades/alcance acordados."
  },
  {
    id: 48,
    categoria: "Planificación",
    pregunta: "Técnica utilizada para identificar la secuencia de actividades que tiene la capacidad de aumentar la duración del proyecto.",
    respuestas: ["CPM", "EDT", "EVM"],
    correcta: "CPM",
    explicacion: "CPM identifica la ruta crítica: la secuencia de actividades con holgura cero cuyo retraso incrementa directamente la duración total del proyecto."
  },

  // ================= GUÍA 2 (49 - 102) =================
  {
    id: 49,
    categoria: "PMBOK®",
    pregunta: "¿Qué cambio de enfoque promueve la 7ª edición del PMBOK® según el texto?",
    respuestas: [
      "Centrarse únicamente en los entregables sin considerar resultados",
      "Mantener exclusivamente un enfoque predictivo y basado sólo en procesos",
      "Un enfoque basado en principios, centrado en resultados y en la entrega de valor",
      "Eliminar la consideración del valor para los interesados"
    ],
    correcta: "Un enfoque basado en principios, centrado en resultados y en la entrega de valor",
    explicacion: "PMBOK® 7ª Edición evoluciona de un enfoque prescriptivo basado en procesos a uno basado en 12 principios, dominios de desempeño y entrega de valor."
  },
  {
    id: 50,
    categoria: "Fundamentos",
    pregunta: "¿Por qué aumenta la necesidad de preparación y seguimiento en un proyecto?",
    respuestas: [
      "Porque a mayor complejidad del proyecto se requiere mayor rigor en los métodos y técnicas.",
      "Porque los proyectos simples necesitan más seguimiento que los complejos.",
      "Porque la complejidad no influye en la planificación.",
      "Porque siempre hay tiempo ilimitado para gestionar cualquier proyecto."
    ],
    correcta: "Porque a mayor complejidad del proyecto se requiere mayor rigor en los métodos y técnicas.",
    explicacion: "A medida que crecen el tamaño, la incertidumbre o la complejidad técnica/organizativa, se vuelve indispensable aplicar métodos más rigurosos."
  },
  {
    id: 51,
    categoria: "Ágil & Scrum",
    pregunta: "¿Cuál es la duración recomendada del sprint?",
    respuestas: ["Un mes", "Un año", "Seis meses", "Un lustro"],
    correcta: "Un mes",
    explicacion: "En Scrum, un sprint es un time-box de duración fija de un mes o menos (habitualmente entre 2 y 4 semanas)."
  },
  {
    id: 52,
    categoria: "PMBOK®",
    pregunta: "¿Qué certificaciones relacionadas con el PMBOK se mencionan como las más reconocidas por las empresas?",
    respuestas: [
      "CMMi Practitioner y Auditor",
      "ISO 9001 Lead Auditor",
      "CAPM® y PMP®",
      "PRINCE2 Foundation y Practitioner"
    ],
    correcta: "CAPM® y PMP®",
    explicacion: "El PMI otorga las certificaciones CAPM® (nivel asociado) y PMP® (Project Management Professional), ampliamente valoradas en la industria."
  },
  {
    id: 53,
    categoria: "Planificación",
    pregunta: "¿Qué implica \"planificar un proyecto\" según lo visto durante el curso?",
    respuestas: [
      "Solo crear un cronograma sin definir recursos ni costes.",
      "Firmar el contrato y no desarrollar un Plan de Proyecto Maestro.",
      "Establecer y concretar el ámbito, calendario, presupuesto y recursos hasta un nivel gestionable.",
      "Contratar al equipo sin definir objetivos ni actividades."
    ],
    correcta: "Establecer y concretar el ámbito, calendario, presupuesto y recursos hasta un nivel gestionable.",
    explicacion: "Planificar implica detallar alcance, cronograma, presupuesto y recursos con suficiente granularidad para poder ejecutar y controlar el proyecto."
  },
  {
    id: 54,
    categoria: "Roles & Stakeholders",
    pregunta: "Según el documento, ¿cuál es una función clave del project manager?",
    respuestas: [
      "Ser el propietario legal de la organización que financia el proyecto.",
      "Ser la persona responsable de la administración del proyecto y de administrar las expectativas de los interesados.",
      "Realizar únicamente tareas técnicas sin interacción con los interesados.",
      "Auditar externamente a la organización sin participar en la gestión."
    ],
    correcta: "Ser la persona responsable de la administración del proyecto y de administrar las expectativas de los interesados.",
    explicacion: "El Project Manager dirige el proyecto de extremo a extremo y gestiona activamente la comunicación y expectativas de los stakeholders."
  },
  {
    id: 55,
    categoria: "Fundamentos",
    pregunta: "¿Qué significa que un proyecto sea \"único\" según la definición del material?",
    respuestas: [
      "Que el producto o servicio es distinto de otros (no existe en la actualidad) y responde a una solicitud que no se aborda en las actividades normales.",
      "Que siempre se emplea exactamente la misma metodología en cada proyecto.",
      "Que no necesita seguimiento ni control de calidad.",
      "Que es idéntico a todos los demás proyectos de la empresa."
    ],
    correcta: "Que el producto o servicio es distinto de otros (no existe en la actualidad) y responde a una solicitud que no se aborda en las actividades normales.",
    explicacion: "Incluso si se usan tecnologías similares, cada proyecto genera un entregable diferente bajo condiciones y requisitos específicos."
  },
  {
    id: 56,
    categoria: "Ágil & Scrum",
    pregunta: "¿Cómo se describe Scrum?",
    respuestas: [
      "Un diagrama de planificación parecido al de Gantt",
      "Proceso de desarrollo iterativo e incremental utilizado en entornos ágiles, inspirado en el rugby",
      "Una técnica de cálculo de costes para proyectos de ingeniería",
      "Un estándar oficial de documentación de proyectos del PMI relacionado a métodos predictivos"
    ],
    correcta: "Proceso de desarrollo iterativo e incremental utilizado en entornos ágiles, inspirado en el rugby",
    explicacion: "Scrum toma su nombre del rugby (trabajo en equipo compacto hacia una meta) y organiza el trabajo en iteraciones cortas e incrementales llamadas sprints."
  },
  {
    id: 57,
    categoria: "Fundamentos",
    pregunta: "¿Existe una única metodología universal para todos los proyectos?",
    respuestas: [
      "Sí, existe una metodología universal que funciona para cualquier proyecto.",
      "Sí, solo las metodologías ágiles son universales.",
      "No, no hay una única metodología; es necesario adaptar las metodologías según la industria y el proyecto.",
      "Sí, solo las metodologías pesadas son universales."
    ],
    correcta: "No, no hay una única metodología; es necesario adaptar las metodologías según la industria y el proyecto.",
    explicacion: "Cada sector, tamaño de equipo, tecnología y nivel de incertidumbre requiere adaptar (tailoring) la metodología más adecuada."
  },
  {
    id: 58,
    categoria: "Cierre",
    pregunta: "¿En qué situaciones puede considerarse que un proyecto ha concluido?",
    respuestas: [
      "Cuando el equipo decide continuar indefinidamente sin cierre formal.",
      "Cuando el producto aún es necesario, pero está incompleto.",
      "Cuando simplemente se agota el presupuesto, aunque queden objetivos por cumplir.",
      "Cuando se alcanzan los objetivos y no queda nada por hacer, o cuando se detecta que los objetivos no pueden alcanzarse."
    ],
    correcta: "Cuando se alcanzan los objetivos y no queda nada por hacer, o cuando se detecta que los objetivos no pueden alcanzarse.",
    explicacion: "Un proyecto finaliza cuando se cumplen sus objetivos o cuando se cancela formalmente al comprobar que dichos objetivos son inalcanzables o ya no son necesarios."
  },
  {
    id: 59,
    categoria: "Fundamentos",
    pregunta: "Cuanta mayor es la complejidad de un proyecto, menos necesaria es su preparación y seguimiento.",
    respuestas: ["Verdadero", "Falso"],
    correcta: "Falso",
    explicacion: "Es justo al contrario: a mayor complejidad, mayor necesidad de preparación rigurosa y seguimiento continuo."
  },
  {
    id: 60,
    categoria: "Control & EVM",
    pregunta: "Durante la fase de gestión se emplean técnicas de medición del estado y de control de riesgos para el seguimiento y control.",
    respuestas: ["Verdadero", "Falso"],
    correcta: "Verdadero",
    explicacion: "En la fase de gestión se monitoriza el progreso, se mide el desempeño (p. ej. EVM) y se controlan los riesgos identificados."
  },
  {
    id: 61,
    categoria: "Planificación",
    pregunta: "Planificar un proyecto implica concretar el ámbito, calendario, presupuesto y recursos hasta un nivel que permita gestionarlo eficazmente.",
    respuestas: ["Verdadero", "Falso"],
    correcta: "Verdadero",
    explicacion: "Bajar la definición hasta un nivel gestionable permite asignar responsables, medir avances y controlar desviaciones."
  },
  {
    id: 62,
    categoria: "Fundamentos",
    pregunta: "Un proyecto siempre tiene un inicio y un final definidos.",
    respuestas: ["Verdadero", "Falso"],
    correcta: "Verdadero",
    explicacion: "Por definición, los proyectos son temporales y cuentan con puntos claros de comienzo y terminación."
  },
  {
    id: 63,
    categoria: "Roles & Stakeholders",
    pregunta: "Los equipos de proyecto suelen ser temporales y dinámicos para cumplir las exigencias del proyecto.",
    respuestas: ["Verdadero", "Falso"],
    correcta: "Verdadero",
    explicacion: "Los equipos se conforman para el proyecto y su composición puede variar según las necesidades técnicas de cada fase."
  },
  {
    id: 64,
    categoria: "Cierre",
    pregunta: "La fase de terminación no requiere cerrar la cuenta del proyecto para impedir gastos posteriores imputables al mismo.",
    respuestas: ["Verdadero", "Falso"],
    correcta: "Falso",
    explicacion: "Cerrar administrativa y financieramente la cuenta del proyecto es obligatorio en la terminación para evitar cargos posteriores no autorizados."
  },
  {
    id: 65,
    categoria: "Calidad",
    pregunta: "El éxito de un proyecto tecnológico depende únicamente del cumplimiento del tiempo, coste y alcance sin considerar criterios de calidad.",
    respuestas: ["Verdadero", "FALSO".replace("FALSO", "Falso")],
    correcta: "Falso",
    explicacion: "La calidad y la satisfacción del cliente/usuario son esenciales; cumplir plazo y presupuesto con un producto defectuoso no es un proyecto exitoso."
  },
  {
    id: 66,
    categoria: "Planificación",
    pregunta: "La aprobación de los objetivos y del alcance del proyecto se realiza mediante una reunión de lanzamiento del proyecto.",
    respuestas: ["Verdadero", "Falso"],
    correcta: "Verdadero",
    explicacion: "La reunión de lanzamiento (kick-off meeting) alinea a los interesados y formaliza la aprobación inicial de objetivos y alcance."
  },
  {
    id: 67,
    categoria: "Planificación",
    pregunta: "El Plan de Proyecto Maestro sirve como guía para el desarrollo, el seguimiento y el control del proyecto.",
    respuestas: ["Verdadero", "Falso"],
    correcta: "Verdadero",
    explicacion: "El Plan de Proyecto Maestro es la línea base de referencia contra la cual se ejecuta, supervisa y controla todo el proyecto."
  },
  {
    id: 68,
    categoria: "Planificación",
    pregunta: "La preparación de un proyecto incluye confirmar la cadena de suministros para los elementos materiales del proyecto.",
    respuestas: ["Verdadero", "Falso"],
    correcta: "Verdadero",
    explicacion: "Asegurar la disponibilidad y logística de materiales y suministros forma parte de la preparación antes de iniciar la ejecución."
  },
  {
    id: 69,
    categoria: "Ágil & Scrum",
    pregunta: "¿Qué tipo de elementos debe contener el product backlog?",
    respuestas: [
      "Listas de empleados y sus vacaciones",
      "Requisitos funcionales y no funcionales, priorización y estimaciones del equipo",
      "Únicamente fechas de entrega y costes sin requisitos",
      "Sólo documentación formal y diagramas sin prioridades"
    ],
    correcta: "Requisitos funcionales y no funcionales, priorización y estimaciones del equipo",
    explicacion: "El Product Backlog es la lista ordenada y priorizada de requisitos funcionales, no funcionales y estimaciones necesarias para el producto."
  },
  {
    id: 70,
    categoria: "Fundamentos",
    pregunta: "¿Qué característica corresponde a las operaciones y no a los proyectos?",
    respuestas: [
      "Ser actividades continuas y repetitivas realizadas habitualmente.",
      "Formar equipos temporales y dinámicos para cumplir exigencias.",
      "Tener puntos claros de inicio y fin temporales.",
      "Entregar un producto, servicio o resultado único."
    ],
    correcta: "Ser actividades continuas y repetitivas realizadas habitualmente.",
    explicacion: "Las operaciones mantienen el negocio en marcha de forma continua y repetitiva, mientras que los proyectos son temporales y únicos."
  },
  {
    id: 71,
    categoria: "Planificación",
    pregunta: "¿Qué sucede si se quiere aumentar el alcance del proyecto sin cambiar coste ni plazo?",
    respuestas: [
      "Se puede hacer siempre recortando la gestión de riesgos.",
      "No es posible; aumentar el alcance exige aumentar el coste o el plazo.",
      "Solo basta con más documentación para evitar cambios en coste o plazo.",
      "No afecta a coste ni plazo, solo mejora la calidad automáticamente."
    ],
    correcta: "No es posible; aumentar el alcance exige aumentar el coste o el plazo.",
    explicacion: "Por la triple restricción (alcance, tiempo, coste), ampliar el alcance manteniendo calidad requiere incrementar tiempo, presupuesto o ambos."
  },
  {
    id: 72,
    categoria: "Ágil & Scrum",
    pregunta: "¿Cómo se llama el subconjunto del product backlog que contiene los requisitos a construir durante un sprint?",
    respuestas: ["Release plan", "Product increment", "Roadmap anual", "Sprint backlog"],
    correcta: "Sprint backlog",
    explicacion: "El Sprint Backlog reúne los elementos seleccionados del Product Backlog junto con el plan del equipo para entregarlos en el sprint actual."
  },
  {
    id: 73,
    categoria: "Ágil & Scrum",
    pregunta: "¿Cuál es el propósito del scrum daily meeting?",
    respuestas: [
      "Sesión semanal de tres horas para presentar informes financieros",
      "Una reunión para reescribir todo el product backlog cada día",
      "Un taller mensual para contratar nuevos miembros del equipo",
      "Reunión diaria de no más de 15 minutos para obtener realimentación sobre el avance de tareas y los obstáculos"
    ],
    correcta: "Reunión diaria de no más de 15 minutos para obtener realimentación sobre el avance de tareas y los obstáculos",
    explicacion: "La Daily Scrum dura máximo 15 minutos y sirve para sincronizar al equipo, revisar el progreso hacia el objetivo del sprint e identificar impedimentos."
  },
  {
    id: 74,
    categoria: "Ciclo de Vida",
    pregunta: "¿Cómo se describen a las metodologías pesadas o tradicionales?",
    respuestas: [
      "Como enfoques que siempre involucran al cliente en cada iteración.",
      "Como metodologías que promueven el cambio constante y la mínima documentación.",
      "Como prácticas exclusivamente informales basadas en reuniones cara a cara.",
      "Como metodologías predictivas o burocráticas que intentan planificar con gran detalle y a largo plazo."
    ],
    correcta: "Como metodologías predictivas o burocráticas que intentan planificar con gran detalle y a largo plazo.",
    explicacion: "Los enfoques tradicionales o predictivos enfatizan la planificación detallada por adelantado, procesos formales y documentación exhaustiva."
  },
  {
    id: 75,
    categoria: "Ágil & Scrum",
    pregunta: "¿A qué \"manifiesto\" nos referimos en el contexto de las metodologías ágiles?",
    respuestas: [
      "Al Manifiesto por el Desarrollo Ágil de Software.",
      "A la Declaración de Estándares ISO sobre documentación.",
      "Al Manifiesto del Project Management Institute (PMI) para métodos en predictivos.",
      "Al Manifiesto del Ciclo de Vida Único."
    ],
    correcta: "Al Manifiesto por el Desarrollo Ágil de Software.",
    explicacion: "Publicado en 2001, el Manifiesto Ágil establece los 4 valores y 12 principios que fundamentan Scrum, Kanban, XP y otras metodologías ágiles."
  },
  {
    id: 76,
    categoria: "Roles & Stakeholders",
    pregunta: "¿Cuál es una función esencial del director de proyecto según el documento?",
    respuestas: [
      "Responsabilizarse solo del presupuesto sin atender al alcance.",
      "Actuar únicamente como técnico sin responsabilidad de resultados.",
      "Ser la persona responsable de alcanzar los objetivos del proyecto.",
      "Delegar toda la toma de decisiones y no supervisar ejecución."
    ],
    correcta: "Ser la persona responsable de alcanzar los objetivos del proyecto.",
    explicacion: "El director de proyecto (Project Manager) es el responsable último de liderar al equipo y lograr los objetivos establecidos."
  },
  {
    id: 77,
    categoria: "Fundamentos",
    pregunta: "El resultado de un proyecto siempre es temporal y no puede perdurar en el tiempo.",
    respuestas: ["Verdadero", "Falso"],
    correcta: "Falso",
    explicacion: "El proyecto es temporal, pero el producto, servicio o resultado generado suele ser duradero y perdurar tras el cierre."
  },
  {
    id: 78,
    categoria: "Cierre",
    pregunta: "La fase de terminación incluye organizar la salida del equipo de trabajo de manera ordenada y secuencial.",
    respuestas: ["Verdadero", "Falso"],
    correcta: "Verdadero",
    explicacion: "En el cierre se planifica la desmovilización ordenada del equipo conforme se completan las entregas y la documentación."
  },
  {
    id: 79,
    categoria: "Control & EVM",
    pregunta: "La gestión de proyectos se evalúa por la idoneidad, eficiencia y eficacia.",
    respuestas: ["Verdadero", "Falso"],
    correcta: "Verdadero",
    explicacion: "Estos tres criterios miden si la solución fue adecuada (idoneidad), si usó bien los recursos (eficiencia) y si logró los objetivos (eficacia)."
  },
  {
    id: 80,
    categoria: "Fundamentos",
    pregunta: "Las operaciones producen habitualmente productos únicos y no repetibles.",
    respuestas: ["Verdadero", "Falso"],
    correcta: "Falso",
    explicacion: "Las operaciones producen bienes o servicios repetitivos y estandarizados; los resultados únicos son propios de los proyectos."
  },
  {
    id: 81,
    categoria: "Ciclo de Vida",
    pregunta: "La preparación de un proyecto no incluye el diseño ni la planificación del mismo.",
    respuestas: ["Verdadero", "Falso"],
    correcta: "Falso",
    explicacion: "La fase de preparación incluye precisamente el diseño, definición de objetivos, análisis de viabilidad y planificación."
  },
  {
    id: 82,
    categoria: "Fundamentos",
    pregunta: "Los proyectos producen generalmente un producto, servicio o resultado único.",
    respuestas: ["Verdadero", "Falso"],
    correcta: "Verdadero",
    explicacion: "La unicidad del entregable es uno de los pilares de la definición de proyecto."
  },
  {
    id: 83,
    categoria: "Roles & Stakeholders",
    pregunta: "La autoridad del jefe de proyecto es siempre la misma independientemente de la estructura organizacional.",
    respuestas: ["Verdadero", "Falso"],
    correcta: "Falso",
    explicacion: "La autoridad del PM varía mucho según la estructura: es baja en organizaciones funcionales, media en matriciales y alta en organizaciones proyectizadas."
  },
  {
    id: 84,
    categoria: "Fundamentos",
    pregunta: "¿Cuál es la principal diferencia entre una metodología de gestión de proyectos y una metodología de desarrollo?",
    respuestas: [
      "La metodología de desarrollo sólo define el marketing del producto.",
      "La metodología de gestión se centra en dirigir y coordinar el proyecto; la de desarrollo en cómo construir el producto o servicio.",
      "La metodología de gestión sólo sirve para proyectos no técnicos.",
      "No existe diferencia: siempre son exactamente lo mismo."
    ],
    correcta: "La metodología de gestión se centra en dirigir y coordinar el proyecto; la de desarrollo en cómo construir el producto o servicio.",
    explicacion: "Ambas se complementan: la de gestión gobierna plazos, costes y riesgos; la de desarrollo guía la ingeniería o creación del producto."
  },
  {
    id: 85,
    categoria: "Calidad",
    pregunta: "¿Cómo define la 'calidad' en el contexto del Control de Calidad?",
    respuestas: [
      "La ausencia total de cambios solicitados por el cliente.",
      "La rapidez con la que se entrega un producto, sin considerar la satisfacción del usuario.",
      "El cumplimiento estricto del presupuesto aunque el usuario quede insatisfecho.",
      "La calidad de un producto para satisfacer a un usuario o cliente."
    ],
    correcta: "La calidad de un producto para satisfacer a un usuario o cliente.",
    explicacion: "El control de calidad verifica que el producto cumpla requisitos y satisfaga las necesidades del usuario o cliente."
  },
  {
    id: 86,
    categoria: "Cierre",
    pregunta: "¿Cuál de las siguientes actividades corresponde al grupo de procesos de cierre?",
    respuestas: [
      "Implementar la respuesta a los riesgos.",
      "Cerrar el proyecto o fase.",
      "Definir el alcance del proyecto.",
      "Planificar la gestión del cronograma."
    ],
    correcta: "Cerrar el proyecto o fase.",
    explicacion: "El grupo de procesos de cierre formaliza la aceptación de entregables y cierra administrativamente el proyecto o fase."
  },
  {
    id: 87,
    categoria: "Ciclo de Vida",
    pregunta: "¿Por qué es difícil diseñar un ciclo de vida \"talla única\" para todos los proyectos?",
    respuestas: [
      "Porque las metodologías ágiles están prohibidas en la mayoría de sectores.",
      "Porque las industrias y tecnologías difieren en ciclo de vida, producto, tamaño, tecnología y situación, lo que exige metodologías distintas.",
      "Porque los estándares impiden cualquier adaptación metodológica.",
      "Porque todos los proyectos tienen exactamente los mismos requisitos."
    ],
    correcta: "Porque las industrias y tecnologías difieren en ciclo de vida, producto, tamaño, tecnología y situación, lo que exige metodologías distintas.",
    explicacion: "No es igual construir un puente que desarrollar una app móvil; el contexto técnico y de negocio dicta el ciclo de vida adecuado."
  },
  {
    id: 88,
    categoria: "Ciclo de Vida",
    pregunta: "¿Cuáles son las fases mínimas comunes que incluiría la mayoría de los proyectos?",
    respuestas: [
      "Solo una fase de ejecución sin planificación.",
      "Ventas; Soporte post-venta; Marketing.",
      "Planificación detallada; Documentación exhaustiva; Auditoría externa.",
      "Conceptualización/preparación; Desarrollo/seguimiento y control; Cierre."
    ],
    correcta: "Conceptualización/preparación; Desarrollo/seguimiento y control; Cierre.",
    explicacion: "Todo proyecto atraviesa al menos una etapa inicial de preparación, una etapa central de desarrollo/control y una etapa final de cierre."
  },
  {
    id: 89,
    categoria: "Fundamentos",
    pregunta: "¿Qué distingue principalmente a un proyecto de las operaciones de una organización?",
    respuestas: [
      "Las operaciones siempre tienen inicio y fin como los proyectos.",
      "El proyecto persigue un objetivo no rutinario y tiene inicio y fin definidos.",
      "Las operaciones son siempre únicas y no repetitivas.",
      "Los proyectos no utilizan recursos ni presupuesto."
    ],
    correcta: "El proyecto persigue un objetivo no rutinario y tiene inicio y fin definidos.",
    explicacion: "Los proyectos son esfuerzos temporales orientados a objetivos no rutinarios, mientras que las operaciones son permanentes y repetitivas."
  },
  {
    id: 90,
    categoria: "Ciclo de Vida",
    pregunta: "¿En qué casos puede ser apropiada una metodología tradicional?",
    respuestas: [
      "Siempre que se quiera aplicar una metodología sin adaptar nada.",
      "En proyectos pequeños con requisitos cambiantes y entregas frecuentes.",
      "Cuando se pretende minimizar la documentación al máximo.",
      "En proyectos muy complejos que requieren control estricto y coordinación entre equipos distribuidos (por ejemplo, equipos >10-20 personas)."
    ],
    correcta: "En proyectos muy complejos que requieren control estricto y coordinación entre equipos distribuidos (por ejemplo, equipos >10-20 personas).",
    explicacion: "Cuando hay alta criticidad, requisitos estables, regulación o múltiples equipos grandes y distribuidos, la estructura predictiva aporta control necesario."
  },
  {
    id: 91,
    categoria: "Planificación",
    pregunta: "La planificación y el seguimiento son necesarios para gestionar la evolución de un proyecto.",
    respuestas: ["Verdadero", "Falso"],
    correcta: "Verdadero",
    explicacion: "Planificar fija el rumbo y hacer seguimiento permite detectar desviaciones y ajustar el curso a lo largo del proyecto."
  },
  {
    id: 92,
    categoria: "Fundamentos",
    pregunta: "En el contexto de la industria profesional no es necesario adaptar metodologías, técnicas y herramientas a proyectos concretos.",
    respuestas: ["Verdadero", "Falso"],
    correcta: "Falso",
    explicacion: "La adaptación (tailoring) de metodologías y herramientas a las particularidades de cada proyecto es una práctica fundamental."
  },
  {
    id: 93,
    categoria: "Roles & Stakeholders",
    pregunta: "El director del proyecto debe poseer habilidades técnicas, de control administrativo y habilidades interpersonales.",
    respuestas: ["Verdadero", "Falso"],
    correcta: "Verdadero",
    explicacion: "La combinación de competencias técnicas, administrativas y blandas (liderazgo, comunicación, negociación) define a un buen director de proyectos."
  },
  {
    id: 94,
    categoria: "Fundamentos",
    pregunta: "¿Qué define a un proyecto tecnológico?",
    respuestas: [
      "Una actividad rutinaria de producción en masa sin etapas definidas.",
      "Una idea aislada que no requiere planificación ni etapas.",
      "Un trabajo que no busca solucionar problemas del mundo material.",
      "Una secuencia de etapas para crear, modificar o concretar un producto, proceso o servicio que ofrece una respuesta tecnológica a una necesidad concreta."
    ],
    correcta: "Una secuencia de etapas para crear, modificar o concretar un producto, proceso o servicio que ofrece una respuesta tecnológica a una necesidad concreta.",
    explicacion: "Un proyecto tecnológico aplica conocimientos técnicos en etapas ordenadas para resolver una necesidad concreta mediante un producto, proceso o servicio."
  },
  {
    id: 95,
    categoria: "Cierre",
    pregunta: "Una de las metas de la fase de terminación es:",
    respuestas: [
      "Eliminar toda la documentación para proteger la propiedad intelectual.",
      "Mantener indefinidamente al equipo de trabajo en el proyecto.",
      "Prolongar gastos del proyecto sin control.",
      "Asegurar la correcta transmisión del conocimiento a los usuarios mediante la documentación final (incluyendo las lecciones aprendidas)."
    ],
    correcta: "Asegurar la correcta transmisión del conocimiento a los usuarios mediante la documentación final (incluyendo las lecciones aprendidas).",
    explicacion: "Transferir el conocimiento, entregar manuales/documentación y registrar lecciones aprendidas garantiza la sostenibilidad del resultado."
  },
  {
    id: 96,
    categoria: "Roles & Stakeholders",
    pregunta: "¿Cuál es la diferencia principal entre cliente y usuario?",
    respuestas: [
      "No hay diferencia: cliente y usuario son sinónimos en todos los proyectos.",
      "El cliente proporciona los recursos financieros; el usuario emplea los resultados del proyecto a nivel operativo.",
      "El cliente diseña el sistema; el usuario aprueba el presupuesto.",
      "El cliente siempre es el mismo que el project manager; el usuario no participa en el proyecto."
    ],
    correcta: "El cliente proporciona los recursos financieros; el usuario emplea los resultados del proyecto a nivel operativo.",
    explicacion: "Distinguir entre quien financia/contrata (cliente) y quien opera el sistema diariamente (usuario) es clave para gestionar requisitos y expectativas."
  },
  {
    id: 97,
    categoria: "Ágil & Scrum",
    pregunta: "¿Qué se entiende por \"sprint\" en Scrum?",
    respuestas: [
      "Un periodo indefinido hasta finalizar todo el proyecto",
      "Un documento técnico con todos los requisitos del proyecto",
      "Un bloque de tiempo (time-box) de 2-4 semanas para crear un incremento de producto potencialmente desplegable",
      "Una reunión mensual para revisar contratos"
    ],
    correcta: "Un bloque de tiempo (time-box) de 2-4 semanas para crear un incremento de producto potencialmente desplegable",
    explicacion: "El sprint es el corazón de Scrum: una iteración de duración fija que produce un incremento funcional y potencialmente utilizable."
  },
  {
    id: 98,
    categoria: "Ciclo de Vida",
    pregunta: "¿Qué fases componen la vida de un proyecto desde la dirección?",
    respuestas: [
      "Preparación, gestión (seguimiento y control) y terminación.",
      "Diseño, construcción y mantenimiento.",
      "Análisis, programación y pruebas.",
      "Inicio, comercialización y soporte técnico."
    ],
    correcta: "Preparación, gestión (seguimiento y control) y terminación.",
    explicacion: "Desde la dirección de proyectos, estas tres fases agrupan la conceptualización/planificación, el control de la ejecución y el cierre."
  },
  {
    id: 99,
    categoria: "PMBOK®",
    pregunta: "¿Cuál de los siguientes elementos puede formar parte del sistema de entrega de valor de una organización según PMBOK® 7ª Edición?",
    respuestas: [
      "Portafolios, programas, proyectos, productos y operaciones.",
      "Únicamente las juntas directivas.",
      "Exclusivamente los informes de recursos humanos.",
      "Solo las auditorías financieras internas."
    ],
    correcta: "Portafolios, programas, proyectos, productos y operaciones.",
    explicacion: "En PMBOK® 7ª Edición, portafolios, programas, proyectos, productos y operaciones trabajan conjuntamente para crear y entregar valor."
  },
  {
    id: 100,
    categoria: "Cierre",
    pregunta: "La fase de terminación de un proyecto incluye la transmisión de conocimiento y la recopilación de la documentación final.",
    respuestas: ["Verdadero", "Falso"],
    correcta: "Verdadero",
    explicacion: "Cerrar correctamente exige documentar el estado final, recopilar lecciones aprendidas y transferir el conocimiento al cliente/operación."
  },
  {
    id: 101,
    categoria: "Roles & Stakeholders",
    pregunta: "Dirigir un proyecto incluye gestionar proveedores como parte de sus responsabilidades.",
    respuestas: ["Verdadero", "Falso"],
    correcta: "Verdadero",
    explicacion: "La gestión de adquisiciones y proveedores forma parte integral de la dirección de proyectos para asegurar entregas y calidad."
  },
  {
    id: 102,
    categoria: "Roles & Stakeholders",
    pregunta: "Todo proyecto debe tener obligatoriamente un director de proyecto.",
    respuestas: ["Verdadero", "Falso"],
    correcta: "Verdadero",
    explicacion: "Siempre debe existir una persona responsable (director o jefe de proyecto) de liderar, coordinar y rendir cuentas por los objetivos."
  }
];
