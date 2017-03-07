//   var fetch = function (film) {
//   $.ajax({
//     method: "GET",
//     url: 'http://www.omdbapi.com/?t=' + film,
//     dataType: "json",
//     success: function(data) {
//       console.log(data);
//       $("#search-results").html('<h3>Film title: ' + data.title + '</h3>');
//
//     },
//     error: function(jqXHR, textStatus, errorThrown) {
//       console.log(textStatus);
//     }
//   });
// };
// $(".omdb").on('click', function() {
//   var film = $("#film").val();
//   fetch(film);
// });
