
const questionBank = {
  easy: [
    ["Jismning tezligini topish formulasi qaysi?", ["v = s / t", "F = m × a", "P = A / t", "ρ = m / V"], 0],
    ["Kuchning SI sistemasidagi birligi nima?", ["Joul", "Nyuton", "Vatt", "Paskal"], 1],
    ["Massaning SI birligi nima?", ["Metr", "Sekund", "Kilogramm", "Nyuton"], 2],
    ["Vaqtning SI birligi nima?", ["Sekund", "Soat", "Metr", "Kilogramm"], 0],
    ["Yorug‘lik vakuumda qanday tezlikda tarqaladi?", ["300 km/s", "3000 km/s", "300 000 km/s", "30 km/s"], 2],
    ["Elektr tok kuchining birligi nima?", ["Volt", "Amper", "Om", "Vatt"], 1],
    ["Haroratning SI birligi nima?", ["Selsiy", "Kelvin", "Joul", "Paskal"], 1],
    ["Energiya birligi qaysi?", ["Joul", "Nyuton", "Amper", "Tesla"], 0],
    ["Bosimning SI birligi nima?", ["Vatt", "Paskal", "Volt", "Om"], 1],
    ["Zichlik formulasi qaysi?", ["ρ = m / V", "v = s / t", "F = m × a", "A = F × s"], 0],
    ["Jism tinch holatda bo‘lsa, uning tezligi qancha?", ["10 m/s", "1 m/s", "0 m/s", "100 m/s"], 2],
    ["Elektr kuchlanishining birligi nima?", ["Amper", "Volt", "Om", "Kulon"], 1],
    ["Mexanik ishning birligi nima?", ["Joul", "Vatt", "Nyuton", "Kelvin"], 0],
    ["Quvvatning SI birligi nima?", ["Paskal", "Vatt", "Amper", "Metr"], 1],
    ["Tovush qaysi muhitda tarqalmaydi?", ["Suvda", "Havoda", "Metallarda", "Vakuumda"], 3],
    ["Magnitning nechta qutbi mavjud?", ["1 ta", "2 ta", "3 ta", "4 ta"], 1],
    ["Linza qanday optik qurilma?", ["Yorug‘likni sindiruvchi", "Tovushni kuchaytiruvchi", "Tok o‘tkazuvchi", "Issiqlik ishlab chiqaruvchi"], 0],
    ["Jismning og‘irligi qaysi kuch bilan bog‘liq?", ["Ishqalanish", "Gravitatsiya", "Elektr", "Magnit"], 1],
    ["Elektr qarshiligining birligi nima?", ["Volt", "Amper", "Om", "Vatt"], 2],
    ["Qaysi hodisa yorug‘likning qaytishi bilan bog‘liq?", ["Aks etish", "Bug‘lanish", "Erish", "Diffuziya"], 0]
  ],
  medium: [
    ["Jism 5 sekundda 40 metr yo‘l bosdi. Tezligi qancha?", ["5 m/s", "8 m/s", "10 m/s", "20 m/s"], 1],
    ["Massasi 4 kg, tezlanishi 3 m/s² bo‘lgan jismga ta’sir qiluvchi kuch qancha?", ["7 N", "12 N", "15 N", "24 N"], 1],
    ["12 V kuchlanish va 4 Ω qarshilikda tok kuchi qancha?", ["2 A", "3 A", "4 A", "6 A"], 1],
    ["10 N kuch jismni 5 m masofaga siljitdi. Bajarilgan ish qancha?", ["2 J", "15 J", "50 J", "100 J"], 2],
    ["100 J ish 20 sekundda bajarildi. Quvvat qancha?", ["2 W", "5 W", "20 W", "50 W"], 1],
    ["Massasi 2 kg, hajmi 0,001 m³ bo‘lgan jism zichligi qancha?", ["200 kg/m³", "500 kg/m³", "1000 kg/m³", "2000 kg/m³"], 3],
    ["Zanjirda 2 Ω va 3 Ω qarshilik ketma-ket ulangan. Umumiy qarshilik qancha?", ["1 Ω", "5 Ω", "6 Ω", "0,5 Ω"], 1],
    ["Tebranish davrining SI birligi nima?", ["Gers", "Sekund", "Metr", "Nyuton"], 1],
    ["Chastotasi 5 Hz bo‘lgan tebranishning davri qancha?", ["5 s", "0,2 s", "2 s", "10 s"], 1],
    ["Jism 10 sekundda 100 m yo‘l bosdi. O‘rtacha tezlik qancha?", ["5 m/s", "10 m/s", "20 m/s", "100 m/s"], 1],
    ["Agar kuch 2 marta ortsa, massa o‘zgarmasa, tezlanish qanday o‘zgaradi?", ["2 marta ortadi", "2 marta kamayadi", "O‘zgarmaydi", "4 marta ortadi"], 0],
    ["Suvning normal atmosfera bosimidagi qaynash harorati qancha?", ["0°C", "50°C", "100°C", "150°C"], 2],
    ["Yorug‘likning sinishi qaysi hodisa?", ["Muhit almashganda yo‘nalish o‘zgarishi", "Yorug‘lik yo‘qolishi", "Tovush tarqalishi", "Elektr zaryadining o‘zgarishi"], 0],
    ["Elektr quvvati qaysi formula bilan topiladi?", ["P = U × I", "P = m × g", "P = s / t", "P = F / S"], 0],
    ["Bosim qaysi formula orqali topiladi?", ["p = F / S", "p = m × V", "p = U × I", "p = s × t"], 0],
    ["Jismning impulsi qanday aniqlanadi?", ["p = m × v", "p = F × S", "p = U / I", "p = m / V"], 0],
    ["Issiqlik miqdorining birligi nima?", ["Vatt", "Joul", "Amper", "Om"], 1],
    ["Qaysi ko‘zgu tasvirni kattalashtirishi mumkin?", ["Botiq ko‘zgu", "Yassi ko‘zgu", "Har doim qavariq ko‘zgu", "Hech biri"], 0],
    ["Tok kuchi 2 A, qarshilik 5 Ω. Kuchlanish qancha?", ["2,5 V", "5 V", "7 V", "10 V"], 3],
    ["Jismning potensial energiyasi nimaga bog‘liq?", ["Balandlik va massaga", "Faqat rangga", "Faqat hajmga", "Faqat vaqtga"], 0]
  ],
  hard: [
    ["Jism 4 m/s tezlik bilan harakatlanmoqda. Tezligi 3 marta oshsa, kinetik energiyasi necha marta ortadi?", ["3", "6", "9", "12"], 2],
    ["2 Ω va 3 Ω qarshilik parallel ulangan. Umumiy qarshilik qancha?", ["5 Ω", "1,2 Ω", "6 Ω", "2,5 Ω"], 1],
    ["Jism 5 m/s² tezlanish bilan 4 sekund tinch holatdan harakatlandi. Oxirgi tezligi qancha?", ["9 m/s", "15 m/s", "20 m/s", "25 m/s"], 2],
    ["0,5 kg jism 10 m/s tezlikda harakatlanmoqda. Impulsi qancha?", ["2,5 kg·m/s", "5 kg·m/s", "10 kg·m/s", "20 kg·m/s"], 1],
    ["6 Ω qarshilikdan 2 A tok o‘tsa, 5 sekundda ajraladigan issiqlik qancha?", ["30 J", "60 J", "120 J", "240 J"], 2],
    ["Massasi 2 kg jism 5 m balandlikda turibdi. g = 10 m/s². Potensial energiyasi qancha?", ["10 J", "25 J", "50 J", "100 J"], 3],
    ["Tebranish chastotasi 20 Hz. Davri qancha?", ["20 s", "0,5 s", "0,05 s", "2 s"], 2],
    ["To‘lqin uzunligi 2 m, chastotasi 5 Hz. To‘lqin tezligi qancha?", ["2,5 m/s", "5 m/s", "10 m/s", "20 m/s"], 2],
    ["Ideal gazning harorati Kelvin shkalasida 300 K. Selsiy bo‘yicha taxminan qancha?", ["0°C", "27°C", "100°C", "300°C"], 1],
    ["10 kg massali jismga 20 N kuch ta’sir qilmoqda. Tezlanishi qancha?", ["0,5 m/s²", "2 m/s²", "10 m/s²", "200 m/s²"], 1],
    ["12 V kuchlanishda 3 A tok o‘tayotgan qurilma quvvati qancha?", ["4 W", "9 W", "15 W", "36 W"], 3],
    ["Jism 20 m balandlikdan erkin tushmoqda. g = 10 m/s². Tushish vaqti qancha?", ["1 s", "2 s", "3 s", "4 s"], 1],
    ["Yig‘uvchi linzaning fokus masofasi 0,2 m. Optik kuchi qancha?", ["2 D", "4 D", "5 D", "10 D"], 2],
    ["Gazning bosimi o‘zgarmas bo‘lsa, absolyut harorat 2 marta ortganda hajm qanday o‘zgaradi?", ["2 marta ortadi", "2 marta kamayadi", "O‘zgarmaydi", "4 marta ortadi"], 0],
    ["Jism 10 m/s tezlik bilan 3 sekund harakatlandi. Bosib o‘tgan yo‘li qancha?", ["13 m", "20 m", "30 m", "40 m"], 2],
    ["0,02 m² yuzaga 100 N kuch ta’sir qiladi. Bosim qancha?", ["500 Pa", "1000 Pa", "2000 Pa", "5000 Pa"], 3],
    ["1 kWh energiya necha joulga teng?", ["3600 J", "36 000 J", "360 000 J", "3 600 000 J"], 3],
    ["Jismning massasi 3 kg, tezligi 4 m/s. Kinetik energiyasi qancha?", ["6 J", "12 J", "24 J", "48 J"], 2],
    ["Transformatorning birlamchi chulg‘amida 1000 o‘ram, ikkilamchisida 200 o‘ram bor. Birlamchi kuchlanish 220 V bo‘lsa, ikkilamchi kuchlanish qancha?", ["22 V", "44 V", "110 V", "440 V"], 1],
    ["Yorug‘likning havodan shishaga o‘tishida tezligi qanday o‘zgaradi?", ["Ortadi", "Kamayadi", "O‘zgarmaydi", "Nolga teng bo‘ladi"], 1]
  ]
};

