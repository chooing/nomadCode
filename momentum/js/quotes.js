const quotes = [
  {
    quote: "Don't dwell on the past.",
    kor: "과거에 연연하지 마세요.",
  },
  {
    quote: "You only live once.",
    kor: "인생은 한 번 뿐이에요.",
  },
  {
    quote: "I was never less alone than when by myself.",
    kor: "난 혼자 있을 때 가장 외롭지 않았다.",
  },
  {
    quote: "Where there is a will there is a way.",
    kor: "뜻이 있는 곳엔 길이 있다.",
  },
  {
    quote:
      "Life is like a box of chocolates, You never know what you're gonna get.",
    kor: "인생은 마치 초콜릿 상자와도 같다, 당신이 무엇을 얻게 될지 모르기 때문이다.",
  },
  {
    quote: "He can do, she can do, why not me?",
    kor: "그도 하고 그녀도 하는데 왜 난 안돼?",
  },
  {
    quote: "Love what you do.",
    kor: "당신이 하는 걸 사랑하세요.",
  },
  {
    quote: "I don't want a perfect life, I want a happy life.",
    kor: "완벽한 인생을 원하지 않고 행복한 삶을 원합니다.",
  },
  {
    quote: "Life is all about timing.",
    kor: "인생은 타이밍이다.",
  },
  {
    quote: "Happiness is a warm puppy.",
    kor: "행복은 포근한 한 마리의 강아지다.",
  },
];

const quote = document.querySelector("#quotes span:first-child");
const kor = document.querySelector("#quotes span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
kor.innerText = todaysQuote.kor;
