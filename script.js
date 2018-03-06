function animateTriangles() {

}

document.getElementById("mainButton").addEventListener("click", function () {
    $(".rightTriangle").animate({
        width: "0px"
    }, 700)
    $(".leftTriangle").animate({
        width: "0px"
    }, 700)

    $("#mainButton").animate({
        top: "100%",
        opacity: "0"
    }, 700)
    setTimeout(function () {
        $("#mainButton").css("display", "none")
        $(".rightTriangle").css("display", "none")
        $(".leftTriangle").css("display", "none")
    }, 568)
})