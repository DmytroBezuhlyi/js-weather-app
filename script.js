// Start state on load
$(document).ready(function () {
    $("#city-btn").click();
})

// Show OK button after type symbols in input field
function showOkButton() {
    document.getElementById('city-btn').style.display = 'inline-block';
}

// Click OK button after Enter button press
$("#city").keypress(function (event) {
    if (event.keyCode === 13) {
        $("#city-btn").click();
    }
});

// Get value from input or dropdown
$(function () {
    // Value from input
    let input = $('#city'),
        inpVal = input.val();

    // Value from dropdown list
    // $('.select').on('change', function () {
    //     input.val(inpVal + $(this).val());
    // });
});

// Processing after OK button click
$('#city-btn').on('click', function () {
    $('.table-content').css('display', 'flex');

    let city = '';
    ($('#city').val() === '') ? city = $('#city').attr('placeholder') : city = $('#city').val();

    let api = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=789d8bf96c25b83d0b02c6bb6f750d34`;
    console.log("Success - get API");
    console.log(api);
    $.ajax({
        url: api,
        dataType: "jsonp",
        type: "GET",
        async: "true",
        timeout: 500,
        success: function (data) {
            console.log("Success - get Data");
            for (let i of data.list) {
                console.log(i)
            }
        },
        error: function (e) {
            console.log("Error - get Data");
            $('#cityName').html('<p style="color:red";>ОШИБКА</p><p style="color:black";>Проверьте корректность названия</p>');
            $('#table-content').css('display', 'none');
        },
        done: function (e) {
            console.log("DONE");
        },
    }).done(dataHandler3);

    $('#cityName').text('в городе' + ' ' + city);

    function dataHandler3(data) {
        dataString = JSON.stringify(data);
        var now = new Date();
        let h = now.getHours();
        var num = 8 - (Math.floor(h / 3));

        // Today
        document.getElementById("demo3").innerHTML = data.list[0].dt_txt;
        document.getElementById("demo1").innerHTML = "Текущ." + " " + Math.floor((data.list[0].main["temp"]) - 273, 15) + "°C";
        document.getElementById("demo2-1").innerHTML = "Ощущ." + " " + Math.floor((data.list[0].main["feels_like"]) - 273, 15) + "°C";
        document.getElementById("demo2-2").innerHTML = "Влажн." + " " + (data.list[0].main["humidity"]) + "%";
        var imgURL = "https://openweathermap.org/img/w/" + data.list[0].weather[0].icon + ".png";
        $("#tmp3").attr("src", imgURL);

        // Tomorrow
        document.getElementById("demo6").innerHTML = data.list[num + 5].dt_txt;
        document.getElementById("demo4").innerHTML = "Макс." + " " + Math.floor((data.list[num + 5].main["temp"]) - 273, 15) + "°C";
        document.getElementById("demo7").innerHTML = data.list[num + 1].dt_txt;
        document.getElementById("demo5").innerHTML = "Мин." + " " + Math.floor((data.list[num + 1].main["temp"]) - 273, 15) + "°C";
        var imgURL = "https://openweathermap.org/img/w/" + data.list[num + 1].weather[0].icon + ".png";
        $("#tmp4").attr("src", imgURL);

        // The day after tomorrow
        document.getElementById("demo8").innerHTML = data.list[num + 13].dt_txt;
        document.getElementById("demo9").innerHTML = "Макс. " + " " + Math.floor((data.list[num + 13].main["temp"]) - 273, 15) + "°C";
        document.getElementById("demo10").innerHTML = data.list[num + 9].dt_txt;
        document.getElementById("demo11").innerHTML = "Мин." + " " + Math.floor((data.list[num + 9].main["temp"]) - 273, 15) + "°C";
        var imgURL = "https://openweathermap.org/img/w/" + data.list[num + 9].weather[0].icon + ".png";
        $("#tmp5").attr("src", imgURL);

        // After the day after tomorrow
        document.getElementById("demo12").innerHTML = data.list[num + 21].dt_txt;
        document.getElementById("demo13").innerHTML = "Макс." + " " + Math.floor((data.list[num + 21].main["temp"]) - 273, 15) + "°C";
        document.getElementById("demo14").innerHTML = data.list[num + 17].dt_txt;
        document.getElementById("demo15").innerHTML = "Мин." + " " + Math.floor((data.list[num + 17].main["temp"]) - 273, 15) + "°C";
        var imgURL = "https://openweathermap.org/img/w/" + data.list[num + 17].weather[0].icon + ".png";
        $("#tmp6").attr("src", imgURL);

        // After after the day after tomorrow
        document.getElementById("demo16").innerHTML = data.list[num + 29].dt_txt;
        document.getElementById("demo17").innerHTML = "Макс." + " " + Math.floor((data.list[num + 29].main["temp"]) - 273, 15) + "°C";
        document.getElementById("demo18").innerHTML = data.list[num + 25].dt_txt;
        document.getElementById("demo19").innerHTML = "Мин." + " " + Math.floor((data.list[num + 25].main["temp"]) - 273, 15) + "°C";
        var imgURL = "https://openweathermap.org/img/w/" + data.list[num + 25].weather[0].icon + ".png";
        $("#tmp7").attr("src", imgURL);
    }
});

// Display day of week
function showDateTime() {
    let d = new Date();
    let n1, n2, n3, n4, n5;
    let weekday = new Array(7);

    weekday[0] = "Воскресенье";
    weekday[1] = "Понедельник";
    weekday[2] = "Вторник";
    weekday[3] = "Среда";
    weekday[4] = "Четверг";
    weekday[5] = "Пятница";
    weekday[6] = "Суббота";

    if (d.getDay() >= 3) {
        n1 = weekday[(d.getDay() + 1)];
        n2 = weekday[(d.getDay() + 2)];
        n3 = weekday[(d.getDay() + 3)];
        n4 = weekday[7 - (d.getDay() + 4)];
    }
    if (d.getDay() >= 4) {
        n1 = weekday[(d.getDay() + 1)];
        n2 = weekday[(d.getDay() + 2)];
        n3 = weekday[7 - (d.getDay() + 3)];
        n4 = weekday[9 - (d.getDay() + 4)];
    }
    if (d.getDay() >= 5) {
        n1 = weekday[(d.getDay() + 1)];
        n2 = weekday[7 - (d.getDay() + 2)];
        n3 = weekday[9 - (d.getDay() + 3)];
        n4 = weekday[11 - (d.getDay() + 4)];
    }
    if (d.getDay() >= 6) {
        n1 = weekday[7 - (d.getDay() + 1)];
        n2 = weekday[9 - (d.getDay() + 2)];
        n3 = weekday[11 - (d.getDay() + 3)];
        n4 = weekday[13 - (d.getDay() + 4)];
    }
    if (d.getDay() < 3) {
        n1 = weekday[(d.getDay() + 1)];
        n2 = weekday[(d.getDay() + 2)];
        n3 = weekday[(d.getDay() + 3)];
        n4 = weekday[(d.getDay() + 4)];

    }

    document.getElementById("day1").innerHTML = n1;
    document.getElementById("day2").innerHTML = n2;
    document.getElementById("day3").innerHTML = n3;
    document.getElementById("day4").innerHTML = n4;
}

showDateTime();
