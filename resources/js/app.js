/**
 *  Main application javascript file
 *  Theme Name: Decraene Technics by digital astronaut
 *  Theme URI: https://decraenetechnics.be/
 *  Author: Tim Camerlinckx / digital astronaut
 *  Author URI: https://digitalastronaut.be/
 *  Version: 1.0.0
 */

$(document).ready(function () {

    App.init();

});

var App = {

    /**
     * Init
     * @descr Initializes all JavaScript functionality for the application
     */

    init: function () {
        
        // Navigation utils
        $(window).scroll( this.scrolled );
        
    },

    scrolled: function () {
        var currentScrollPosition = $(window).scrollTop();
        if (currentScrollPosition>50) $('nav#nav-main').addClass('scrolling');
        else $('nav#nav-main').removeClass('scrolling');
    },

};
