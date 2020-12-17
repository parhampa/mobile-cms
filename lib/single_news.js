function loadnew(id) {
    pid = id;
    placeid = "single_new_req";
    document.getElementById(placeid).innerHTML = "";

    input.type = "hidden"
    input.name = "id";
    input.id = "id";
    input.values = id;
    input.classes = "new_req_id";
    makeinput();

    postobj.send_type = "post";
    postobj.post_url = websiteurl + "single_kala.php";
    postobj.after_success = function (data) {
        var res = JSON.parse(data);
        document.getElementById('newslidpic').innerHTML = '<div style="width: 100%;" class="newslide1">' +
            '<img src="' + res.pic[0].url + '" style="width: 100%;">' +
            '</div>';
        document.getElementById('newtitle').innerHTML = res.title;
        document.getElementById('newcontent').innerHTML = res.txt;
        show_nazarat_news();
        gotopage('newspg');
    }

    res_obj_postdata("new_req_id");
}

function loadsndnazarnews() {
    placeid = "send_nazarnews";
    document.getElementById(placeid).innerHTML = "";

    label.title = "نام و نام خانوادگی";
    label.classes = "w3-text-green newsnazarcls";
    make_label();

    input.type = "text";
    input.name = "name";
    input.id = "name1";
    input.classes = "w3-input w3-border newsnazarcls";
    makeinput();

    label.title = "ایمیل";
    label.classes = "w3-text-green";
    make_label();

    input.type = "email";
    input.name = "email";
    input.id = "email1";
    input.classes = "w3-input w3-border newsnazarcls";
    makeinput();

    label.title = "متن نظر";
    label.classes = "w3-text-green";
    make_label();

    textarea.name = "txt";
    textarea.id = "txt1";
    textarea.classes = "w3-input w3-round newsnazarcls";
    make_textarea();

    input.id = "pid";
    input.name = "pid";
    input.type = "hidden";
    input.classes = "newsnazarcls";
    input.values = pid;
    makeinput();

    input.id = "ty";
    input.name = "ty";
    input.type = "hidden";
    input.classes = "newsnazarcls";
    input.values = 2;
    makeinput();

    spanbtn.title = "ثبت";
    spanbtn.onclick = "snd_new_nazar()";
    spanbtn.classes = "w3-btn w3-round w3-margin w3-green";
    make_span_btn();

    showsubnew('send_nazarnews');

}

function snd_new_nazar() {
    postobj.send_type = "post";
    postobj.post_url = websiteurl + "snd_comment.php";
    postobj.after_success = function (data) {
        var res = JSON.parse(data);
        if (res.msg == "1") {
            alert("عملیات با موفقیت انجام شد");
            document.getElementById('name1').values = "";
            document.getElementById('email1').values = "";
            document.getElementById('txt1').values = "";
        } else {
            alert("اشکال در انجام عملیات.");
        }
    }
    if (document.getElementById('name1').value == "") {
        alert("لطفا نام و نام خانوادگی را وارد نمایید.");
        return;
    }
    if (document.getElementById('email1').value == "") {
        alert("لطفا آدرس ایمیل را وارد نمایید.");
        return;
    }
    if (document.getElementById('txt1').value == "") {
        alert("لطفا متن نظر را وارد نمایید.");
        return;
    }
    res_obj_postdata("newsnazarcls");
}

function show_nazarat_news() {
    placeid = "nazaratnews";
    document.getElementById(placeid).innerHTML = "";

    input.id = "pid";
    input.name = "pid";
    input.type = "hidden";
    input.classes = "newsnazaratplc";
    input.values = pid;
    makeinput();

    input.id = "ty";
    input.name = "ty";
    input.type = "hidden";
    input.classes = "newsnazaratplc";
    input.values = 2;
    makeinput();

    postobj.send_type = "post";
    postobj.post_url = websiteurl + "list_comment.php";
    postobj.after_success = function (data) {
        var res = JSON.parse(data);
        var htm = "";
        for (var i = 0; i < res.comments.length; i++) {
            htm += '<div class="w3-panel w3-round w3-light-gray w3-padding-24">';
            htm += '<span>' + res.comments[i].name + '</span>';
            htm += '<div>' + res.comments[i].txt + '</div>';
            htm += "</div>";
        }
        document.getElementById(placeid).innerHTML = htm;
    }
    res_obj_postdata("newsnazaratplc");
}