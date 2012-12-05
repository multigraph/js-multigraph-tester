(function ($) {
    var refreshButtonHandler = function () {
        var mugl = $(".js-multigraph-tester-textarea").val();
        var div  = $(".js-multigraph-tester-graph")[0];
        var messageHandler = {
            "error" : function (e) {throw e;},
            "warning" : function (e) {throw e;}
        };
        window.multigraph.parser.jquery.mixin.apply(window.multigraph, "parseXML");
        window.multigraph.graphics.canvas.mixin.apply(window.multigraph.core);
        window.multigraph.events.jquery.draggable.mixin.apply(window.multigraph, messageHandler.error);
        window.multigraph.events.jquery.mouse.mixin.apply(window.multigraph, messageHandler.error);
        window.multigraph.events.jquery.touch.mixin.apply(window.multigraph, messageHandler.error);
        window.multigraph.normalizer.mixin.apply(window.multigraph.core);

        var multigraph = window.multigraph.core.Multigraph.parseXML( window.multigraph.parser.jquery.stringToJQueryXMLObj(mugl), messageHandler);
        multigraph.normalize();
        multigraph.div(div);

        $(multigraph.div()).empty();

        window.multigraph.jQuery(div).css('cursor' , 'pointer');
        multigraph.init();
        multigraph.registerMouseEvents(multigraph.canvas());
        multigraph.registerTouchEvents(multigraph.canvas());
        multigraph.registerCommonDataCallback(function (event) {
            multigraph.redraw();
        });
    };

    $.fn.jsMultigraphTester = function () {
        console.log($(this).find("input[type='button']"))
        var button = $(this).find("input[type='button']");
        button.click(refreshButtonHandler);
    }

    $(document).ready(function () {
        $(".js-multigraph-tester").jsMultigraphTester();
    });
})(window.multigraph.jQuery);


