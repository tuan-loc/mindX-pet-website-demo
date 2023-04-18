document
  .getElementById("btnRegister")
  ?.addEventListener("click", registerAction);
function registerAction() {
  let fullname = document.getElementById("email").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (!fullname || !email || !password) {
    if (!fullname) {
      document.getElementById("fullNameWarning").innerHTML =
        "Fullname không được bỏ trống!";
    } else {
      document.getElementById("fullNameWarning").innerHTML = "";
    }

    if (!email) {
      document.getElementById("emailWarning").innerHTML =
        "Email không được bỏ trống!";
    } else {
      document.getElementById("emailWarning").innerHTML = "";
    }

    if (!password) {
      document.getElementById("passwordWarning").innerHTML =
        "Password không được bỏ trống!";
    } else {
      document.getElementById("passwordWarning").innerHTML = "";
    }
    return;
  }

  let index = user.findIndex((item) => item.email === email);

  if (index !== -1) {
    alert("Người dùng đã tồn tại.");
    return;
  }

  let object = {
    userId: 1,
    email,
    password,
    fullname,
    avatar: "abc.png",
  };

  localStorage.setItem("user", JSON.stringify(object));
  alert("Đăng ký thành công.");
  window.location.replace("/Index.html");
}
