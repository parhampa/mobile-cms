function load_main_slider() {
    placeid = "mainslidpic";
    document.getElementById(placeid).innerHTML = "";
    input.name = "tkn";
    input.id = "tkn";
    input.type = "hidden";
    input.classes = "slider";

    postobj.send_type = "post";
    postobj.post_url = websiteurl + "slider.php";
    postobj.after_success = function (data) {
        var res = JSON.parse(data);
        var reshtm = "";
        for (var i = 0; i < res.slider.length; i++) {
            reshtm += '<div style="width: 100%;" class="picslide1">' +
                '<img src="' + res.slider[i].pic + '" style="width: 100%; height: 150px;">' +
                '</div>';
        }
        document.getElementById(placeid).innerHTML = reshtm;
        load_slid_btn("slid1btns", "picslide1", res.slider.length);
        load_last_kala();
		changepic("picslide1",res.slider.length,0);
    }
    res_obj_postdata("slider");
}
load_main_slider();