const levelNames = {
  easy: "OSON",
  medium: "O‘RTA",
  hard: "QIYIN"
};

let selectedLevel = "easy";
let questions = [];
let currentIndex = 0;
let correctAnswers = 0;
let wrongAnswers = 0;
let timeLeft = 20;
let timerInterval = null;
let answered = false;
let student = "";

const $ = id => document.getElementById(id);

document.querySelectorAll(".level").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".level").forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    selectedLevel = button.dataset.level;
  });
});

$("startBtn").addEventListener("click", startTest);
$("nextBtn").addEventListener("click", nextQuestion);
$("restartBtn").addEventListener("click", goHome);

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function startTest() {
  student = $("studentName").value.trim();

  if (!student) {
    $("studentName").focus();
    $("studentName").style.borderColor = "#ff5555";
    $("studentName").placeholder = "Iltimos, ismingizni kiriting!";
    return;
  }

  questions = shuffle(questionBank[selectedLevel]).slice(0, 10);
  currentIndex = 0;
  correctAnswers = 0;
  wrongAnswers = 0;

  $("displayName").textContent = student;
  $("startScreen").classList.add("hidden");
  $("resultScreen").classList.add("hidden");
  $("quizScreen").classList.remove("hidden");

  showQuestion();
}

function showQuestion() {
  clearInterval(timerInterval);
  answered = false;
  timeLeft = 20;

  const q = questions[currentIndex];

  $("questionNumber").textContent = `SAVOL ${currentIndex + 1} / 10`;
  $("levelLabel").textContent = levelNames[selectedLevel] + " DARAJA";
  $("questionText").textContent = q[0];
  $("timer").textContent = timeLeft;
  $("progressBar").style.width = `${(currentIndex / 10) * 100}%`;
  $("feedback").textContent = "";
  $("nextBtn").classList.add("hidden");

  const options = shuffle(q[1].map((text, index) => ({
    text,
    correct: index === q[2]
  })));

  $("answers").innerHTML = "";

  options.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "answer";
    button.textContent = `${String.fromCharCode(65 + index)}. ${option.text}`;
    button.addEventListener("click", () => selectAnswer(button, option.correct));
    $("answers").appendChild(button);
  });

  timerInterval = setInterval(() => {
    timeLeft--;
    $("timer").textContent = timeLeft;

    if (timeLeft <= 5) {
      $("timer").style.color = "#ff6666";
    } else {
      $("timer").style.color = "var(--gold)";
    }

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      selectAnswer(null, false, true);
    }
  }, 1000);
}

