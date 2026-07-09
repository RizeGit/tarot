const cards = [
  {
    name: "은둔자",
    image: "card1.png",
    question: "지금 당신에게 가장 필요한 혼자만의 시간은 무엇인가요?",
    answers: [
      {
        text: "① 조용히 생각을 정리하는 시간",
        resultImage: "slide5.png",
        style: "숲 리딩",
        landscapeKey: "forest",
        title: "조용히 생각을 정리하는 시간",
        match: "88%",
        mind: "당신은 흩어진 생각을 정리하며 핵심을 찾아가는 사람입니다.",
        reading: "상황을 한 걸음 물러나 바라보며, 복잡한 문제의 구조를 정리하는 리딩이 잘 맞습니다.",
        points: ["핵심을 짚는 리딩", "상황을 정리하는 리딩", "통찰을 주는 리딩"]
      },
      {
        text: "② 방향을 다시 찾는 시간",
        resultImage: "slide6.png",
        style: "길 리딩",
        landscapeKey: "path",
        title: "방향을 다시 찾는 시간",
        match: "92%",
        mind: "당신은 지금 삶의 방향성을 다시 확인하고 싶은 상태입니다.",
        reading: "현재 위치를 확인하고, 다음 한 걸음을 정리하는 리딩이 잘 맞습니다.",
        points: ["선택지 정리", "방향성 확인", "현실적인 흐름 분석"]
      },
      {
        text: "③ 아무에게도 설명하지 않아도 되는 시간",
        resultImage: "slide4.png",
        style: "등대 리딩",
        landscapeKey: "lighthouse",
        title: "설명하지 않아도 되는 시간",
        match: "97%",
        mind: "당신은 포괄적인 상황을 이해하고, 누적된 피로감을 인지하고 있습니다.",
        reading: "문제 해결보다 원인을 파악하고 제거하는 방식의 리딩이 잘 맞습니다.",
        points: ["반복 패턴 분석", "원인 파악", "구조를 보는 리딩"]
      }
    ]
  },
  {
    name: "여사제",
    image: "card2.png",
    question: "이 카드가 당신에게 건네는 첫 번째 감각은 무엇인가요?",
    answers: [
      {
        text: "① 슬픔을 참고 있는 듯한 인내심이 느껴진다",
        resultImage: "ettilla-detail.png",
        style: "호수 리딩",
        landscapeKey: "lake",
        title: "슬픔을 참고 있는 인내",
        match: "91%",
        mind: "당신은 감정의 깊이를 오래 바라볼 수 있는 사람입니다.",
        reading: "마음이 맑아질 때까지 천천히 바라보며 기다려주는 리딩이 잘 맞습니다.",
        points: ["감정 정리", "공감 중심", "마음의 결 이해"]
      },
      {
        text: "② 권위 있어 보이며 어려운 사람 같지만 끌린다",
        resultImage: "daily-spread.png",
        style: "다리 리딩",
        landscapeKey: "bridge",
        title: "거리감 속의 끌림",
        match: "94%",
        mind: "당신은 거리감 속에서도 관계의 긴장과 끌림을 감지하는 사람입니다.",
        reading: "관계의 심리, 말하지 못한 감정, 보이지 않는 거리감을 읽는 리딩이 잘 맞습니다.",
        points: ["관계 흐름 분석", "심리적 거리 파악", "상대의 감정 읽기"]
      },
      {
        text: "③ 신비롭고 신성한 느낌이 든다",
        resultImage: "tinseltown-deck.png",
        style: "달 리딩",
        landscapeKey: "moon",
        title: "신비롭고 신성한 감각",
        match: "96%",
        mind: "당신은 보이지 않는 흐름과 상징을 민감하게 받아들이는 사람입니다.",
        reading: "논리보다 직관, 사건보다 무의식의 메시지를 해석하는 리딩이 잘 맞습니다.",
        points: ["무의식 해석", "상징 읽기", "직관적 메시지"]
      }
    ]
  },
  {
    name: "스타",
    image: "card3.png",
    question: "지금 당신 안에서 다시 빛나고 싶은 것은 무엇인가요?",
    answers: [
      {
        text: "① 잃어버렸던 자신감",
        resultImage: "slide5.png",
        style: "별 리딩",
        landscapeKey: "star",
        title: "잃어버렸던 자신감",
        match: "93%",
        mind: "당신은 스스로의 가능성을 다시 믿고 싶은 사람입니다.",
        reading: "숨겨진 강점과 다시 빛날 수 있는 가능성을 발견하는 리딩이 잘 맞습니다.",
        points: ["자신감 회복", "강점 발견", "희망 재정리"]
      },
      {
        text: "② 다시 시작하고 싶은 마음",
        resultImage: "slide6.png",
        style: "새벽 리딩",
        landscapeKey: "dawn",
        title: "다시 시작하고 싶은 마음",
        match: "90%",
        mind: "당신은 끝난 줄 알았던 마음 안에서 다시 시작할 힘을 찾고 있습니다.",
        reading: "현재의 회복 단계와 다음 행동을 부드럽게 제안하는 리딩이 잘 맞습니다.",
        points: ["새로운 시작", "회복 단계 확인", "다음 행동 제안"]
      },
      {
        text: "③ 누군가에게 닿고 싶은 희망",
        resultImage: "slide4.png",
        style: "정원 리딩",
        landscapeKey: "garden",
        title: "누군가에게 닿고 싶은 희망",
        match: "95%",
        mind: "당신은 관계와 연결 속에서 다시 희망을 확인하고 싶은 상태입니다.",
        reading: "마음의 거리와 감정의 흐름을 살피며, 천천히 회복을 키워가는 리딩이 잘 맞습니다.",
        points: ["관계 회복", "감정 흐름 확인", "연결 가능성"]
      }
    ]
  }
];

