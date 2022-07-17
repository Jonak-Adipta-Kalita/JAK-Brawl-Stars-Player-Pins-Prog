const dex = document.getElementById('dex');
const fetchPins = async () => {
    const res = await fetch("https://jak_api.p.rapidapi.com/brawlStars", {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "jak_api.p.rapidapi.com",
			"x-rapidapi-key": "d3474315fcmshe6f03eb826f16bcp181f82jsn7d262d2601be"
		}
	});
	const data = await res.json();
	console.log(data);
	const pins = data.players.pins.map((result, index) => ({
		image: `https://jak-api.vercel.app${result.image}`
	}));
	displayPins(pins);
};

const displayPins = (pin) => {
    const pinsHTMLString = pin
        .map((pien) => (`
			<li class="card">
				<img class="card-image" src="${pien.image}"/>
			</li>
		`)).join('');
    dex.innerHTML = pinsHTMLString;
};

fetchPins();
