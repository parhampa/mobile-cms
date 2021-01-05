function load_list_kala() {
	onLoad();
    placeid = "kalalistpg";
    document.getElementById(placeid).innerHTML = "";
    input.name = "tkn";
    input.id = "tkn";
    input.type = "hidden";
    input.classes = "listkala";

    postobj.send_type = "post";
    postobj.post_url = websiteurl + "list_kala.php";
    postobj.after_success = function (data) {
        var res = JSON.parse(data);
        var reshtm = '';
        for (var i = 0; i < res.kala.length; i++) {
            var pic = "nopic.jpg";
            if (res.kala[i].pic != "") {
                pic = res.kala[i].pic;
            }
            reshtm += '<div style="width: 94%; margin-right: 3%;" class="w3-panel w3-round w3-card w3-light-gray">' +
                '<table style="width: 100%;">' +
                '<tr onclick="loadkala('+res.kala[i].id+')">' +
                '<td style="width: 30%; vertical-align: top;"><img src="' + pic + '" style="width: 100%;"></td>' +
                '<td style="vertical-align: top; padding-right: 5px; width: 60%;">' +
                '<b>' + res.kala[i].title + '</b>' +
                '<div style="width: 100%;">' +
                '<span class="w3-green w3-left w3-margin-top w3-padding">' + res.kala[i].price + ' ریال</span>' +
                '</div>' +
                '</td>' +
                '</tr>' +
                '</table>' +
                '</div>';
        }
        reshtm += "</div></tr></table>";
        document.getElementById(placeid).innerHTML = reshtm;
        gotopage('kalalistpg');
    }
    res_obj_postdata("listkala");
}

