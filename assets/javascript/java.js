//const axios = require('axios');
// document.getElementById("test").on("click", function (){
//     axios.get('')
// });
var trackName = "";
var artistName = "";
var lastFMUrl = "http://ws.audioscrobbler.com/2.0/?method=track.search&api_key=89797b222e5b4d2d93ff19e4b83e21e4&limit=15"
$("#search").on("click", function (e) {
    e.preventDefault();

    if
    ($("#lyric").prop("checked") === true && $("#title").prop("checked") === false) {

        artistName = $("#userText").val().trim();
        //$("#display").text("Lyrics related to " + searchTerm);
        $.ajax({
            url: lastFMUrl + "&track=''&artist=" + artistName + "&format=json",
            method: "GET",
        }).then(function (response) {
            console.log(response.results.trackmatches);
            for (x = 0; x < response.results.trackmatches.track.length; x++) {
                var item = $('<tr>');
                var infoButton = $('<button>more info</button>' + '<br>');
                infoButton.attr("id", response.results.trackmatches.track[x].name);
                infoButton.attr("artist", response.results.trackmatches.track[x].artist);
                item = response.results.trackmatches.track[x].name;
                $("#display").append(item, infoButton);
            }
            $(".moreInfo").on("click", function () {
                var songTrack = $(this).attr("id");
                var queryURL = "https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?q_track=" + songTrack + "&apikey=049b063ff03b0f33187a018887d8bb0f"
            
                $.ajax({
                    url: queryURL,
                    method: "GET"
                }).then(function (response) {
                    //console.log(response);
                    var obj = JSON.parse(response)
                    console.log(obj.message.body.lyrics.lyrics_body)
                });
            });
        });
    }
    else if ($("#title").prop("checked") === true && $("#lyric").prop("checked") === false) {
        trackName = $("#userText").val().trim();

        $.ajax({
            url: lastFMUrl + "&track=" + trackName + "&format=json",
            method: "GET",
        }).then(function (response) {
            console.log(response.results.trackmatches.track);
            for (x = 0; x < response.results.trackmatches.track.length; x++) {
                var item = $('<tr>');
                var infoButton = $('<button class="moreInfo">more info</button>' + '<br>');
                infoButton.attr("id", response.results.trackmatches.track[x].name);
                infoButton.attr("artist", response.results.trackmatches.track[x].artist);
                item = response.results.trackmatches.track[x].name;
                $("#display").append(item, infoButton);
               

            }
            $(".moreInfo").on("click", function () {
                var songTrack = $(this).attr("id");
                var queryURL = "https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?q_track=" + songTrack + "&apikey=049b063ff03b0f33187a018887d8bb0f"
            
                $.ajax({
                    url: queryURL,
                    method: "GET"
                }).then(function (response) {
                   // console.log(response);
                    var obj = JSON.parse(response)
                    console.log(obj.message.body.lyrics.lyrics_body)
                });
            });
        });
    };
    if ($("#title").prop("checked") === false && $("#lyric").prop("checked") === false) {
        console.log("check one");
    }
    else if ($("#title").prop("checked") === true && $("#lyric").prop("checked") === true) {
        console.log("check one!");
    }
});

$(".moreInfo").on("click", function () {
    var songTrack = $(this).attr("id");
    var queryURL = "https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?q_track=" + songTrack.val() + "&apikey=049b063ff03b0f33187a018887d8bb0f"

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        var obj = JSON.parse(response)
        console.log(obj.message.body.lyrics.lyrics_body)
    });
});
//    //console.log(response.body.lyrics.lyrics_body);
// //   console.log(response.)
//    $("#display").text("result: " + obj.message.body.lyrics.lyrics_body)
//  });

//})
