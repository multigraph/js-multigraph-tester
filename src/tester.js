(function ($) {
    var testerHTML = (''
                      + '<div class="js-multigraph-tester">'

                      + '<div class="js-multigraph-tester-nav-wrapper">'
                      +   '<div class="js-multigraph-tester-nav">'
                      +     '<span id="js-multigraph-tester-graph-button"><a href="#">Graph</a></span>'
                      +     '<span id="js-multigraph-mugl-button"><a href="#">MUGL</a></span>'
                      +   '</div>'
                      +   '<div class="js-multigraph-tester-content">'
                      +     '<div id="js-multigraph-mugl-div">'
                      +       '<div class="js-multigraph-tester-options">'
                      +         '<div class="js-multigraph-tester-option">'
                      +           'Graphics Driver: '
                      +           '<select>'
                      +             '<option value="auto" selected="true">Auto</option>'
                      +             '<option value="canvas">Canvas</option>'
                      +             '<option value="raphael">Raphael</option>'
                      +           '</select>'
                      +         '</div>'
                      +         '<div class="js-multigraph-tester-option">'
                      +           'Width: '
                      +           '<input type="text" name="width" placeholder="800"/>'
                      +         '</div>'
                      +         '<div class="js-multigraph-tester-option">'
                      +           'Height: '
                      +           '<input type="text" name="height" placeholder="500"/>'
                      +         '</div>'
/*
                      +         '<div class="js-multigraph-tester-option">'
                      +           '<br/>'
                      +           '<input type="button" value="refresh"/>'
                      +         '</div>'
*/
                      +       '</div>'
                      +       '<textarea class="js-multigraph-tester-textarea"></textarea>'
                      +     '</div>'
                      +     '<div id="js-multigraph-graph-div">'
                      +       '<div class="js-multigraph-tester-graph">'
                      +         '<div class="js-multigraph-tester-graph-message">'
                      +           'Type or paste a MUGL document in the text area on the <b>MUGL</b> tab,'
                      +           'then return to this <b>Graph</b> tab to see the graph here.'
                      +         '</div>'
                      +       '</div>'
                      +     '</div>'
                      +   '</div>'
                      + '</div>'

                      + '</div>'

/*

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
*/
                     );

    var methods = {
        init : function () {
            var that = this;
            $(this).data('jsMultigraphTester', {
                muglChanged: false
            });
            $(this).html(testerHTML);
/*
            $(this).find("input[type='button']").click(function() {
                methods.refresh.call(that);
            });
*/
            $('#js-multigraph-mugl-button a').click(function(e) {
              e.preventDefault();
              methods.showMuglDiv.call(that);
            });
            $(this).find("textarea").change(function() {
                $(that).data('jsMultigraphTester').muglChanged = true;
            });
            $('#js-multigraph-tester-graph-button a').click(function(e) {
              e.preventDefault();
              methods.showGraphDiv.call(that);
              if ($(that).data('jsMultigraphTester').muglChanged) {
                  methods.refresh.call(that);
                  //$(that).methods.jsMultigraphTester('refresh');
              }
            });
            methods.showGraphDiv.call(that);
        },
        showMuglDiv : function () {
            $('#js-multigraph-tester-graph-button').removeClass("js-multigraph-tester-nav-selected");
            $('#js-multigraph-mugl-button').addClass("js-multigraph-tester-nav-selected");
            $('#js-multigraph-graph-div').css('display', 'none');
            $('#js-multigraph-mugl-div').css('display', 'block');
        },
        showGraphDiv : function() {
            $('#js-multigraph-mugl-button').removeClass("js-multigraph-tester-nav-selected");
            $('#js-multigraph-tester-graph-button').addClass("js-multigraph-tester-nav-selected");
            $('#js-multigraph-mugl-div').css('display', 'none');
            $('#js-multigraph-graph-div').css('display', 'block');
        },
        setMugl : function(mugl) {
            var that = this;
            $(this).find("textarea").val(mugl);
            methods.refresh.call(that);
            methods.showGraphDiv.call(that);
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
            $(this).data('jsMultigraphTester').muglChanged = false;
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
    };
    
})(window.multigraph.jQuery);


