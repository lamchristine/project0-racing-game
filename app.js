$(document).ready(function() {

  // var countS = 0;

//if keycode is 65, and position is not end; move forward
//else if keycode is 65 and position is end; winner



var winner;
var playerRed = "Red"
var playerBlue = "Blue"



  $(document).on("keyup", function (key){

  if (winner !== "Red" && winner !== "Blue" ) {

    var positionRed = $('#red').position();
    // console.log(positionRed.left);

    // var positionRed = $("#red")[0].getBoundingClientRect();
    // // console.log(positionRed.top, positionRed.right, positionRed.bottom, positionRed.left);

    var positionBlue = $('#blue').position();
    // console.log(positionBlue)

    var positionBoard1 = $('#board1').position();
    // console.log(positionBoard1.left) //left border

    var finishLineRed = 0.95 * ( $('#board1').width() );
    // console.log(finishLineRed);

    var finishLineBlue = 0.95 * ( $('#board2').width() );
    // console.log(finishLineBlue);


  // var positionBoard1 = $("#board1")[0].getBoundingClientRect();
  // console.log(positionBoard1.top, positionBoard1.right, positionBoard1.bottom, positionBoard1.left);


    if ( (key.keyCode === 65) && (positionRed.left < finishLineRed) ){ //'a'
      $("#red").animate({ "left": "+=40" }, "fast");
    } else if (positionRed.left > finishLineRed) {
      winner = "Red";
      alert (winner);
    }

    if ( (key.keyCode === 76) && (positionBlue.left < finishLineBlue) ) { //'l'
      $("#blue").animate({ "left": "+=25px" }, "fast");
    } else if (positionBlue.left > finishLineBlue) {
      winner = "Blue";
      alert ("Blue is Winner");
    }
  }
});
});
  //
  //   // $(".board1.cell1").append("<img src='http://maps.google.com/mapfiles/ms/icons/green-dot.png'>")
  //       if ( (countS % 2 === 0) && (key.keyCode === 65) ) { //'a'
  //         $(".board1.cell").append("<img src='http://maps.google.com/mapfiles/ms/icons/green-dot.png'>");
  //         $(".board1").addClass("cell" + countS);
  //         countS = countS + 1;
  //         // $(".board1.cell(countS)").append("<img src='http://maps.google.com/mapfiles/ms/icons/green-dot.png'>");
  //
  //       //
  //       } else if ( (countS % 2 !== 0) && (key.keyCode === 65) ) {
  //         $(".board1").empty();
  //
  //         $(".board1").addClass("<img src='http://maps.google.com/mapfiles/ms/icons/green-dot.png'>");
  //         countS = countS + 1;
  //
