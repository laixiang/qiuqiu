$(document).ready(function () {
    $(".search_btn").bind("click", function () {
        if (VerifySearch()) {
            var keyword = $(".input_txt").val();
            keyword = keyword.replace(/(^\s*)|(\s*$)/g, "");

            window.location.href = "/s/" + encodeURIComponent(keyword);
        }

        return false;
    });

    $(".input_txt").bind("keyup", function (e) { if (e.keyCode == 13) { $(".search_btn").trigger("click"); } });

});
function VerifySearch() {
    var keyword = $(".input_txt").val();
    keyword = keyword.replace(/(^\s*)|(\s*$)/g, "");

    var ret = keyword.length == 0 ? false : true;
    if (!ret) { alert("请输入搜索内容"); }

    return ret;
}