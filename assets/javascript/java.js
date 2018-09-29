//const axios = require('axios');
// document.getElementById("test").on("click", function (){
//     axios.get('')
// });
var trackName = "";
var artistName = "";
$("#search").on("click", function (e) {
    e.preventDefault();
    var searchTerm = $("#userText").val().trim();
    
    if ($("#lyric".checked)) {
        $("#display").text("Lyrics related to " + searchTerm);
        trackName = searchTerm;
        
    }
    else if ($("#title".checked)) {
        $("#display").text("Titles related to " + searchTerm);
    };
})

//   $("#testButton").on("click", function(){
//     //  var songTrack = $("#userText").val().trim();
//      var queryURL = "https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?q_track=thriller&apikey=049b063ff03b0f33187a018887d8bb0f"
//        //var queryURL = "https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?format=jsonp&callback=callback&q_track=" + songTrack +"&api_key=049b063ff03b0f33187a018887d8bb0f"
//       $.ajax({
//     url: queryURL,
//     method: "GET"
//   }).then(function(response) {
//     console.log(response);
//     var obj = JSON.parse(response)
//     console.log(obj.message.body.lyrics.lyrics_body)
   
//    //console.log(response.body.lyrics.lyrics_body);
// //   console.log(response.)
//    $("#display").text("result: " + obj.message.body.lyrics.lyrics_body)
//  });

 //})
 $("#testButton").on("click", function(){
 var lastFMUrl = "http://ws.audioscrobbler.com/2.0//2.0/?method=track.getInfo&api_key=89797b222e5b4d2d93ff19e4b83e21e4&artist=" + artistName + "&track=" + trackName + "&format=json";
 $.ajax({
     url: lastFMUrl,
     method: "GET",
 }).then(function(response){
    console.log(response);
 });
});