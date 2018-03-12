document.getElementById("listOG").style.display = "none";
document.getElementById("myInput").style.display = "none";
document.getElementById("titleInput").style.display = "none"
$('.List').css('display', 'none')

var listOG = $('#listOG');
var cardsCss = $('.cards');
let yahoo = document.getElementById("yahoo")
let no = document.getElementById("no")
var listNumber = 1
var width = 0
var addListClick = true
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
        $('.List').css('display', 'block')
        $(".listOG").css("display", "block")
        $(".listOG").animate({
            opacity: "1"
        }, 100)
        $('body').animate({
            backgroundColor: '#337ab7'
        }, 100)
        $('.List').animate({
            opacity: '1'
        })
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
            $('.List').css('display', 'block')
            $('.List').animate({
                opacity: '1'
            })
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
            $(".List").animate({
                opacity: "1"
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


    var listOGItemCount = 0
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

                li.className = "cards ui-state-default";
                if (inputValue !== '') {
                    document.getElementById("items").appendChild(li);
                    var iSpan = document.createElement("SPAN");
                    var removeItem = document.createElement("i");
                    var infoItem = document.createElement("i");
                    var checkItem = document.createElement("i");
                    removeItem.className = "fa fa-times cardIcons closeCard";
                    infoItem.className = "fas fa-ellipsis-h cardIcons infoCard";
                    checkItem.className = "fas fa-check cardIcons checkCard"
                    iSpan.appendChild(removeItem);
                    iSpan.appendChild(infoItem);
                    iSpan.appendChild(checkItem);
                    li.appendChild(iSpan);


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
            var close = document.getElementsByClassName("closeCard");
            for (i = 0; i < close.length; i++) {
                close[i].onclick = function () {
                    listOGItemCount--
                    $('.listOG').stop();
                    $(this).parent().parent().fadeOut(1300, function () {
                        $(this).remove();
                    });
                    setTimeout(function () {
                        curHeight = listOG.height();
                        autoHeight = listOG.css('height', 'auto').height();
                        if (listOGItemCount == 0) {
                            listOG.height(curHeight).animate({
                                height: '75'
                            }, 500);
                        } else {
                            listOG.height(curHeight).animate({
                                height: autoHeight + 12
                            }, 500);
                        };
                    }, 1300);
                };
            };
            var check = document.getElementsByClassName("checkCard")
            for (j = 0; j < check.length; j++)
                check[j].onclick = function () {
                    $(this).parent().parent().toggleClass('checked')
                }
        })
    });

    $(function () {
        $("#items, #sortable2").sortable({
            connectWith: ".connectedSortable"
        }).disableSelection();
    });

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



    var listNumber = 1
    var width = 0
    var addListClick = true


    document.getElementById("AddList").addEventListener("click", function () {
        document.getElementById("titleInput").value = ''
        document.getElementById("titleInput").style.display = "block";
        $('#AddList').toggle();
        $('#titleInput').focus();
        addListClick = true
        console.log(addListClick)


        $(document).keypress(function (e) {
            var listTitle = document.getElementById("titleInput").value;
            if (e.which == 13 && addListClick) {


                $('<div class="List' + (listNumber + 1) + ' List"></div>').insertAfter(".List" + listNumber);
                $("#AddList").appendTo(".List" + (listNumber + 1));
                $("#titleInput").appendTo(".List" + (listNumber + 1));



                $('.List' + (listNumber)).html('<div id="toDo' + listNumber + '"class="header"></div>')
                $('<ul id="items"></ul>').insertAfter("#toDo" + listNumber)

                $("#toDo" + listNumber).html('<header class="title' + listNumber + '">' + listTitle + '</header>')
                $('.title' + listNumber).toggleClass('title');
                $('<button class="taskBtn' + listNumber + '" id="taskId' + listNumber + '">Add new task...</button>').insertAfter(".title" + listNumber)
                $('.taskBtn' + listNumber).toggleClass('taskBtn');
                $('<input type="text" id="myInput' + listNumber + '" placeholder="Enter...">').insertAfter("#taskId" + listNumber);
                $('#myInput' + listNumber).addClass('myInput')
                $('#myInput' + listNumber).css('opacity', '0');



                width = (250 * listNumber) + 30
                listNumber++

                $(".List" + listNumber).offset({
                    top: 95,
                    left: width
                })

                $(".List" + listNumber).animate({
                    opacity: "1"
                }, 300)

                $('#AddList').toggle();
                $('#titleInput').toggle();


                addListClick = false
            }
            for (l = 1; l <= listNumber; l++) {
                $('#taskId' + l).click(function () {
                    console.log(true)
                })
            }
        })


    })




})