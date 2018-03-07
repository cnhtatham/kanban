document.getElementById("list1").style.display = "none";

var list1 = $('#list1');
let yahoo = document.getElementById("yahoo")
let no = document.getElementById("no")

let theme = 'default'


$(document).ready(function () {

    $(".logo").css("display", "none")
    setTimeout(function () {
        $(".logo").css("display", "block")
        $(".logo").addClass("animated jackInTheBox")
    }, 100)


    $('#themeButton').on('click', function () {
        theme = 'reverse'
        $(".list1").css({"background-color": "##274e9a", "color": "#f6b32f", 'border-color': "#f6b32f"})
        $('body').css('background-color', 'white')
        $(".rightTriangle").css("background-color", "#274e9a")
        $(".leftTriangle").css("background-color", "#274e9a")
        $(".navbar").css("background-color", "#f6b32f")
        $("#mainButton").css("background-color", '#ffcc67')
        $("#mainButton").css("border-color", '#274e9a')
    })

    $('#homeThemeButton').on('click', function () {
        theme = 'default'
        $(".list1").css({"background-color": "#f6b32f", "color": "#274e9a", 'border-color': "#274e9a"})
        $("body").css("background-color", 'white')
        $(".rightTriangle").css("background-color", "#f6b32f")
        $(".leftTriangle").css("background-color", "#f6b32f")
        $(".navbar").css("background-color", "#274e9a")
        $("#mainButton").css("background-color", '#274e9a')
        $("#mainButton").css("border-color", '#f6b32f')
    })

$('#sideBarButton').on('click', function () {
    $('#drop').toggleClass('active');
    $('#sideBarButton').toggleClass('sideBarButtonActive');
     });


$('#subMenu').on("click", function(e){
    $(this).next('ul').toggle();
        e.stopPropagation();
        e.preventDefault();
      });

    document.getElementById("mainButton").addEventListener("click", function () {
        $("#mainButton").stop();
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
            $(".list1").css("display", "block")
            $(".list1").animate({
                opacity: "1"
            }, 2000)
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
                $(".startScreen").css("display", "none")
            }, 2000)
        }, 2000)
    })

    document.querySelector(".taskBtn").addEventListener('click', function () {
        document.getElementById("myInput").style.display = "block";


        var li = document.createElement("li");
        var inputValue = document.getElementById("myInput").value;
        var text = document.createTextNode(inputValue);
        li.appendChild(text);
        if (inputValue === '') {
            alert("Enter something fool");
        } else {
            document.getElementById("items").appendChild(li);
            var list1 = $('#list1');
            curHeight = list1.height();
            autoHeight = list1.css('height', 'auto').height();
            list1.height(curHeight).animate({
                height: autoHeight + 15
            }, 500);
            setTimeout(function() {
                $("li").animate({
                    opacity: "1"
                }, 200)
            }, 500)

        }

        document.getElementById("myInput").value = "";
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        li.appendChild(span);
        for (i = 0; i < close.length; i++) {
            close[i].onclick = function () {
                var div = this.parentElement;
                $(this.parentElement).animate({
                    opacity: "0"
                }, 200)
                setTimeout(function() {
                    div.style.display = "none";
                curHeight = list1.height();
                autoHeight = list1.css('height', 'auto').height();
                list1.height(curHeight).animate({
                    height: autoHeight + 12
                }, 500);
                }, 200)
            }
        }
    })
})

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

$('#mainButton').hover(function () {
    if (theme === 'default') {
        $(this).animate({
            backgroundColor: '#f6b32f',
            borderColor: 'white',

        }, 300)
    } else if (theme === 'reverse') {
        $(this).animate({

            backgroundColor: '#284e9b',
            borderColor: 'white',
        }, 300)
    }

}, function () {
    if (theme === 'default') {
        $(this).animate({

            backgroundColor: '#274e9a',
            borderColor: '#f6b32f',
        }, 300)
    } else if (theme === 'reverse') {
        $(this).animate({
            backgroundColor: '#ffcc67',
            borderColor: '#274e9a',
        }, 300)
    }

})