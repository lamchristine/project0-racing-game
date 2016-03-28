

$(document).ready(function() {


/* Player Object Construction */
  function Player(first_name, last_name, image) {
    /* Object Attributes*/
    this.first_name = first_name;
    this.last_name = last_name;
    this.image = image;

    this.full_name = first_name + " " + last_name;
    this.position = image.position();
    /* End Object Attributes */

  }

  var winner;
  var player1 = null;
  var player2 = null;
  var eachMoveForward = 50;


  var finishLine1 = $('#board1').width();
  var finishLine2 = $('#board2').width();

  $(".player1").on("click", function() {
    player1 = getPlayer( $('#red'), $('.player1') );
  });

  $(".player2").on("click", function() {
    player2 = getPlayer( $('#blue'), $('.player2') );
  });

  function getPlayer(imgSelector, btnSelector) {
    player_prompt = prompt("Please enter your first and last name");
    player_array = player_prompt.split(" "); //array of [Daniel, Lee]
    player = new Player( player_array[0], player_array[1], imgSelector);
    btnSelector.text(player.full_name);
    return player;
  }

  function reset() {
    $(".reset").on("click", function() {
      player1.image.css("left","15px");
      player1.position.left = 15;
      winner = "";
      player2.image.css("left","15px");
      player2.position.left = 15;
    });
  } reset();


  function movePlayer1() {
    $(document).on("keyup", function (key) {
      if (player1.position.left < finishLine1) {
        if (key.keyCode === 65) { //'a' forward
          player1.image.animate({ "left": "+=50px"},  "fast", "linear");
          player1.position.left += eachMoveForward;
        } else if (key.keyCode === 83) { //'s' jumps
          player1.image.animate({top: "-=30px"}, "fast", "linear");
          player1.image.animate({top: "+=30px"}, "fast", "linear");
        }
      } else if (player1.position.left > finishLine1) {
        winner = player1;
        alert ("The Winner is " + winner.first_name );
      }
    });
  }

  function movePlayer2() {
    $(document).on("keyup", function (key) {
      if (player2.position.left < finishLine2) {
        if (key.keyCode === 76) { //'l' forward
          player2.image.animate({ "left": "+=50px"}, "fast", "linear");
          player2.position.left += eachMoveForward;
        } else if (key.keyCode === 75) { //'k' jumps
          player2.image.animate({top: "-=30px"}, "fast", "linear");
          player2.image.animate({top: "+=30px"}, "fast", "linear");
        }
      } else if (player2.position.left > finishLine2) {
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
