(function ($) {
    var testerHTML = (''
                      + '<div class="js-multigraph-tester">'
                      +   '<div class="js-multigraph-tester-left">'
                      +     '<div class="js-multigraph-tester-mugl">'
                      +       'MUGL:<br/>'
                      +       '<textarea class="js-multigraph-tester-textarea"></textarea>'
                      +     '</div>'
                      +   '</div>'
                      +   '<div class="js-multigraph-tester-right">'
                      +     '<div class="js-multigraph-tester-display">'
                      +       'Multigraph:<br/>'
                      +       '<div class="js-multigraph-tester-graph">'
                      +         '<div class="js-multigraph-tester-graph-message">'
                      +           'Type or paste a MUGL document in the text area to the left, and '
                      +           'then click the "refresh" button below to see the graph here.'
                      +         '</div>'
                      +       '</div>'
                      +       '<br/>'
                      +       '<div class="js-multigraph-tester-options">'
                      +         '<div class="js-multigraph-tester-option">'
                      +           'Graphics Driver'
                      +           '<br/>'
                      +           '<select>'
                      +             '<option value="auto" selected="true">Auto</option>'
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
            var that = this;
            $(this).html(testerHTML);
            $(this).find("input[type='button']").click(function() {
                methods.refresh.call(that);
            });
        },
        setMugl : function(mugl) {
            var that = this;
            $(this).find("textarea").val(mugl);
            methods.refresh.call(that);
        },
        refresh : function () {
            var mugl = $(this).find("textarea").val();
            var div  = $(this).find(".js-multigraph-tester-graph")[0];
            var width = $(this).find("div.js-multigraph-tester-option input[name='width']").val();
            var height = $(this).find("div.js-multigraph-tester-option input[name='height']").val();
            var driver = $(this).find("div.js-multigraph-tester-option select option").filter(":selected").val();
            
            if (!width || isNaN(parseFloat(width)) || parseFloat(width) < 100) {
                width = 800;
            }
            if (!height || isNaN(parseFloat(height)) || parseFloat(height) < 100) {
                height = 500;
            }
            
            var options = {
                "muglString" : mugl,
                "div" : div
            };
            
            if (driver !== "auto") {
                options.driver = driver;
            }
            
            try {
                $.parseXML(mugl);
            } catch (e) {
                $(div).empty().append($('<div class="js-multigraph-tester-graph-message">'
                                        + 'The MUGL is not valid XML; please try again.</div>'));
                return;
            }
            
            $(div).css("width", parseFloat(width) + "px")
                .css("height", parseFloat(height) + "px")
                .css("borderWidth", "0px")
                .empty();
            window.multigraph.create(options);
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


