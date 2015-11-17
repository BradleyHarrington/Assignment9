(function($){
    $.fn.highlightMenu = function(options) {
        var settings = $.extend({
            bgColor : "#000000",
            color : "#ffffff",
            hoverBgColor : "#cccccc",
            hoverColor : "#000000"
        }, options);
        
        return this.each(function() {
            var items = $("li a");
            
            items.css("font-family", "arial, helvetica, sans-serif")
                .css("font-weight", "bold")
                .css("text-decoration", "none")
                .css("background-color", settings.bgColor)
                .css("color", settings.color)
                .css("width", "125px")
                .css("display", "block")
                .css("margin-bottom", "15px")
                .css("padding", "5px");
            items.mouseover(function() {
                $(this).css("background-color", settings.hoverBgColor)
                    .css("color", settings.hoverColor);
            });
            items.mouseout(function() {
                $(this).css("background-color", settings.bgColor)
                    .css("color", settings.color);
            });
        });
    }
})(jQuery);