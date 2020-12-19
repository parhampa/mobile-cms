function load_last_kala() {
	onLoad();
    placeid = "lastkalamainpg";
    document.getElementById(placeid).innerHTML = "";
    input.name = "tkn";
    input.id = "tkn";
    input.type = "hidden";
    input.classes = "lastkala";

    postobj.send_type = "post";
    postobj.post_url = websiteurl + "last_kala.php";
    postobj.after_success = function (data) {
        var res = JSON.parse(data);
        var reshtm = '<table style="text-align: center;"><tr>';
        for (var i = 0; i < res.kala.length; i++) {
            var pic = "nopic.jpg";
            if (res.kala[i].pic != "") {
                pic = res.kala[i].pic;
            }
            reshtm += '<td class="w3-border w3-padding" style="vertical-align: top;"><div style="width: 160px;">' +
                '<img src="' + pic + '" style="width: 150px; height: 150px;" class="postpic" onclick="loadkala(' + res.kala[i].id + ')">' +
                '<br><p style="width: 150px; white-space: initial;">' +
                res.kala[i].title +
                '</p></td>'
        }
        reshtm += "</div></tr></table>";
        document.getElementById(placeid).innerHTML = reshtm;
        load_last_news();
    }
    res_obj_postdata("lastkala");
}

