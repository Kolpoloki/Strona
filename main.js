$(function(){
    $(".opisy").hide();

    $(".buttons").click(function() {
        $("#lewy").animate({right:'60%'},1000);
        $("#prawy").animate({left:'60%'},1000);
    });
    
    $("#return").click(function() {
        $("#lewy").animate({right:'0%'},1000);
        $("#prawy").animate({left:'0%'},1000);
    });

    $("#b1").click(function() {
        $(".opisy").hide();
        $("#opis1").show();
    }); 

    $("#b2").click(function() {
        $(".opisy").hide();
        $("#opis2").show();
    }); 

    $("#b3").click(function() {
        $(".opisy").hide();
        $("#opis3").show();
    }); 

    $("#b4").click(function() {
        $(".opisy").hide();
        $("#opis4").show();
    }); 

    $("#b5").click(function() {
        $(".opisy").hide();
        $("#opis5").show();
    }); 

    $("#b6").click(function() {
        $(".opisy").hide();
        $("#opis6").show();
    }); 


});
