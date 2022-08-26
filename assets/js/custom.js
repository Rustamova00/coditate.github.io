function addPlayButtonFunctionality() {
	const playButton = document.getElementById("play-button");
	const audio = document.getElementById("audio");

	//adding event listener for button onclick
	playButton.addEventListener("click", () => {
		const isPlaying = !audio.paused;

		if (!isPlaying) {
			audio.play();
			playButton.style.backgroundImage =
				"url(assets/css/images/pause-button.svg)";
		} else {
			audio.pause();
			playButton.style.backgroundImage =
				"url(assets/css/images/play-button.svg)";
		}
		loadInNewBackground("assets/css/gradient-background.css");
	});
}

function loadInNewBackground(url) {
	var link = document.createElement("link");
	link.href = url;
	link.rel = "stylesheet";

	document.getElementsByTagName("head")[0].appendChild(link);
}

addPlayButtonFunctionality();
