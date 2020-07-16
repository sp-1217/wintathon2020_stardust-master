function sendEmail() {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "cr7holmes@gmail.com",
	Password : "holmescr7",
	To : 'kruthikakalmali@gmail.com',
	From : "cr7holmes@gmail.com",
	Subject : "EconfAI",
	Body : "<email bobbvbbvvvvvvvvvdy>",
	}).then(
		message => alert("mail sent successfully")
	);
}