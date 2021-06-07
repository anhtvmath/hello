   function validate() {
    var tensinhvien = document.getElementById("studentname").value;
    var masinhvien = document.getElementById("studentid").value;   
    if (tensinhvien == null || tensinhvien == "")
    {
    alert("Xin vui nhập họ và tên!");
    } 
    if (masinhvien == null || masinhvien == "")
    {
    alert("Xin vui lòng nhập mã sinh viên!");
    } 
    if (tensinhvien != null & tensinhvien != "" & masinhvien != null & masinhvien != "") {    
    document.getElementById("formdangnhap").style.display="none";
    document.getElementById("tieudehuongdan").style.display="block";
    document.getElementById("noidunghuongdan").style.display="block";
    document.getElementById("lambai").style.display="block";
    }
    }
