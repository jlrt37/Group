var songTrack = "";
var songArtist = "";
var trackName = "";
var artistName = "";
var lastFMUrl = "http://ws.audioscrobbler.com/2.0/?method=track.search&api_key=89797b222e5b4d2d93ff19e4b83e21e4&limit=15"
$("#search").on("click", function (e) {
    e.preventDefault();

    if
    ($("#artist").prop("checked") === true && $("#title").prop("checked") === false) {

        artistName = $("#action-input").val().trim();
        //$("#display").text("Lyrics related to " + searchTerm);
        $.ajax({
            url: lastFMUrl + "&track=''&artist=" + artistName + "&format=json",
            method: "GET",
        }).then(function (response) {
            console.log(response.results.trackmatches);
            for (x = 0; x < response.results.trackmatches.track.length; x++) {
                var item = $('<tr>');
                var infoButton = $('<button>more info</button>');
                var lineBreak = $('<br>');
                infoButton.attr("id", response.results.trackmatches.track[x].name);
                infoButton.attr("artist", response.results.trackmatches.track[x].artist);
                infoButton.addClass('moreInfo');
                item = response.results.trackmatches.track[x].name;
                $("#display").append(item, infoButton, lineBreak);
            };
            
                });
            };
        
    if ($("#title").prop("checked") === true && $("#artist").prop("checked") === false) {
            trackName = $("#action-input").val().trim();

            $.ajax({
                url: lastFMUrl + "&track=" + trackName + "&format=json",
                method: "GET",
            }).then(function (response) {
                console.log(response.results.trackmatches.track);
                for (x = 0; x < response.results.trackmatches.track.length; x++) {
                    var item = $('<tr>');
                    var infoButton = $('<button>more info</button>');
                    var lineBreak = $('<br>');
                    infoButton.attr("id", response.results.trackmatches.track[x].name);
                    infoButton.attr("artist", response.results.trackmatches.track[x].artist);
                    infoButton.addClass('moreInfo');
                    item = response.results.trackmatches.track[x].name;
                    $("#display").append(item, infoButton, lineBreak,);


                }});
                 
            
        
        if ($("#title").prop("checked") === false && $("#artist").prop("checked") === false) {
            console.log("check one");
        }
        else if ($("#title").prop("checked") === true && $("#artist").prop("checked") === true) {
            console.log("check one!");
        };
    };
});
$(document).on("click", ".moreInfo", function () {
    var songTrack = $(this).attr("id").replace(" ", "%20");
    var songArtist = $(this).attr("artist").replace(" ", "%20");
    var queryURL = "https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?q_track=" + songTrack + "&q_artist=" + songArtist + "&apikey=049b063ff03b0f33187a018887d8bb0f"

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        //console.log(response);
        var obj = JSON.parse(response);
        console.log(obj.message.body.lyrics.lyrics_body);
        
        $("#lyricDisplay").text(obj.message.body.lyrics.lyrics_body);

        
        });
    });