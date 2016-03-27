

$(document).ready(function() {

  var winner;
  var player1 = "Red";
  var player2 = "Blue";
  var eachMove = 20;


  var position1 = $('#red').position();
  var position2 = $('#blue').position();
  var finishLine1 = 0.85 * $('#board1').width();
  var finishLine2 = $('#board2').width();
  // var positionBoard1 = $('#board1').position();


  function movePlayer1() {
      if (position1.left < finishLine1) { //'a'
        $("#red").animate({ "left": "+=20px" }, "fast");
        position1.left += eachMove;
      } else if (position1.left > finishLine1) {
        winner = "Red";
        alert ("The Winner is " + winner);
      }
    }

  function movePlayer2() {
      if (position2.left < finishLine2) { //'l'
        $("#blue").animate({ "left": "+=20px" }, "fast");
        position2.left += eachMove;
      } else if (position2.left > finishLine2) {
        winner = "Blue";
        alert ("The Winner is " + winner);
      }
    }

  function getWinner() {
    $(document).on("keyup", function (key) {
      if (winner !== "Red" && winner !== "Blue" ) {
        if (key.keyCode === 65) {
          movePlayer1();
        } else if (key.keyCode === 76) {
          movePlayer2();
        }
      }
    });
  }

  getWinner();

});
