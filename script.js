let yahoo = document.getElementById("yahoo")
let no = document.getElementById("no")
let theme = 'default'

$('#themebutton').on('click', function () {
    theme = 'reverse'
    $('body').css('background-color', 'white')
    $(".rightTriangle").css("background-color", "#274e9a")
    $(".leftTriangle").css("background-color", "#274e9a")
    $(".navbar").css("background-color", "#f6b32f")
    $("#mainButton").css("background-color", '#ffcc67')
    $("#mainButton").css("border-color", '#274e9a')
})

$('#matrixthemebutton').on('click', function () {
    theme = 'matrix'
    $("body").css("background-color", 'black')
    $(".rightTriangle").css("background-color", "limegreen")
    $(".leftTriangle").css("background-color", "limegreen")
    $(".navbar").css("background-color", "limegreen")
    $("#mainButton").css("background-color", 'black')
    $("#mainButton").css("border-color", 'limegreen')
})


$(document).ready(function () {

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $('#sidebarCollapse').toggleClass('activeBtn');

    });

    document.getElementById("mainButton").addEventListener("click", function () {
        $(".rightTriangle").animate({
            width: "0px"
        }, 700)
        $(".leftTriangle").animate({
            width: "0px"
        }, 700)
        $("#mainButton").animate({
            top: "90%",
            opacity: "0"

        }, 700)
        $(".mainLogo").animate({
            top: "30%",
            opacity: "0"
        }, 700)
        setTimeout(function () {
            $('#stuart_speech').animate({
                opacity: '1'
            })
            setTimeout(function () {
                $('#imran_speech').animate({
                    opacity: '1'
                })
                no.play();
            }, 800)
            yahoo.play();
        }, 800)
        setTimeout(function () {
            $("#mainButton").css("display", "none")
            $(".rightTriangle").css("display", "none")
            $(".leftTriangle").css("display", "none")
            $(".mainLogo").css("display", "none")

            $("#imran").animate({
                opacity: "0"
            }, 2000)
            $("#stuart").animate({
                opacity: "0"
            }, 2000)
            $("#imran_speech").animate({
                opacity: "0"
            }, 2000)
            $("#stuart_speech").animate({
                opacity: "0"
            }, 2000)
            setTimeout(function () {
                $("#imran").css("display", "none")
                $("#stuart").css("display", "none")
                $("#stuart_speech").css("display", "none")
                $("#imran_speech").css("display", "none")

            }, 2000)
        }, 2000)
    })
});

$('#mainButton').hover(function () {
    if(theme === 'default') {
    $(this).animate({
        backgroundColor: '#f6b32f',
        borderColor: 'white',
        
    }, 300)
} else if(theme === 'reverse') {
    $(this).animate({

        backgroundColor: '#284e9b',
        borderColor: 'white',
    }, 300)
}

}, function () {
    if(theme === 'default') {
    $(this).animate({

        backgroundColor: '#274e9a',
        borderColor: '#f6b32f',
    }, 300)
} else if(theme === 'reverse') {
    $(this).animate({
        backgroundColor: '#ffcc67',
        borderColor: '#274e9a',
    }, 300)
}

})