function selectAnswer(button, isCorrect, timedOut = false) {
  if (answered) return;

  answered = true;
  clearInterval(timerInterval);

  if (isCorrect) {
    correctAnswers++;
    if (button) button.classList.add("correct");
    $("feedback").textContent = "✓ TO‘G‘RI JAVOB!";
  } else {
    wrongAnswers++;
    if (button) button.classList.add("wrong");
    $("feedback").textContent = timedOut ? "VAQT TUGADI!" : "✕ NOTO‘G‘RI JAVOB!";
  }

  document.querySelectorAll(".answer").forEach(item => {
    item.disabled = true;
  });

  $("progressBar").style.width = `${((currentIndex + 1) / 10) * 100}%`;
  $("nextBtn").classList.remove("hidden");
  $("nextBtn").textContent = currentIndex === 9 ? "NATIJANI KO‘RISH →" : "KEYINGI SAVOL →";
}

function nextQuestion() {
  currentIndex++;

  if (currentIndex >= 10) {
    showResult();
  } else {
    showQuestion();
  }
}

function showResult() {
  clearInterval(timerInterval);

  $("quizScreen").classList.add("hidden");
  $("resultScreen").classList.remove("hidden");

  $("score").textContent = correctAnswers;
  $("resultName").textContent = student;
  $("correctCount").textContent = correctAnswers;
  $("wrongCount").textContent = wrongAnswers;
  $("resultLevel").textContent = levelNames[selectedLevel];

  if (correctAnswers === 10) {
    $("resultMessage").textContent = "MUKAMMAL NATIJA! 🏆";
  } else if (correctAnswers >= 8) {
    $("resultMessage").textContent = "AJOYIB NATIJA!";
  } else if (correctAnswers >= 5) {
    $("resultMessage").textContent = "YAXSHI NATIJA!";
  } else {
    $("resultMessage").textContent = "TEST YAKUNLANDI!";
  }
}

function goHome() {
  clearInterval(timerInterval);
  $("resultScreen").classList.add("hidden");
  $("quizScreen").classList.add("hidden");
  $("startScreen").classList.remove("hidden");
  $("timer").style.color = "var(--gold)";
}
