function startGame() {
    
    document.getElementById("gameButton").style.visibility = "hidden";
    
    if(window.matchMedia("(min-width: 1024px)").matches){ //user is from pc
        var container = document.getElementById('containerHidden');
        container.style.visibility = "visible";    
    
        document.getElementById("turnOffGameButton").style.visibility = "visible";
    
        document.getElementById("gameContainer").innerHTML = `        <div id="tetris">
        <div id="menu">
          <p id="start"><a href="javascript:play();">Press Space to Play.</a></p>
          <p><canvas id="upcoming"></canvas></p>
          <p>score <span id="score">00000</span></p>
          <p>rows <span id="rows">0</span></p>
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

    }else{ //user is from phone

        document.getElementById("thankYouNote_wrapper").style.visibility = "visible";
        document.getElementById("thankYouNote").style.marginTop = "10px";
        document.getElementById("thankYouNote").innerText = "Sorry, you can play the game only from a desktop or laptop. Give it a try when you're on one! 😊"

    }




}

function turnOffGame(){
    var container = document.getElementById('containerHidden');
    container.style.visibility = "hidden";
    document.getElementById("turnOffGameButton").style.visibility = "hidden";
    document.getElementById('containerHidden').style.width = "0px";
    document.getElementById('containerHidden').style.height = "0px";
    document.getElementById("thankYouNote_wrapper").style.visibility = "visible";

}