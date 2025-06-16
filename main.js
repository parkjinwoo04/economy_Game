// main.js

// 로그인한 사용자 아이디 가져오기

document.addEventListener("DOMContentLoaded", () => {
  const userId = localStorage.getItem("loggedInUser");

  if (userId) {
    document.getElementById("user-id-display").textContent = `로그인한 ID: ${userId}`;
  } else {
    alert("로그인이 필요합니다.");
    window.location.href = "index.html"; // 로그인 페이지로 이동
  }
});


