$(document).ready(
    $(".start").click(function(){

        $(".emo1").animate({top: '-9.375rem'});
        $(".emo2").animate({top: '+9.375rem'});
        $(".emo1").animate({left: '+10.9375rem'});
        $(".emo2").animate({right: '+9.375rem'});
        $(".emo1").animate({top: '+0rem'});
        $(".emo2").animate({top: '-0rem'}, function(){
            $(".emo1").animate({top: '-9.375rem'});
            $(".emo3").animate({top: '+9.375rem'});
            $(".emo1").animate({left: '+21.25rem'});
            $(".emo3").animate({right: '+9.375rem'});
            $(".emo1").animate({top: '+0rem'});
            $(".emo3").animate({top: '-0rem'}, function(){
                $(".emo1").animate({top: '-9.375rem'});
                $(".emo4").animate({top: '+9.375rem'});
                $(".emo1").animate({left: '+30rem'});
                $(".emo4").animate({right: '+9.375rem'});
                $(".emo1").animate({top: '+0rem'});
                $(".emo4").animate({top: '-0rem'}, function(){
                    $(".emo1").animate({top: '-9.375rem'});
                    $(".emo5").animate({top: '+9.375rem'});
                    $(".emo1").animate({left: '+38.75rem'});
                    $(".emo5").animate({right: '+9.375rem'});
                    $(".emo1").animate({top: '+0rem'});
                    $(".emo5").animate({top: '-0rem'}, 
                    
                    function(){
                        $(".emo2").animate({top: '-9.375rem'});
                        $(".emo3").animate({top: '+9.375rem'});
                        $(".emo2").animate({left: '+0rem'});
                        $(".emo3").animate({right: '+20rem'});
                        $(".emo2").animate({top: '+0rem'});
                        $(".emo3").animate({top: '-0rem'}, function(){
                            $(".emo2").animate({top: '-9.375rem'});
                            $(".emo4").animate({top: '+9.375rem'});
                            $(".emo2").animate({left: '+9.375rem'});
                            $(".emo4").animate({right: '+20rem'});
                            $(".emo2").animate({top: '+0rem'});
                            $(".emo4").animate({top: '-0rem'}, function(){
                                $(".emo2").animate({top: '-9.375rem'});
                                $(".emo5").animate({top: '+9.375rem'});
                                $(".emo2").animate({left: '+17.1875rem'});
                                $(".emo5").animate({right: '+20rem'});
                                $(".emo2").animate({top: '+0rem'});
                                $(".emo5").animate({top: '-0rem'}, 
                                
                                function(){
                                    $(".emo3").animate({top: '-9.375rem'});
                                    $(".emo4").animate({top: '+9.375rem'});
                                    $(".emo3").animate({right: '+10.9375rem'});
                                    $(".emo4").animate({right: '+29.375rem'});
                                    $(".emo3").animate({top: '+0rem'});
                                    $(".emo4").animate({top: '-0rem'}, function(){
                                        $(".emo3").animate({top: '-9.375rem'});
                                        $(".emo5").animate({top: '+9.375rem'});
                                        $(".emo3").animate({right: '+2.8125rem'});
                                        $(".emo5").animate({right: '+29.375rem'});
                                        $(".emo3").animate({top: '+0rem'});
                                        $(".emo5").animate({top: '-0rem'}, 
                                        
                                        function(){
                                            $(".emo4").animate({top: '-9.375rem'});
                                            $(".emo5").animate({top: '+9.375rem'});
                                            $(".emo4").animate({right: '+21.25rem'});
                                            $(".emo5").animate({right: '+38.125rem'});
                                            $(".emo4").animate({top: '+0rem'});
                                            $(".emo5").animate({top: '-0rem'});
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });

    //  $(".emo2").click(function(){
    // $(".emo2").replaceWith("<div class='emoji emo2'>&#128512;</div>");
    //  });
    }));