const landscapes = [
  {
    id: "forest",
    emoji: "🌲",
    number: "01",
    name: "숲",
    english: "Forest Reading",
    image: "deck-collection-1.png",
    desc: "나무보다 숲을 먼저 보며, 삶의 구조와 흐름을 함께 읽는 리딩입니다.",
    quote: "숲은 서두르지 않지만, 모든 나무는 결국 제자리를 찾습니다.",
    x: 42,
    y: 22,
    scores: { warm: 4, insight: 5, heal: 3, speed: 2 }
  },
  {
    id: "lake",
    emoji: "🌊",
    number: "02",
    name: "호수",
    english: "Lake Reading",
    image: "daily-spread.png",
    desc: "감정이 맑아질 때까지 천천히 기다려주는 리딩입니다.",
    quote: "잔잔해질 때까지, 마음은 그대로 두어도 괜찮습니다.",
    x: 50,
    y: 52,
    scores: { warm: 4, insight: 3, heal: 5, speed: 2 }
  },
  {
    id: "path",
    emoji: "🛤",
    number: "03",
    name: "길",
    english: "Path Reading",
    image: "deck-collection-2.png",
    desc: "앞으로 나아갈 방향과 다음 선택지를 정리하는 리딩입니다.",
    quote: "멈춰 서는 것도, 길을 아는 방법 중 하나입니다.",
    x: 77,
    y: 45,
    scores: { warm: 4, insight: 4, heal: 3, speed: 4 }
  },
  {
    id: "moon",
    emoji: "🌙",
    number: "04",
    name: "달",
    english: "Moon Reading",
    image: "moon-message.png",
    desc: "보이지 않는 마음과 무의식의 흐름을 읽는 리딩입니다.",
    quote: "말이 되지 않는 마음도, 달빛 아래에서는 이해할 수 있습니다.",
    x: 25,
    y: 38,
    scores: { warm: 3, insight: 5, heal: 4, speed: 2 }
  },
  {
    id: "dawn",
    emoji: "🌅",
    number: "05",
    name: "새벽",
    english: "Dawn Reading",
    image: "study-note.png",
    desc: "다시 시작할 용기를 건네는 리딩입니다.",
    quote: "가장 어두운 순간 다음에는, 반드시 새벽이 옵니다.",
    x: 30,
    y: 70,
    scores: { warm: 4, insight: 3, heal: 5, speed: 3 }
  },
  {
    id: "bridge",
    emoji: "🌉",
    number: "06",
    name: "다리",
    english: "Bridge Reading",
    image: "consulting-table.png",
    desc: "관계의 거리, 말하지 못한 감정, 서로 다른 마음 사이의 긴장을 읽는 리딩입니다.",
    quote: "닿고 싶은 마음은, 거리보다 먼저 그 자리에 있습니다.",
    x: 58,
    y: 70,
    scores: { warm: 4, insight: 4, heal: 3, speed: 3 }
  },
  {
    id: "star",
    emoji: "⭐",
    number: "07",
    name: "별",
    english: "Star Reading",
    image: "tinseltown-deck.png",
    desc: "마음을 비추는 빛과 다시 믿고 싶은 가능성을 찾아주는 리딩입니다.",
    quote: "빛은 사라진 적 없이, 잠시 가려져 있었을 뿐입니다.",
    x: 72,
    y: 74,
    scores: { warm: 3, insight: 4, heal: 5, speed: 2 }
  },
  {
    id: "garden",
    emoji: "🌿",
    number: "08",
    name: "정원",
    english: "Garden Reading",
    image: "etilla-detail.png",
    desc: "마음을 가꾸는 방법과 관계의 회복 가능성을 함께 살피는 리딩입니다.",
    quote: "돌보는 만큼 자라나는 것은, 마음도 마찬가지입니다.",
    x: 42,
    y: 78,
    scores: { warm: 5, insight: 3, heal: 5, speed: 2 }
  },
  {
    id: "lighthouse",
    emoji: "🗼",
    number: "09",
    name: "등대",
    english: "Lighthouse Reading",
    image: "space-overview.png",
    desc: "어둠 속에서도 길을 잃지 않도록 현재의 기준점을 찾아주는 리딩입니다.",
    quote: "길을 잃었을 때 필요한 건, 정답이 아니라 기준점입니다.",
    x: 70,
    y: 28,
    scores: { warm: 4, insight: 5, heal: 4, speed: 3 }
  }
];

