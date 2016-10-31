    var isFading = false;

    function completeFade() {
        // console.log("finished");
        isFading = false;
    }

    $('.main-nav .dropdown-menu.main-menu').mouseenter(function() {
        $('.selected').removeClass('selected');
        $(this).addClass('selected').prev().addClass('selected');
    }).mouseleave(function() {
        $('.selected').addClass('selected');
        $(this).removeClass('selected').prev().removeClass('selected');
    });

    $('.sub-nav .main-menu.dropdown-menu-large').mouseenter(function() {
        $('.selected').removeClass('selected');
        $(this).addClass('selected').prev().addClass('selected');
    }).mouseleave(function() {
        $('.selected').addClass('selected');
        $(this).removeClass('selected').prev().removeClass('selected');
    });

    $('.dropdown-accordion').mouseenter(function() {
        
        if(!isFading) {
            isFading = true;
            $( ".cover-fade-out" ).fadeIn( "slow", "linear", completeFade);
        }
    }).mouseleave(function() {     
        if(!isFading) {   
            $( ".cover-fade-out" ).fadeOut(200);
        }
    });

    $('.dropdown-large').mouseenter(function() {
        
        if(!isFading) {
            isFading = true;
            $( ".cover-fade-out" ).fadeIn( "slow", "linear", completeFade);
        }
    }).mouseleave(function() {
        
        if(!isFading) {
            $( ".cover-fade-out" ).fadeOut(200);
        }
    });

    $('.cover-fade-out').on('tap',function(){
        $(this).fadeOut();
    });
    $('.cover-fade-out').hover(function(){
        $(this).fadeOut(800);
    });