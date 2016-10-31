 $(document).ready(function() {
            $("#owl-carousel-map").owlCarousel({
                singleItem : true,
                navigation: true,
                navigationText: ["<img src='_Resources/Static/Packages/Country.Germany/Images/carousel_left.png'>","<img src='/_Resources/Static/Packages/Country.Germany/Images/carousel_right.png'>"]
            });
            
            $(".owl-carousel-small").owlCarousel({
                navigation: true,
                navigationText: ["<img src='/_Resources/Static/Packages/Country.Germany/Images/carousel_left.png'>","<img src='/_Resources/Static/Packages/Country.Germany/Images/carousel_right.png'>"]
            }); 

            $("#owl-carousel-large").owlCarousel({
                singleItem : true,
                navigation: true,
                navigationText: ["<img src='/_Resources/Static/Packages/Country.Germany/Images/left-gray.png'>","<img src='/_Resources/Static/Packages/Country.Germany/Images/right-gray.png'>"]
            });
        });