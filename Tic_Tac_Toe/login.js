window.onload = function() {

  document.getElementById("playButton").onclick = function() {
    let player1 = document.getElementById("player_1").value;
    let player2 = document.getElementById("player_2").value;
  
    if (player1 && player2) {
      // Ruaj emrat në sessionStorage
      sessionStorage.setItem("player_1", player1);
      sessionStorage.setItem("player_2", player2);
  
      // Shko në faqen e lojës
      window.location.href = "index.html";
    } else {
      alert("Ju lutem shkruani emrat për Player 1 dhe Player 2!!");
    }
  };
};
