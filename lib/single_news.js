function loadnew(id) {
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
            '<img src="' + res.pic + '" style="width: 100%;">' +
            '</div>';
        document.getElementById('newtitle').innerHTML = res.title;
        document.getElementById('newcontent').innerHTML = res.txt;

        gotopage('newspg');
    }

    res_obj_postdata("new_req_id");
}