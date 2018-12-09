;(function($) {
    'use strict';

    /*===================================================================================*/
    /*  Set Height of Products li
    /*===================================================================================*/
    function columnConform() {

        $( '.product-outer' ).each( function() {
            var $this = $(this);
            if ( 0 != $this.height() ){
                $this.height( $this.height() );
            }
        });

    }

    $( window ).on( 'resize', function() {
        columnConform();
    });

})(jQuery);
