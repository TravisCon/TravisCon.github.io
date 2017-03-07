$(".fb-page").hide();
(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
$("#drop").mouseenter(function () {
    if (!animating && $("#right").width() < 200) {
        animating = true;
        $("#drop-container").animate({
            width: "+=300"
        }, 150, function () {
            $(".fb-page").slideDown(200, function () {
                animating = false;
            });
        });
    }
});
$("#right").mouseleave(function () {
    if (!animating && $("#right").width() > 200) {
        animating = true;
        $(".fb-page").slideUp(150, function () {
            $("#drop-container").animate({
                width: "-=300"
            }, 200, function () {
                animating = false;
            });
        });
    }
});