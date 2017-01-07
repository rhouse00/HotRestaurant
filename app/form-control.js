var tableQueue = [];


$("#submit").on("click", function reserveTable(event){
	var name = $("#name").val().trim();
	var phone = $("#phone").val().trim();
	var email = $("#email").val().trim();
	var id = $("#id").val().trim();
	// if (name.length < 3 || isNaN(name) === false){
	// 	alert("Please enter valid name");
	// 	$("#name").trigger("reset");
	// 	return false;
	// }if (phone.length > 10 || isNaN(phone)){
	// 	alert("Please enter valid phone number");
	// 	$("#phone").trigger("reset");
	// 	return false;
	// }else {
		tableQueue.push(new Table(name, phone, email, id));
			console.log(tableQueue);
	// }
});

	function Table(name, phone, email, id) {
			this.name = name;
			this.phone = phone;
			this.email = email;
			this.id = id;
		}