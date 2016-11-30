(function() {

var angularControllers = angular.module("angularBlog.controllers", []);

angularControllers.controller("BlogController", ["BlogService","$scope", function(BlogService, $scope){

  BlogService.getPosts()
      .then(function(res){ // then pozwala wykonać funkcję jeśli all bedzie ok.
        $scope.posts = res.data; //mamy to co zwroci nam serwer i odrazu będzie to sparsowane pod odpowiedni objekt js
        //Jezeli na sope tego kontrolera przypisze sobie post lub coś innego to na danej to w templatce ktora jest na tym kontrolerze bede mogl sobie wszystko wyswietlic.
      });


}]);
angularControllers.controller("PostController", ["BlogService","$routeParams", "$scope", function(BlogService, $routeParams, $scope){

    BlogService.getPost($routeParams.id) // Pobieramy dane z urla
      .then(function(res){ // then pozwala wykonać funkcję jeśli all bedzie ok.
        $scope.post = res.data; //mamy to co zwroci nam serwer i odrazu będzie to sparsowane pod odpowiedni objekt js
        //Jezeli na sope tego kontrolera przypisze sobie post lub coś innego to na danej to w templatce ktora jest na tym kontrolerze bede mogl sobie wszystko wyswietlic.
      });

}]);


})();
