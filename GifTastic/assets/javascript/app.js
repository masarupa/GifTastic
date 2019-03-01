$(document).ready(function () {
    var topics = ['cow', 'rabbit', 'dog', 'cat', 'bird', 'horse', 'hamster', 'lion', 'tiger', 'monkey', 'bear', 'dolphin'];


    for (var i = 0; i < topics.length; i++) {
        var button = $(`<button id="${topics[i]}">${topics[i]}</button>`);
        $('#buttons').append(button)



        var queryUrl =
            "https://api.giphy.com/v1/gifs/search?api_key=7kp3VSMXFVomFcfNlNZZITVN6bqceN5o&q=" + topics[i] + "&limit=1&offset=0&rating=G&lang=en";


        $.ajax({
            url: queryUrl,
            method: "GET"
        }).then(function (response) {

            var result = response.data;
            console.log(result);

            var img = $("<img>");
            var imgUrl = result[0].images.original.url;
            console.log(imgUrl);
            img.attr("src", imgUrl);
            $("#gifs").append(img);


        });
    }

})