var $j = jQuery.noConflict();

function isTooLightYIQ(hexcolor){
	var r = parseInt(hexcolor.substr(0,2),16);
	var g = parseInt(hexcolor.substr(2,2),16);
	var b = parseInt(hexcolor.substr(4,2),16);
	var yiq = ((r*299)+(g*587)+(b*114))/1000;
	return yiq >= 128;
}

$j.fn.getIndex = function(){
	var $jp=$j(this).parent().children();
    return $jp.index(this);
}

$j.fn.setNav = function(){
	var calScreenWidth = $j(window).width();

	if(calScreenWidth >=768)
	{
		$j('#main_menu li ul').css({display: 'none'});
	
		$j('#main_menu li').each(function()
		{	
			var $jsublist = $j(this).find('ul:first');
			
			$j(this).hover(function()
			{	
				position = $j(this).position();
				
				if($j(this).parents().attr('class') == 'sub-menu')
				{	
					$jsublist.css({top: position.top-2+'px'});
					$jsublist.stop().css({height:'auto', display:'none'}).slideDown(200);
				}
				else
				{
					$jsublist.stop().css({overflow: 'visible', height:'auto', display:'none'}).slideDown(400);
					
					if(BrowserDetect.browser == 'Explorer' && BrowserDetect.version < 8)
	 				{
	 					hackMargin = -$j(this).width()-2;
						$jsublist.css({marginLeft: hackMargin+'px'});
					}
				}
			},
			function()
			{	
				$jsublist.stop().css({height:'auto', display:'none'}).slideUp(200);	
			});
	
		});
		
		$j('#menu_wrapper .nav ul li ul').css({display: 'none'});
	
		$j('#menu_wrapper .nav ul li').each(function()
		{
			
			var $jsublist = $j(this).find('ul:first');
			
			$j(this).hover(function()
			{	
				if(BrowserDetect.browser == 'Explorer' && BrowserDetect.version < 8)
	 			{
	 				$jsublist.css({top: position.top-5+'px'});		
	 			}
	 			else
	 			{
	 				$jsublist.css({top: position.top-5+'px'});
	 			}
			
				$jsublist.stop().css({height:'auto', display:'none'}).slideDown(200);	
			},
			function()
			{	
				$jsublist.stop().css({height:'auto', display:'none'}).slideUp(200);	
			});		
			
		});
	}
}

