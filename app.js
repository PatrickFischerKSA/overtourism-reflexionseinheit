const acts = [
  {
    title: "1. Schockmoment: Aufhänger",
    minutes: 6,
    goal: "Aus dem Einzelfall in die Systemfrage wechseln.",
    prompt:
      "Diskutiert den Blick-Clip mit der Leitfrage: individuelles Risiko oder strukturelle Tourismusmaschine?"
  },
  {
    title: "2. Romanfenster: Flut",
    minutes: 8,
    goal: "Wiedmers Flut als Ambivalenz-Linse lesen.",
    prompt:
      "Markiert im Roman die doppelte Bewegung: Verheißung von Aufstieg und Erfahrung von Kontrollverlust."
  },
  {
    title: "3. Streitgespräch",
    minutes: 10,
    goal: "Enzensberger und Groebner gegeneinander scharf machen.",
    prompt:
      "Eine Seite verteidigt Reise als Freiheitsakt, die andere entlarvt sie als reproduzierte Routine."
  },
  {
    title: "4. Eigene Bilanz",
    minutes: 10,
    goal: "Selbstbezug statt moralischer Auslagerung.",
    prompt:
      "Tragt euer Reiseprofil ein und vergleicht Gewinn/Kosten mit einer zweiten Person."
  },
  {
    title: "5. Spannungsfeld",
    minutes: 7,
    goal: "Traumwelt und Schattenseiten gleichzeitig halten.",
    prompt:
      "Achtet auf Achsen mit größter Uneinigkeit. Dort steckt die produktivste Kontroverse."
  },
  {
    title: "6. Transfer",
    minutes: 4,
    goal: "Konkretes Handeln formulieren.",
    prompt:
      "Jede Person formuliert einen überprüfbaren Beschluss für die nächste Reise."
  }
];

const provocations = [
  "Enzensberger-These: Du reist nicht aus Freiheit, sondern um die Unfreiheit zu betäuben.",
  "Groebner-These: Wer das echte Anderswo sucht, produziert es gleichzeitig als Selfie-Kulisse.",
  "Paquot-These: Tourismus verkauft Fremdheit, aber nur in dosierter, konsumierbarer Form.",
  "Flut-These: Das Wasser trägt Wohlstand und spült zugleich die alte Ordnung weg.",
  "Konfliktfrage: Ist Overtourism ein Mengenproblem oder ein Verteilungsproblem?",
  "Moralfrage: Darf ich reisen, wenn mein Lebensstil die Attraktivität eines Orts mit zerstört?"
];

const roles = [
  "Rolle: Hotelbetreiberin in einer boomenden Region mit Personalnot.",
  "Rolle: Bewohner eines Altstadtquartiers mit steigenden Mieten.",
  "Rolle: Studentin mit kleinem Budget und großem Fernweh.",
  "Rolle: Kommunalpolitiker zwischen Standortmarketing und Schutzauflagen.",
  "Rolle: Klimaaktivistin mit Fokus auf Flugreduktion.",
  "Rolle: Reiseinfluencer, dessen Einkommen vom Fernweh anderer lebt."
];

const el = {
  actTitle: document.querySelector("#actTitle"),
  actGoal: document.querySelector("#actGoal"),
  actPrompt: document.querySelector("#actPrompt"),
  timerDisplay: document.querySelector("#timerDisplay"),
  startTimer: document.querySelector("#startTimer"),
  pauseTimer: document.querySelector("#pauseTimer"),
  resetTimer: document.querySelector("#resetTimer"),
  actButtons: document.querySelector("#actButtons"),
  provocationBtn: document.querySelector("#provocationBtn"),
  roleSwitchBtn: document.querySelector("#roleSwitchBtn"),
  provocationText: document.querySelector("#provocationText"),
  roleText: document.querySelector("#roleText"),
  tripCount: document.querySelector("#tripCount"),
  shortFlights: document.querySelector("#shortFlights"),
  longFlights: document.querySelector("#longFlights"),
  motRest: document.querySelector("#motRest"),
  motEscape: document.querySelector("#motEscape"),
  motStatus: document.querySelector("#motStatus"),
  motEncounter: document.querySelector("#motEncounter"),
  gainScore: document.querySelector("#gainScore"),
  selfCostScore: document.querySelector("#selfCostScore"),
  localCostScore: document.querySelector("#localCostScore"),
  ecoScore: document.querySelector("#ecoScore"),
  scoreInterpretation: document.querySelector("#scoreInterpretation"),
  tensions: Array.from(document.querySelectorAll(".tension")),
  tensionMeter: document.querySelector("#tensionMeter"),
  tensionText: document.querySelector("#tensionText"),
  commitment: document.querySelector("#commitment"),
  saveCommitment: document.querySelector("#saveCommitment"),
  exportCommitment: document.querySelector("#exportCommitment"),
  saveState: document.querySelector("#saveState")
};

