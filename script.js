const startButton = document.getElementById('start-button');
const nextButton = document.getElementById('next-button');
const retryButton = document.getElementById('retry-button');
const resultButton = document.getElementById('result-button');
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const scoreScreen = document.getElementById('score-screen');
const questionContainer = document.getElementById('question-container');
const scoreDisplay = document.getElementById('score');
const welcomeMessage = document.getElementById('welcome-message');
const resultsDiv = document.getElementById('results');

let currentQuestionIndex = 0;
let score = 0;
const quizData = [
  { question: "Apa yang dimaksud dengan APD?", options: ["Alat Pelindung Diri", "Alat Perlengkapan Darurat", "Aplikasi Peralatan Dasar", "Asosiasi Pengawas Diri"], correct: "Alat Pelindung Diri" },
  { question: "Apa warna helm keselamatan untuk pengawas?", options: ["Putih", "Kuning", "Hijau", "Biru"], correct: "Putih" },
  { question: "Apa yang harus dilakukan sebelum bekerja di area berbahaya?", options: ["Memeriksa APD", "Langsung bekerja", "Menunggu instruksi", "Tidak perlu persiapan"], correct: "Memeriksa APD" },
  { question: "Apa fungsi tanda bahaya?", options: ["Menunjukkan tempat keluar", "Memberikan peringatan", "Mengatur lalu lintas", "Menunjukkan area aman"], correct: "Memberikan peringatan" },
  { question: "Apa alat utama untuk melindungi kepala?", options: ["Sepatu", "Helm", "Sarung tangan", "Rompi"], correct: "Helm" },
  { question: "Apa yang tidak termasuk jenis APD?", options: ["Masker", "Sarung tangan", "Kunci pas", "Kacamata pelindung"], correct: "Kunci pas" },
  { question: "Apa warna tanda dilarang?", options: ["Merah", "Hijau", "Kuning", "Biru"], correct: "Merah" },
  { question: "Apa yang harus digunakan saat bekerja di ketinggian?", options: ["Harness", "Sepatu biasa", "Sarung tangan", "Topi"], correct: "Harness" },
  { question: "Apa yang dimaksud dengan zona bahaya?", options: ["Area dengan risiko tinggi", "Area parkir", "Area kerja", "Area istirahat"], correct: "Area dengan risiko tinggi" },
  { question: "Apa alat yang digunakan untuk melindungi telinga?", options: ["Headset", "Earplug", "Kacamata", "Rompi"], correct: "Earplug" },
  { question: "Apa arti tanda berwarna hijau?", options: ["Petunjuk keselamatan", "Bahaya", "Larangan", "Perintah"], correct: "Petunjuk keselamatan" },
  { question: "Apa yang dilakukan jika terjadi kecelakaan?", options: ["Laporkan ke atasan", "Abaikan", "Lari", "Pindahkan korban"], correct: "Laporkan ke atasan" },
  { question: "Apa warna tanda evakuasi?", options: ["Hijau", "Merah", "Biru", "Kuning"], correct: "Hijau" },
  { question: "Apa yang harus dilakukan jika alat rusak?", options: ["Tetap gunakan", "Lapor dan hentikan penggunaan", "Perbaiki sendiri", "Buang alat"], correct: "Lapor dan hentikan penggunaan" },
  { question: "Apa fungsi sarung tangan dalam APD?", options: ["Melindungi tangan", "Melindungi kaki", "Melindungi kepala", "Melindungi telinga"], correct: "Melindungi tangan" },
  { question: "Apa yang dilakukan sebelum menggunakan alat berat?", options: ["Memeriksa alat", "Langsung digunakan", "Mencuci tangan", "Makan"], correct: "Memeriksa alat" },
  { question: "Apa warna tanda bahaya biohazard?", options: ["Kuning", "Merah", "Hijau", "Biru"], correct: "Kuning" },
  { question: "Apa arti tanda silang merah?", options: ["Larangan", "Bahaya", "Perintah", "Informasi"], correct: "Larangan" },
  { question: "Apa yang harus dilakukan saat alarm kebakaran berbunyi?", options: ["Segera evakuasi", "Tetap di tempat", "Matikan alarm", "Hubungi teman"], correct: "Segera evakuasi" },
  { question: "Apa alat untuk melindungi mata?", options: ["Kacamata pelindung", "Helm", "Rompi", "Masker"], correct: "Kacamata pelindung" }
];

startButton.addEventListener('click', () => {
  startScreen.classList.add('hidden');
  quizScreen.classList.remove('hidden');
  showQuestion();
});

nextButton.addEventListener('click', () => {
  const selectedOption = document.querySelector('input[name="option"]:checked');
  if (selectedOption) {
    if (quizData[currentQuestionIndex].options[parseInt(selectedOption.value)] === quizData[currentQuestionIndex].correct) {
      score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
      showQuestion();
    } else {
      endQuiz();
    }
  } else {
    alert('Pilih jawaban terlebih dahulu!');
  }
});

retryButton.addEventListener('click', () => {
  location.reload();
});

resultButton.addEventListener('click', () => {
  showResults();
});

function showQuestion() {
  questionContainer.innerHTML = '';
  const questionData = quizData[currentQuestionIndex];
  const questionTitle = document.createElement('h3');
  questionTitle.textContent = `${currentQuestionIndex + 1}. ${questionData.question}`;
  questionContainer.appendChild(questionTitle);

  questionData.options.forEach((option, index) => {
    const optionContainer = document.createElement('div');
    const optionInput = document.createElement('input');
    optionInput.type = 'radio';
    optionInput.name = 'option';
    optionInput.value = index;
    const optionLabel = document.createElement('label');
    optionLabel.textContent = option;
    optionContainer.appendChild(optionInput);
    optionContainer.appendChild(optionLabel);
    questionContainer.appendChild(optionContainer);
  });

  nextButton.classList.remove('hidden');
}

function endQuiz() {
  quizScreen.classList.add('hidden');
  scoreScreen.classList.remove('hidden');
  scoreDisplay.textContent = `${score} / ${quizData.length}`;
}

function showResults() {
  resultsDiv.innerHTML = '<h2>Hasil Jawaban</h2>';
  quizData.forEach((q, i) => {
    const resultItem = document.createElement('p');
    resultItem.textContent = `${i + 1}. ${q.question} - ${
      q.correct === i ? 'Benar' : 'Salah'
    }`;
    resultsDiv.appendChild(resultItem);
  });
  resultsDiv.classList.remove('hidden');
}
