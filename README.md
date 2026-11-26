# Quiz de Metodología de Diseño y Gestión de Proyectos

Quiz interactivo en JavaScript vanilla (sin backend) con un banco de **102 preguntas** sobre Metodología de Diseño y Gestión de Proyectos, selección aleatoria de **10 preguntas por intento**, efectos de sonido con **Web Audio API** y generación de **certificado oficial en PDF** mediante `jsPDF`.

## Características

- **102 preguntas** organizadas por categoría (`Fundamentos`, `Planificación`, `Ciclo de Vida`, `PMBOK®`, `Ágil & Scrum`, `Control & EVM`, `Roles & Stakeholders`, `Calidad`, `Cierre`).
- **10 preguntas al azar** en cada partida (algoritmo Fisher-Yates) con orden aleatorio en opciones múltiples.
- **Audio sintetizado en vivo** (Web Audio API): sonidos de selección, acierto con tono progresivo por racha, error, fanfarria de aprobación y botón para silenciar.
- **Certificado PDF descargable** (`jsPDF` en formato A4 horizontal) y vista previa en pantalla al obtener **8/10 o más**.
- **Atajos de teclado**: teclas `1`–`4` para seleccionar opción y `Enter` para comprobar o avanzar.
- **Revisión detallada** con explicación pedagógica de cada pregunta al finalizar.

## Uso

Abre [index.html](index.html) directamente en tu navegador o sírvelo con cualquier servidor estático:

```bash
python3 -m http.server 8080
```
