// Musical Zoo sound: a soft, xylophone-like tone synthesised with the Web
// Audio API (no recorded audio), triggered by click, tap, or the 1-8 keys.

interface AnimalNote {
  freq: number;
}

const ANIMALS: AnimalNote[] = [
  { freq: 261.63 }, // chick — C4
  { freq: 293.66 }, // rabbit — D4
  { freq: 329.63 }, // cat — E4
  { freq: 349.23 }, // dog — F4
  { freq: 392.0 }, // sheep — G4
  { freq: 440.0 }, // lion — A4
  { freq: 493.88 }, // elephant — B4
  { freq: 523.25 }, // giraffe — C5
];

let audioContext: AudioContext | null = null;

function getAudioContext(): AudioContext {
  if (!audioContext) {
    audioContext = new AudioContext();
  }
  if (audioContext.state === "suspended") {
    void audioContext.resume();
  }
  return audioContext;
}

// Two short, decaying partials — a soft sine "body" plus a quieter, faster
// triangle overtone three times its frequency — read as a mallet-struck bar
// rather than a plain electronic beep.
function playNote(freq: number): void {
  const ctx = getAudioContext();
  const now = ctx.currentTime;

  const master = ctx.createGain();
  master.gain.value = 0.22;
  master.connect(ctx.destination);

  const body = ctx.createOscillator();
  body.type = "sine";
  body.frequency.value = freq;
  const bodyGain = ctx.createGain();
  bodyGain.gain.setValueAtTime(0, now);
  bodyGain.gain.linearRampToValueAtTime(1, now + 0.006);
  bodyGain.gain.exponentialRampToValueAtTime(0.001, now + 0.9);
  body.connect(bodyGain).connect(master);
  body.start(now);
  body.stop(now + 0.95);

  const strike = ctx.createOscillator();
  strike.type = "triangle";
  strike.frequency.value = freq * 3;
  const strikeGain = ctx.createGain();
  strikeGain.gain.setValueAtTime(0, now);
  strikeGain.gain.linearRampToValueAtTime(0.35, now + 0.004);
  strikeGain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
  strike.connect(strikeGain).connect(master);
  strike.start(now);
  strike.stop(now + 0.2);
}

function handleAnimationEnd(event: Event): void {
  (event.currentTarget as HTMLElement).classList.remove("is-playing");
}

const triggers = [...document.querySelectorAll<HTMLButtonElement>(".animal-trigger")];

triggers.forEach((button, index) => {
  const animal = ANIMALS[index];
  if (!animal) return;

  button.addEventListener("click", () => {
    playNote(animal.freq);
    // Remove-then-reflow-then-add so a rapid repeat retriggers the
    // animation even if the previous play is still mid-bounce.
    button.classList.remove("is-playing");
    void button.offsetWidth;
    button.classList.add("is-playing");
  });

  button.addEventListener("animationend", handleAnimationEnd);
});

document.addEventListener("keydown", (event) => {
  if (event.repeat) return;
  const index = Number(event.key) - 1;
  const button = triggers[index];
  if (!button) return;
  button.click();
});
