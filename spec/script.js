(function ($) {
    var refreshButtonHandler = function () {
        var mugl = $(".js-multigraph-tester-textarea").val();
        var div  = $(".js-multigraph-tester-graph")[0];
        var width = $("div.js-multigraph-tester-option input[name='width']").val();
        var height = $("div.js-multigraph-tester-option input[name='height']").val();
        var driver = $("div.js-multigraph-tester-option select option").filter(":selected").val();

        var messageHandler = {
            "error" : function (e) {throw e;},
            "warning" : function (e) {throw e;}
        };

        var options = {
            "muglString" : mugl,
            "div" : div,
            "driver" : driver
        }

        $(div).css("width", width + "px")
            .css("height", height + "px")
            .css("borderWidth", "0px")
            .empty();
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


