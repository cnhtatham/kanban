document.getElementById("listOG").style.display = "none";
document.getElementById("myInput").style.display = "none";

var listOG = $('#listOG');
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
        $(".listOG").css({
            "background-color": "##274e9a",
            "color": "#f6b32f",
            'border-color': "#f6b32f"
        })
        $('body').css('background-color', 'white')
        $(".rightTriangle").css("background-color", "#274e9a")
        $(".leftTriangle").css("background-color", "#274e9a")
        $(".navbar").css("background-color", "#f6b32f")
        $("#mainButton").css("background-color", '#ffcc67')
        $("#mainButton").css("border-color", '#274e9a')
    })

    $('#homeThemeButton').on('click', function () {
        theme = 'default'
        $(".listOG").css({
            "background-color": "#f6b32f",
            "color": "#274e9a",
            'border-color': "#274e9a"
        })
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


    $('#subMenu').on("click", function (e) {
        $(this).next('ul').toggle();
        e.stopPropagation();
        e.preventDefault();
    });

    document.getElementById("skip").addEventListener("click", function () {
        $("#imran").css("display", "none")
        $("#stuart").css("display", "none")
        $("#stuart_speech").css("display", "none")
        $("#imran_speech").css("display", "none")
        $(".startScreen").css("display", "none")
        $("#mainButton").css("display", "none")
        $(".rightTriangle").css("display", "none")
        $(".leftTriangle").css("display", "none")
        $(".mainLogo").css("display", "none")

        $(".listOG").css("display", "block")
        $(".listOG").animate({
            opacity: "1"
        }, 100)
        $('body').animate({
            backgroundColor: '#337ab7'
        }, 100)
    })

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
            $(".listOG").css("display", "block")
            $(".listOG").animate({
                opacity: "1"
            }, 2000)
            $('body').animate({
                backgroundColor: '#337ab7'
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


    let listOGItemCount = 0
    var listOG = $('#listOG')

    // CREATING LIST ITEMS >>>>>>>>>>>>>
    document.querySelector(".taskBtn").addEventListener('click', function () {
        document.getElementById("myInput").style.display = "block";
        $('.taskBtn').toggle();
        $('#myInput').focus();

        $(document).keypress(function (e) {
            if (e.which == 13) {
                var li = document.createElement("li");
                var inputValue = document.getElementById("myInput").value;
                var textSpan = document.createElement("SPAN");
                textSpan.className = "textSpan";
                var text = document.createTextNode(inputValue);
                textSpan.appendChild(text);
                li.appendChild(textSpan);
                li.className = "ui-state-default";
                if (inputValue !== '') {
                    document.getElementById("items").appendChild(li);
                    var removeItem = document.createElement("i");
                    var infoItem = document.createElement("i");
                    var checkItem = document.createElement("i");
                    removeItem.className = "fa fa-times";
                    infoItem.className = "fas fa-ellipsis-h";
                    checkItem.className = "fas fa-check"
                    li.appendChild(removeItem);
                    li.appendChild(infoItem);
                    li.appendChild(checkItem);
                    document.getElementById("myInput").value = "";
                    $('#myInput').toggle();
                    $('.taskBtn').toggle();
                    listOGItemCount++
                    curHeight = listOG.height();
                    autoHeight = listOG.css('height', 'auto').height();
                    listOG.height(curHeight).animate({
                        height: autoHeight + 15
                    }, 500);
                    setTimeout(function () {
                        $("li").animate({
                            opacity: "1"
                        }, 200)
                    }, 500)
                }
            }
            // Click on a close button to hide the current list item
            var close = document.getElementsByClassName("fa-times");
            for (i = 0; i < close.length; i++) {
                close[i].onclick = function () {
                    listOGItemCount--
                    $('.listOG').stop();
                    var div = this.parentElement;
                    $(this.parentElement).animate({
                        opacity: "0"
                    }, 200)
                    setTimeout(function () {
                        if (listOGItemCount == 0) {
                            div.style.display = "none";
                            curHeight = listOG.height();
                            autoHeight = listOG.css('height', 'auto').height();
                            listOG.height(curHeight).animate({
                                height: '75'
                            }, 500);
                        } else {
                            div.style.display = "none";
                            curHeight = listOG.height();
                            autoHeight = listOG.css('height', 'auto').height();
                            listOG.height(curHeight).animate({
                                height: autoHeight + 12
                            }, 500);
                        };
                    }, 200);
                };
            };
        })
    })
});

$(function () {
    $("#items, #sortable2").sortable({
        connectWith: ".connectedSortable"
    }).disableSelection();
});

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('#items');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI' || ev.target.tagName === 'SPAN') {
        ev.target.classList.toggle('checked');
    }
}, false);

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