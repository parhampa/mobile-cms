function loadloginpg() {
    placeid = "loginpg";
    document.getElementById(placeid).innerHTML = "";

    label.title = "نام کاربری";
    label.classes = "w3-text-green";
    make_label();

    input.name = "user";
    input.id = "userlogin";
    input.type = "text";
    input.classes = "w3-input w3-border loginfrmcls";
    makeinput();

    label.title = "کلمه عبور";
    label.classes = "w3-text-green";
    make_label();

    input.name = "pass";
    input.id = "passlogin";
    input.type = "password";
    input.classes = "w3-input w3-border loginfrmcls";
    makeinput();

    spanbtn.classes = "w3-btn w3-green w3-round";
    spanbtn.title = "ورود";
    spanbtn.onclick = "loginuser()";
    spanbtn.style = "width:40%; margin-right:30%; margin-top:5px;";
    make_span_btn();

    gotopage("loginpg");
}

function loginuser() {
    if (getbyid('userlogin') == "") {
        alert("لطفا نام کاربری را وارد نمایید.");
        return;
    }
    if (getbyid('passlogin') == "") {
        alert("لطفا کلمه ی عبور را وارد نمایید.");
        return;
    }
    postobj.send_type = "post";
    postobj.post_url = websiteurl + "login.php";
    postobj.after_success = function (data) {
        var res = JSON.parse(data);
        if (res.msg == 1) {
            localStorage.user = getbyid('userlogin');
            localStorage.pass = getbyid('passlogin');
            document.getElementById('loginbtn').style.display = "none";
            document.getElementById('logoutbtn').style.display = "";
            alert("شما با موفقیت وارد شدید");
            gotopage('mainpage');
        } else {
            alert("نام کاربری و یا کلمه عبور اشتباه می باشد");
        }
    }
    res_obj_postdata("loginfrmcls");
}

function logoutuser() {
    localStorage.removeItem("user");
    localStorage.removeItem("pass");
    document.getElementById('loginbtn').style.display = "";
    document.getElementById('logoutbtn').style.display = "none";
    alert("خروج با موفقیت صورت گرفت.");
    gotopage("mainpage")
}