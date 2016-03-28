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

  var winner = null;
  var player1 = null;
  var player2 = null;
  var eachMoveForward = 50;

  var finishLine1 = $('#board1').width();
  var finishLine2 = $('#board2').width();

  $(".player1").on("click", function() {
    player1 = getPlayer( $('#red'), $(this) );
  });

  $(".player2").on("click", function() {
    player2 = getPlayer( $('#blue'), $(this) );
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
      $(".player2").text("Top: Player 2");
      $(".player1").text("Top: Player 1");
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
      if ( winner === null ) {
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
