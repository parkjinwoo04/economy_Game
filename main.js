// main.js
document.addEventListener("DOMContentLoaded", () => {
  const userId = localStorage.getItem("loggedInUser");
  if (userId) {
    document.getElementById("user-id-display").textContent = `로그인한 ID: ${userId}`;
  } else {
    alert("로그인이 필요합니다.");
    location.href = "index.html";
    return;
  }

  // 날짜 값 로컬스토리지에서 불러오기, 없으면 1로 초기화
  let currentDate = parseInt(localStorage.getItem("gameDate")) || 1;
  const dateElement = document.getElementById("date");

  // 초기 날짜 표시
  dateElement.textContent = `${currentDate}일`;

  // 1분마다 날짜 1씩 증가
  setInterval(() => {
    currentDate += 1;
    localStorage.setItem("gameDate", currentDate);
    dateElement.textContent = `${currentDate}일`;
  }, 60000);
});
