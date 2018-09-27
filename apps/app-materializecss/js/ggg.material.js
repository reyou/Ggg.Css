var toggleScale = function (sender) {
    $(sender).toggleClass("scale-out");
    setTimeout(function () {
        $(sender).toggleClass("scale-out");
    }, 2000);
}
var flowToggle = function (sender) {
    $("#flow-p").toggleClass("flow-text");
}