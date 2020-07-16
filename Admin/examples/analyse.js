//WORKING SHIT-FETCHES PRICE
const encodeGetParams = p => 
Object.entries(p).map(kv => kv.map(encodeURIComponent).join("=")).join("&");
var  userAction=document.querySelector('button1');
button1.addEventListener('click', async () => {
	const response = await fetch("https://apidojo-hipmunk-v1.p.rapidapi.com/flights/create-session?infants_lap=0&children=0&seniors=0&country=INDIA&from0=BLR&to0=MAA&date0=Jan%2027%202020&pax=1&cabin=Business", {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "apidojo-hipmunk-v1.p.rapidapi.com",
			"x-rapidapi-key": "8c37e9c382msh80adaefd793e555p1a06cdjsnd25b750de4d4"
		}
	});
	var myJson = await response.json();
	console.log(myJson);
	console.log(JSON.stringify(myJson));
});
