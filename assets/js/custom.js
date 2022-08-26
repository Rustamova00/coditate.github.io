function addPlayButtonFunctionality() {
	const playButton = document.getElementById("play-button");
	const audio = document.getElementById("audio");

	//adding event listener for button onclick
	playButton.addEventListener("click", () => {
        const isPlaying = !audio.paused;

        if(!isPlaying){
		    audio.play();
        }
        else{
            audio.pause();
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
