var app = angular.module('persons', []);
// Create a controller with name personsList to bind to the html page.
app.controller('personsList', function ($scope) {
    
	$scope.persons = [{name: 'Teste 1'}, {name: 'Teste 2'}];
	
	$scope.executar = function (nome, indice) {
		alert(nome + ' indice ' + indice);
	};
    
});