$j(document).ready(function(){ 

	$j(document).setNav();
	
	$j('#main_menu li ul').hover(function()
	{
		var $jmenuparent = $j(this).parent('li').find('a:first');
		$jmenuparent.stop().addClass('hover');
	},
	function()
	{	
		var $jmenuparent = $j(this).parent('li').find('a:first');
		$jmenuparent.stop().removeClass('hover');
	});
	
	var lightboxPadding = parseInt($j('#pp_lightbox_padding').val());
	var lightboxOpacity = $j('#pp_lightbox_opacity').val();
	var lightboxOpenEffect = $j('#pp_lightbox_open_effect').val();
	var lightboxOpenSpeed = parseInt($j('#pp_lightbox_open_speed').val());
	var lightboxAutoPlay = $j('#pp_lightbox_autoplay').val();
	var lightboxPlaySpeed = $j('#pp_lightbox_play_speed').val();
	
	$j('.img_frame').fancybox({
	    openEffect	: lightboxOpenEffect,
    	closeEffect	: lightboxOpenEffect,
    	openSpeed : lightboxOpenSpeed,
    	closeSpeed : lightboxOpenSpeed,
    	padding : lightboxPadding,

    	helpers : {
    		title : {
    			type : 'float'
    		},
    		overlay : {
	            css : {
	                'background-color' : 'rgba(0, 0, 0, '+lightboxOpacity+')'
	            }
	        }
    	}
	});
	
	$j('.pp_gallery a').fancybox({
	    openEffect	: lightboxOpenEffect,
    	closeEffect	: lightboxOpenEffect,
    	padding : lightboxPadding,

    	helpers : {
    		title : {
    			type : 'float'
    		},
    		overlay : {
	            css : {
	                'background-color' : 'rgba(0, 0, 0, '+lightboxOpacity+')'
	            }
	        }
    	}
	});
	
	$j('.flickr li a').fancybox({
	    openEffect	: lightboxOpenEffect,
    	closeEffect	: lightboxOpenEffect,
    	padding : lightboxPadding,

    	helpers : {
    		title : {
    			type : 'float'
    		},
    		overlay : {
	            css : {
	                'background-color' : 'rgba(0, 0, 0, '+lightboxOpacity+')'
	            }
	        }
    	}
	});
	
	$j('.lightbox').fancybox({
	    openEffect	: lightboxOpenEffect,
    	closeEffect	: lightboxOpenEffect,
    	padding : lightboxPadding,

    	helpers : {
    		title : {
    			type : 'float'
    		},
    		overlay : {
	            css : {
	                'background-color' : 'rgba(0, 0, 0, '+lightboxOpacity+')'
	            }
	        }
    	}
	});
	
	$j('.lightbox_youtube').fancybox({
		scrolling: 'no',
	    openEffect	: lightboxOpenEffect,
    	closeEffect	: lightboxOpenEffect,
    	padding : lightboxPadding,

    	helpers : {
    		title : {
    			type : 'float'
    		},
    		overlay : {
	            css : {
	                'background-color' : 'rgba(0, 0, 0, '+lightboxOpacity+')'
	            }
	        }
    	}
	});
	
	$j('.lightbox_vimeo').fancybox({
		scrolling: 'no',
	    openEffect	: lightboxOpenEffect,
    	closeEffect	: lightboxOpenEffect,
    	padding : lightboxPadding,

    	helpers : {
    		title : {
    			type : 'float'
    		},
    		overlay : {
	            css : {
	                'background-color' : 'rgba(0, 0, 0, '+lightboxOpacity+')'
	            }
	        }
    	}
	});
	
	$j('.lightbox_iframe').fancybox({
		type : 'iframe',
	    openEffect	: lightboxOpenEffect,
    	closeEffect	: lightboxOpenEffect,
    	padding : lightboxPadding,

    	helpers : {
    		title : {
    			type : 'float'
    		},
    		overlay : {
	            css : {
	                'background-color' : 'rgba(0, 0, 0, '+lightboxOpacity+')'
	            }
	        }
    	}
	});
	
	$j('a[rel=gallery]').fancybox({
		openEffect	: lightboxOpenEffect,
    	closeEffect	: lightboxOpenEffect,
    	openSpeed : lightboxOpenSpeed,
    	closeSpeed : lightboxOpenSpeed,
    	padding : lightboxPadding,
    	autoPlay : lightboxAutoPlay,
    	playSpeed : lightboxPlaySpeed,

    	helpers : {
    		title : {
    			type : 'float'
    		},
    		overlay : {
	            css : {
	                'background-color' : 'rgba(0, 0, 0, '+lightboxOpacity+')'
	            }
	        },
		        thumbs	: {
				width	: 60,
				height	: 60
			}
    	},
	});
	
	if(BrowserDetect.browser == 'Explorer' && BrowserDetect.version < 8)
	{
		var zIndexNumber = 1000;
		$j('div').each(function() {
			$j(this).css('zIndex', zIndexNumber);
			zIndexNumber -= 10;
		});

		$j('#thumbNav').css('zIndex', 1000);
		$j('#thumbLeftNav').css('zIndex', 1000);
		$j('#thumbRightNav').css('zIndex', 1000);
		$j('#fancybox-wrap').css('zIndex', 1001);
		$j('#fancybox-overlay').css('zIndex', 1000);
	}
	
	$j(".pp_accordion_close").accordion({ active: 1, collapsible: true, clearStyle: true });
	
	$j(".pp_accordion").accordion({ active: 0, collapsible: true, clearStyle: true });
	
	$j(".tabs").tabs();
	
	var footerLi = 0;
	$j('#footer .sidebar_widget li.widget').each(function()
	{
		footerLi++;
		
		if(footerLi%$j('#pp_footer_style').val() == 0)
		{ 
			$j(this).addClass('last');
		}
	});
		
	$j.validator.setDefaults({
		submitHandler: function() { 
		    var actionUrl = $j('#widget_contact_form').attr('action');
		    
		    $j.ajax({
  		    	type: 'GET',
  		    	url: actionUrl,
  		    	data: $j('#widget_contact_form').serialize(),
  		    	success: function(msg){
  		    		$j('#widget_contact_form').hide();
  		    		$j('#reponse_msg').html(msg);
  		    	}
		    });
		    
		    return false;
		}
	});
		    
		
	$j('#widget_contact_form').validate({
		rules: {
		    your_name: "required",
		    email: {
		    	required: true,
		    	email: true
		    },
		    message: "required"
		},
		messages: {
		    your_name: "Please enter your name",
		    email: "Please enter a valid email address",
		    agree: "Please enter some message"
		}
	});
    
    $j('pre').each(function()
	{
		preContent = $j(this).html();
	});
 	
 	$j(".reflection").reflect();
	
	$j('.post_img').hover(function(){ 
		$j(this).animate({ opacity: 0.7 }, 600);
	},
	function()
	{	
		$j(this).animate({ opacity: 1 }, 600);
	});
	
	$j('.portfolio_desc').hover(function(){ 
		if(!$j('#'+$j(this).attr('data-rel')).hasClass('hover'))
		{
			$j('#'+$j(this).attr('data-rel')).trigger('mouseover');
		}
	},
	function()
	{	
		$j('#'+$j(this).attr('data-rel')).trigger('mouseout');
	});
	
	$j('.portfolio200_shadow').hover(function(){ 
		if(!$j('#'+$j(this).attr('data-rel')).hasClass('hover'))
		{
			$j(this).addClass('hover');
			$j(this).find('.portfolio200_overlay').stop(true, false, true).fadeIn();
			$j(this).find('.portfolio200_overlay .overlay_icon_circle').stop(true, false, true).animate({ left: '40%' }, 300);
			$j('#'+$j(this).attr('data-rel')).addClass('hover');
		}
	},
	function()
	{	
		$j(this).find('.portfolio200_overlay').stop(true, false, true).fadeOut();
		$j(this).find('.portfolio200_overlay .overlay_icon_circle').stop(true, false, true).animate({ left: '140%' }, 100, function() {
			$j(this).css('left', '-40%');
    	});
    	$j(this).removeClass('hover');
    	$j('#'+$j(this).attr('data-rel')).removeClass('hover');
	});
	
	$j('.portfolio460_shadow').hover(function(){ 
		if(!$j('#'+$j(this).attr('data-rel')).hasClass('hover'))
		{
			$j(this).addClass('hover');
			$j(this).find('.portfolio460_overlay').stop(true, false, true).fadeIn();
			$j(this).find('.portfolio460_overlay .overlay_icon_circle').stop(true, false, true).animate({ left: '42%' }, 300);
			$j('#'+$j(this).attr('data-rel')).addClass('hover');
		}
	},
	function()
	{	
		$j(this).find('.portfolio460_overlay').stop(true, false, true).fadeOut();
		$j(this).find('.portfolio460_overlay .overlay_icon_circle').stop(true, false, true).animate({ left: '142%' }, 100, function() {
			$j(this).css('left', '-42%');
    	});
    	$j(this).removeClass('hover');
    	$j('#'+$j(this).attr('data-rel')).removeClass('hover');
	});
	
	$j('.portfolio305_shadow').hover(function(){ 
		if(!$j('#'+$j(this).attr('data-rel')).hasClass('hover'))
		{
			$j(this).addClass('hover');
			$j(this).find('.portfolio305_overlay').stop(true, false, true).fadeIn();
			$j(this).find('.portfolio305_overlay .overlay_icon_circle').stop(true, false, true).animate({ left: '41%' }, 300);
			$j('#'+$j(this).attr('data-rel')).addClass('hover');
		}
	},
	function()
	{	
		$j(this).find('.portfolio305_overlay').stop(true, true, true).fadeOut();
		$j(this).find('.portfolio305_overlay .overlay_icon_circle').stop(true, false, true).animate({ left: '141%' }, 100, function() {
			$j(this).css('left', '-41%');
    	});
    	$j(this).removeClass('hover');
    	$j('#'+$j(this).attr('data-rel')).removeClass('hover');
	});
	
	$j('.portfolio195_shadow').hover(function(){ 
		if(!$j('#'+$j(this).attr('data-rel')).hasClass('hover'))
		{
			$j(this).addClass('hover');
			$j(this).find('.portfolio195_overlay').stop(true, false, true).fadeIn();
			$j(this).find('.portfolio195_overlay .overlay_icon_circle').stop(true, false, true).animate({ left: '39%' }, 300);
			$j('#'+$j(this).attr('data-rel')).addClass('hover');
		}
	},
	function()
	{	
		$j(this).find('.portfolio195_overlay').stop(true, false, true).fadeOut();
		$j(this).find('.portfolio195_overlay .overlay_icon_circle').stop(true, false, true).animate({ left: '139%' }, 100, function() {
			$j(this).css('left', '-39%');
    	});
    	$j(this).removeClass('hover');
    	$j('#'+$j(this).attr('data-rel')).removeClass('hover');
	});
	
	$j('.post_img_wrapper').hover(function(){ 
		$j(this).find('.post_img_overlay').fadeIn();
		$j(this).find('.post_img_overlay .overlay_icon_circle').animate({ left: '46%' }, 300);
	},
	function()
	{	
		$j(this).find('.post_img_overlay').fadeOut();
		$j(this).find('.post_img_overlay .overlay_icon_circle').animate({ left: '146%' }, 100, function() {
			$j(this).css('left', '-46%');
    	});
	});
	
	$j('.blog_thumb').hover(function(){ 
		$j(this).find('.blog_thumb_overlay').fadeIn();
		$j(this).find('.blog_thumb_overlay .overlay_icon_circle').animate({ left: '38%' }, 300);
	},
	function()
	{	
		$j(this).find('.blog_thumb_overlay').fadeOut();
		$j(this).find('.blog_thumb_overlay .overlay_icon_circle').animate({ left: '138%' }, 100, function() {
			$j(this).css('left', '-38%');
    	});
	});
	
	$j('.post_full_img_wrapper').hover(function(){ 
		$j(this).find('.post_full_img_overlay').fadeIn('slow');
		$j(this).find('.post_full_img_overlay .overlay_icon_circle').animate({ left: '48%' }, 300);
	},
	function()
	{	
		$j(this).find('.post_full_img_overlay').fadeOut('slow');
		$j(this).find('.post_full_img_overlay .overlay_icon_circle').animate({ left: '148%' }, 300, function() {
			$j(this).css('left', '-48%');
    	});
	});
	
	$j('.post_half_img_wrapper').hover(function(){ 
		$j(this).find('.post_half_img_overlay').fadeIn('slow');
		$j(this).find('.post_half_img_overlay .overlay_icon_circle').animate({ left: '44%' }, 300);
	},
	function()
	{	
		$j(this).find('.post_half_img_overlay').fadeOut('slow');
		$j(this).find('.post_half_img_overlay .overlay_icon_circle').animate({ left: '144%' }, 300, function() {
			$j(this).css('left', '-44%');
    	});
	});
	
	$j('.post_third_img_wrapper').hover(function(){ 
		$j(this).find('.post_third_img_overlay').fadeIn('slow');
		$j(this).find('.post_third_img_overlay .overlay_icon_circle').animate({ left: '41%' }, 300);
	},
	function()
	{	
		$j(this).find('.post_third_img_overlay').fadeOut('slow');
		$j(this).find('.post_third_img_overlay .overlay_icon_circle').animate({ left: '141%' }, 300, function() {
			$j(this).css('left', '-41%');
    	});
	});
	
	$j('.post_shadow_link').hover(function(){ 
		$j(this).find('.post_shadow_overlay').animate({ opacity: 0.7 }, 300);
	},
	function()
	{	
		$j(this).find('.post_shadow_overlay').animate({ opacity: 0 }, 300);
	});
	
	$j('#option_btn').click(
    	function() {
    		if($j('#option_wrapper').css('left') != '0px')
    		{
 				$j('#option_wrapper').animate({"left": "0px"}, { duration: 500 });
	 			$j(this).animate({"left": "240px"}, { duration: 500 });
	 		}
	 		else
	 		{
	 			$j('#option_wrapper').animate({"left": "-245px"}, { duration: 500 });
    			$j('#option_btn').animate({"left": "0px"}, { duration: 500 });
	 		}
    	}
    );
	
	$j('#mobile_menu').click(function(){ 
		if($j('#menu_border_wrapper').css('display')=='none')
		{
    		$j('#menu_border_wrapper').slideDown('slow');
    		$j('body,html').animate({scrollTop:0},800);
    	}
    	else
    	{
	    	$j('#menu_border_wrapper').slideUp('slow');
	    	$j('body,html').animate({scrollTop:0},800);
    	}
    });
	
	$j("#pp_font").change(function(){
	    $j("#pp_font_family").attr('value', $j("#pp_font option:selected").attr('data-family'));
	
	    var ppCufonFont = 'http://fonts.googleapis.com/css?family='+$j(this).attr('value');
	    $j('#google_fonts-css').attr('href', ppCufonFont);
	    
	    $j.ajax({
  			type: 'GET',
  			url: $j('#form_option').attr('action'),
  			data: 'pp_font='+$j("#pp_font option:selected").attr('value')+'&pp_font_family='+$j("#pp_font option:selected").attr('data-family'),
  			success: function(){
   				if(pp_pattern == '')
				{
					location.href = location.href;
				}
  			}
		});
	    
	    if($j("#pp_font option:selected").attr('data-family') != '')
	    {
	    	$j('h1, h2, h3, h4, h5, h6').css('font-family', '"'+$j("#pp_font option:selected").attr('data-family')+'"');
	    }
	    else
	    {
	    	$j('h1, h2, h3, h4, h5, h6').css('font-family', 'Helvetica Neue');
	    }
	});
	
	var windowWidth = $j(window).width();
	var $jcontainer = $j('#portfolio_filter_wrapper');
	var $jportfolioColumn = $j('#pp_portfolio_columns').attr('value');
	var columnValue = 0;
	
	if(windowWidth > 500)
	{
		columnValue = $jcontainer.width() / $jportfolioColumn;
	}
	else
	{
		columnValue = $jcontainer.width() / 2;
	}
	// initialize isotope
	$jcontainer.isotope({
		resizable: false,
		masonry: { columnWidth: columnValue }
	});
	
	$j(window).smartresize(function(){
		var windowWidth = $j(window).width();
	
		if(windowWidth > 480)
		{
			columnValue = $jcontainer.width() / $jportfolioColumn;
		}
		else
		{
			columnValue = $jcontainer.width() / 2;
		}
	
		$jcontainer.isotope({
	    	// update columnWidth to a percentage of container width
	    	masonry: { columnWidth: columnValue }
	    });
	});
	
	// filter items when filter link is clicked
	$j('#portfolio_filters li a').click(function(){
	  	var selector = $j(this).attr('data-filter');
	  	$jcontainer.isotope({ filter: selector });
	  	$j('#portfolio_filters li a').removeClass('active');
	  	$j(this).addClass('active');
	  	return false;
	});
	
	$j('#searchform input[type=text]').attr('title', 'To search type and hit enter');
	$j('input[title!=""]').hint();
	$j('textarea[title!=""]').hint();
	
	$j('.ajax_portfolio_link').click(
    	function() {
    		if($j('#pp_is_portfolio_open').attr('value')==0)
    		{
    			var targetDiv = $j(this).attr('data-rel');
    			
    			$j('#ajax_'+targetDiv).css({overflow: 'visible', height:'auto', display:'none'}).slideDown(600);
		
			    $j('html, body').animate({
				    scrollTop: $j('#ajax_'+targetDiv).offset().top-20
				}, 800);
				
				$j('#pp_is_portfolio_open').attr('value', 1);
    		}
    		else
    		{
	    		$j('.ajax_portfolio_wrapper').stop().slideUp(300);	
	    	
		    	var targetDiv = $j(this).attr('data-rel');
		    	
		    	setTimeout(function(){
				    $j('#ajax_'+targetDiv).css({overflow: 'visible', height:'auto', display:'none'}).slideDown(600);
		
			        $j('html, body').animate({
				        scrollTop: $j('#ajax_'+targetDiv).offset().top-20
				    }, 800);
				    
				    $j('#pp_is_portfolio_open').attr('value', 1);
				}, 1000);
			}
    	}
    );
    
    $j('.ajax_portfolio_direction').click(
    	function() {
    		$j('.ajax_portfolio_wrapper').stop().slideUp(600);	
    	
    		var targetDiv = $j(this).attr('data-rel');
    		
    		setTimeout(function(){
				$j('#ajax_'+targetDiv).css({overflow: 'visible', height:'auto', display:'none'}).slideDown(600);

	    		$j('html, body').animate({
				    scrollTop: $j('#ajax_'+targetDiv).offset().top-20
				}, 800);
				
				$j('#pp_is_portfolio_open').attr('value', 1);
			}, 1000);
    	}
    );
    
    $j('.ajax_close').click(
    	function() {
    		var targetDiv = $j(this).attr('data-rel');
    		$j('#ajax_'+targetDiv).stop().slideUp(600);
    		
    		$j('html, body').animate({
			    scrollTop: 0
			}, 800);
			
			$j('#pp_is_portfolio_open').attr('value', 0);
    	}
    );
    
    $j('video,audio').mediaelementplayer({
	    alwaysShowControls: true,
	    features: ['playpause','progress','current','duration','tracks','volume'],
	});
	
	$j('#pp_theme_layout').change(function(){ 
 		pp_theme_layout = $j(this).attr('value');
 		pp_stylesheet_directory = $j('#pp_stylesheet_directory').attr('value');
 	
 		$j.ajax({
  			type: 'GET',
  			url: $j('#form_option').attr('action'),
  			data: 'pp_theme_layout='+pp_theme_layout
		});
		
		if(pp_theme_layout == 'boxed')
		{
			$j('#boxed-css').attr('href', pp_stylesheet_directory+'/css/boxed.css');
		}
		else
		{
			$j('#boxed-css').attr('href', pp_stylesheet_directory+'/css/empty.css');
		}
 	});
 	
 	$j('.tipsy').tipsy({gravity: 's', fade: true});
 	$j('.tooltip').tipsy({gravity: 's', fade: true});
 	
 	$j(window).scroll(function() {
		if($j(this).scrollTop() != 0) {
			$j('#toTop').fadeIn();	
		} else {
			$j('#toTop').fadeOut();
		}
	});
 
	$j('#toTop').click(function() {
		$j('body,html').animate({scrollTop:0},800);
	});
	
	var calScreenWidth = $j(window).width();
	
	if(calScreenWidth <=768)
	{
		window.addEventListener("load",function() {
		    setTimeout(function() {
		        if (document.body.scrollTop > 1) {
		            // Do your testing here...
		        } else {
		            window.scrollTo(0, 1);
		        }
		    }, 0);
		});
	}

});