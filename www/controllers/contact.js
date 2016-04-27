app.controller("contact", ["Contact", function(Contact){

	$('#sendContact').click(function(){

		if ($("#contactName").val() == "" || $("#contactEmail").val() == "" || $("#contactMessage").val() == "") {
			alert("Du måste fylla i alla obligatoriska rutor!");
		}
		else
			Contact.create({
				name: $("#contactName").val(),
				email: $("#contactEmail").val(),
				telefon: $("#contactTelefon").val(),
				message: $("#contactMessage").val()
			}, function(){
				alert("Tack för din meddelande!");
			});

			$("#contactName").val("");
			$("#contactEmail").val("");
			$("#contactTelefon").val("");
			$("#contactMessage").val("");

	});

	Contact.get(function(allContacts){
		console.log(allContacts);
	});

}]);