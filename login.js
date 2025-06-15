function login() {
  const login_Id = document.getElementById("id").value.trim();
  const login_Pw = document.getElementById("pw").value.trim();

  if (login_Id === "" || login_Pw === "") {
    alert("아이디와 비밀번호를 입력해주세요");
    return;
  }

  const saved_Pw = localStorage.getItem(login_Id);

  if (saved_Pw === null) {
    alert("존재하지 않는 아이디입니다. 회원가입을 먼저 해주세요");
  } else if (saved_Pw !== login_Pw) {
    alert("비밀번호가 일치하지 않습니다.");
  } else {
    alert("로그인 성공");
    localStorage.setItem("loggedInUser", login_Id);
    location.href = "main.html";
  }
}

function create_user() {
  const login_Id = document.getElementById("id").value.trim();
  const login_Pw = document.getElementById("pw").value.trim();
  const login_rPw = document.getElementById("r_pw").value.trim();

  if (login_Id === "" || login_Pw === "") {
    alert("아이디와 비밀번호를 입력해주세요");
    return;
  } else if (login_Pw !== login_rPw) {
    alert("비밀번호가 일치하지 않습니다.");
    return;
  }

  if (localStorage.getItem(login_Id)) {
    alert("이미 존재하는 아이디입니다.");
    return;
  }

  localStorage.setItem(login_Id, login_Pw);
  alert("회원가입이 완료되었습니다.");
  location.href = "index.html";
}

function back() {
  history.back();
}

