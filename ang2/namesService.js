app.factory('namesService', function() {
  var names = [
    { firstname: "Olex", lastname: "Kirby" },
    { firstname: "Brendan", lastname: "Link" },
    { firstname: "Denyil", lastname: "Mario" },
    { firstname: "Gul", lastname: "Samsung" }
  ];
  return { names: names };
});
