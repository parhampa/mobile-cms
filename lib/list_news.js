function load_list_news() {
	onLoad();
    placeid = "newslistpg";
    document.getElementById(placeid).innerHTML = "";
    input.name = "tkn";
    input.id = "tkn";
    input.type = "hidden";
    input.classes = "listnews";

    postobj.send_type = "post";
    postobj.post_url = websiteurl + "list_news.php";
    postobj.after_success = function (data) {
        var res = JSON.parse(data);
        var reshtm = '';
        for (var i = 0; i < res.content.length; i++) {
            var pic = "nopic.jpg";
            if (res.content[i].pic != "") {
                pic = res.content[i].pic;
            }
            reshtm += '<div style="width: 94%; margin-right: 3%;" class="w3-panel w3-round w3-card w3-light-gray">' +
                '<table style="width: 100%;">' +
                '<tr>' +
                '<td style="width: 30%; vertical-align: top;"><img src="' + pic + '" style="width: 100%;"></td>' +
                '<td style="vertical-align: top; padding-right: 5px; width: 60%;">' +
                '<b>' + res.content[i].title + '</b>' +
                '<div style="width: 100%;">' +
                res.content[i].txt.substr(0, 200) +
                "..." +
                '</div>' +
                '</td>' +
                '</tr>' +
                '</table>' +
                '</div>';
        }
        reshtm += "</div></tr></table>";
        document.getElementById(placeid).innerHTML = reshtm;
        gotopage('newslistpg');
    }
    res_obj_postdata("listnews");
}