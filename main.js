// main.js

// 로그인한 사용자 아이디 가져오기
const userId = localStorage.getItem("loggedInUser") || "guest";

// 관리할 종목명 (이 부분은 차트 페이지에서 쿼리스트링으로 받아도 됨)
const stockName = "A화학"; // 예시. 실제로는 차트 스크립트에서 설정

// 로컬스토리지 키
const storageKey = `stockData_${userId}_${stockName}`;

// 초기 날짜, 가격 데이터
let dayLabels = ["1일", "2일", "3일", "4일", "5일", "6일", "7일"];
let prices = [11000, 11300, 11200, 11500, 11400, 11650, 11800];

// 저장 함수
function saveUserStockData() {
  const data = { dayLabels, prices };
  localStorage.setItem(storageKey, JSON.stringify(data));
}

// 불러오기 함수
function loadUserStockData() {
  const data = localStorage.getItem(storageKey);
  if (data) {
    return JSON.parse(data);
  }
  return null;
}

// 초기 데이터 로딩
const userData = loadUserStockData();
if (userData) {
  dayLabels = userData.dayLabels;
  prices = userData.prices;
} else {
  saveUserStockData();
}

// 1분마다 하루씩 날짜 증가 함수
function nextDay() {
  const lastDayNum = parseInt(dayLabels[dayLabels.length - 1]);
  const nextDayNum = lastDayNum + 1;

  if (dayLabels.length >= 10) {
    dayLabels.shift();
    prices.shift();
  }

  dayLabels.push(`${nextDayNum}일`);

  const lastPrice = prices[prices.length - 1];
  const change = Math.floor(Math.random() * 501) - 250; // -250 ~ +250
  const nextPrice = Math.max(1000, lastPrice + change);

  prices.push(nextPrice);

  saveUserStockData();

  // 차트 스크립트에 변화 알리려면 이벤트나 콜백으로 연결 필요
  // 예: window.dispatchEvent(new Event('stockDataUpdated'));
}

// 초기 저장 및 실행
saveUserStockData();
setInterval(nextDay, 60000);
