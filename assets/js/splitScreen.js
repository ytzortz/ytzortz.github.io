function startGame() {

    document.getElementById("gameButton").style.visibility = "hidden";

    var container = document.getElementById('containerHidden');
    container.style.visibility = "visible";

    document.getElementById("turnOffGameButton").style.visibility = "visible";

    document.getElementById("gameContainer").innerHTML = `
    <div id="tetris">
    <div id="controls_wrapper">
    <p>LEFT-RIGHT arrows: move</p>
    <p>UP-DOWN arrows: flip</p>
    <p>ESCAPE: stop game</p>
    </div>
      <div id="menu">
        <p id="start"><a href="javascript:play();">Press Space to Play.</a></p>
        <p><canvas id="upcoming"></canvas></p>
        <p>score <span id="score">00000</span></p>
        <p>rows <span id="rows">0</span></p>
        <p><i id="soundToggle" class="bi bi-volume-mute-fill" onclick="toggleGameSound();"></i></p>
      </div>
      <canvas id="canvas">
        Sorry, this example cannot be run because your browser does not support the &lt;canvas&gt; element
      </canvas>
    </div>`;

    // Dynamically create and append script elements
    var statsScript = document.createElement('script');
    statsScript.src = "assets/js/game/stats.js";
    document.body.appendChild(statsScript);

    var gameScript = document.createElement('script');
    gameScript.src = "assets/js/game/game.js";
    document.body.appendChild(gameScript);

}

function turnOffGame(){
    var container = document.getElementById('containerHidden');
    container.style.visibility = "hidden";
    document.getElementById("turnOffGameButton").style.visibility = "hidden";
    document.getElementById("controls_wrapper").style.visibility = "hidden";
    document.getElementById('containerHidden').style.width = "0px";
    document.getElementById('containerHidden').style.height = "0px";
    document.getElementById("thankYouNote_wrapper").style.visibility = "visible";

    stopGameSound();

}

// ------------------------------
// Tetris game soundtrack
// ------------------------------

var gameTracks = [
    "assets/mp3/tetris_theme_a.mp3",
    "assets/mp3/tetris_theme_b.mp3",
    "assets/mp3/tetris_theme_c.mp3"
];
var gameAudio = null;
var gameTrackIndex = 0;
var gameTrackGapTimeout = null;
var gameSoundOn = false;

function playNextGameTrack() {
    if (!gameAudio) {
        gameAudio = new Audio();
        gameAudio.volume = 0.6;
        gameAudio.addEventListener('ended', function() {
            gameTrackGapTimeout = setTimeout(function() {
                gameTrackIndex = (gameTrackIndex + 1) % gameTracks.length;
                playNextGameTrack();
            }, 500);
        });
    }

    gameAudio.src = gameTracks[gameTrackIndex];
    gameAudio.play();
}

function toggleGameSound() {
    gameSoundOn = !gameSoundOn;

    var icon = document.getElementById("soundToggle");

    if (gameSoundOn) {
        icon.classList.remove("bi-volume-mute-fill");
        icon.classList.add("bi-volume-up-fill");
        playNextGameTrack();
    } else {
        icon.classList.remove("bi-volume-up-fill");
        icon.classList.add("bi-volume-mute-fill");
        stopGameSound();
    }
}

function stopGameSound() {
    clearTimeout(gameTrackGapTimeout);

    if (gameAudio) {
        gameAudio.pause();
        gameAudio.currentTime = 0;
    }

    gameSoundOn = false;

    var icon = document.getElementById("soundToggle");
    if (icon) {
        icon.classList.remove("bi-volume-up-fill");
        icon.classList.add("bi-volume-mute-fill");
    }
}