function load_last_news() {
    placeid = "lastnewsmainpg";
    document.getElementById(placeid).innerHTML = "";
    input.name = "tkn";
    input.id = "tkn";
    input.type = "hidden";
    input.classes = "lastnews";

    postobj.send_type = "post";
    postobj.post_url = websiteurl + "last_news.php";
    postobj.after_success = function (data) {
        var res = JSON.parse(data);
        var reshtm = '<table style="text-align: center;"><tr>';
        for (var i = 0; i < res.content.length; i++) {
            var pic = "nopic.jpg";
            if (res.content[i].pic != "") {
                pic = res.content[i].pic;
            }
            reshtm += '<td class="w3-border w3-padding" style="vertical-align: top;"><div style="width: 160px;">' +
                '<img src="' + pic + '" style="width: 150px; height: 150px;" class="postpic" onclick="loadnew(' + res.content[i].id + ')">' +
                '<br><p style="width: 150px; white-space: initial;">' +
                res.content[i].title +
                '</p></td>'
        }
        reshtm += "</div></tr></table>";
        document.getElementById(placeid).innerHTML = reshtm;
    }
    res_obj_postdata("lastnews");
}

