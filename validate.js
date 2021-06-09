    function validate() {
    var tensinhvien = document.getElementById("studentname").value;
    var masinhvien = document.getElementById("studentid").value;
    var username = ["Lan Anh","Việt Anh","Nguyễn Liễu"];
    var password_user = ["n81","n83","n90"];
    var customer = ["Văn Điệp","Nguyễn Lan","Đức Lợi"];
    var password_customer = ["vd123","nl123","dl123"];
    if (tensinhvien == customer[0] && masinhvien == password_customer[0] || tensinhvien == customer[1] && masinhvien == password_customer[1] || tensinhvien == customer[2] && masinhvien == password_customer[2]) {
                alert("Tài khoản của bạn đã hết hạn sử dụng. Xin vui lòng đăng ký để sử dụng phần mềm!");
    } 
    if (tensinhvien == username[0] && masinhvien == password_user[0] || tensinhvien == username[1] && masinhvien == password_user[1] || tensinhvien == username[2] && masinhvien == password_user[2]) {
                document.getElementById("formdangnhap").style.display="none";
                document.getElementById("tieudehuongdan").style.display="block";
                document.getElementById("noidunghuongdan").style.display="block";
                document.getElementById("lambai").style.display="block";
    } 
    else alert("Tên đăng nhập hoặc mật khẩu không đúng! Xin vui lòng thử lại!");
    }