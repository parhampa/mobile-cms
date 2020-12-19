var pid = 0;

function loadkala(id) {
	onLoad();
    pid = id;

    placeid = "single_kala_req";
    document.getElementById(placeid).innerHTML = "";

    input.type = "hidden"
    input.name = "id";
    input.id = "id";
    input.values = id;
    input.classes = "kala_req_id";
    makeinput();

    postobj.send_type = "post";
    postobj.post_url = websiteurl + "single_kala.php";
    postobj.after_success = function (data) {
        var res = JSON.parse(data);
        document.getElementById('kalaslidpic').innerHTML = "";
        for (var i = 0; i < res.pic.length; i++) {
            document.getElementById('kalaslidpic').innerHTML += '<div style="width: 100%;" class="kalaslide1">' +
                '<img src="' + res.pic[i].url + '" style="width: 100%;">' +
                '</div>';
        }

        load_slid_btn("kalaslid1btns", "kalaslide1", res.pic.length);
        if (res.pic.length > 1) {
            changepic("kalaslide1", 4, 0);
        }
        document.getElementById('kalatitle').innerHTML = res.title;
        document.getElementById('kalades').innerHTML = res.txt;

        var tbody = "";
        for (var i = 0; i < res.selects.length; i++) {
            tbody += '<tr>' +
                '<td class="w3-right-align">' + res.selects[i].select_title + '</td>' +
                '<td class="w3-right-align">' + res.selects[i].select_val + '</td>' +
                '</tr>'
        }
        for (var i = 0; i < res.strings.length; i++) {
            tbody += '<tr>' +
                '<td class="w3-right-align">' + res.strings[i].title + '</td>' +
                '<td class="w3-right-align">' + res.strings[i].val + '</td>' +
                '</tr>'
        }
        for (var i = 0; i < res.numerics.length; i++) {
            tbody += '<tr>' +
                '<td class="w3-right-align">' + res.numerics[i].title + '</td>' +
                '<td class="w3-right-align">' + res.numerics[i].val + '</td>' +
                '</tr>'
        }
        document.getElementById('vijegi_tbl').innerHTML = tbody;
        gotopage('kalapg');
        show_nazarat();
    }

    res_obj_postdata("kala_req_id");
}

function loadsndnazar() {
	onLoad();
    placeid = "send_nazar";
    document.getElementById(placeid).innerHTML = "";

    label.title = "نام و نام خانوادگی";
    label.classes = "w3-text-green";
    make_label();

    input.type = "text";
    input.name = "name";
    input.id = "name";
    input.classes = "w3-input w3-border kalanazar";
    makeinput();

    label.title = "ایمیل";
    label.classes = "w3-text-green";
    make_label();

    input.type = "email";
    input.name = "email";
    input.id = "email";
    input.classes = "w3-input w3-border kalanazar";
    makeinput();

    label.title = "متن نظر";
    label.classes = "w3-text-green";
    make_label();

    textarea.name = "txt";
    textarea.id = "txt";
    textarea.classes = "w3-input w3-round kalanazar";
    make_textarea();

    input.id = "pid";
    input.name = "pid";
    input.type = "hidden";
    input.classes = "kalanazar";
    input.values = pid;
    makeinput();

    input.id = "ty";
    input.name = "ty";
    input.type = "hidden";
    input.classes = "kalanazar";
    input.values = 0;
    makeinput();

    spanbtn.title = "ثبت";
    spanbtn.classes = "w3-btn w3-round w3-margin w3-green";
    spanbtn.onclick = "snd_kala_nazar()";
    make_span_btn();

    showsubkala('send_nazar');
}

function snd_kala_nazar() {
	onLoad();
    postobj.send_type = "post";
    postobj.post_url = websiteurl + "snd_comment.php";
    postobj.after_success = function (data) {
        var res = JSON.parse(data);
        if (res.msg == "1") {
            alert("عملیات با موفقیت انجام شد");
            document.getElementById('name').values = "";
            document.getElementById('email').values = "";
            document.getElementById('txt').values = "";
        } else {
            alert("اشکال در انجام عملیات.");
        }
    }
    if (document.getElementById('name').value == "") {
        alert("لطفا نام و نام خانوادگی را وارد نمایید.");
        return;
    }
    if (document.getElementById('email').value == "") {
        alert("لطفا آدرس ایمیل را وارد نمایید.");
        return;
    }
    if (document.getElementById('txt').value == "") {
        alert("لطفا متن نظر را وارد نمایید.");
        return;
    }
    res_obj_postdata("kalanazar");
}

function show_nazarat() {
	onLoad();
    placeid = "nazarat";
    document.getElementById(placeid).innerHTML = "";

    input.id = "pid";
    input.name = "pid";
    input.type = "hidden";
    input.classes = "nazaratplc";
    input.values = pid;
    makeinput();

    input.id = "ty";
    input.name = "ty";
    input.type = "hidden";
    input.classes = "nazaratplc";
    input.values = 0;
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
    res_obj_postdata("nazaratplc");
}