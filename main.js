// main.js

// 로그인한 사용자 아이디 가져오기
const userId = localStorage.getItem("loggedInUser");

document.addEventListener("DOMcontemtLoaded", () => {
  document.getElementById("user-id-display").textContent = `로그인한 ID : ${userId}`;
});



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
