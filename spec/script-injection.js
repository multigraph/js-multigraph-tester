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

    var generateHTML = function () {
        var htmlStrings = [
            '<div class="js-multigraph-tester-mugl">',
            '<textarea class="js-multigraph-tester-textarea" spellcheck="false"></textarea>',
            '</div>',
            '<div class="js-multigraph-tester-display">',
            '<div class="js-multigraph-tester-graph"></div>',
            '<br/>',
            '<div class="js-multigraph-tester-options">',
            '<div class="js-multigraph-tester-option">',
            'Renderer',
            '<br/>',
            '<select>',
            '<option value="canvas">Canvas</option>',
            '<option value="raphael">Raphael</option>',
            '</select>',
            '</div>',
            '<div class="js-multigraph-tester-option">',
            'Width',
            '<br/>',
            '<input type="text" name="width" placeholder="800"/>',
            '</div>',
            '<div class="js-multigraph-tester-option">',
            'Height',
            '<br/>',
            '<input type="text" name="height" placeholder="500"/>',
            '</div>',
            '<div class="js-multigraph-tester-option">',
            '<br/>',
            '<input type="button" value="refresh"/>',
            '</div>',
            '</div>',
            '</div>'
        ];

        return htmlStrings.join('');
    };

    $.fn.jsMultigraphTester = function () {
        $(this).html(generateHTML());
        var button = $(this).find("input[type='button']");
        button.click({"parent" : this}, refreshButtonHandler);
    }

    $(document).ready(function () {
        $(".js-multigraph-tester").jsMultigraphTester();
    });

    
})(window.multigraph.jQuery);


