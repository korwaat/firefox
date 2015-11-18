var clicks = 0;
var match = 0;
var pointer = 0;
var pairs = 10;
$(function () { // == $(ducoment).ready
    var numbers = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10];
    var r = $("#taable div");
    for (var i = 0; i < r.length; i++) {
        $(r[i]).attr("value", i);
        $(r[i]).attr("name", i);
    }
    var numbers2 = [];
    for (var j = 0; j < r.length; j++) {
        var rnum2 = Math.floor(Math.random() * 19);
        //alert(rnum2);
        if (numbers[rnum2] != 0) {
            numbers2[j] = numbers[rnum2];
            numbers[rnum2] = 0;
        } else {
            while (numbers[rnum2] == 0) {
                rnum2++;
                if (rnum2 > 19)
                    rnum2 = 0;
            }
            numbers2[j] = numbers[rnum2];
            numbers[rnum2] = 0;
        }

    }
    var valuee = 0;
    var valuee2 = 0;
    var name1;
    var name2;

    $("#taable div").click(function () {
        if (clicks < 2) {
            var indexx = $(this).attr("value");
            switch (clicks) {
                case 0:
                    valuee = $(this).attr("value");
                    $(this).html(numbers2[indexx]);
                    clicks++;
                    pointer++;
                    $("#main #pointer").html("<b>Clicks:" + "<span>" + pointer + "</span>"+"</b>");
                    name1 = $(this).attr("name");
                    break;
                case 1:
                    valuee2 = $(this).attr("value");
                    $(this).html(numbers2[indexx]);
                    clicks++;
                    pointer++;
                    $("#main #pointer").html("<b>Clicks:" + "<span>" + pointer + "</span>"+"</b>");
                    name2 = $(this).attr("name");
                    if (numbers2[valuee] == numbers2[valuee2] && name1 != name2) {
                        $(r[valuee]).slideUp(800, "swing", valami).delay(600);
                        $(r[valuee2]).slideUp(800).delay(600);
                        pairs--;
                        if(pairs == 1) {
                            $("#main #remain_pairs").html("<b>Remaining Pair:" + "<span>" + pairs + "</span>"+"</b>");
                        } else {
                          $("#main #remain_pairs").html("<b>Remaining Pairs:" + "<span>" + pairs + "</span>"+"</b>");  
                        }
                        navigator.vibrate(500);  
                    } else {
                        delayedAlert();
                    }
                    break;
            }
        }
    });

    function valami() {
        $(r[valuee]).attr("style", "visibility: hidden");
        $(r[valuee2]).attr("style", "visibility: hidden");
        match++;
        clicks = 0;
        if (match == 10) {
            if (window.confirm("Nyertél! Kilépsz vagy játszol még egyet?")) { 
                window.close();
            } else {
                location.reload();
            } 
        }
    }

    var timeoutID;
    function delayedAlert() {
        timeoutID = window.setTimeout(function hide() {
            $(r[valuee]).html("");
            $(r[valuee2]).html("");
            clicks = 0;
        }, 1000);
    }
});






