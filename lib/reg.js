function loadreg() {
	onLoad();
    placeid = "regpg";
    document.getElementById(placeid).innerHTML = "";

    fastinput("name", "text", "نام", "formreg");
    fastinput("famili", "text", "نام خانوادگی", "formreg");
    fastinput("user", "text", "نام کاربری", "formreg");
    fastinput("pass", "password", "کلمه عبور", "formreg");
    fastinput("rpass", "password", "تکرار کلمه عبور", "formreg");
    fastinput("u_bazaryab", "text", "کاربر معرف", "formreg");
    fastinput("mob", "text", "شماره تلفن همراه", "formreg");
    fastinput("email", "text", "ایمیل", "formreg");
    fastbtn("ثبت نام", "sndreg()");
    gotopage('regpg');
}

function sndreg() {
	onLoad();
    if (getbyid('name') == "") {
        alert("لطفا نام را وارد نمایید.");
        return;
    }
    if (getbyid('famili') == "") {
        alert("لطفا نام خانوادگی را وارد نمایید.");
        return;
    }
    if (getbyid('user') == "") {
        alert("لطفا نام کاربری را وارد نمایید.");
        return;
    }
    if (getbyid('pass') == "") {
        alert("لطفا کلمه عبور را وارد نمایید.");
        return;
    }
    if (getbyid('rpass') == "") {
        alert("لطفا تکرار کلمه عبور را وارد نمایید.");
        return;
    }
    if (getbyid('u_bazaryab') == "") {
        alert("لطفا کاربر معرف را وارد نمایید.");
        return;
    }
    if (getbyid('mob') == "") {
        alert("لطفا شماره تلفن همراه را وارد نمایید.");
        return;
    }
    if (getbyid('email') == "") {
        alert("لطفا ایمیل را وارد نمایید.");
        return;
    }
    if (getbyid('pass') != getbyid('rpass')) {
        alert("کلمه عبور و تکرار آن با هم برابر نیستند.");
        return;
    }

    postobj.send_type = "post";
    postobj.post_url = websiteurl + "reg.php";
    postobj.after_success = function (data) {
        var res = JSON.parse(data);
        if (res.msg == "0") {
            alert("اشکال در انجام عملیات.");
        }
        if (res.msg == "1") {
            alert("عملیات با موفقیت انجام شد.");
        }
        if (res.msg == "3") {
            alert("نام کاربری تکراری می باشد.");
        }
    }
    res_obj_postdata("formreg");
}