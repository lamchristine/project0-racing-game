

$(document).ready(function() {


/* Player Object Construction */
function Player(first_name, last_name) {
    /* Object Attributes*/
    this.first_name = first_name;
    this.last_name = last_name;
    /* End Object Attributes */


    this.full_name = function () {
      return first_name + " " + last_name;
    };
}


  var winner;
  var player1 = null;
  var player2 = null;
  var eachMove = 50;


  var position1 = $('#red').position();
  var position2 = $('#blue').position();
  var finishLine1 = $('#board1').width();
  var finishLine2 = $('#board2').width();

  function getPlayer1 () {
    $(".player1").on("click", function (){
      player1_prompt = prompt("Please enter your first and last name");
      player1_array = player1_prompt.split(" "); //array of [Daniel, Lee]
      player1 = new Player( player1_array[0], player1_array[1] );
      $(this).text(player1.full_name);
      return player1;
    });
  } getPlayer1();

  function getPlayer2 () {
    $(".player2").on("click", function (){
      player2_prompt = prompt("Please enter your name");
      player2_array = player2_prompt.split(" ");
      player2 = new Player( player2_array[0], player2_array[1] );
      $(this).text(player2.full_name);
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
          $("#red").animate({ "left": "+=50px" }, 100, "linear");
          position1.left += eachMove;
        } else if (key.keyCode === 83) { //'s' jumps
          $("#red").animate({top: "-=30px"}, 100, "linear");
          // $("#red").animate({left: "+=100px"},100, "linear");
          // $("#red").animate({top: "-=20px"}, 100, "linear");
          $("#red").animate({left: "+=100px"},100, "linear");
          $("#red").animate({top: "+=30px"}, 100, "linear");
          // $("#red").animate({top: "+=80px"}, 100, "linear");
          position1.left += 100;
        }
      } else if (position1.left > finishLine1) {
        winner = player1;
        alert ("The Winner is " + winner.first_name );
      }
    });
  }

  function movePlayer2() {
    $(document).on("keyup", function (key) {
      if (position2.left < finishLine2) {
        if (key.keyCode === 76) { //'l' forward
          $("#blue").animate({ "left": "+=50px" }, "fast", "linear");
          position2.left += eachMove;
        } else if (key.keyCode === 75) { //'k' jumps
          $("#blue").animate({top: "-=30px"}, 100, "linear");
          $("#blue").animate({left: "+=100px"}, 10, "linear");
          $("#blue").animate({top: "+=30px"}, 100, "linear");
          position1.left += 100;
        }
      } else if (position2.left > finishLine2) {
        winner = player2;
        alert ("The Winner is " + winner.first_name);
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
        // setObstacles();
      }
    });
  } startGame();
});

// function setObstacles() {
//   $(".obstacle").animate({"right": "+=1000px"}, 10000); //alerts Hello every 3 seconds
//   if ( ( $(".obstacle").position.left < finishLine1 ) && ( $(".obstacle").position.left > $('#board1').position.left ) )  {
//   $('.obstacle').css({'display': 'inline-block'});
// }
// }
//
/* random obstacles */
  // function setObstacles() {
  //   setInterval (function() {
  //     $(".obstacle").animate({"right": "+=50px"}, "fast"); }, 500); //alerts Hello every 3 seconds
  // }

  // $(".obstacles").animate("right": "+=1000"}, "slow");
  //



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
