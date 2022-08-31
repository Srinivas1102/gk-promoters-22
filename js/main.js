;(function () {
	
	'use strict';

	// $(document).ready(function() {
	//     document.onkeydown = function(e){
	//         if(event.keyCode==123) {
	//             return false;
	//         }
	//         else if (e.ctrlKey &&
	//             (e.keyCode === 67 ||
	//                 e.keyCode === 86 ||
	//                 e.keyCode === 85 ||
	//                 e.keyCode === 117)) {
	//             return false;
	//         } else {
	//             return true;
	//         }
	//     };
        
	//     //Disable cut copy paste
	//     $('body').bind('cut copy paste', function (e) {
	//         return false;
	//     });
	   
	//     //Disable mouse right click
	//     $("body").on("contextmenu",function(e){
	//         return false;
	//     });
	// });

    $(document).ready(function() {
        window.oncontextmenu = function () {
            return false;
        }

        $(document).keydown(function (event) {
            if (event.keyCode == 123) {
                return false;
            }
            else if ((event.ctrlKey && event.shiftKey && event.keyCode == 73) || (event.ctrlKey && event.shiftKey && event.keyCode == 74)) {
                return false;
            }
        });

        $(document).keydown(function(event) {
            var pressedKey = String.fromCharCode(event.keyCode).toLowerCase();

            if (event.ctrlKey && (pressedKey == "c" || pressedKey == "u")) {
                //disable key press porcessing
                return false;
            }
        });
    });

    document
    .getElementById("myForm")
    .addEventListener("submit", function(event) {
    
        event.preventDefault();
        console.log('submit')
        const serviceID = "service_9rntsc2";
        const templateID = "template_prgmijj";
        let shown = true
    
        // send the email here
        emailjs.sendForm(serviceID, templateID, this).then(
            (response) => {
               myForm.reset();
                Swal.fire({
    icon: 'success',
    title: 'Message Sent Successfully'
    })
    
            },
            (error) => {
      
                Swal.fire({
                    
    icon: 'error',
    title: 'Ooops, something went wrong',
    text: error.text,
    })
            }
        );
    });
    
    (function() {
        emailjs.init("user_0kgEk9S63fdQtimcYVscY");
    })();
    
    $('.header-login a').click(function(e) {
        e.stopPropagation();
        $(this).toggleClass('active');
        $('.header-loginbox').fadeToggle();
    });

    $('.header-loginbox').click(function(e) {
        e.stopPropagation();
    });

    $('body,html').click(function(e) {
        $('.header-loginbox').fadeOut();
    });

    $('#top-login').click(function(){
        var custType = $('#user-type').val();
        if(custType!='')
        {
            window.open('http://'+custType, "_blank");
            return false;
        }
        return true;
    });

	
	$(function(){
		var $window = $(window);
		$window.on('scroll', function() {
		    var scroll = $window.scrollTop();
		    if (scroll < 100) {
		        $("header").removeClass("stick");
		    }else{
		        $("header").addClass("stick");
		    }
		});
	});



	$(function(){
		jQuery('.js-gotop').click(function () {
			jQuery('body,html').stop(false, false).animate({
				scrollTop: 0
			}, 1000);
			return false;
		});

		$(window).scroll(function(){

			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}

		});
	});


    $("#submit-rcb").click(function() {
        var proceed = true;
        //simple validation at client's end
        //loop through each field and we simply change border color to red for invalid fields       
        $("#rcb-form input[required=true]").each(function(){
            $(this).css('border-color',''); 
            if(!$.trim($(this).val())){ //if this field is empty 
                $(this).css('border-color','red'); //change border color to red   
                proceed = false; //set do not proceed flag
            }
            //check invalid email
            var email_reg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/; 
            if($(this).attr("type")=="email" && !email_reg.test($.trim($(this).val()))){
                $(this).css('border-color','red'); //change border color to red   
                proceed = false; //set do not proceed flag
            }   
        });

        var phoneno = /^\d{10}$/;
	    if($('input[name=rcb_mobile]').val().match(phoneno))
	    {
	        $("#rcb-form input[required=true]").each(function(){
                $(this).css('border-color',''); 
                if(!$.trim($(this).val())){ //if this field is empty 
                    $(this).css('border-color','red'); //change border color to red   
                    proceed = false; //set do not proceed flag
                }
                //check invalid email
                var email_reg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/; 
                if($(this).attr("type")=="email" && !email_reg.test($.trim($(this).val()))){
                    $(this).css('border-color','red'); //change border color to red   
                    proceed = false; //set do not proceed flag
                }
            });
	    }
	    else
	    {
	      	$('#rcb_mobile').css('border-color','red');
	      	proceed = false;
	    }
	    
       
        if(proceed) //everything looks good! proceed...
        {
        	$('#progress_div').css('display', 'block');
            for (var i = 1; i <= 100; i++) {
                $("#bar1").animate({width:i+"%"},30);
            }

            //data to be sent to server         
            var m_data = new FormData();    
            m_data.append('name', $('input[name=rcb_name]').val());
            m_data.append('mobile', $('input[name=rcb_mobile]').val());
            m_data.append('email', $('input[name=rcb_email]').val());
            m_data.append('formtype', $('input[name=form1]').val());
             
            //instead of $.post() we are using $.ajax()
            //that's because $.ajax() has more options and flexibly.               
        }
    });
    
    //reset previously set border colors and hide all message on .keyup()
    $("#rcb-form input[required=true]").keyup(function() { 
        $(this).css('border-color',''); 
        $("#rcb-result").slideUp();
    });



    $("#submit-cform").click(function() {
        var proceed = true;
        //simple validation at client's end
        //loop through each field and we simply change border color to red for invalid fields       
        $("#career-form input[required=true], #career-form select[required=true]").each(function(){
            $(this).css('border-color',''); 
            if(!$.trim($(this).val())){ //if this field is empty
                $(this).css('border-color','red'); //change border color to red
                proceed = false; //set do not proceed flag
            }
            //check invalid email
            var email_reg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/; 
            if($(this).attr("type")=="email" && !email_reg.test($.trim($(this).val()))){
                $(this).css('border-color','red'); //change border color to red   
                proceed = false; //set do not proceed flag
            }
        });
        
       
        if(proceed) //everything looks good! proceed...
        {
            $('#progress_div').css('display', 'block');
            for (var i = 1; i <= 100; i++) {
                $("#bar1").animate({width:i+"%"},30);
            }

            //data to be sent to server
            var m_data = new FormData();
            m_data.append( 'name', $('input[name=cname]').val());
            m_data.append( 'mobile', $('input[name=cmobile]').val());
            m_data.append( 'email', $('input[name=cemail]').val());
            m_data.append( 'qualification', $('input[name=qualification]').val());
            m_data.append( 'position', $('select[name=position]').val());
            m_data.append( 'experience', $('select[name=experience]').val());
            m_data.append( 'salary', $('input[name=last_salary]').val());
            m_data.append( 'file_attach', $('input[name=resume]')[0].files[0]);
            m_data.append( 'file_attach2', $('input[name=photo]')[0].files[0]);
             
            //instead of $.post() we are using $.ajax()
            //that's because $.ajax() has more options and flexibly.              
        }
    });

    //reset previously set border colors and hide all message on .keyup()
    $("#career-form input[required=true], #career-form select[required=true]").keyup(function() { 
        $(this).css('border-color','');
        $('#career-error').html('');
    });



    $("#submit-jvform").click(function() {
        var proceed = true;
        //simple validation at client's end
        //loop through each field and we simply change border color to red for invalid fields       
        $("#jv-form input[required=true], #jv-form textarea[required=true], #jv-form select[required=true]").each(function(){
            $(this).css('border-color',''); 
            if(!$.trim($(this).val())){ //if this field is empty 
                $(this).css('border-color','red'); //change border color to red   
                proceed = false; //set do not proceed flag
            }
            //check invalid email
            var email_reg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/; 
            if($(this).attr("type")=="email" && !email_reg.test($.trim($(this).val()))){
                $(this).css('border-color','red'); //change border color to red   
                proceed = false; //set do not proceed flag
            }   
        });

        var phoneno = /^\d{10}$/;
        if($('input[name=phone]').val().match(phoneno))
        {
            $("#jv-form input[required=true], #jv-form textarea[required=true], #jv-form select[required=true]").each(function(){
                $(this).css('border-color',''); 
                if(!$.trim($(this).val())){ //if this field is empty 
                    $(this).css('border-color','red'); //change border color to red   
                    proceed = false; //set do not proceed flag
                }
                //check invalid email
                var email_reg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/; 
                if($(this).attr("type")=="email" && !email_reg.test($.trim($(this).val()))){
                    $(this).css('border-color','red'); //change border color to red   
                    proceed = false; //set do not proceed flag
                }
            });
        }
        else
        {
            $('#phone').css('border-color','red');
            proceed = false;
        }
        
       
        if(proceed) //everything looks good! proceed...
        {
            $('#progress_div').css('display', 'block');
            for (var i = 1; i <= 100; i++) {
                $("#bar1").animate({width:i+"%"},30);
            }

           //data to be sent to server         
            var m_data = new FormData();    
            m_data.append('oname', $('input[name=oname]').val());
            m_data.append('rname', $('input[name=rname]').val());
            m_data.append('email', $('input[name=email]').val());
            m_data.append('phone', $('input[name=phone]').val());
            m_data.append('address', $('textarea[name=address]').val());
            m_data.append('location', $('input[name=location]').val());
            m_data.append('size', $('input[name=size]').val());
            m_data.append('unit', $('select[name=unit]').val());
            m_data.append('frontage', $('input[name=frontage]').val());
            m_data.append('comments', $('textarea[name=comments]').val());
             
            //instead of $.post() we are using $.ajax()
            //that's because $.ajax() has more options and flexibly.             
        }
    });
    
    //reset previously set border colors and hide all message on .keyup()
    $("#jv-form input[required=true], #jv-form textarea[required=true], #jv-form select[required=true]").keyup(function() { 
        $(this).css('border-color',''); 
    });



	$(function(){
		$('#banner .flexslider').flexslider({
			animation: "fade",
			slideshowSpeed: 5000,
			directionNav: true,
			start: function(){
				setTimeout(function(){
					$('.slider-text').removeClass('animated fadeInUp');
					$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
				}, 500);
			},
			before: function(){
				setTimeout(function(){
					$('.slider-text').removeClass('animated fadeInUp');
					$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
				}, 500);
			}

	  	});
	});



	$(function(){
		$('#counter').waypoint( function( direction ) {
			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function(){
					var $this = $(this),
						num = $this.data('number');
						console.log(num);
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 5000
					);
				});				
			}
		} , { offset: '95%' } );
	});



	$('.owl-carousel').owlCarousel({
	  	loop: true,
	  	margin: 15,
	  	nav: true,
	  	navText: [
	    	"<i class='fa fa-angle-left'></i>",
	    	"<i class='fa fa-angle-right'></i>"
	  	],
	  	autoplay: true,
	  	autoplayHoverPause: true,
	  	responsive: {
	    	0: {
	      		items: 1
	    	},
	    	600: {
	      		items: 1
	    	},
	    	1000: {
	      		items: 1
	    	}
	  	}
	});


    /* ===================================
           Cube Portfolio Initializing
    ======================================*/
    $('#js-grid-mosaic').cubeportfolio({
        filters: '#js-filters-mosaic',
        layoutMode: 'grid',
        sortByDimension: true,
        mediaQueries: [{
            width: 1500,
            cols: 2,
        }, {
            width: 1100,
            cols: 2,
        }, {
            width: 768,
            cols: 1,
        }, {
            width: 480,
            cols: 1,
            options: {
                gapHorizontal: 60
            }
        }],
        defaultFilter: '*',
        animationType: 'fadeOut',
        gapHorizontal: 50,
        gapVertical: 50,
        gridAdjustment: 'responsive',
        caption: 'zoom',

        // lightbox
        lightboxDelegate: '.cbp-lightbox',
        lightboxGallery: true,
        lightboxTitleSrc: 'data-title',
        lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',

        plugins: {
            loadMore: {
                element: "#js-loadMore-lightbox-gallery",
                action: "click",
                loadItems: 5,
            }
        }

    })
        .on('initComplete.cbp', function () {
            // your functionality
            var $this = $(this);
            if ($(".cbp-filter-item-active").attr("data-filter") === "*") {
                $("#js-loadMore-lightbox-gallery").addClass("active");
            } else {
                $("#js-loadMore-lightbox-gallery").removeClass("active");
            }
            $this.find(".cbp-wrapper").find(".cbp-item:not(.cbp-item-off)").each(function (index) {
                $(this).removeClass("even");

                console.log();
                var val = index + 1;
                if ($(this).css('left') !== "0px") {
                    $(this).addClass("even");

                }
            });
        })
        .on('onAfterLoadMore.cbp', function () {
            // your functionality
            var $this = $(this);
            $("#js-loadMore-lightbox-gallery a").addClass("d-none");
            $("#js-loadMore-lightbox-gallery").addClass("active-outer");
            $this.find(".cbp-wrapper").find(".cbp-item:not(.cbp-item-off)").each(function (index) {
                $(this).removeClass("even");
                console.log();
                var val = index + 1;
                if ($(this).css('left') !== "0px") {
                    $(this).addClass("even");
                }
            });
        })
        .on('filterComplete.cbp', function () {
            // your functionality
            var $this = $(this);
            if ($(".cbp-filter-item-active").attr("data-filter") === "*") {
                $("#js-loadMore-lightbox-gallery").addClass("active");
                $("#js-loadMore-lightbox-gallery").removeClass("d-none");
            } else {
                $("#js-loadMore-lightbox-gallery").removeClass("active");
                $("#js-loadMore-lightbox-gallery").addClass("d-none");
            }
            $this.find(".cbp-wrapper").find(".cbp-item:not(.cbp-item-off)").each(function (index) {
                $(this).removeClass("even");
                var val = index + 1;
                if ($(this).css('left') !== "0px") {
                    $(this).addClass("even");
                }
            });
        });


}());
