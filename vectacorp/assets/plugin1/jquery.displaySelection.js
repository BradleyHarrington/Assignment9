(function($){
    $.fn.displaySelection = function() {
        return this.each(function() {
            alert("Selection text is: '" + $(this).text() + "'");
        });
    }
})(jQuery);