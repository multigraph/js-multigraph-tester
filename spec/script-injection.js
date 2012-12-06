(function ($) {
    var refreshButtonHandler = function (event) {
        var parent = event.data.parent;

        var mugl = $(parent).find(".js-multigraph-tester-textarea").val();
        var div  = $(parent).find(".js-multigraph-tester-graph")[0];
        var width = $(parent).find("div.js-multigraph-tester-option input[name='width']").val();
        var height = $(parent).find("div.js-multigraph-tester-option input[name='height']").val();
        var driver = $(parent).find("div.js-multigraph-tester-option select option").filter(":selected").val();

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
        button.click({"parent" : this}, refreshButtonHandler);
    }

    $(document).ready(function () {
        $(".js-multigraph-tester").jsMultigraphTester();
    });
})(window.multigraph.jQuery);


