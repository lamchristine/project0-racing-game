

$(document).ready(function() {

  var winner;
  var player1;
  var player2;
  var eachMove = 20;


  var position1 = $('#red').position();
  console.log(position1)
  var position2 = $('#blue').position();
  console.log(position2.left)
  var finishLine1 = 0.85 * $('#board1').width();
  var finishLine2 = 0.85 * $('#board2').width();

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
      $("#blue").css("left","15px");
    });
  } reset();


  function movePlayer1() {
      if (position1.left < finishLine1) { //'a'
        $("#red").animate({ "left": "+=20px" }, "fast");
        position1.left += eachMove;
      } else if (position1.left > finishLine1) {
        winner = player1;
        alert ("The Winner is " + winner);
      }
    }

  function movePlayer2() {
      if (position2.left < finishLine2) { //'l'
        $("#blue").animate({ "left": "+=20px" }, "fast");
        position2.left += eachMove;
      } else if (position2.left > finishLine2) {
        winner = player2;
        alert ("The Winner is " + winner);
      }
    }

  function startGame () {
    $(".start").on("click", function () {
      console.log("game start");
      getWinner();
    });
  } startGame();

  function getWinner() {
    $(document).on("keyup", function (key) {
      if (winner !== player1 && winner !== player2) {
        if (key.keyCode === 65) {
          movePlayer1();
        } else if (key.keyCode === 76) {
          movePlayer2();
        }
      }
    });
  }

});
