// var tirData = {
//   labels : [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
//   datasets : [
//     {
//       fillColor : "#D9D2CA",
//       strokeColor : "#D9D2CA",
//       data : [57,17,42,24,19,21,59,41,25,8,51,21,49,46,20,20,59,16,30,34,28,14,43,14,12,49,14,45,57,37]
//     },
//     {
//       fillColor : "#53D0F9",
//       strokeColor : "#53D0F9",
//       data : [10,5,12,8,7,7,22,18,9,5,25,12,22,20,12,13,38,11,22,25,24,11,35,8,8,44,12,40,49,35]
//     }
//   ]
// };


// var hrvData = {
//   labels : [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
//   datasets : [
//     {
//       fillColor : "#FFD776",
//       strokeColor : "#FF6A4E",
//       pointColor : "#FFCB4E",
//       pointStrokeColor : "#FFCB4E",
//       data : [70,71,69,70,71,72,71,72,71,75,73,73,72,73,74,73,74,75,74,75,74,73,72,74,74,73,73,74,73,73]
//     },
//     {
//       fillColor : "#EFEBE6",
//       strokeColor : "#53D0F9",
//       pointColor : "#FFCB4E",
//       pointStrokeColor : "rgba(255,255,255,0)",
//       data : [60,65,62,63,67,66,68,67,69,64,68,65,64,65,58,58,57,55,56,54,55,57,54,69,70,49,48,47,46,45]
//     }
//   ]
// }


// var data = [{
//     value: 59,
//     color: "#53D0F9"
//   }, 
//   {
//     value: 41,
//     color: "#D9D2CA"
//   }];




// var options = {
//     barValueSpacing : 0,
//     barDatasetSpacing : 1,
//     barStrokeWidth : 0,
//     animationSteps : 100,
//     segmentShowStroke : false,
// };





// var inView = false;




function handleReady () {



  $(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 750);
        return false;
      }
    }
  });
});


jQuery('#nav').onePageNav({changeClassBefore: false});




  $('#nav').onePageNav({
      currentClass: 'current',
      changeHash: false,
      scrollSpeed: 750,
      scrollOffset: 30,
      scrollThreshold: 0.5,
      filter: '',
      easing: 'swing',
      begin: function() {
          //I get fired when the animation is starting
      },
      end: function() {
          //I get fired when the animation is ending
      },
      scrollChange: function($currentListItem) {
          //I get fired when you enter a section and I pass the list item of the section
      }
  });
  










  

//   function isScrolledIntoView(elem){

//     var docViewTop = $(window).scrollTop();
//     var docViewBottom = docViewTop + $(window).height();

//     var elemTop = $(elem).offset().top;
//     var elemBottom = elemTop + $(elem).height();




//     return ((elemTop <= docViewBottom) && (elemBottom >= docViewTop));
//   }

//   $(window).scroll(function() {
//     if (isScrolledIntoView('#overall-tir')) {
//         if (inView) { return; }
//         inView = true;

//         var ctx = document.getElementById("tir").getContext("2d");
//         var tir = new Chart(ctx, { tooltips: { labelTemplate: 'Nov <%=label%>: <%=value%> mins' } }).Bar(tirData, options);

//         var ctx = document.getElementById("overall-tir").getContext("2d");
//         var tir = new Chart(ctx, { tooltips: { labelTemplate: '<%=value%>%' } }).Doughnut(data, options);

//         var ctx = document.getElementById("hrv").getContext("2d");
//         var hrv = new Chart(ctx, { tooltips: { labelTemplate: '<%=value%> bpm' } }).Line(hrvData, options);


//     } else {
//         inView = false;  
//     }
//   });





}




// (, { background: 'black', fontColor: 'white' })



// var ctx = document.getElementById("myChart").getContext("2d");
// var myNewChart = new Chart(ctx).PolarArea(data);


// var myChart = new Chart(context, { background: 'black', fontColor: 'white' });




$(document).ready(handleReady);