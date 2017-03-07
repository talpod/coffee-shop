var fetch = function (city) {
  $.ajax({
    method: "GET",
    url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=e5245cea3f8c281eecb19341258b68e1',
    dataType: "json",
    success: function(data) {
      console.log(data);
      $("#search-results").html('<h3>The temperature in ' + data.name + ' today is '
                                  + (data.main.temp - 273.15) + ' degrees celsius. Lowest temperature today is '
                                  + (data.main.temp_min - 273.15) + ', while the highest temperature is '
                                  + (data.main.temp_max - 273.15) + ' degrees.</h3>');

    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log(textStatus);
    }
  });
};
$(".omdb").on('click', function() {
  var city = $("#city").val();
  fetch(city);
});
