let userLogin = getLocalStorage("USER");
if (userLogin) {
  location.replace("/index.html");
}

document.getElementById("btnLogin")?.addEventListener("click", loginAction);
function loginAction() {
  let email = document.getElementById("emailLogin").value;
  let password = document.getElementById("passwordLogin").value;

  if (!email || !password) {
    if (!email) {
      document.getElementById("emailLoginWarning").innerHTML =
        "Email không được bỏ trống!";
    } else {
      document.getElementById("emailLoginWarning").innerHTML = "";
    }

    if (!password) {
      document.getElementById("passwordLoginWarning").innerHTML =
        "Password không được bỏ trống!";
    } else {
      document.getElementById("passwordLoginWarning").innerHTML = "";
    }
    return;
  }

  let userList = getLocalStorage("USER_LIST");
  for (let i = 0; i < userList.length; i++) {
    if (userList[i].email === email && userList[i].password === password) {
      alert("Đăng nhập thành công.");
      setLocalStorage("USER", userList[i]);
      location.replace("/index.html");
    } else {
      alert("Email hoặc Mật khẩu không đúng.");
    }
  }
}

function checkUserLogin() {
  let user = getLocalStorage("USER");
  if (user) {
    document.getElementById(
      "user-information"
    )?.innerHTML = `Xin chào, ${user.userName}`;
    document.getElementById("loginIcon").style.display = "none";
  } else {
    document.getElementById("user-information").innerHTML = "";
  }
}

window.onload=function(){
  checkUserLogin()
}