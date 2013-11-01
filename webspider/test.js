var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var req = new XMLHttpRequest();

req.open('GET', 'http://google.com', true);
req.send();
req.onreadystatechange = function() {
	var CT ="";
	if (this.readyState == 4) {
		CT=req.getResponseHeader("Content-Encoding");
		console.log(CT);
	}
};
