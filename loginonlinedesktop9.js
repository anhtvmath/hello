﻿function Login(form) {
username = new Array("ptit");
password = new Array("2468");
page = "home.html";
if (form.username.value == username[0] && form.password.value == password[0]) {
self.location.href = page;
}
else { alert("Tên đăng nhập hoặc mật khẩu không đúng! Xin vui lòng thử lại!");
}
return true;
}