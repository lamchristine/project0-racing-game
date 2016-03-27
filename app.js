

$(document).ready(function() {


/* Player Object Construction */
function Player(name, player, score) {
    /* Object Attributes*/
    this.name=name;
    this.player=player;
    this.score=score;
    /* End Object Attributes */
}


  var winner;
  var player1 = null;
  var player2 = null;
  var eachMove = 20;


  var position1 = $('#red').position();
  var position2 = $('#blue').position();
  var finishLine1 = $('#board1').width();
  var finishLine2 = $('#board2').width();

  function getPlayer1 () {
    $(".player1").on("click", function (){
      player1 = prompt("Please enter your name");
      $(this).text(player1);
      return player1;
    });
  } getPlayer1();

  function getPlayer2 () {
    $(".player2").on("click", function (){
      player2 = prompt("Please enter your name");
      $(this).text(player2);
      return player2;
    });
  } getPlayer2();

  function reset() {
    $(".reset").on("click", function() {
      $("#red").css("left","15px");
      position1.left = 15;
      winner = "";
      $("#blue").css("left","15px");
      position2.left = 15;
    });
  } reset();


  function movePlayer1() {
    $(document).on("keyup", function (key) {
      if (position1.left < finishLine1) {
        if (key.keyCode === 65) { //'a' forward
          $("#red").animate({ "left": "+=20px" }, "fast");
          position1.left += eachMove;
        } else if (key.keyCode === 83) { //'s' jumps
          $("#red").animate({top: "-=30px"}, "fast");
          $("#red").animate({top: "+=30px"}, "fast");
        }
      } else if (position1.left > finishLine1) {
        winner = player1;
        alert ("The Winner is " + winner);
      }
    });
  }

  function movePlayer2() {
    $(document).on("keyup", function (key) {
      if (position2.left < finishLine2) {
        if (key.keyCode === 76) { //'l' forward
          $("#blue").animate({ "left": "+=20px" }, "fast");
          position2.left += eachMove;
        } else if (key.keyCode === 75) { //'k' jumps
          $("#blue").animate({top: "-=30px"}, "fast");
          $("#blue").animate({top: "+=30px"}, "fast");
        }
      } else if (position2.left > finishLine2) {
        winner = player2;
        alert ("The Winner is " + winner);
      }
    });
  }


  function getWinner() {
      if ( (winner !== player1) && (winner !== player2) ) {
          movePlayer1();
          movePlayer2();
      }
  }

  function startGame () {
    $(".start").on("click", function () {
      if ( (player1 === null) && (player2 === null) ) {
        alert("Please enter player names");
      } else {
        getWinner();
      }
    });
  } startGame();
});

/* WORKS */

  // function movePlayer1() {
  //     if (key.keyCode === 65) { //'a'
  //       $("#red").animate({ "left": "+=20px" }, "fast");
  //       position1.left += eachMove;
  //     } else if (position1.left > finishLine1) {
  //       winner = player1;
  //       alert ("The Winner is " + winner);
  //     }
  //   }
  //
  // function movePlayer2() {
  //     if (position2.left < finishLine2) { //'l'
  //       $("#blue").animate({ "left": "+=20px" }, "fast");
  //       position2.left += eachMove;
  //     } else if (position2.left > finishLine2) {
  //       winner = player2;
  //       alert ("The Winner is " + winner);
  //     }
  //   }
  //
  // function getWinner() {
  //   $(document).on("keyup", function (key) {
  //     if ( (winner !== player1) && (winner !== player2) ) {
  //       if (key.keyCode === 65) || (key.keyCode === 83) {
  //         movePlayer1();
  //       } else if (key.keyCode === 76) || (key.keyCode === 75) {
  //         movePlayer2();
  //       }
  //     }
  //   });
  // }

/* WORKS */
