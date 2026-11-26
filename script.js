(() => {
  'use strict';

  const TOTAL_PREGUNTAS = 10;
  const PUNTAJE_APROBATORIO = 8;

  // ===== ESTADO =====
  let audioCtx = null;
  let isMuted = false;
  let candidateName = '';
  let selectedQuestions = [];
  let currentIndex = 0;
  let score = 0;
  let streak = 0;
  let selectedOptionText = null;
  let isAnswered = false;
  let userAnswers = [];
  let certId = '';
  let certDate = '';

  // ===== DOM =====
  const startScreen = document.getElementById('start-screen');
  const quizScreen = document.getElementById('quiz-screen');
  const resultsScreen = document.getElementById('results-screen');

  const startForm = document.getElementById('start-form');
  const usernameInput = document.getElementById('username');
  const nameError = document.getElementById('name-error');

  const soundToggleBtn = document.getElementById('sound-toggle');
  const soundIcon = document.getElementById('sound-icon');

  const currentNumEl = document.getElementById('current-num');
  const totalNumEl = document.getElementById('total-num');
  const categoryEl = document.getElementById('question-category');
  const streakBadgeEl = document.getElementById('streak-badge');
  const streakCountEl = document.getElementById('streak-count');
  const liveScoreEl = document.getElementById('live-score');
  const progressBarWrap = document.getElementById('progress-bar-wrap');
  const progressFill = document.getElementById('progress-fill');

  const questionTextEl = document.getElementById('question-text');
  const optionsListEl = document.getElementById('options-list');
  const feedbackBox = document.getElementById('feedback-box');
  const feedbackIcon = document.getElementById('feedback-icon');
  const feedbackTitle = document.getElementById('feedback-title');
  const feedbackExplanation = document.getElementById('feedback-explanation');

  const checkBtn = document.getElementById('check-btn');
  const nextBtn = document.getElementById('next-btn');
  const nextBtnLabel = document.getElementById('next-btn-label');

  const ringProgress = document.getElementById('ring-progress');
  const finalScoreEl = document.getElementById('final-score');
  const resultStatusPill = document.getElementById('result-status-pill');
  const resultsTitle = document.getElementById('results-title');
  const resultsMessage = document.getElementById('results-message');
  const downloadCertBtn = document.getElementById('download-cert-btn');
  const retryBtn = document.getElementById('retry-btn');

  const certPreview = document.getElementById('cert-preview');
  const previewName = document.getElementById('preview-name');
  const previewScore = document.getElementById('preview-score');
  const previewId = document.getElementById('preview-id');
  const previewDate = document.getElementById('preview-date');
  const reviewList = document.getElementById('review-list');

  const confettiCanvas = document.getElementById('confetti-canvas');

  // ===== WEB AUDIO API =====
  function ensureAudio() {
    if (isMuted) return null;
    if (!audioCtx) {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      if (!Ctx) return null;
      audioCtx = new Ctx();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume().catch(() => {});
    }
    return audioCtx;
  }

  function playTone(freq, duration, type = 'sine', volume = 0.1, delay = 0, endFreq = null) {
    const ctx = ensureAudio();
    if (!ctx) return;
    const now = ctx.currentTime + delay;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, now);
    if (endFreq !== null) {
      osc.frequency.exponentialRampToValueAtTime(endFreq, now + duration);
    }
    gain.gain.setValueAtTime(volume, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + duration);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + duration);
  }

  function playClickSound() {
    playTone(540, 0.055, 'sine', 0.07, 0, 260);
  }

  function playSelectSound() {
    playTone(440, 0.06, 'triangle', 0.08, 0, 580);
  }

  function playCorrectSound(currentStreak) {
    const boost = Math.min(currentStreak - 1, 4) * 35;
    playTone(523.25 + boost, 0.18, 'triangle', 0.13, 0);
    playTone(659.25 + boost, 0.22, 'triangle', 0.13, 0.08);
    playTone(783.99 + boost, 0.3, 'sine', 0.14, 0.16);
  }

  function playIncorrectSound() {
    playTone(210, 0.18, 'sawtooth', 0.11, 0, 155);
    playTone(155, 0.25, 'sawtooth', 0.1, 0.14, 110);
  }

  function playVictoryFanfare() {
    const notes = [523.25, 659.25, 783.99, 1046.5, 1318.51];
    notes.forEach((n, idx) => {
      playTone(n, 0.32, 'triangle', 0.14, idx * 0.1);
    });
  }

  function playFailSound() {
    playTone(330, 0.22, 'triangle', 0.12, 0, 293.66);
    playTone(261.63, 0.35, 'triangle', 0.12, 0.22, 196);
  }

  soundToggleBtn.addEventListener('click', () => {
    isMuted = !isMuted;
    soundToggleBtn.classList.toggle('muted', isMuted);
    soundIcon.className = isMuted ? 'fa-solid fa-volume-xmark' : 'fa-solid fa-volume-high';
    if (!isMuted) playClickSound();
  });

  // ===== UTILIDADES =====
  function shuffleArray(arr) {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function isTrueFalseQuestion(options) {
    if (options.length !== 2) return false;
    const normalized = options.map((o) => o.trim().toLowerCase());
    return normalized.includes('verdadero') && normalized.includes('falso');
  }

  // ===== INICIO DEL EXAMEN =====
  startForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const rawName = usernameInput.value.trim();
    if (!rawName) {
      nameError.hidden = false;
      usernameInput.focus();
      playIncorrectSound();
      return;
    }
    nameError.hidden = true;
    candidateName = rawName;
    playClickSound();
    startQuiz();
  });

  function startQuiz() {
    selectedQuestions = shuffleArray(BANCO_PREGUNTAS).slice(0, TOTAL_PREGUNTAS);
    currentIndex = 0;
    score = 0;
    streak = 0;
    userAnswers = [];

    totalNumEl.textContent = TOTAL_PREGUNTAS;
    liveScoreEl.textContent = '0';
    streakBadgeEl.hidden = true;

    startScreen.hidden = true;
    resultsScreen.hidden = true;
    quizScreen.hidden = false;

    renderQuestion();
  }

  function renderQuestion() {
    const q = selectedQuestions[currentIndex];
    isAnswered = false;
    selectedOptionText = null;

    currentNumEl.textContent = String(currentIndex + 1);
    categoryEl.textContent = q.categoria;
    progressBarWrap.setAttribute('aria-valuenow', String(currentIndex + 1));
    progressFill.style.width = `${((currentIndex + 1) / TOTAL_PREGUNTAS) * 100}%`;

    questionTextEl.textContent = q.pregunta;
    feedbackBox.hidden = true;
    feedbackBox.className = 'feedback-box';

    checkBtn.hidden = false;
    checkBtn.disabled = true;
    nextBtn.hidden = true;
    nextBtnLabel.textContent = currentIndex === TOTAL_PREGUNTAS - 1 ? 'Ver Resultados' : 'Siguiente';

    const orderedOptions = isTrueFalseQuestion(q.respuestas)
      ? [...q.respuestas]
      : shuffleArray(q.respuestas);

    optionsListEl.innerHTML = '';
    orderedOptions.forEach((optText, idx) => {
      const li = document.createElement('li');
      li.className = 'option-item';
      li.setAttribute('role', 'radio');
      li.setAttribute('aria-checked', 'false');
      li.setAttribute('tabindex', '0');
      li.dataset.value = optText;

      const keySpan = document.createElement('span');
      keySpan.className = 'option-key';
      keySpan.textContent = String(idx + 1);

      const textSpan = document.createElement('span');
      textSpan.className = 'option-text';
      textSpan.textContent = optText;

      li.appendChild(keySpan);
      li.appendChild(textSpan);

      li.addEventListener('click', () => selectOption(li, optText));
      li.addEventListener('keydown', (ev) => {
        if (ev.key === 'Enter' || ev.key === ' ') {
          ev.preventDefault();
          selectOption(li, optText);
        }
      });

      optionsListEl.appendChild(li);
    });
  }

  function selectOption(el, optText) {
    if (isAnswered) return;
    playSelectSound();
    selectedOptionText = optText;

    optionsListEl.querySelectorAll('.option-item').forEach((item) => {
      item.classList.remove('selected');
      item.setAttribute('aria-checked', 'false');
    });

    el.classList.add('selected');
    el.setAttribute('aria-checked', 'true');
    checkBtn.disabled = false;
  }

  function checkAnswer() {
    if (isAnswered || selectedOptionText === null) return;
    isAnswered = true;

    const q = selectedQuestions[currentIndex];
    const isCorrect = selectedOptionText === q.correcta;

    if (isCorrect) {
      score += 1;
      streak += 1;
      playCorrectSound(streak);
    } else {
      streak = 0;
      playIncorrectSound();
    }

    liveScoreEl.textContent = String(score);
    if (streak >= 2) {
      streakCountEl.textContent = String(streak);
      streakBadgeEl.hidden = false;
    } else {
      streakBadgeEl.hidden = true;
    }

    optionsListEl.querySelectorAll('.option-item').forEach((item) => {
      item.classList.add('locked');
      const val = item.dataset.value;
      if (val === q.correcta) {
        item.classList.add('correct');
      } else if (val === selectedOptionText && !isCorrect) {
        item.classList.add('incorrect');
      }
    });

    feedbackBox.hidden = false;
    feedbackBox.className = `feedback-box ${isCorrect ? 'is-correct' : 'is-incorrect'}`;
    feedbackIcon.className = `fa-solid ${isCorrect ? 'fa-circle-check' : 'fa-circle-xmark'}`;
    feedbackTitle.textContent = isCorrect
      ? '¡Respuesta correcta!'
      : `Incorrecto. La respuesta correcta es: ${q.correcta}`;
    feedbackExplanation.textContent = q.explicacion;

    userAnswers.push({
      pregunta: q.pregunta,
      categoria: q.categoria,
      tuRespuesta: selectedOptionText,
      correcta: q.correcta,
      esCorrecta: isCorrect,
      explicacion: q.explicacion
    });

    checkBtn.hidden = true;
    nextBtn.hidden = false;
  }

  function nextQuestion() {
    playClickSound();
    currentIndex += 1;
    if (currentIndex < TOTAL_PREGUNTAS) {
      renderQuestion();
    } else {
      showResults();
    }
  }

  checkBtn.addEventListener('click', checkAnswer);
  nextBtn.addEventListener('click', nextQuestion);

  // Atajos de teclado
  document.addEventListener('keydown', (e) => {
    if (quizScreen.hidden) return;
    if (!isAnswered && ['1', '2', '3', '4'].includes(e.key)) {
      const idx = Number(e.key) - 1;
      const items = optionsListEl.querySelectorAll('.option-item');
      if (items[idx]) {
        selectOption(items[idx], items[idx].dataset.value);
      }
    } else if (e.key === 'Enter') {
      if (!isAnswered && selectedOptionText !== null) {
        e.preventDefault();
        checkAnswer();
      } else if (isAnswered) {
        e.preventDefault();
        nextQuestion();
      }
    }
  });

  // ===== RESULTADOS Y CERTIFICADO =====
  function showResults() {
    quizScreen.hidden = true;
    resultsScreen.hidden = false;

    const passed = score >= PUNTAJE_APROBATORIO;
    finalScoreEl.textContent = String(score);

    const circumference = 2 * Math.PI * 52;
    const offset = circumference - (score / TOTAL_PREGUNTAS) * circumference;
    ringProgress.style.stroke = passed ? 'var(--success)' : 'var(--danger)';
    requestAnimationFrame(() => {
      ringProgress.style.strokeDashoffset = String(offset);
    });

    if (passed) {
      playVictoryFanfare();
      launchConfetti();
      resultStatusPill.textContent = 'Aprobado';
      resultStatusPill.className = 'status-pill passed';
      resultsTitle.textContent = `¡Excelente trabajo, ${candidateName}!`;
      resultsMessage.textContent = `Obtuviste ${score}/${TOTAL_PREGUNTAS} aciertos. Has demostrado dominio en Metodología de Diseño y Gestión de Proyectos y ya puedes descargar tu certificado oficial.`;

      certId = 'PM-' + Math.random().toString(36).substring(2, 8).toUpperCase();
      certDate = new Date().toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });

      previewName.textContent = candidateName;
      previewScore.textContent = `${score} / ${TOTAL_PREGUNTAS}`;
      previewId.textContent = certId;
      previewDate.textContent = certDate;

      certPreview.hidden = false;
      downloadCertBtn.hidden = false;
    } else {
      playFailSound();
      resultStatusPill.textContent = 'No Aprobado';
      resultStatusPill.className = 'status-pill failed';
      resultsTitle.textContent = 'Sigue practicando';
      resultsMessage.textContent = `Obtuviste ${score}/${TOTAL_PREGUNTAS} aciertos. Necesitas al menos ${PUNTAJE_APROBATORIO}/${TOTAL_PREGUNTAS} para desbloquear el certificado. Revisa las explicaciones e inténtalo con 10 nuevas preguntas.`;
      certPreview.hidden = true;
      downloadCertBtn.hidden = true;
    }

    renderReview();
  }

  function renderReview() {
    reviewList.innerHTML = '';
    userAnswers.forEach((item, idx) => {
      const card = document.createElement('article');
      card.className = `review-item ${item.esCorrecta ? 'ok' : 'ko'}`;

      const qEl = document.createElement('p');
      qEl.className = 'review-q';
      qEl.textContent = `${idx + 1}. [${item.categoria}] ${item.pregunta}`;

      const ansWrap = document.createElement('div');
      ansWrap.className = 'review-answers';

      const yourAns = document.createElement('span');
      yourAns.innerHTML = `Tu respuesta: <strong style="color:${item.esCorrecta ? '#34d399' : '#fb7185'}"></strong>`;
      yourAns.querySelector('strong').textContent = item.tuRespuesta;
      ansWrap.appendChild(yourAns);

      if (!item.esCorrecta) {
        const rightAns = document.createElement('span');
        rightAns.innerHTML = 'Correcta: <strong style="color:#34d399"></strong>';
        rightAns.querySelector('strong').textContent = item.correcta;
        ansWrap.appendChild(rightAns);
      }

      const expEl = document.createElement('p');
      expEl.className = 'review-exp';
      expEl.textContent = item.explicacion;

      card.appendChild(qEl);
      card.appendChild(ansWrap);
      card.appendChild(expEl);
      reviewList.appendChild(card);
    });
  }

  retryBtn.addEventListener('click', () => {
    playClickSound();
    ringProgress.style.strokeDashoffset = '326.73';
    startQuiz();
  });

  // ===== GENERACIÓN DE CERTIFICADO PDF =====
  downloadCertBtn.addEventListener('click', () => {
    playClickSound();
    if (!window.jspdf || !window.jspdf.jsPDF) {
      alert('No se pudo cargar la librería jsPDF. Verifica tu conexión a internet.');
      return;
    }

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });
    const w = doc.internal.pageSize.getWidth();
    const h = doc.internal.pageSize.getHeight();

    // Fondo azul marino profundo
    doc.setFillColor(11, 17, 32);
    doc.rect(0, 0, w, h, 'F');

    // Panel interior sutil
    doc.setFillColor(17, 24, 39);
    doc.roundedRect(12, 12, w - 24, h - 24, 4, 4, 'F');

    // Doble marco cyan y dorado
    doc.setDrawColor(56, 189, 248);
    doc.setLineWidth(1.8);
    doc.rect(12, 12, w - 24, h - 24);

    doc.setDrawColor(245, 158, 11);
    doc.setLineWidth(0.7);
    doc.rect(16, 16, w - 32, h - 32);

    // Encabezado
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.setTextColor(245, 158, 11);
    doc.text('CERTIFICADO OFICIAL DE APROBACION', w / 2, 34, { align: 'center' });

    doc.setFontSize(26);
    doc.setTextColor(56, 189, 248);
    doc.text('Metodologia de Diseno y Gestion de Proyectos', w / 2, 48, { align: 'center' });

    doc.setDrawColor(56, 189, 248);
    doc.setLineWidth(0.5);
    doc.line(65, 55, w - 65, 55);

    // Destinatario
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(13);
    doc.setTextColor(148, 163, 184);
    doc.text('Se otorga el presente reconocimiento a:', w / 2, 72, { align: 'center' });

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(28);
    doc.setTextColor(248, 250, 252);
    doc.text(candidateName, w / 2, 90, { align: 'center' });

    // Descripción
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(12);
    doc.setTextColor(203, 213, 225);
    doc.text(
      [
        'Por haber aprobado satisfactoriamente el examen aleatorio sobre fundamentos de proyectos,',
        'ciclo de vida, planificacion (Gantt, PERT, CPM), control (EVM), PMBOK 7a Ed. y metodologias agiles (Scrum, Kanban).'
      ],
      w / 2,
      108,
      { align: 'center' }
    );

    // Caja de calificación
    doc.setFillColor(30, 41, 59);
    doc.roundedRect(w / 2 - 48, 128, 96, 18, 4, 4, 'F');
    doc.setDrawColor(16, 185, 129);
    doc.setLineWidth(0.6);
    doc.roundedRect(w / 2 - 48, 128, 96, 18, 4, 4, 'S');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(14);
    doc.setTextColor(52, 211, 153);
    doc.text(`Puntuacion: ${score} / ${TOTAL_PREGUNTAS}`, w / 2, 139.5, { align: 'center' });

    // Pie con fecha y folio
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.setTextColor(148, 163, 184);
    doc.text(`Fecha de emision: ${certDate}`, 28, 174);
    doc.text(`Folio de validacion: ${certId}`, 28, 181);

    // Sello dorado
    doc.setFillColor(245, 158, 11);
    doc.circle(w - 42, 172, 14, 'F');
    doc.setFillColor(11, 17, 32);
    doc.circle(w - 42, 172, 11.5, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(245, 158, 11);
    doc.text('VERIFIED', w - 42, 170.5, { align: 'center' });
    doc.text('PM QUIZ', w - 42, 175.5, { align: 'center' });

    const safeFileName = candidateName.replace(/[^a-zA-Z0-9_-]+/g, '_');
    doc.save(`Certificado_Gestion_Proyectos_${safeFileName}.pdf`);
  });

  // ===== CONFETTI =====
  function launchConfetti() {
    const ctx = confettiCanvas.getContext('2d');
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;

    const colors = ['#38bdf8', '#6366f1', '#10b981', '#f59e0b', '#f43f5e'];
    const particles = Array.from({ length: 90 }, () => ({
      x: Math.random() * confettiCanvas.width,
      y: Math.random() * -confettiCanvas.height * 0.5,
      w: 6 + Math.random() * 6,
      h: 4 + Math.random() * 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      vx: (Math.random() - 0.5) * 3,
      vy: 2.5 + Math.random() * 3.5,
      rot: Math.random() * Math.PI * 2,
      vRot: (Math.random() - 0.5) * 0.15
    }));

    let frame = 0;
    function tick() {
      ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.rot += p.vRot;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
      });
      frame += 1;
      if (frame < 160) {
        requestAnimationFrame(tick);
      } else {
        ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
      }
    }
    requestAnimationFrame(tick);
  }
})();