let selectedCardIndex = null;
let activeLandscapeId = "forest";

const REVEAL_FADE_MS = 900; // ms — must match the CSS opacity transition on .tarot-card img
const SHOW_QUESTION_DELAY_MS = 1400;

function $(id) {
  return document.getElementById(id);
}

function imagePath(file) {
  return `./images/${file}`;
}

function pickCard(index) {
  if (selectedCardIndex === index) {
    return;
  }

  selectedCardIndex = index;
  const selectedCard = cards[index];
  const allButtons = document.querySelectorAll(".tarot-card");

allButtons.forEach((button) => {
  const cardIndex = Number(button.dataset.cardIndex);
  const img = button.querySelector("img");


  if (cardIndex === index) {
    button.classList.remove("dimmed");
    button.classList.add("selected", "revealing");

    setTimeout(() => {
      setTarotImage(button, img, selectedCard.image, selectedCard.name);
      spawnSparkles(button);
      button.classList.remove("revealing");
    }, 450);

  } else {
    button.classList.remove("selected");
    button.classList.add("dimmed");
  }
});

  $("readingGuide").innerText = `${selectedCard.name} 카드를 선택했습니다.`;

  setTimeout(() => {
    showQuestion(selectedCard);
  }, SHOW_QUESTION_DELAY_MS);
}

// Sprinkles a handful of small gold particles over a card to mark the
// moment it's revealed. Purely decorative — each particle removes itself
// once its animation finishes.
function spawnSparkles(button) {
  const count = 12;

  for (let i = 0; i < count; i++) {
    const sparkle = document.createElement("span");
    sparkle.className = "sparkle";
    sparkle.style.left = `${Math.random() * 86 + 7}%`;
    sparkle.style.top = `${Math.random() * 86 + 7}%`;
    sparkle.style.animationDelay = `${Math.random() * 220}ms`;
    const size = 4 + Math.random() * 5;
    sparkle.style.width = `${size}px`;
    sparkle.style.height = `${size}px`;

    sparkle.addEventListener("animationend", () => sparkle.remove());
    button.appendChild(sparkle);
  }
}

// Sets the card image, cross-fades it in, and resizes the card frame to
// match that image's real aspect ratio, so the frame never crops the art
// and never leaves empty letterbox bars around it.
function setTarotImage(button, img, file, alt) {
  img.style.opacity = "0";

  img.onload = () => {
    if (img.naturalWidth && img.naturalHeight) {
      button.style.aspectRatio = `${img.naturalWidth} / ${img.naturalHeight}`;
    }
    requestAnimationFrame(() => {
      img.style.opacity = "1";
    });
  };

  img.src = imagePath(file);
  img.alt = alt;
}

function initTarotCardShapes() {
  document.querySelectorAll(".tarot-card").forEach((button) => {
    const img = button.querySelector("img");
    if (img.complete && img.naturalWidth) {
      button.style.aspectRatio = `${img.naturalWidth} / ${img.naturalHeight}`;
    } else {
      img.addEventListener(
        "load",
        () => {
          button.style.aspectRatio = `${img.naturalWidth} / ${img.naturalHeight}`;
        },
        { once: true }
      );
    }
  });
}

