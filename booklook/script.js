var fetch = function (x) {
  var url = 'https://www.googleapis.com/books/v1/volumes?q=isbn:' + x;
  $.ajax({
    method: "GET",
    url: url,
    dataType: "json",
    success: function(data) {
      console.log(data);
      $('#rtitle').html('<h4>' + data.items[0].volumeInfo.title + '</h4>');
      $('#rauthor').html('<h4>Author:</h4> ' + data.items[0].volumeInfo.authors);
      $('#rpic').html('<img src="' + data.items[0].volumeInfo.imageLinks.smallThumbnail + '">');
      $('#rdescription').html('<p>' + data.items[0].volumeInfo.description + '</p>');

    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log(textStatus);
    }
  });
};

$('#searchbtn').on('click', function () {
  var x = $("#isbnNum").val();
  fetch(x);
});
