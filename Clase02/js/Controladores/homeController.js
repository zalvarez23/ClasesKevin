
app.controller('homeController', function ($scope,$timeout,$http,homeServices) {	
	$scope.fecha = homeServices.getDate();
	$scope.nombre = "Oscar";
	$scope.numeros = {
		num1: 0,
		num2: 0,
		operacion : '0'
	}
	$scope.listSelect = ['suma','resta','división'];
	$scope.sumar = function(){
		
		var resultado = homeServices.Suma1($scope.numeros.num1,$scope.numeros.num2);
		$scope.resultado = "cargando . . ";
		homeServices.Suma2($scope.numeros.num1,$scope.numeros.num2).then(function(res){
			// 1
			$scope.resultado = res;
			
			//console.log('RESULTADO 1 : ' + res);
		});

	}

	$scope.focus = function(idInput){
		var input = document.getElementById(idInput);
		input.select();
	}



	
})