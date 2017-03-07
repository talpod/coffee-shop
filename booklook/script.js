var fetch = function (x) {
  var url = 'api.openweathermap.org/data/2.5/weather?id=:' + x;
  $.ajax({
    method: "GET",
    url: url,
    dataType: "json",
    success: function(data) {
      console.log(data);
      $('#rtitle').html('<h4>' + data.items[0].volumeInfo.title + ' by ' + data.items[0].volumeInfo.authors + '</h4>');
    

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
