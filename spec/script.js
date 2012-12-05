(function ($) {
    var refreshButtonHandler = function () {
        var mugl = $(".js-multigraph-tester-textarea").val();
        var div  = $(".js-multigraph-tester-graph")[0];
        var messageHandler = {
            "error" : function (e) {throw e;},
            "warning" : function (e) {throw e;}
        };

        var options = {
            "muglString" : mugl,
            "div" : div,
            "driver" : "raphael"
        }

        $(div).empty();
        window.multigraph.create(options);
    };

    $.fn.jsMultigraphTester = function () {
        var button = $(this).find("input[type='button']");
        button.click(refreshButtonHandler);
    }

    $(document).ready(function () {
        $(".js-multigraph-tester").jsMultigraphTester();
    });
})(window.multigraph.jQuery);


