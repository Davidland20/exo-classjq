$(document).ready(function(){
    $("div2").click(function(){
        $(".form").addClass("red");
    });
});

$(document).ready(function(){
    $("div3").click(function(){
        $(".form").removeClass("red");
    });
});

$( ".rond" ).click(function() {
  $( this ).toggleClass( "red" );
})