$(document).ready(function(){
  
  $('.counter').counterUp({
      delay: 10,
      time: 1000
   });





 var countdown = $("#countdown").countdown360({
    radius      : 60,
    seconds     : 100,
    fontColor   : '#FFFFFF',
    autostart   : false,
    onComplete  : function () { console.log('done') }
});

 countdown.start();

});






