function Login(form) {
username = new Array("minhtn","loind","lieunt","anhtv","tikz","Trần Việt Anh","u7","u8","u9","u10","u11","u12","u13","u14","u15","u16","u17","u18","u19","u20","u21","u22","u23","u24","u25","u26","u27","u28","u29","u30","u31","u32","u33","u34","u35","u36","u37","u38","u39","u40","u41","u42","u43","u44","u45","u46","u47","u48","u49","u50");
password = new Array("minh123","loi123","lieu123","anh123","123","12345","p7","p8","p9","p10","p11","p12","p13","p14","p15","p16","p17","p18","p19","p20","p21","p22","p23","p24","p25","p26","p27","p28","p29","p30","p31","p32","p33","p34","p35","p36","p37","p38","p39","p40","p41","p42","p43","p44","p45","p46","p47","p48","p49","p50");
customer = new Array("c1","c2","c3","c4","c5","c6","c7","c8","c9","c10","c11","c12","c13","c14","c15","c16","c17","c18","c19","c20","c21","c22","c23","c24","c25","c26","c27","c28","c29","c30","c31","c32","c33","c34","c35","c36","c37","c38","c39","c40","c41","c42","c43","c44","c45","c46","c47","c48","c49","c50");
page = "home.html";

if (form.username.value == customer[0] || 
form.username.value == customer[1] || 
form.username.value == customer[2] ||
form.username.value == customer[3] ||
form.username.value == customer[4] ||
form.username.value == customer[5] ||
form.username.value == customer[6] ||
form.username.value == customer[7] ||
form.username.value == customer[8] ||
form.username.value == customer[9] ||
form.username.value == customer[10] ||
form.username.value == customer[11] ||
form.username.value == customer[12] ||
form.username.value == customer[13] ||
form.username.value == customer[14] ||
form.username.value == customer[15] ||
form.username.value == customer[16] ||
form.username.value == customer[17] ||
form.username.value == customer[18] ||
form.username.value == customer[19] ||
form.username.value == customer[20] ||
form.username.value == customer[21] ||
form.username.value == customer[22] ||
form.username.value == customer[23] ||
form.username.value == customer[24] ||
form.username.value == customer[25] ||
form.username.value == customer[26] ||
form.username.value == customer[27] ||
form.username.value == customer[28] ||
form.username.value == customer[29] ||
form.username.value == customer[30] ||
form.username.value == customer[31] ||
form.username.value == customer[32] ||
form.username.value == customer[33] ||
form.username.value == customer[34] ||
form.username.value == customer[35] ||
form.username.value == customer[36] ||
form.username.value == customer[37] ||
form.username.value == customer[38] ||
form.username.value == customer[39] ||
form.username.value == customer[40] ||
form.username.value == customer[41] ||
form.username.value == customer[42] ||
form.username.value == customer[43] ||
form.username.value == customer[44] ||
form.username.value == customer[45] ||
form.username.value == customer[46] ||
form.username.value == customer[47] ||
form.username.value == customer[48] ||
form.username.value == customer[49] ||
form.username.value == customer[50])
{
alert("Tài khoản của bạn đã hết hạn sử dụng. Xin vui lòng đăng ký để sử dụng phần mềm!");
}

if (form.username.value == username[0] && form.password.value == password[0] || 
form.username.value == username[1] && form.password.value == password[1] || 
form.username.value == username[2] && form.password.value == password[2] || 
form.username.value == username[3] && form.password.value == password[3] || 
form.username.value == username[4] && form.password.value == password[4] || 
form.username.value == username[5] && form.password.value == password[5] || 
form.username.value == username[6] && form.password.value == password[6] || 
form.username.value == username[7] && form.password.value == password[7] || 
form.username.value == username[8] && form.password.value == password[8] || 
form.username.value == username[9] && form.password.value == password[9] || 
form.username.value == username[10] && form.password.value == password[10] ||
form.username.value == username[11] && form.password.value == password[11] ||
form.username.value == username[12] && form.password.value == password[12] ||
form.username.value == username[13] && form.password.value == password[13] ||
form.username.value == username[14] && form.password.value == password[14] ||
form.username.value == username[15] && form.password.value == password[15] ||
form.username.value == username[16] && form.password.value == password[16] ||
form.username.value == username[17] && form.password.value == password[17] ||
form.username.value == username[18] && form.password.value == password[18] ||
form.username.value == username[19] && form.password.value == password[19] ||
form.username.value == username[20] && form.password.value == password[20] ||
form.username.value == username[21] && form.password.value == password[21] ||
form.username.value == username[22] && form.password.value == password[22] ||
form.username.value == username[23] && form.password.value == password[23] ||
form.username.value == username[24] && form.password.value == password[24] ||
form.username.value == username[25] && form.password.value == password[25] ||
form.username.value == username[26] && form.password.value == password[26] ||
form.username.value == username[27] && form.password.value == password[27] ||
form.username.value == username[28] && form.password.value == password[28] ||
form.username.value == username[29] && form.password.value == password[29] ||
form.username.value == username[30] && form.password.value == password[30] ||
form.username.value == username[31] && form.password.value == password[31] ||
form.username.value == username[32] && form.password.value == password[32] ||
form.username.value == username[33] && form.password.value == password[33] ||
form.username.value == username[34] && form.password.value == password[34] ||
form.username.value == username[35] && form.password.value == password[35] ||
form.username.value == username[36] && form.password.value == password[36] ||
form.username.value == username[37] && form.password.value == password[37] ||
form.username.value == username[38] && form.password.value == password[38] ||
form.username.value == username[39] && form.password.value == password[39] ||
form.username.value == username[40] && form.password.value == password[40] ||
form.username.value == username[41] && form.password.value == password[41] ||
form.username.value == username[42] && form.password.value == password[42] ||
form.username.value == username[43] && form.password.value == password[43] ||
form.username.value == username[44] && form.password.value == password[44] ||
form.username.value == username[45] && form.password.value == password[45] ||
form.username.value == username[46] && form.password.value == password[46] ||
form.username.value == username[47] && form.password.value == password[47] ||
form.username.value == username[48] && form.password.value == password[48] ||
form.username.value == username[49] && form.password.value == password[49] ||
form.username.value == username[50] && form.password.value == password[50]) {
self.location.href = page;
}
else { alert("Tên đăng nhập hoặc mật khẩu không đúng! Xin vui lòng thử lại!");
}
return true;
}
