// // $(document).ready(function(){
// //   $("form#luck_survey").submit(function(event){
// //     event.preventDefault();
// //     $("#badResponses").show();
// //     // var lucky = 0;
// //     $("input:checkbox[name=badLuck]:checked").each(function(){
// //       // var badLuckSurvey = $(this).val();
// //       // console.log(badLuckSurvey);
// //       lucky -= 1;
// //       console.log(lucky);
// //       $('#badResponses').append(badLuckSurvey + "<br>");
// //     });
// //     $("#goodResponses").show();
// //     $("input:checkbox[name=goodLuck]:checked").each(function(){
// //       // var goodLuckSurvey = $(this).val();
// //       // console.log(goodLuckSurvey);
// //       lucky += 1;
// //     //   $('#goodResponses').append(goodLuckSurvey + "<br>");
// //     // });
// //     // $('#luck_survey').show();
// //     // var lucky = 0
// //     // for (var i = 0; 0 <= i <= 10; i ++) {
// //
// //     // .forEach(function(responses) {
// //     //   var badLuck = 0;
// //     //   var goodLuck = 0;
// //     //   if (badLuckSurvey) {
// //     //     lucky = lucky -1;
// //     //   }
// //     //   else {
// //     //     lucky += 1;
// //     //   }
// //     var lucky = 0;
// //     });
// //   });
// //   console.log(lucky);
// // });
//
//
// $(document).ready(function() {
//   $("form#luck_survey").submit(function(event) {
//     event.preventDefault();
//     var unlucky = 0;
//     var badLuckVal = $("input:checkbox[name=badLuck]:checked").each(function(){
//       if (badLuckVal === "ladder" || badLuckVal === "mirror" || badLuckVal === "umbrella" || badLuckVal === "cat" || badLuckVal === "toe" ) {
//         unlucky = unlucky + 1;
//         // console.log(unlucky);
//       };
//       console.log(badLuckVal);
//     });
//   });
// });
//   //
//   //   unlucky = badLuckVal.length;
//   //   console.log(unlucky);
//   //   var goodLuckVal = $("input:checkbox[name=goodLuck]:checked").val();
//   //
//   //   var lucky = 0;
//   //   newArray = [];
//   //   badLuckVal.forEach(function(luck){
//   //     if (luck === true) {
//   //       lucky -= 1;
//   //       newArray.push(luck);
//   //     }
//   //   // goodLuckVal.forEach(function(luck){
//   //   //   if (luck === true) {
//   //   //     lucky += 1;
//   //   //     newArray.push(luck);
//   //   //   }
//   //   // });
//   //   // console.log(newArray);
//   //   var total = (newArray);
//   //   console.log(total);
//   //   // $('#display').text(combine);
//   //   $("#container2").show();
//   //   $("#container1").hide();
//   // })
//
//
//   $(document).ready(function() {
//     $("form#luck_survey").submit(function(event) {
//       event.preventDefault();
//       var unlucky = 0;
//       var badLuckVal = $("input:checkbox[name=badLuck]:checked").each(function(){
//         if (badLuckVal === "ladder" || badLuckVal === "mirror" || badLuckVal === "umbrella" || badLuckVal === "cat" || badLuckVal === "toe" ) {
//           unlucky = unlucky + 1;
//           // console.log(unlucky);
//         };
//         console.log(badLuckVal);
//       });
//     });
//   });


  $(document).ready(function(){
  $("form#luck_survey").submit(function(event){
    event.preventDefault();
    // $("#luckLevel").show();
    var userResponsesB = [];
    $("input:checkbox[name=badLuck]:checked").each(function(){
        var badLuckVal = $(this).val();
        userResponsesB.push(badLuckVal);
      });
      var userResponsesG = [];
    $("input:checkbox[name=goodLuck]:checked").each(function(){
        var goodLuckVal = $(this).val();
        userResponsesG.push(goodLuckVal);
      });
      var bad = userResponsesB.length;
      var good = userResponsesG.length;
      var totalLuck = good - bad;
      console.log(totalLuck);
      if (totalLuck < 0) {
        $("#badLuckLevel").show();
      } else if (0 < totalLuck) {
        $("#goodLuckLevel").show();
      } else {
        $("#neutralLuckLevel").show();
      }

    $('#luck_survey').hide();
  });
});