let currentActIndex = 0;
let remainingSeconds = acts[0].minutes * 60;
let timerHandle;

function setAct(index) {
  currentActIndex = index;
  const act = acts[index];
  remainingSeconds = act.minutes * 60;

  el.actTitle.textContent = act.title;
  el.actGoal.textContent = act.goal;
  el.actPrompt.textContent = act.prompt;

  updateTimerDisplay();
  updateActiveButton();
}

function updateActiveButton() {
  const buttons = el.actButtons.querySelectorAll("button");
  buttons.forEach((button, idx) => {
    button.classList.toggle("is-active", idx === currentActIndex);
  });
}

function updateTimerDisplay() {
  const min = String(Math.floor(remainingSeconds / 60)).padStart(2, "0");
  const sec = String(remainingSeconds % 60).padStart(2, "0");
  el.timerDisplay.textContent = `${min}:${sec}`;
}

function startTimer() {
  if (timerHandle) return;

  timerHandle = setInterval(() => {
    remainingSeconds -= 1;
    updateTimerDisplay();

    if (remainingSeconds <= 0) {
      clearInterval(timerHandle);
      timerHandle = undefined;
      remainingSeconds = 0;
      updateTimerDisplay();
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timerHandle);
  timerHandle = undefined;
}

function resetTimer() {
  pauseTimer();
  remainingSeconds = acts[currentActIndex].minutes * 60;
  updateTimerDisplay();
}

function renderActButtons() {
  const fragment = document.createDocumentFragment();

  acts.forEach((act, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = `${index + 1}. ${act.title.split(":")[0]}`;
    button.addEventListener("click", () => {
      pauseTimer();
      setAct(index);
    });
    fragment.append(button);
  });

  el.actButtons.append(fragment);
  updateActiveButton();
}

function randomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function setProvocation() {
  el.provocationText.textContent = randomItem(provocations);
}

function setRole() {
  el.roleText.textContent = randomItem(roles);
}

function numberValue(input) {
  return Number.parseFloat(input.value) || 0;
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function calcScores() {
  const trips = numberValue(el.tripCount);
  const shortFlights = numberValue(el.shortFlights);
  const longFlights = numberValue(el.longFlights);

  const rest = numberValue(el.motRest);
  const escape = numberValue(el.motEscape);
  const status = numberValue(el.motStatus);
  const encounter = numberValue(el.motEncounter);

  const gain = clamp(
    rest * 3 + encounter * 3 + escape * 1.8 - status * 0.6 + trips * 1.2,
    0,
    100
  );

  const selfCost = clamp(
    trips * 1.6 + shortFlights * 2 + longFlights * 4 + escape * 1.4,
    0,
    100
  );

  const localCost = clamp(
    trips * 2.4 + shortFlights * 1.7 + longFlights * 2.5 + status * 2.2,
    0,
    100
  );

  const eco = clamp(shortFlights * 7 + longFlights * 18 + trips * 1.2, 0, 100);

  el.gainScore.textContent = Math.round(gain);
  el.selfCostScore.textContent = Math.round(selfCost);
  el.localCostScore.textContent = Math.round(localCost);
  el.ecoScore.textContent = Math.round(eco);

  const net = gain - (selfCost * 0.5 + localCost * 0.7 + eco * 0.8);

  if (net > 8) {
    el.scoreInterpretation.textContent =
      "Aktuell überwiegt dein persönlicher Nutzen. Streitfrage: Wie viel davon wird externalisiert?";
  } else if (net > -12) {
    el.scoreInterpretation.textContent =
      "Ambivalente Bilanz. Genau hier liegt die Kernzone von Wiedmers Flut: Gewinn und Verlust wachsen gemeinsam.";
  } else {
    el.scoreInterpretation.textContent =
      "Die Schattenseiten dominieren. Diskutiert, welche Stellschraube zuerst verändert werden kann.";
  }
}

function calcTension() {
  const values = el.tensions.map((slider) => numberValue(slider));
  const avg = values.reduce((sum, val) => sum + val, 0) / values.length;
  const meterWidth = clamp(((avg + 10) / 20) * 100, 0, 100);

  el.tensionMeter.style.width = `${meterWidth}%`;

  if (avg > 3.5) {
    el.tensionText.textContent =
      "Gruppenbild: starke Orientierung an touristischer Traumwelt. Prüfpunkt: Welche Kosten werden unsichtbar gemacht?";
  } else if (avg > -3.5) {
    el.tensionText.textContent =
      "Gruppenbild: hohe Ambivalenz. Nutzt diesen Zwischenraum für kontroverse, aber präzise Aushandlung.";
  } else {
    el.tensionText.textContent =
      "Gruppenbild: Schattenseiten im Vordergrund. Frage nach fairen Alternativen statt reinem Verzichtsdiskurs.";
  }
}

function saveCommitment() {
  const text = el.commitment.value.trim();

  if (!text) {
    el.saveState.textContent = "Noch kein Beschluss eingetragen.";
    return;
  }

  const payload = {
    text,
    savedAt: new Date().toISOString()
  };

  localStorage.setItem("overtourismCommitment", JSON.stringify(payload));
  el.saveState.textContent = "Beschluss lokal gespeichert.";
}

function loadCommitment() {
  try {
    const raw = localStorage.getItem("overtourismCommitment");
    if (!raw) return;

    const parsed = JSON.parse(raw);
    if (parsed && parsed.text) {
      el.commitment.value = parsed.text;
      el.saveState.textContent = "Letzter Beschluss geladen.";
    }
  } catch {
    el.saveState.textContent = "Gespeicherter Beschluss konnte nicht geladen werden.";
  }
}

function exportCommitment() {
  const text = el.commitment.value.trim();

  if (!text) {
    el.saveState.textContent = "Für Export zuerst einen Beschluss eintragen.";
    return;
  }

  const content = [
    "Reflexionseinheit Overtourism",
    `Datum: ${new Date().toLocaleDateString("de-CH")}`,
    "",
    "Persönlicher Reisebeschluss:",
    text
  ].join("\n");

  const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "overtourism-beschluss.txt";
  a.click();
  URL.revokeObjectURL(url);
}

function wireEvents() {
  el.startTimer.addEventListener("click", startTimer);
  el.pauseTimer.addEventListener("click", pauseTimer);
  el.resetTimer.addEventListener("click", resetTimer);

  el.provocationBtn.addEventListener("click", setProvocation);
  el.roleSwitchBtn.addEventListener("click", setRole);

  [
    el.tripCount,
    el.shortFlights,
    el.longFlights,
    el.motRest,
    el.motEscape,
    el.motStatus,
    el.motEncounter
  ].forEach((input) => {
    input.addEventListener("input", calcScores);
  });

  el.tensions.forEach((slider) => slider.addEventListener("input", calcTension));

  el.saveCommitment.addEventListener("click", saveCommitment);
  el.exportCommitment.addEventListener("click", exportCommitment);
}

function init() {
  renderActButtons();
  setAct(0);
  setProvocation();
  setRole();
  calcScores();
  calcTension();
  loadCommitment();
  wireEvents();
}

init();
