app.controller('allMoviesCtrl', [
    '$scope',
    '$http',
    function($scope, $http) {
        $scope.budget = 100;
        $scope.myMovies = [];
        $scope.movies = [
            {
                name: 'First Blood',
                price: 10,
                desc: "First Blood is the Sylvester Stallone film that unleashed Rambo onto an unsuspecting world. Wandering into a small, hostile town, ex-Green Beret John Rambo (Stallone) is targeted for persecution and abuse by potbellied Sheriff Will Teasle (Brian Dennehy). When he can stand no more, Rambo goes bonkers, killing a deputy and heading into the surrounding hills, armed to the teeth. Only after Rambo has picked off practically every law enforcement officer within a radius of 50 miles do the local authorities bring in his former commanding officer, Trautman (Richard Crenna), for advice. Trautman's response -- that the locals had better get a lot of body bags ready -- is hardly encouraging.",
                cover: 'https://s-media-cache-ak0.pinimg.com/564x/05/53/c1/0553c1cb37b53c61a0264ffeb2bf0fb7.jpg',
                year: 1989
            }, {
                name: 'Rambo III',
                price: 11,
                desc: "Rambo III is a 1988 American action adventure film directed by Peter MacDonald. The film depicts fictional events during the Soviet war in Afghanistan. It is the third film in the Rambo series following First Blood and Rambo: First Blood Part II. ",
                cover: 'https://s-media-cache-ak0.pinimg.com/564x/ca/61/1f/ca611fe0d2bfdd5ebedc5c2e967316b1.jpg',
                year: 1994
            }, {
                name: 'Commando',
                price: 11,
                desc: "Retired Delta Force operator Colonel John Matrix is informed by his former superior Major General Franklin Kirby that all the other members of his former unit have been killed by unknown mercenaries. The mercenaries, among them Bennett, an Australian ex-member of Matrix's team fired for excessive violence, attack Matrix's secluded mountain home and kidnap Matrix's young daughter Jenny. While trying to intercept them, Matrix is also overpowered and abducted by the mercenaries. He is taken before their leader, Arius, a South American former dictator who needs Matrix to carry out a political assassination in his home country of Val Verde, where Arius wishes to lead a military coup.",
                cover: 'https://upload.wikimedia.org/wikipedia/en/d/d9/Commandoposter.jpg',
                year: 1992
            }, {
                name: 'Reservoir Dogs',
                price: 7,
                desc: "They were six perfect strangers assembled to pull off the perfect crime, but when their simple robbery explodes into bloody ambush, the ruthless killers realize one of them is a police informer. But which one?",
                cover: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNDc0YWFhMmQtOTFhZC00MzViLTlkNjctMWUzYTI2YWFkNzVlXkEyXkFqcGdeQXVyNjE5MjUyOTM@._V1_UX182_CR0,0,182,268_AL_.jpg',
                year: 1992
            }, {
                name: 'Pulp Fiction',
                price: 8,
                desc: "The lives of two mob hit men, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
                cover: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTkxMTA5OTAzMl5BMl5BanBnXkFtZTgwNjA5MDc3NjE@._V1_SY1000_CR0,0,673,1000_AL_.jpg',
                year: 1995
            }, {
                name: 'Rocky Balboa',
                price: 12,
                desc: "Rocky, in his mid-fifties and retired from boxing for roughly twenty years, lives a quiet life as a widower, for Adrian had died from cancer several years prior. He now runs a small but successful Italian restaurant named after her, where he regales his patrons with stories of his past. Unfortunately, he is also battling personal demons involving his grief over Adrian's death, the changing times, and his eroding relationship with his son Robert, who has since moved out to become a struggling corporate employee. ",
                cover: 'http://elpais.com/elpais/imagenes/2016/01/29/estilo/1454064789_994572_1454066530_sumario_normal.jpg',
                year: 2012
            }

        ];

        $scope.myMovies = [];
        $scope.purchase = function() {
            for (var i = 0; i < $scope.myMovies.length; i++) {
                if ($scope.myMovies[i] == this.movie) {
                    return;
                }
            }

            if ($scope.budget >= this.movie.price) {
                $scope.myMovies.push(this.movie);
                $scope.budget = $scope.budget - this.movie.price;
            } else {
                alert('Insufficient funds on your account. You have ' + $scope.budget + ' dollars left.');
            };

        };
        $scope.remove = function() {
            $scope.myMovies.splice(this.movie, 1);
            $scope.budget = $scope.budget + this.movie.price;
        };
        // $scope.oMovies = [];
        // $scope.movies =
        $scope.search = function() {
            $http.get('http://www.omdbapi.com/?s=' + $scope.film).then(function(data) {
                 alert('The movie ' + data.data.Search["0"].Title + ' made in ' + data.data.Search ["0"].Year);
            })
        }
        //  $scope.addMovie = function(){
        //  	$scope.myMovies.push({ 'name':this.movie.name, 'cover':this.movie.cover });
        //  	$scope.name='';
        //   console.log($scope.myMovies)
        //
        //  };
    }
]);
