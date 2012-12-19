(function ($) {
    var refreshButtonHandler = function (event) {
        var parent = event.data.parent;

        var mugl = $(parent).find("textarea").val();
        var div  = $(parent).find(".js-multigraph-tester-graph")[0];
        var width = $(parent).find("div.js-multigraph-tester-option input[name='width']").val();
        var height = $(parent).find("div.js-multigraph-tester-option input[name='height']").val();
        var driver = $(parent).find("div.js-multigraph-tester-option select option").filter(":selected").val();

        if (!width || isNaN(parseFloat(width)) || parseFloat(width) < 100) {
            width = 800;
        }
        if (!height || isNaN(parseFloat(height)) || parseFloat(height) < 100) {
            height = 500;
        }

        var options = {
            "muglString" : mugl,
            "div" : div,
            "driver" : driver
        };

        $(div).css("width", parseFloat(width) + "px")
            .css("height", parseFloat(height) + "px")
            .css("borderWidth", "0px")
            .empty();
        window.multigraph.create(options);
    };

    var testerHTML = (''
                      + '<div class="js-multigraph-tester">'
                      +   '<div class="js-multigraph-tester-left">'
                      +     '<div class="js-multigraph-tester-mugl">'
                      +       '<textarea class="js-multigraph-tester-textarea"></textarea>'
                      +     '</div>'
                      +   '</div>'
                      +   '<div class="js-multigraph-tester-right">'
                      +     '<div class="js-multigraph-tester-display">'
                      +       '<div class="js-multigraph-tester-graph"></div>'
                      +       '<br/>'
                      +       '<div class="js-multigraph-tester-options">'
                      +         '<div class="js-multigraph-tester-option">'
                      +           'Renderer'
                      +           '<br/>'
                      +           '<select>'
                      +             '<option value="canvas">Canvas</option>'
                      +             '<option value="raphael">Raphael</option>'
                      +           '</select>'
                      +         '</div>'
                      +         '<div class="js-multigraph-tester-option">'
                      +           'Width'
                      +           '<br/>'
                      +           '<input type="text" name="width" placeholder="800"/>'
                      +         '</div>'
                      +         '<div class="js-multigraph-tester-option">'
                      +           'Height'
                      +           '<br/>'
                      +           '<input type="text" name="height" placeholder="500"/>'
                      +         '</div>'
                      +         '<div class="js-multigraph-tester-option">'
                      +           '<br/>'
                      +           '<input type="button" value="refresh"/>'
                      +         '</div>'
                      +       '</div>'
                      +     '</div>'
                      +   '</div>'
                      + '</div>'
                     );

    var methods = {
        init : function () {
            $(this).html(testerHTML);
            var button = $(this).find("input[type='button']");
            button.click({"parent" : this}, refreshButtonHandler);
        }
    };

    $.fn.jsMultigraphTester = function (method) {
        if ( methods[method] ) {
            return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
            return methods.init.apply( this, arguments );
        } else {
            $.error( 'Method ' +  method + ' does not exist on jQuery.jsMultigraphTester' );
            return null;
        }
    }
    
})(window.multigraph.jQuery);


