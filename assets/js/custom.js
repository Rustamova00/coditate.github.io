function addPlayButtonFunctionality() {
	const playButton = document.getElementById("play-button");
	const audio = document.getElementById("audio");

	//adding event listener for button onclick
	playButton.addEventListener("click", () => {
		audio.play();
		loadInNewBackground("assets/css/gradient-background.css");
	});
}

function loadInNewBackground(url) {
	var file = location.pathname.split(url).pop();

	var link = document.createElement("link");
	link.href = url;
	link.rel = "stylesheet";

	document.getElementsByTagName("head")[0].appendChild(link);
}

addPlayButtonFunctionality();
