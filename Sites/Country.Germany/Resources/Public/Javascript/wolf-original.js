    var open = false;
    $('#popover').mouseenter(function() {
        $(this).click();
        $('input').focus();
    }).mouseleave(function () {
        if(open) {
            $(this).click();
        }
    }).on('click', function() {
        if(open) {
            open = false;
        } else {
            open = true;
        }
    }); 

    var isFading = false;

    function completeFade() {
        console.log("finished");
        isFading = false;
    }

    $('.dropdown-accordion').mouseenter(function() {
        
        if(!isFading) {
            isFading = true;
            $( ".cover-fade-out" ).fadeIn( 200, "linear", completeFade);
        }
    }).mouseleave(function() {     
    if(!isFading) {   
            $( ".cover-fade-out" ).fadeOut( 200, "linear");
        }
    });

    $('.dropdown-large').mouseenter(function() {
        
        if(!isFading) {
            isFading = true;
            $( ".cover-fade-out" ).fadeIn( 200, "linear", completeFade);
        }
    }).mouseleave(function() {
        
        if(!isFading) {
            $( ".cover-fade-out" ).fadeOut( 200, "linear");
        }
    });
    

