//the bad use of click and need to use on

// $('li').click(function(){
//    $(this).toggleClass('completed');});

$('ul').on('click','li',function(){
   $(this).toggleClass('completed');
 });

//

// $('span').click(function(event){
//    $(this).parent().fadeOut(500,function(){
//      //use just this because now (this)  refer to the li and the span togther
//      $(this).remove()
//    });
//    event.stopPropagation();
//  });
//

//we selected the ul because its created on the page loaded
//and the fucntion will fire only when the span been clicked

$('ul').on('click','span',function(event){
   $(this).parent().fadeOut(500,function(){
     //use just this because now (this)  refer to the li and the span togther
     $(this).remove()
   });
   event.stopPropagation();
 });



//
$("input[type='text']").keypress(function(event){
  if(event.which===13){
    let todotext = $(this).val();
    // $('ul').append(`<li><span>X  </span>${todotext}</li>`)
    $('ul').append('<li><span>' +"<i class='fas fa-minus'></i>"+ '  </span>'+ todotext +'</li>')
    //clear the input
    $(this).val('')
  }
});



$(".fa-plus").click(function(){
  $("input[type='text']").fadeToggle();
});
 // /////////////////////////
 // the long way to check and uncheck the list item.
 // $('li').click(function(){
 //   if($(this).css('color') === "rgb(128, 128, 128)"){
 // // the long way to do the css
 //       $(this).css('color',"black");
 //       $(this).css("text-decoration",'blink');
 //   }else{
 //     $(this).css({
 //       // shorter way to do css
 //       color:"gray",
 //       textDecoration:"line-through"
 //     })
 //   }
 // });
