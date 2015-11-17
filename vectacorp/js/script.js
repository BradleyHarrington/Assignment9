$(function() {
$("#home").tooltip({
  content: "This goes to our awesome home page"
});
$("#aboutus").tooltip({
  content: "Everything you want to know"
});
$("#solutions").tooltip({
  content: "We can find solutions to everything"
});
$("#support").tooltip({
  content: "We will hold your hand all the way through"
});
$("#contactus").tooltip({
  content: "Contact us right after you send the money"
});

$( "#tabs" ).tabs({
  collapsible: true
});

$( "#accordion" ).accordion();

//$("#sticker").sticky({topSpacing: 50});

$("#radio").buttonset();

});