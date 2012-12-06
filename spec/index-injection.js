<html>
  <head>
    <script type="text/javascript" src="../lib/js-multigraph/build/multigraph.js"></script>
    <script type="text/javascript" src="script.js"></script>
    <link href="style.css" type="text/css" rel="stylesheet" media="screen"/>
  </head>

  <body>

    <div class="js-multigraph-tester">
      <div class="js-multigraph-tester-mugl">
        <textarea class="js-multigraph-tester-textarea" spellcheck="false"></textarea>
      </div>
      <div class="js-multigraph-tester-display">
        <div class="js-multigraph-tester-graph">The Graph will be drawn here.</div>
        <br/>
        <div class="js-multigraph-tester-options">
          <div class="js-multigraph-tester-option">
            Renderer
            <br/>
            <select>
              <option value="canvas">Canvas</option>
              <option value="raphael">Raphael</option>
            </select>
          </div>
          <div class="js-multigraph-tester-option">
            Width
            <br/>
            <input type="text" name="width" placeholder="800"/>
          </div>
          <div class="js-multigraph-tester-option">
            Height
            <br/>
            <input type="text" name="height" placeholder="500"/>
          </div>
          <div class="js-multigraph-tester-option">
            <br/>
            <input type="button" value="refresh"/>
          </div>
        </div>
      </div>
    </div>

  </body>
</html>
