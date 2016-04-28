app.controller("contact", ["Contact", function(Contact){

	$('#sendContact').click(function(){

		if (angular.element("#contactName").val() == "" || angular.element("#contactEmail").val() == "" || angular.element("#contactMessage").val() == "") {
			alert("Du måste fylla i alla obligatoriska rutor!");
		}
		else
			Contact.create({
				name: angular.element("#contactName").val(),
				email: angular.element("#contactEmail").val(),
				telefon: angular.element("#contactTelefon").val(),
				message: angular.element("#contactMessage").val()
			}, function(){
				alert("Tack för din meddelande!");
			});

			angular.element("#contactName").val("");
			angular.element("#contactEmail").val("");
			angular.element("#contactTelefon").val("");
			angular.element("#contactMessage").val("");

	});

	Contact.get(function(allContacts){
		console.log(allContacts);
	});

}]);