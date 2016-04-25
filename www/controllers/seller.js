var miAplicacion = angular.module('myApp', [])
		
		miAplicacion.controller ('controlador1', ['$scope', function($scope){

			$scope.mouseDejaLaimagen = function(){
				$scope.evento = "Mouse sale de la imagen"	
		
			}
			$scope.mouseSobreLaimagen = function(){
				$scope.evento = "Mouse entra a la imagen"	
		
			}			

			$scope.myApp  = [

				{name: "Jarl", telefon:"00505410928", email: "jarl@gmail.com", img:"jarl.jpg"},
				{name: "Patricio", telefon:"00506830955", email: "patricio@gmail.com", img:"patricio.jpg"},
				{name: "Jason", telefon: "00187953244", email: "jason@gmail.com", img:"jason.jpg"},
				{name: "Faj", telefon: "00187953920", email: "faj@gmail.com", img:"faj.jpg"},
				{name: "Martin", telefon: "00187953721", email: "marti@gmail.com", img:"martin"},
				{name: "Mayra", telefon: "00187953722", email: "mayra@gmail.com", img:"mayra.jpg"}
			]
			
		}] )