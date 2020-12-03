function loadkala(id) {
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
    }

    res_obj_postdata("kala_req_id");
}