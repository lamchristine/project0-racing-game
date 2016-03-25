$(document).ready(function() {

  // var countS = 0;





  $(document).on("keyup", function (key){
    if (key.keyCode === 65) { //'a'
      $("#red").animate({ "left": "+=25px" }, "fast", function () {

        alert ("Winner!");
      });
    } else if (key.keyCode === 76) { //'l'
      $("#blue").animate({ "left": "+=25px" }, "fast");
    }
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
  //   // }      // }
  // });
});
