$(document).ready(function(){

///////////////////////////////////////////////////////////// Scroll-Top Button //////////////////////////////////////////////////////////////////////////////////////////////    

    $(window).scroll(function(){
        if ($(window).scrollTop() > 10){
            $('#goTop').fadeIn();
        }
        else{
            $('#goTop').fadeOut();
        }
    });
    

    $('#goTop').click(function () {
        $("html, body").animate({
            scrollTop: 0
        },500 );
    });

///////////////////////////////////////////////////////////////// Nav Background after scroll /////////////////////////////////////////////////////////////////////////////////////

            $(window).scroll(function(){
                if ($("html,body").scrollTop() != 0) {
                    $("header #first-section").css({
                        "background-color": "white"
                    })
                }
            });

//////////////////////////////////////////////////////////////// Vertical Nav Responcive /////////////////////////////////////////////////////////////////////////////////////////

            $('header #first-section .mobile-btn').click( function(){
                $('header #first-section #nav-vertical').show("slow","linear");
                $('header #first-section .mobile-btn').hide();
            });

            $('header #first-section #nav-vertical svg').click( function(){
                $('header #first-section #nav-vertical').hide("slow","linear");
                $('header #first-section .mobile-btn').show();
            });

/////////////////////////////////////////////////////////////////////////////// Corona 2019 Basics ////////////////////////////////////////////////////////////////////////////////
            $('section .questions .question-left .1st').click(function(){
                $('section .questions .question-right').show("slow","linear");
                $('section .questions .question-right-2nd').hide("slow","linear");
                $('section .questions .question-right-3rd').hide("slow","linear");
                $('section .questions .question-right-4rth').hide("slow","linear");
                $('section .questions .question-right-5th').hide("slow","linear");
                $('section .questions .question-right-6th').hide("slow","linear");
                $('section .questions .question-right .border .body.1st').toggle("slow","linear");
                $('section .questions .question-right .border .minus.1st').toggle("slow","linear");
                $('section .questions .question-right .border .plus.1st').toggle("slow","linear");
            });

                    //FOR FIRST PARA
            $('section .questions .question-right .border .plus.1st').click( function(){
                $('section .questions .question-right .border .minus.1st').toggle("slow","linear");
                $('section .questions .question-right .border .body.1st').toggle("slow","linear");
                $('section .questions .question-right .border .plus.1st').toggle("slow","linear");
            });

            $('section .questions .question-right .border .minus.1st').click( function(){
                $('section .questions .question-right .border .plus.1st').toggle("slow","linear");
                $('section .questions .question-right .border .body.1st').toggle("slow","linear");
                $('section .questions .question-right .border .minus.1st').toggle("slow","linear");
            });

                //FOR SECOND PARA
            $('section .questions .question-right .border .plus.2nd').click( function(){
                $('section .questions .question-right .border .minus.2nd').toggle("slow","linear");
                $('section .questions .question-right .border .body.2nd').toggle("slow","linear");
                $('section .questions .question-right .border .plus.2nd').toggle("slow","linear");
            });
        
            $('section .questions .question-right .border .minus.2nd').click( function(){
                $('section .questions .question-right .border .plus.2nd').toggle("slow","linear");
                $('section .questions .question-right .border .body.2nd').toggle("slow","linear");
                $('section .questions .question-right .border .minus.2nd').toggle("slow","linear");
            });

                    //FOR THIRD PARA
            $('section .questions .question-right .border .plus.3rd').click( function(){
                $('section .questions .question-right .border .minus.3rd').toggle("slow","linear");
                $('section .questions .question-right .border .body.3rd').toggle("slow","linear");
                $('section .questions .question-right .border .plus.3rd').toggle("slow","linear");
            });
        
            $('section .questions .question-right .border .minus.3rd').click( function(){
                $('section .questions .question-right .border .plus.3rd').toggle("slow","linear");
                $('section .questions .question-right .border .body.3rd').toggle("slow","linear");
                $('section .questions .question-right .border .minus.3rd').toggle("slow","linear");
            });

                    //FOR FORTH  PARA
            $('section .questions .question-right .border .plus.4rth').click( function(){
                $('section .questions .question-right .border .minus.4rth').toggle("slow","linear");
                $('section .questions .question-right .border .body.4rth').toggle("slow","linear");
                $('section .questions .question-right .border .plus.4rth').toggle("slow","linear");
            });
        
            $('section .questions .question-right .border .minus.4rth').click( function(){
                $('section .questions .question-right .border .plus.4rth').toggle("slow","linear");
                $('section .questions .question-right .border .body.4rth').toggle("slow","linear");
                $('section .questions .question-right .border .minus.4rth').toggle("slow","linear");
            });


////////////////////////////////////////////////////////////////////////////////// How it Spread ////////////////////////////////////////////////////////////////////////////////
            $('section .questions .question-left .2nd').click(function(){
                $('section .questions .question-right-2nd').show("slow","linear");
                $('section .questions .question-right').hide("slow","linear");
                $('section .questions .question-right-3rd').hide("slow","linear");
                $('section .questions .question-right-4rth').hide("slow","linear");
                $('section .questions .question-right-5th').hide("slow","linear");
                $('section .questions .question-right-6th').hide("slow","linear");
                $('section .questions .question-right-2nd .border .minus.1st').toggle("slow","linear");
                $('section .questions .question-right-2nd .border .body.1st').toggle("slow","linear");
                $('section .questions .question-right-2nd .border .plus.1st').toggle("slow","linear");
            });


                    //FOR FIRST PARA
            $('section .questions .question-right-2nd .border .plus.1st').click( function(){
                $('section .questions .question-right-2nd .border .minus.1st').toggle("slow","linear");
                $('section .questions .question-right-2nd .border .body.1st').toggle("slow","linear");
                $('section .questions .question-right-2nd .border .plus.1st').toggle("slow","linear");
            });

            $('section .questions .question-right-2nd .border .minus.1st').click( function(){
                $('section .questions .question-right-2nd .border .plus.1st').toggle("slow","linear");
                $('section .questions .question-right-2nd .border .body.1st').toggle("slow","linear");
                $('section .questions .question-right-2nd .border .minus.1st').toggle("slow","linear");
            });

                    //FOR Second PARA
            $('section .questions .question-right-2nd .border .plus.2nd').click( function(){
                $('section .questions .question-right-2nd .border .minus.2nd').toggle("slow","linear");
                $('section .questions .question-right-2nd .border .body.2nd').toggle("slow","linear");
                $('section .questions .question-right-2nd .border .plus.2nd').toggle("slow","linear");
            });

            $('section .questions .question-right-2nd .border .minus.2nd').click( function(){
                $('section .questions .question-right-2nd .border .plus.2nd').toggle("slow","linear");
                $('section .questions .question-right-2nd .border .body.2nd').toggle("slow","linear");
                $('section .questions .question-right-2nd .border .minus.2nd').toggle("slow","linear");
            });

                    //FOR THIRD PARA
            $('section .questions .question-right-2nd .border .plus.3rd').click( function(){
                $('section .questions .question-right-2nd .border .minus.3rd').toggle("slow","linear");
                $('section .questions .question-right-2nd .border .body.3rd').toggle("slow","linear");
                $('section .questions .question-right-2nd .border .plus.3rd').toggle("slow","linear");
            });

            $('section .questions .question-right-2nd .border .minus.3rd').click( function(){
                $('section .questions .question-right-2nd .border .plus.3rd').toggle("slow","linear");
                $('section .questions .question-right-2nd .border .body.3rd').toggle("slow","linear");
                $('section .questions .question-right-2nd .border .minus.3rd').toggle("slow","linear");
            });

                    //FOR FOURTH PARA
            $('section .questions .question-right-2nd .border .plus.4rth').click( function(){
                $('section .questions .question-right-2nd .border .minus.4rth').toggle("slow","linear");
                $('section .questions .question-right-2nd .border .body.4rth').toggle("slow","linear");
                $('section .questions .question-right-2nd .border .plus.4rth').toggle("slow","linear");
            });

            $('section .questions .question-right-2nd .border .minus.4rth').click( function(){
                $('section .questions .question-right-2nd .border .plus.4rth').toggle("slow","linear");
                $('section .questions .question-right-2nd .border .body.4rth').toggle("slow","linear");
                $('section .questions .question-right-2nd .border .minus.4rth').toggle("slow","linear");
            });

                    //FOR FIFTH PARA
            $('section .questions .question-right-2nd .border .plus.5th').click( function(){
                $('section .questions .question-right-2nd .border .minus.5th').toggle("slow","linear");
                $('section .questions .question-right-2nd .border .body.5th').toggle("slow","linear");
                $('section .questions .question-right-2nd .border .plus.5th').toggle("slow","linear");
            });

            $('section .questions .question-right-2nd .border .minus.5th').click( function(){
                $('section .questions .question-right-2nd .border .plus.5th').toggle("slow","linear");
                $('section .questions .question-right-2nd .border .body.5th').toggle("slow","linear");
                $('section .questions .question-right-2nd .border .minus.5th').toggle("slow","linear");
            });

                    //FOR SIX PARA
            $('section .questions .question-right-2nd .border .plus.6th').click( function(){
                $('section .questions .question-right-2nd .border .minus.6th').toggle("slow","linear");
                $('section .questions .question-right-2nd .border .body.6th').toggle("slow","linear");
                $('section .questions .question-right-2nd .border .plus.6th').toggle("slow","linear");
            });

            $('section .questions .question-right-2nd .border .minus.6th').click( function(){
                $('section .questions .question-right-2nd .border .plus.6th').toggle("slow","linear");
                $('section .questions .question-right-2nd .border .body.6th').toggle("slow","linear");
                $('section .questions .question-right-2nd .border .minus.6th').toggle("slow","linear");
            });


/////////////////////////////////////////////////////////////////////////////////////////////// How to protect your self //////////////////////////////////////////////////////
            $('section .questions .question-left .3rd').click(function(){
                $('section .questions .question-right').hide("slow","linear");
                $('section .questions .question-right-2nd').hide("slow","linear");
                $('section .questions .question-right-4rth').hide("slow","linear");
                $('section .questions .question-right-5th').hide("slow","linear");
                $('section .questions .question-right-6th').hide("slow","linear");
                $('section .questions .question-right-3rd').show("slow","linear");
                $('section .questions .question-right-3rd .border .body.1st').toggle("slow","linear");
                $('section .questions .question-right-3rd .border .minus.1st').toggle("slow","linear");
                $('section .questions .question-right-3rd .border .plus.1st').toggle("slow","linear");
            });

                    //FOR FIRST PARA
            $('section .questions .question-right-3rd .border .plus.1st').click( function(){
                $('section .questions .question-right-3rd .border .minus.1st').toggle("slow","linear");
                $('section .questions .question-right-3rd .border .body.1st').toggle("slow","linear");
                $('section .questions .question-right-3rd .border .plus.1st').toggle("slow","linear");
            });

            $('section .questions .question-right-3rd .border .minus.1st').click( function(){
                $('section .questions .question-right-3rd .border .plus.1st').toggle("slow","linear");
                $('section .questions .question-right-3rd .border .body.1st').toggle("slow","linear");
                $('section .questions .question-right-3rd .border .minus.1st').toggle("slow","linear");
            });

                //FOR SECOND PARA
            $('section .questions .question-right-3rd .border .plus.2nd').click( function(){
                $('section .questions .question-right-3rd .border .minus.2nd').toggle("slow","linear");
                $('section .questions .question-right-3rd .border .body.2nd').toggle("slow","linear");
                $('section .questions .question-right-3rd .border .plus.2nd').toggle("slow","linear");
            });
        
            $('section .questions .question-right-3rd .border .minus.2nd').click( function(){
                $('section .questions .question-right-3rd .border .plus.2nd').toggle("slow","linear");
                $('section .questions .question-right-3rd .border .body.2nd').toggle("slow","linear");
                $('section .questions .question-right-3rd .border .minus.2nd').toggle("slow","linear");
            });

                    //FOR THIRD PARA
            $('section .questions .question-right-3rd .border .plus.3rd').click( function(){
                $('section .questions .question-right-3rd .border .minus.3rd').toggle("slow","linear");
                $('section .questions .question-right-3rd .border .body.3rd').toggle("slow","linear");
                $('section .questions .question-right-3rd .border .plus.3rd').toggle("slow","linear");
            });
        
            $('section .questions .question-right-3rd .border .minus.3rd').click( function(){
                $('section .questions .question-right-3rd .border .plus.3rd').toggle("slow","linear");
                $('section .questions .question-right-3rd .border .body.3rd').toggle("slow","linear");
                $('section .questions .question-right-3rd .border .minus.3rd').toggle("slow","linear");
            });

                    //FOR FORTH  PARA
            $('section .questions .question-right-3rd .border .plus.4rth').click( function(){
                $('section .questions .question-right-3rd .border .minus.4rth').toggle("slow","linear");
                $('section .questions .question-right-3rd .border .body.4rth').toggle("slow","linear");
                $('section .questions .question-right-3rd .border .plus.4rth').toggle("slow","linear");
            });
        
            $('section .questions .question-right-3rd .border .minus.4rth').click( function(){
                $('section .questions .question-right-3rd .border .plus.4rth').toggle("slow","linear");
                $('section .questions .question-right-3rd .border .body.4rth').toggle("slow","linear");
                $('section .questions .question-right-3rd .border .minus.4rth').toggle("slow","linear");
            });


                                //FOR FIFTH  PARA
            $('section .questions .question-right-3rd .border .plus.5th').click( function(){
                $('section .questions .question-right-3rd .border .minus.5th').toggle("slow","linear");
                $('section .questions .question-right-3rd .border .body.5th').toggle("slow","linear");
                $('section .questions .question-right-3rd .border .plus.5th').toggle("slow","linear");
            });
        
            $('section .questions .question-right-3rd .border .minus.5th').click( function(){
                $('section .questions .question-right-3rd .border .plus.5th').toggle("slow","linear");
                $('section .questions .question-right-3rd .border .body.5th').toggle("slow","linear");
                $('section .questions .question-right-3rd .border .minus.5th').toggle("slow","linear");
            });

////////////////////////////////////////////////////////////////////////// Symptoms & Testing ////////////////////////////////////////////////////////////////////////////////
            $('section .questions .question-left .4rth').click(function(){
                $('section .questions .question-right').hide("slow","linear");
                $('section .questions .question-right-2nd').hide("slow","linear");
                $('section .questions .question-right-3rd').hide("slow","linear");
                $('section .questions .question-right-5th').hide("slow","linear");
                $('section .questions .question-right-6th').hide("slow","linear");
                $('section .questions .question-right-4rth').show("slow","linear");
                $('section .questions .question-right-4rth .border .body.1st').toggle("slow","linear");
                $('section .questions .question-right-4rth .border .minus.1st').toggle("slow","linear");
                $('section .questions .question-right-4rth .border .plus.1st').toggle("slow","linear");
            });

                    //FOR FIRST PARA
            $('section .questions .question-right-4rth .border .plus.1st').click( function(){
                $('section .questions .question-right-4rth .border .minus.1st').toggle("slow","linear");
                $('section .questions .question-right-4rth .border .body.1st').toggle("slow","linear");
                $('section .questions .question-right-4rth .border .plus.1st').toggle("slow","linear");
            });

            $('section .questions .question-right-4rth .border .minus.1st').click( function(){
                $('section .questions .question-right-4rth .border .plus.1st').toggle("slow","linear");
                $('section .questions .question-right-4rth .border .body.1st').toggle("slow","linear");
                $('section .questions .question-right-4rth .border .minus.1st').toggle("slow","linear");
            });

                //FOR SECOND PARA
            $('section .questions .question-right-4rth .border .plus.2nd').click( function(){
                $('section .questions .question-right-4rth .border .minus.2nd').toggle("slow","linear");
                $('section .questions .question-right-4rth .border .body.2nd').toggle("slow","linear");
                $('section .questions .question-right-4rth .border .plus.2nd').toggle("slow","linear");
            });
        
            $('section .questions .question-right-4rth .border .minus.2nd').click( function(){
                $('section .questions .question-right-4rth .border .plus.2nd').toggle("slow","linear");
                $('section .questions .question-right-4rth .border .body.2nd').toggle("slow","linear");
                $('section .questions .question-right-4rth .border .minus.2nd').toggle("slow","linear");
            });

                    //FOR THIRD PARA
            $('section .questions .question-right-4rth .border .plus.3rd').click( function(){
                $('section .questions .question-right-4rth .border .minus.3rd').toggle("slow","linear");
                $('section .questions .question-right-4rth .border .body.3rd').toggle("slow","linear");
                $('section .questions .question-right-4rth .border .plus.3rd').toggle("slow","linear");
            });
        
            $('section .questions .question-right-4rth .border .minus.3rd').click( function(){
                $('section .questions .question-right-4rth .border .plus.3rd').toggle("slow","linear");
                $('section .questions .question-right-4rth .border .body.3rd').toggle("slow","linear");
                $('section .questions .question-right-4rth .border .minus.3rd').toggle("slow","linear");
            });

                    //FOR FORTH  PARA
            $('section .questions .question-right-4rth .border .plus.4rth').click( function(){
                $('section .questions .question-right-4rth .border .minus.4rth').toggle("slow","linear");
                $('section .questions .question-right-4rth .border .body.4rth').toggle("slow","linear");
                $('section .questions .question-right-4rth .border .plus.4rth').toggle("slow","linear");
            });
        
            $('section .questions .question-right-4rth .border .minus.4rth').click( function(){
                $('section .questions .question-right-4rth .border .plus.4rth').toggle("slow","linear");
                $('section .questions .question-right-4rth .border .body.4rth').toggle("slow","linear");
                $('section .questions .question-right-4rth .border .minus.4rth').toggle("slow","linear");
            });


////////////////////////////////////////////////////////////////////////////////////// outbreak in your community ////////////////////////////////////////////////////////////////////////////////
            $('section .questions .question-left .5th').click(function(){
                $('section .questions .question-right-2nd').hide("slow","linear");
                $('section .questions .question-right').hide("slow","linear");
                $('section .questions .question-right-3rd').hide("slow","linear");
                $('section .questions .question-right-4rth').hide("slow","linear");
                $('section .questions .question-right-6th').hide("slow","linear");
                $('section .questions .question-right-5th').show("slow","linear");
                $('section .questions .question-right-5th .border .minus.1st').toggle("slow","linear");
                $('section .questions .question-right-5th .border .body.1st').toggle("slow","linear");
                $('section .questions .question-right-5th .border .plus.1st').toggle("slow","linear");
            });


                    //FOR FIRST PARA
            $('section .questions .question-right-5th .border .plus.1st').click( function(){
                $('section .questions .question-right-5th .border .minus.1st').toggle("slow","linear");
                $('section .questions .question-right-5th .border .body.1st').toggle("slow","linear");
                $('section .questions .question-right-5th .border .plus.1st').toggle("slow","linear");
            });

            $('section .questions .question-right-5th .border .minus.1st').click( function(){
                $('section .questions .question-right-5th .border .plus.1st').toggle("slow","linear");
                $('section .questions .question-right-5th .border .body.1st').toggle("slow","linear");
                $('section .questions .question-right-5th .border .minus.1st').toggle("slow","linear");
            });

                    //FOR Second PARA
            $('section .questions .question-right-5th .border .plus.2nd').click( function(){
                $('section .questions .question-right-5th .border .minus.2nd').toggle("slow","linear");
                $('section .questions .question-right-5th .border .body.2nd').toggle("slow","linear");
                $('section .questions .question-right-5th .border .plus.2nd').toggle("slow","linear");
            });

            $('section .questions .question-right-5th .border .minus.2nd').click( function(){
                $('section .questions .question-right-5th .border .plus.2nd').toggle("slow","linear");
                $('section .questions .question-right-5th .border .body.2nd').toggle("slow","linear");
                $('section .questions .question-right-5th .border .minus.2nd').toggle("slow","linear");
            });

                    //FOR THIRD PARA
            $('section .questions .question-right-5th .border .plus.3rd').click( function(){
                $('section .questions .question-right-5th .border .minus.3rd').toggle("slow","linear");
                $('section .questions .question-right-5th .border .body.3rd').toggle("slow","linear");
                $('section .questions .question-right-5th .border .plus.3rd').toggle("slow","linear");
            });

            $('section .questions .question-right-5th .border .minus.3rd').click( function(){
                $('section .questions .question-right-5th .border .plus.3rd').toggle("slow","linear");
                $('section .questions .question-right-5th .border .body.3rd').toggle("slow","linear");
                $('section .questions .question-right-5th .border .minus.3rd').toggle("slow","linear");
            });

                    //FOR FOURTH PARA
            $('section .questions .question-right-5th .border .plus.4rth').click( function(){
                $('section .questions .question-right-5th .border .minus.4rth').toggle("slow","linear");
                $('section .questions .question-right-5th .border .body.4rth').toggle("slow","linear");
                $('section .questions .question-right-5th .border .plus.4rth').toggle("slow","linear");
            });

            $('section .questions .question-right-5th .border .minus.4rth').click( function(){
                $('section .questions .question-right-5th .border .plus.4rth').toggle("slow","linear");
                $('section .questions .question-right-5th .border .body.4rth').toggle("slow","linear");
                $('section .questions .question-right-5th .border .minus.4rth').toggle("slow","linear");
            });

                    //FOR FIFTH PARA
            $('section .questions .question-right-5th .border .plus.5th').click( function(){
                $('section .questions .question-right-5th .border .minus.5th').toggle("slow","linear");
                $('section .questions .question-right-5th .border .body.5th').toggle("slow","linear");
                $('section .questions .question-right-5th .border .plus.5th').toggle("slow","linear");
            });

            $('section .questions .question-right-5th .border .minus.5th').click( function(){
                $('section .questions .question-right-5th .border .plus.5th').toggle("slow","linear");
                $('section .questions .question-right-5th .border .body.5th').toggle("slow","linear");
                $('section .questions .question-right-5th .border .minus.5th').toggle("slow","linear");
            });

                    //FOR SIX PARA
            $('section .questions .question-right-5th .border .plus.6th').click( function(){
                $('section .questions .question-right-5th .border .minus.6th').toggle("slow","linear");
                $('section .questions .question-right-5th .border .body.6th').toggle("slow","linear");
                $('section .questions .question-right-5th .border .plus.6th').toggle("slow","linear");
            });

            $('section .questions .question-right-5th .border .minus.6th').click( function(){
                $('section .questions .question-right-5th .border .plus.6th').toggle("slow","linear");
                $('section .questions .question-right-5th .border .body.6th').toggle("slow","linear");
                $('section .questions .question-right-5th .border .minus.6th').toggle("slow","linear");
            });

////////////////////////////////////////////////////////////////////////// Myth-Busters of coronavirus ////////////////////////////////////////////////////////////////////////////////
            $('section .questions .question-left .6th').click(function(){
                $('section .questions .question-right-2nd').hide("slow","linear");
                $('section .questions .question-right').hide("slow","linear");
                $('section .questions .question-right-3rd').hide("slow","linear");
                $('section .questions .question-right-4rth').hide("slow","linear");
                $('section .questions .question-right-5th').hide("slow","linear");
                $('section .questions .question-right-6th').show("slow","linear");
                $('section .questions .question-right-6th .border .minus.1st').toggle("slow","linear");
                $('section .questions .question-right-6th .border .body.1st').toggle("slow","linear");
                $('section .questions .question-right-6th .border .plus.1st').toggle("slow","linear");
            });


                    //FOR FIRST PARA
            $('section .questions .question-right-6th .border .plus.1st').click( function(){
                $('section .questions .question-right-6th .border .minus.1st').toggle("slow","linear");
                $('section .questions .question-right-6th .border .body.1st').toggle("slow","linear");
                $('section .questions .question-right-6th .border .plus.1st').toggle("slow","linear");
            });

            $('section .questions .question-right-6th .border .minus.1st').click( function(){
                $('section .questions .question-right-6th .border .plus.1st').toggle("slow","linear");
                $('section .questions .question-right-6th .border .body.1st').toggle("slow","linear");
                $('section .questions .question-right-6th .border .minus.1st').toggle("slow","linear");
            });

                    //FOR Second PARA
            $('section .questions .question-right-6th .border .plus.2nd').click( function(){
                $('section .questions .question-right-6th .border .minus.2nd').toggle("slow","linear");
                $('section .questions .question-right-6th .border .body.2nd').toggle("slow","linear");
                $('section .questions .question-right-6th .border .plus.2nd').toggle("slow","linear");
            });

            $('section .questions .question-right-6th .border .minus.2nd').click( function(){
                $('section .questions .question-right-6th .border .plus.2nd').toggle("slow","linear");
                $('section .questions .question-right-6th .border .body.2nd').toggle("slow","linear");
                $('section .questions .question-right-6th .border .minus.2nd').toggle("slow","linear");
            });

                    //FOR THIRD PARA
            $('section .questions .question-right-6th .border .plus.3rd').click( function(){
                $('section .questions .question-right-6th .border .minus.3rd').toggle("slow","linear");
                $('section .questions .question-right-6th .border .body.3rd').toggle("slow","linear");
                $('section .questions .question-right-6th .border .plus.3rd').toggle("slow","linear");
            });

            $('section .questions .question-right-6th .border .minus.3rd').click( function(){
                $('section .questions .question-right-6th .border .plus.3rd').toggle("slow","linear");
                $('section .questions .question-right-6th .border .body.3rd').toggle("slow","linear");
                $('section .questions .question-right-6th .border .minus.3rd').toggle("slow","linear");
            });

                    //FOR FOURTH PARA
            $('section .questions .question-right-6th .border .plus.4rth').click( function(){
                $('section .questions .question-right-6th .border .minus.4rth').toggle("slow","linear");
                $('section .questions .question-right-6th .border .body.4rth').toggle("slow","linear");
                $('section .questions .question-right-6th .border .plus.4rth').toggle("slow","linear");
            });

            $('section .questions .question-right-6th .border .minus.4rth').click( function(){
                $('section .questions .question-right-6th .border .plus.4rth').toggle("slow","linear");
                $('section .questions .question-right-6th .border .body.4rth').toggle("slow","linear");
                $('section .questions .question-right-6th .border .minus.4rth').toggle("slow","linear");
            });

                    //FOR FIFTH PARA
            $('section .questions .question-right-6th .border .plus.5th').click( function(){
                $('section .questions .question-right-6th .border .minus.5th').toggle("slow","linear");
                $('section .questions .question-right-6th .border .body.5th').toggle("slow","linear");
                $('section .questions .question-right-6th .border .plus.5th').toggle("slow","linear");
            });

            $('section .questions .question-right-6th .border .minus.5th').click( function(){
                $('section .questions .question-right-6th .border .plus.5th').toggle("slow","linear");
                $('section .questions .question-right-6th .border .body.5th').toggle("slow","linear");
                $('section .questions .question-right-6th .border .minus.5th').toggle("slow","linear");
            });

                    //FOR SIX PARA
            $('section .questions .question-right-6th .border .plus.6th').click( function(){
                $('section .questions .question-right-6th .border .minus.6th').toggle("slow","linear");
                $('section .questions .question-right-6th .border .body.6th').toggle("slow","linear");
                $('section .questions .question-right-6th .border .plus.6th').toggle("slow","linear");
            });

            $('section .questions .question-right-6th .border .minus.6th').click( function(){
                $('section .questions .question-right-6th .border .plus.6th').toggle("slow","linear");
                $('section .questions .question-right-6th .border .body.6th').toggle("slow","linear");
                $('section .questions .question-right-6th .border .minus.6th').toggle("slow","linear");
            });

                                //FOR SEVEN PARA
            $('section .questions .question-right-6th .border .plus.7th').click( function(){
                $('section .questions .question-right-6th .border .minus.7th').toggle("slow","linear");
                $('section .questions .question-right-6th .border .body.7th').toggle("slow","linear");
                $('section .questions .question-right-6th .border .plus.7th').toggle("slow","linear");
            });

            $('section .questions .question-right-6th .border .minus.7th').click( function(){
                $('section .questions .question-right-6th .border .plus.7th').toggle("slow","linear");
                $('section .questions .question-right-6th .border .body.7th').toggle("slow","linear");
                $('section .questions .question-right-6th .border .minus.7th').toggle("slow","linear");
            });

                                //FOR Eight PARA
            $('section .questions .question-right-6th .border .plus.8th').click( function(){
                $('section .questions .question-right-6th .border .minus.8th').toggle("slow","linear");
                $('section .questions .question-right-6th .border .body.8th').toggle("slow","linear");
                $('section .questions .question-right-6th .border .plus.8th').toggle("slow","linear");
            });

            $('section .questions .question-right-6th .border .minus.8th').click( function(){
                $('section .questions .question-right-6th .border .plus.8th').toggle("slow","linear");
                $('section .questions .question-right-6th .border .body.8th').toggle("slow","linear");
                $('section .questions .question-right-6th .border .minus.8th').toggle("slow","linear");
            });

});