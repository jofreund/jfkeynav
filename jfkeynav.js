(function( $ ){
    
		var methods = {
    		init: function(options) {
 
			return this.each(function() {
				$(window).bind('keydown.jfkeynav',methods.keynav);
 
       			});
			},
     		destroy : function( ) {
				return this.each(function(){
         			$(window).unbind('.jfkeynav');
       			});
	     	},
	     	keynav	: function ( e ) {
						previousPosition = $(position).prevAll('.keynav').first();
						nextPosition = $(position).nextAll('.keynav').first();
						if (e.keyCode == 38) {
							e.preventDefault();
							//Up-Arrow
							if (previousPosition.length) {
								position = "#"+previousPosition.attr("id");
								methods.goToByScroll(position);
							}	
						}
						if (e.keyCode == 40) {
							e.preventDefault();
							//Down-Arrow
							if (nextPosition.length) {
								position = "#"+nextPosition.attr("id");
								methods.goToByScroll(position);
							}
						}
			},
			goToByScroll  : function( id ) {
	 				$('body').animate({scrollTop: $(id).offset().top},'2200');
			}

			
  		}

	
  	$.fn.jfkeynav = function(options) {
		position = options.position;

		var method = arguments[0];
 
		if(methods[method]) {
			method = methods[method];
 
			arguments = Array.prototype.slice.call(arguments, 1);
		} else if( typeof(method) == 'object' || !method ) {
			method = methods.init;
		} else {
			$.error( 'Method ' +  method + ' does not exist on jQuery.jf-keynav' );
			return this;
		}
 		return method.apply(this, arguments);
 
	};
	}	
)( jQuery );