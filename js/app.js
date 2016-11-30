(function(){

var angularBlog = angular.module("angularBlog",["ngRoute","angularBlog.services","angularBlog.controllers"]); // tworzymy nowy modoł

angularBlog
    .constant("API_URL","https://jsonplaceholder.typicode.com/posts")
    .config(["$routeProvider", "$httpProvider", function($routeProvider,$httpProvider) {

      $httpProvider.defaults.cache = true; // zapusjemy w pamięci daną rzecz nie odwolujemyu si

      $routeProvider
        .when("/", {
            controller:"BlogController",
            templateUrl:"views/blog.html"
        })
        .when("/blog/:id",{
          controller:"PostController",
          templateUrl:"views/post.html"
        })
        .otherwise({
          redirectTo:"/"
        });
    }]);



})();
