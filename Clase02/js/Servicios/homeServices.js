angular.module('myApp.homeServices', [])

.factory('homeServices', function ($q,$timeout) {
    var Result = {};

    Result.getDate = function () {
    	
    	var f = new Date();
		return f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear();

    }

    Result.Suma1 = function(num1, num2){
    	return parseFloat(num1) + parseFloat(num2);

    }

    Result.Suma2 = function(num1, num2){
    	var q = $q.defer();

    	var resultado = num1 + num2;
    	$timeout(function(){
    		q.resolve(resultado);
    	},8000)   	


    	return q.promise;

    }

    return Result;
})