function shuffleCardPositions() {
  const positions = [0, 1, 2];

  // Fisher-Yates shuffle
  for (let i = positions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [positions[i], positions[j]] = [positions[j], positions[i]];
  }

  document.querySelectorAll(".tarot-card").forEach((button, i) => {
    const cardIndex = positions[i];
    button.dataset.cardIndex = String(cardIndex);
    button.onclick = () => pickCard(cardIndex);
  });
}

shuffleCardPositions();
initTarotCardShapes();

function showQuestion(card) {
  $("questionBox").classList.remove("hidden");
  $("selectedCardName").innerText = `${card.name} CARD`;
  $("cardQuestion").innerText = card.question;

  const answerButtons = $("answerButtons");
  answerButtons.innerHTML = "";

  card.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.type = "button";
    button.innerText = answer.text;
    button.addEventListener("click", () => showResult(card, answer));
    answerButtons.appendChild(button);
  });

  $("questionBox").scrollIntoView({ behavior: "smooth", block: "center" });
}

function showResult(card, answer) {
  setImage("resultImage", answer.resultImage, answer.title);

  $("resultStyle").innerText = `${card.name} · ${answer.style}`;
  $("resultTitle").innerText = answer.title;
  $("resultMatch").innerText = `당신과의 매칭률 ${answer.match}`;
  $("resultMind").innerText = answer.mind;
  $("resultReading").innerText = answer.reading;
  $("resultPoints").innerHTML = answer.points.map((point) => `<span>${point}</span>`).join("");

  $("resultSection").classList.remove("hidden");
  $("styleSection").classList.remove("hidden");

  renderLandscapeButtons();
  renderLandscapeMap();
  showLandscape(answer.landscapeKey);

  setTimeout(() => {
    $("resultSection").scrollIntoView({ behavior: "smooth", block: "start" });
  }, 80);
}

function renderLandscapeButtons() {
  const wrap = $("landscapeButtons");
  wrap.innerHTML = "";

  landscapes.forEach((item) => {
    const button = document.createElement("button");
    button.type = "button";
    button.innerText = `${item.emoji} ${item.name}`;
    button.addEventListener("click", () => showLandscape(item.id));
    wrap.appendChild(button);
  });
}

function renderLandscapeMap() {
  const mapPoints = $("mapPoints");
  mapPoints.innerHTML = "";

  landscapes.forEach((item) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "map-point";
    button.style.left = `${item.x}%`;
    button.style.top = `${item.y}%`;

    button.innerHTML = `
      <span class="map-icon">${item.emoji}</span>
      <span class="map-name">${item.name}</span>
    `;

    button.addEventListener("click", () => showLandscape(item.id));
    mapPoints.appendChild(button);
  });
}

function showLandscape(id) {
  const item = landscapes.find((landscape) => landscape.id === id) || landscapes[0];
  activeLandscapeId = item.id;

  document.querySelectorAll(".landscape-buttons button").forEach((button, index) => {
    button.classList.toggle("active", landscapes[index].id === item.id);
  });

  document.querySelectorAll(".map-point").forEach((button, index) => {
    button.classList.toggle("active", landscapes[index].id === item.id);
  });

  setImage("landscapeImage", item.image, item.name);
  $("landscapeNumber").innerText = `Sorginak Landscape · ${item.number}`;
  $("landscapeName").innerText = `${item.emoji} ${item.name}`;
  $("landscapeEnglish").innerText = item.english;
  $("landscapeDesc").innerText = item.desc;
  $("landscapeQuote").innerText = item.quote;

  renderScore("scoreWarm", item.scores.warm, "warm");
  renderScore("scoreInsight", item.scores.insight, "insight");
  renderScore("scoreHeal", item.scores.heal, "heal");
  renderScore("scoreSpeed", item.scores.speed, "speed");

  moveUserMarker(item);
}

function moveUserMarker(item) {
  const marker = $("userMarker");
  if (!marker || !item) return;

  marker.style.left = `${item.x}%`;
  marker.style.top = `${item.y}%`;
}

function renderScore(targetId, score, type) {
  const target = $(targetId);
  target.innerHTML = "";

  for (let i = 1; i <= 5; i++) {
    const dot = document.createElement("span");
    dot.className = i <= score ? `dot on ${type}` : "dot";
    target.appendChild(dot);
  }
}

function setImage(id, file, alt) {
  const img = $(id);

  img.classList.remove("image-missing");
  img.src = imagePath(file);
  img.alt = alt;
  img.onerror = () => img.classList.add("image-missing");
}

console.log("Sorginak reading.js loaded");
