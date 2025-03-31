window.onload = function(){

  if (!sessionStorage.getItem("player_1") || !sessionStorage.getItem("player_2")) {
    // Nëse të dhënat nuk janë të pranishme, ridrejto në faqen e login-it
    window.location.href = "login.html";
  } else {
    // Nëse të dhënat janë të pranishme, shfaq lojën
    let game = document.getElementById("game");
    game.classList.remove("hidden")
  };

    let player1 = sessionStorage.getItem("player_1");
    let player2 = sessionStorage.getItem("player_2");
    let butoni = document.getElementById("play_button");
    let turn = document.getElementById("turn");
    let results = document.getElementById("results");
    let show1 = document.getElementById("show1");
    let show2 = document.getElementById("show2");
    let show3 = document.getElementById("show3");
    let show4 = document.getElementById("show4");
    let show5 = document.getElementById("show5");
    let show6 = document.getElementById("show6");
    let show7 = document.getElementById("show7");
    let show8 = document.getElementById("show8");
    let show9 = document.getElementById("show9");
    let notCompleted = 0;
    var show1_x = 0;
    var show1_o = 0;
    var show2_x = 0;
    var show2_o = 0;
    var show3_x = 0;
    var show3_o = 0;
    var show4_x = 0;
    var show4_o = 0;
    var show5_x = 0;
    var show5_o = 0;
    var show6_x = 0;
    var show6_o = 0;
    var show7_x = 0;
    var show7_o = 0;
    var show8_x = 0;
    var show8_o = 0;
    var show9_x = 0;
    var show9_o = 0;
    let started = true
    let x_o_img = ["images/x_img.png", "images/O_img.png"];
    let isXTurn = true;
    let winSound = new Audio('images/win_sound.wav')
    let drawSound = new Audio('images/draw_sound.wav')
    let checkSound = new Audio('images/check.wav')

    document.getElementById("player-1").innerText = player1 +" :";
    document.getElementById("player-2").innerText = player2 +" :";

    function kontrolloFitoren(){
        if ((show1_x === 1 && show2_x === 1 && show3_x === 1) || (show1_o === 1 && show2_o === 1 && show3_o === 1)) {
            show1.style.backgroundColor = "#2ab700";
            show2.style.backgroundColor = "#2ab700";
            show3.style.backgroundColor = "#2ab700";
            turn.style.backgroundColor = "#2ab700";
            turn.style.color = "white"
            turn.style.opacity = "80%"
            clicknull();
            if(show1_x == 1){
                turn.innerHTML = "<h1>X - Won!</h1>";
                results.innerHTML = `${player1} - WON!`
            }else{
                turn.innerHTML = "<h1>O - Won!</h1>";
                results.innerHTML = `${player2} - WON!`
            };
            winSound.play();
            onWin();
            showWinDrawAnimation();
          }else if((show4_x === 1 && show5_x === 1 && show6_x === 1) || (show4_o === 1 && show5_o === 1 && show6_o === 1)){
              show4.style.backgroundColor = "#2ab700";
              show5.style.backgroundColor = "#2ab700";
              show6.style.backgroundColor = "#2ab700";
              turn.style.backgroundColor = "#2ab700";
              turn.style.color = "white"
              turn.style.opacity = "80%"
              clicknull();
              if(show4_x == 1){
                turn.innerHTML = "<h1>X - Won!</h1>";
                results.innerHTML = `${player1} - WON!`
              }else{
                turn.innerHTML = "<h1>O - Won!</h1>";
                results.innerHTML = `${player2} - WON!`
              };
              winSound.play();
              onWin();
              showWinDrawAnimation();
          }else if((show7_x === 1 && show8_x === 1 && show9_x === 1) || (show7_o === 1 && show8_o === 1 && show9_o === 1)){
              show7.style.backgroundColor = "#2ab700";
              show8.style.backgroundColor = "#2ab700";
              show9.style.backgroundColor = "#2ab700";
              turn.style.backgroundColor = "#2ab700";
              turn.style.color = "white"
              turn.style.opacity = "80%"
              clicknull();
              if(show7_x == 1){
                turn.innerHTML = "<h1>X - Won!</h1>";
                results.innerHTML = `${player1} - WON!`
              }else{
                turn.innerHTML = "<h1>O - Won!</h1>";
                results.innerHTML = `${player2} - WON!`
              };
              winSound.play();
              onWin();
              showWinDrawAnimation();
          }else if((show1_x === 1 && show4_x === 1 && show7_x === 1) || (show1_o === 1 && show4_o === 1 && show7_o === 1)){
            show1.style.backgroundColor = "#2ab700";
            show4.style.backgroundColor = "#2ab700";
            show7.style.backgroundColor = "#2ab700";
            turn.style.backgroundColor = "#2ab700";
            turn.style.color = "white"
            turn.style.opacity = "80%"
            clicknull();
            if(show1_x == 1){
                turn.innerHTML = "<h1>X - Won!</h1>";
                results.innerHTML = `${player1} - WON!`
            }else{
                turn.innerHTML = "<h1>O - Won!</h1>";
                results.innerHTML = `${player2} - WON!`
            };
            winSound.play();
            onWin();
            showWinDrawAnimation();
          }else if((show2_x === 1 && show5_x === 1 && show8_x === 1)|| (show2_o === 1 && show5_o === 1 && show8_o === 1)){
            show2.style.backgroundColor = "#2ab700";
            show5.style.backgroundColor = "#2ab700";
            show8.style.backgroundColor = "#2ab700";
            turn.style.backgroundColor = "#2ab700";
            turn.style.color = "white"
            turn.style.opacity = "80%"
            clicknull();
            if(show2_x == 1){
                turn.innerHTML = "<h1>X - Won!</h1>";
                results.innerHTML = `${player1} - WON!`
            }else{
                turn.innerHTML = "<h1>O - Won!</h1>";
                results.innerHTML = `${player2} - WON!`
            };
            winSound.play();
            onWin();
            showWinDrawAnimation();
          }else if((show3_x === 1 && show6_x === 1 && show9_x === 1)|| (show3_o === 1 && show6_o === 1 && show9_o === 1)){
            show3.style.backgroundColor = "#2ab700";
            show6.style.backgroundColor = "#2ab700";
            show9.style.backgroundColor = "#2ab700";
            turn.style.backgroundColor = "#2ab700";
            turn.style.color = "white"
            turn.style.opacity = "80%"
            clicknull();
            if(show3_x == 1){
                turn.innerHTML = "<h1>X - Won!</h1>";
                results.innerHTML = `${player1} - WON!`
            }else{
                turn.innerHTML = "<h1>O - Won!</h1>";
                results.innerHTML = `${player2} - WON!`
            };
            winSound.play();
            onWin();
            showWinDrawAnimation();
          }else if((show1_x === 1 && show5_x === 1 && show9_x === 1)|| (show1_o === 1 && show5_o === 1 && show9_o === 1)){
            show1.style.backgroundColor = "#2ab700";
            show5.style.backgroundColor = "#2ab700";
            show9.style.backgroundColor = "#2ab700";
            turn.style.backgroundColor = "#2ab700";
            turn.style.color = "white"
            turn.style.opacity = "80%"
            clicknull();
            if(show1_x == 1){
                turn.innerHTML = "<h1>X - Won!</h1>";
                results.innerHTML = `${player1} - WON!`
            }else{
                turn.innerHTML = "<h1>O - Won!</h1>";
                results.innerHTML = `${player2} - WON!`
            };
            winSound.play();
            onWin();
            showWinDrawAnimation();
          }else if((show3_x === 1 && show5_x === 1 && show7_x === 1)|| (show3_o === 1 && show5_o === 1 && show7_o === 1)){
            show3.style.backgroundColor = "#2ab700";
            show5.style.backgroundColor = "#2ab700";
            show7.style.backgroundColor = "#2ab700";
            turn.style.backgroundColor = "#2ab700";
            turn.style.color = "white"
            turn.style.opacity = "80%"
            clicknull();
            if(show3_x == 1){
                turn.innerHTML = "<h1>X - Won!</h1>";
                results.innerHTML = `${player1} - WON!`
            }else{
                turn.innerHTML = "<h1>O - Won!</h1>";
                results.innerHTML = `${player2} - WON!`
            };
            winSound.play();
            onWin();
            showWinDrawAnimation();
          }else if(notCompleted === 9){
            show1.style.backgroundColor = "#f3c50d";
            show2.style.backgroundColor = "#f3c50d";
            show3.style.backgroundColor = "#f3c50d";
            show4.style.backgroundColor = "#f3c50d";
            show5.style.backgroundColor = "#f3c50d";
            show6.style.backgroundColor = "#f3c50d";
            show7.style.backgroundColor = "#f3c50d";
            show8.style.backgroundColor = "#f3c50d";
            show9.style.backgroundColor = "#f3c50d";
            turn.style.backgroundColor = "#f3c50d";
            turn.style.color = "white"
            turn.innerHTML = "<h1>No Winners!!</h1>";
            turn.style.opacity = "80%"
            results.innerHTML = "NO WINNERS!!"
            clicknull();
            drawSound.play();
            showWinDrawAnimation();
          };
    };



    function playGame() {
        turnOn();
        clearDisplay();
        butoni.innerHTML = "CLOSE THE GAME"
        turn.innerHTML = "<h1>Game Started</h1>"
        turn.style.backgroundColor = "black"
        
        show1.onclick = function () {
            checkSound.play();
            if (isXTurn) {
            show1.style.backgroundImage = `url(${x_o_img[0]})`;
            turn.innerHTML = "<h1>O - Turn</h1>";
            show1_x++;
            } else {
            show1.style.backgroundImage = `url(${x_o_img[1]})`;
            turn.innerHTML = "<h1>X - Turn</h1>";
            show1_o++;
            }

            notCompleted++;
            show1.onclick = null;
            isXTurn = !isXTurn;
            kontrolloFitoren();
        };

        show2.onclick = function () {
            checkSound.play();
            if (isXTurn) {
            show2.style.backgroundImage = `url(${x_o_img[0]})`;
            turn.innerHTML = "<h1>O - Turn</h1>";
            show2_x++;
            } else {
            show2.style.backgroundImage = `url(${x_o_img[1]})`;
            turn.innerHTML = "<h1>X - Turn</h1>";
            show2_o++;
            }

            notCompleted++;
            show2.onclick = null;
            isXTurn = !isXTurn;
            kontrolloFitoren();
        };

        show3.onclick = function () {
            checkSound.play();
            if (isXTurn) {
            show3.style.backgroundImage = `url(${x_o_img[0]})`;
            turn.innerHTML = "<h1>O - Turn</h1>";
            show3_x++;
            } else {
            show3.style.backgroundImage = `url(${x_o_img[1]})`;
            turn.innerHTML = "<h1>X - Turn</h1>";
            show3_o++;
            }

            notCompleted++;
            show3.onclick = null;
            isXTurn = !isXTurn;
            kontrolloFitoren();
        };

        show4.onclick = function () {
            checkSound.play();
            if (isXTurn) {
            show4.style.backgroundImage = `url(${x_o_img[0]})`;
            turn.innerHTML = "<h1>O - Turn</h1>";
            show4_x++;
            } else {
            show4.style.backgroundImage = `url(${x_o_img[1]})`;
            turn.innerHTML = "<h1>X - Turn</h1>";
            show4_o++;
            }

            notCompleted++;
            show4.onclick = null;
            isXTurn = !isXTurn;
            kontrolloFitoren();
        };

        show5.onclick = function () {
            checkSound.play();
            if (isXTurn) {
            show5.style.backgroundImage = `url(${x_o_img[0]})`;
            turn.innerHTML = "<h1>O - Turn</h1>";
            show5_x++;
            } else {
            show5.style.backgroundImage = `url(${x_o_img[1]})`;
            turn.innerHTML = "<h1>X - Turn</h1>";
            show5_o++;
            }

            notCompleted++;
            show5.onclick = null;
            isXTurn = !isXTurn;
            kontrolloFitoren();
        };

        show6.onclick = function () {
            checkSound.play();
            if (isXTurn) {
            show6.style.backgroundImage = `url(${x_o_img[0]})`;
            turn.innerHTML = "<h1>O - Turn</h1>";
            show6_x++;
            } else {
            show6.style.backgroundImage = `url(${x_o_img[1]})`;
            turn.innerHTML = "<h1>X - Turn</h1>";
            show6_o++;
            }

            notCompleted++;
            show6.onclick = null;
            isXTurn = !isXTurn;
            kontrolloFitoren();
        };

        show7.onclick = function () {
            checkSound.play();
            if (isXTurn) {
            show7.style.backgroundImage = `url(${x_o_img[0]})`;
            turn.innerHTML = "<h1>O - Turn</h1>";
            show7_x++;
            } else {
            show7.style.backgroundImage = `url(${x_o_img[1]})`;
            turn.innerHTML = "<h1>X - Turn</h1>";
            show7_o++;
            }

            notCompleted++;
            show7.onclick = null;
            isXTurn = !isXTurn;
            kontrolloFitoren();
        };

        show8.onclick = function () {
            checkSound.play();
            if (isXTurn) {
            show8.style.backgroundImage = `url(${x_o_img[0]})`;
            turn.innerHTML = "<h1>O - Turn</h1>";
            show8_x++;
            } else {
            show8.style.backgroundImage = `url(${x_o_img[1]})`;
            turn.innerHTML = "<h1>X - Turn</h1>";
            show8_o++;
            }

            notCompleted++;
            show8.onclick = null;
            isXTurn = !isXTurn;
            kontrolloFitoren();
        };

        show9.onclick = function () {
            checkSound.play();
            if (isXTurn) {
            show9.style.backgroundImage = `url(${x_o_img[0]})`;
            turn.innerHTML = "<h1>O - Turn</h1>";
            show9_x++;
            } else {
            show9.style.backgroundImage = `url(${x_o_img[1]})`;
            turn.innerHTML = "<h1>X - Turn</h1>";
            show9_o++;
            };

            notCompleted++;
            show9.onclick = null;
            isXTurn = !isXTurn;
            kontrolloFitoren();
        };
    };
    

    function clearDisplay(){
        turn.style.backgroundColor = "white";
        show1.style.backgroundImage = `url()`;
        show1.style.backgroundColor = "#f4f4f4";
        show2.style.backgroundImage = `url()`;
        show2.style.backgroundColor = "#f4f4f4";
        show3.style.backgroundImage = `url()`;
        show3.style.backgroundColor = "#f4f4f4";
        show4.style.backgroundImage = `url()`;
        show4.style.backgroundColor = "#f4f4f4";
        show5.style.backgroundImage = `url()`;
        show5.style.backgroundColor = "#f4f4f4";
        show6.style.backgroundImage = `url()`;
        show6.style.backgroundColor = "#f4f4f4";
        show7.style.backgroundImage = `url()`;
        show7.style.backgroundColor = "#f4f4f4";
        show8.style.backgroundImage = `url()`;
        show8.style.backgroundColor = "#f4f4f4";
        show9.style.backgroundImage = `url()`;
        show9.style.backgroundColor = "#f4f4f4";
    }

    function clicknull(){
        show1.onclick = null;
        show2.onclick = null;
        show3.onclick = null;
        show4.onclick = null;
        show5.onclick = null;
        show6.onclick = null;
        show7.onclick = null;
        show8.onclick = null;
        show9.onclick = null;
    };

    function turnOn (){
        show1.style.opacity = "80%"
        show2.style.opacity = "80%"
        show3.style.opacity = "80%"
        show4.style.opacity = "80%"
        show5.style.opacity = "80%"
        show6.style.opacity = "80%"
        show7.style.opacity = "80%"
        show8.style.opacity = "80%"
        show9.style.opacity = "80%"
    }

    function startConfetti() {
      const confettiContainer = document.getElementById("confetti-container");
      for (let i = 0; i < 300; i++) { 
          const confetti = document.createElement("div");
          confetti.classList.add("confetti");
          confetti.style.left = Math.random() * 100 + "vw";
          confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`; 
          confetti.style.animationDuration = 2 + Math.random() * 3 + "s"; 
          confettiContainer.appendChild(confetti);
      }
    }

    function onWin() {
      startConfetti();
    }

    function showWinDrawAnimation() {
      const loseOverlay = document.getElementById("lose-overlay");
      loseOverlay.style.display = "flex";

      
      loseOverlay.addEventListener("click", function () {
          loseOverlay.style.display = "none";
      });
    }

    butoni.onclick = function(){
      if (started){
        playGame();
        started = !started
      }else{
        location.reload();
      }
    };
    
};

