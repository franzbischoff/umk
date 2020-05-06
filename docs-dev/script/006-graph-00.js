let Graph = function (container) {
  mxGraph.call(this, container);
  mxConstants.OUTLINE_COLOR = 'var(--col-border-1)';
  mxConstants.OUTLINE_HANDLE_STROKECOLOR = 'var(--col-border-1)';
  mxConstants.OUTLINE_HANDLE_FILLCOLOR = 'var(--col-background-2)';
  mxConstants.OUTLINE_STROKEWIDTH = 3;
  //mxConstants.LABEL_HANDLE_SIZE = 10;
  mxConstants.STYLE_BACKGROUND_OUTLINE = 'var(--col-background-1)';
  mxConstants.HIGHLIGHT_COLOR = 'var(--col-border-1)';
  mxConstants.GUIDE_COLOR = 'var(--col-text-1)';
  mxConstants.GUIDE_STROKEWIDTH = 3;
  mxConstants.HANDLE_STROKECOLOR = 'var(--col-border-1)';
  mxConstants.HANDLE_FILLCOLOR = 'var(--col-background-2)';
  //mxConstants.HANDLE_SIZE = 10;
  mxConstants.EDGE_SELECTION_COLOR = 'var(--col-border-1)';
  mxConstants.EDGE_SELECTION_STROKEWIDTH = 3;
  mxConstants.VERTEX_SELECTION_COLOR = 'var(--col-border-1)';
  mxConstants.VERTEX_SELECTION_STROKEWIDTH = 2;
  mxConstants.DROP_TARGET_COLOR = 'var(--col-border-1)';

  mxConstants.STYLE_FONTFAMILY = "Univers 57 Condensed";
  mxConstants.DEFAULT_FONTFAMILY = "Univers 57 Condensed";
  mxConstants.DEFAULT_FONTSIZE = "15";
  this.dropEnabled = true;
  this.setRecursiveResize(false);

  mxGraphHandler.prototype.guidesEnabled = true; //enables guides
  mxEdgeHandler.prototype.snapToTerminals = true; //Enables snapping waypoints to terminals
  //Pointer to this
  let GraphPointer = this;
  //General settings
  this.setAllowDanglingEdges(false);
  this.constrainChildren = false; // this won't let the the blocks inside the groups to not change size when groups are resized
  this.setConnectable(true);
  this.setPanning(true);
  this.setTooltips(true);
  this.htmlLabels = true;
  this.rubberband = new mxRubberband(this);
  this.setConnectableEdges(false);
  this.vStyle = this.getStylesheet().getDefaultVertexStyle();
  this.eStyle = this.getStylesheet().getDefaultEdgeStyle();
  this.vStyle["shadow"] = false;
  this.vStyle["whiteSpace"] = "wrap";
  this.vStyle["arcSize"] = 0;
  this.vStyle["absoluteArcSize"] = 1;
  this.vStyle["rounded"] = 1;
  this.vStyle["strokeWidth"] = 0;
  this.eStyle["edgeStyle"] = "orthogonalEdgeStyle";
  this.eStyle["strokeWidth"] = 1;
  this.eStyle["targetJettySize"] = 25;
  this.eStyle["shadow"] = false;
  this.eStyle["endArrow"] = "none";
  this.eStyle["fontColor"] = "var(--col-text-0)";
  this.eStyle["verticalAlign"] = "top";
  //this.eStyle["overflow"] = "width";
  this.eStyle["align"] = "right";
  this.eStyle["strokeColor"] = "var(--col-text-0)";

  //Stylesheets
  let style = new Object();
  style.foldable = 0;
  style.overflow = "hidden";
  style.verticalAlign = "middle";
  style.fontColor = "var(--col-text-0)";
  style.fillColor = "var(--col-background-1)";
  style.strokeColor = "var(--col-border-0)";
  style.strokeWidth = 3;
  //foldable=0;overflow=hidden;verticalAlign=middle;fontColor=#fff;
  this.getStylesheet().putCellStyle("umk_model", style);
  style = new Object();
  style[mxConstants.STYLE_SHAPE] = mxConstants.SHAPE_SWIMLANE;
  style.startSize = 25;
  style.strokeWidth = 1;
  style.arcSize = 0;
  style.foldable = 1;
  style.strokeColor = "var(--col-border-0)";
  style.fontColor = "var(--col-text-0)";
  //style.verticalLabelPosition = "top";
  style.verticalAlign = "top";
  style.fillColor = "var(--col-background-1)";
  style.resizable = 1;
  this.getStylesheet().putCellStyle("umk_group", style);
  style = new Object();
  style.constituent = 1;
  style.labelPosition = "center";
  style.verticalLabelPosition = "bottom";
  style.verticalAlign = "top";
  style.fontColor = "var(--col-text-0)";
  //constituent=1;verticalLabelPosition=bottom;verticalAlign=top;
  this.getStylesheet().putCellStyle("umk_caption_0", style);
  style = new Object();
  style.constituent = 1;
  style.labelPosition = "left";
  style.verticalLabelPosition = "bottom";
  style.verticalAlign = "top";
  style.fontColor = "var(--col-text-0)";
  style.rotation = 270;
  //constituent=1;verticalLabelPosition=bottom;verticalAlign=top;
  this.getStylesheet().putCellStyle("umk_caption_90", style);
  style = new Object();
  style.constituent = 1;
  style.labelPosition = "center";
  style.verticalLabelPosition = "bottom";
  style.verticalAlign = "top";
  style.fontColor = "var(--col-text-0)";
  //constituent=1;verticalLabelPosition=bottom;verticalAlign=top;
  this.getStylesheet().putCellStyle("umk_caption_180", style);
  style = new Object();
  style.constituent = 1;
  style.labelPosition = "right";
  style.verticalLabelPosition = "bottom";
  style.verticalAlign = "top";
  style.fontColor = "var(--col-text-0)";
  style.rotation = 270;
  //constituent=1;verticalLabelPosition=bottom;verticalAlign=top;
  this.getStylesheet().putCellStyle("umk_caption_270", style);
  style = new Object();
  style.constituent = 1;
  style.align = "center";
  style.verticalAlign = "bottom";
  style.fontColor = "var(--col-text-0)";
  //constituent=1;align=center;verticalAlign=bottom;fontColor=#000000;
  this.getStylesheet().putCellStyle("umk_EO_0", style);
  style = new Object();
  style.constituent = 1;
  style.align = "center";
  style.verticalAlign = "bottom";
  style.fontColor = "var(--col-text-0)";
  style.rotation = 270;
  //constituent=1;align=center;verticalAlign=bottom;fontColor=#000000;
  this.getStylesheet().putCellStyle("umk_EO_90", style);
  style = new Object();
  style.constituent = 1;
  style.align = "center";
  style.verticalAlign = "bottom";
  style.fontColor = "var(--col-text-0)";
  //constituent=1;align=center;verticalAlign=bottom;fontColor=#000000;
  this.getStylesheet().putCellStyle("umk_EO_180", style);
  style = new Object();
  style.constituent = 1;
  style.align = "center";
  style.verticalAlign = "bottom";
  style.fontColor = "var(--col-text-0)";
  style.rotation = 270;
  //constituent=1;align=center;verticalAlign=bottom;fontColor=#000000;
  this.getStylesheet().putCellStyle("umk_EO_270", style);
  style = new Object();
  style.constituent = 1;
  style.verticalAlign = "middle";
  style.fontColor = "var(--col-text-0)";
  style.labelPosition = "right";
  style.labelWidth = 15;
  style.align = "left";
  style.shape = "triangle";
  style.portConstraint = "west";
  style.overflow = "fit";
  style.fillColor = "var(--col-text-0)";
  style.strokeColor = "var(--col-text-0)";
  //constituent=1;verticalAlign=middle;fontColor=#ffffff;labelPosition=right;labelWidth=80;align=left;shape=triangle;portConstraint=west;
  this.getStylesheet().putCellStyle("umk_input", style);
  style = new Object();
  style.constituent = 1;
  style.verticalAlign = "middle";
  style.fontColor = "var(--col-text-0)";
  style.labelPosition = "left";
  style.labelWidth = 15;
  style.align = "right";
  style.shape = "triangle";
  style.portConstraint = "east";
  style.overflow = "fit";
  style.fillColor = "var(--col-text-0)";
  style.strokeColor = "var(--col-text-0)";
/*  style.fillColor = "none";
  style.strokeColor = "none";*/
  //constituent=1;fontColor=#ffffff;labelPosition=left;labelWidth=80;align=right;shape=triangle;portConstraint=east;
  this.getStylesheet().putCellStyle("umk_output", style);


  //Navigate graph
  this.navigate = {
    sGraph: this,
    move: function (direction = "up", step = 10) {
      let graph = this.sGraph;
      step = step / graph.view.scale;
      let value;
      let sCells = graph.getSelectionCells();
      if (!!sCells.length && direction !== "0") {
        value = {};
        value.x = 0;
        value.y = 0;
      } else {
        value = graph.view.getTranslate();
      }
      switch (direction) {
        case "up":
          value.y += step;
          break;
        case "down":
          value.y -= step;
          break;
        case "left":
          value.x += step;
          break;
        case "right":
          value.x -= step;
          break;
        case "0":
          value.x = 0;
          value.y = 0;
          break;
      }
      if (!!sCells.length) {
        graph.moveCells(sCells, -value.x, -value.y);
      } else {
        graph.view.setTranslate(value.x, value.y);
      }
      graph.view.refresh();
    }
  };
  //Draws grid
  const Canvas = document.createElement("canvas");
  Canvas.style.position = "absolute";
  Canvas.style.top = "0px";
  Canvas.style.left = "0px";
  Canvas.style.pointerEvents = "none";
  Canvas.style.zIndex = -1; //It may effect the blocks and its selection ... todo
  container.appendChild(Canvas);
  this.gridCanvas = Canvas;
  this.grid = {
    canvas: Canvas,
    sGraph: this,
    minorStroke: {
      color: '#808080',
      thickness: 0.1,
      pattern: "",
      show: false
    },
    majorStroke: {
      color: '#808080',
      thickness: 0.5,
      pattern: "2, 2",
      show: true
    },
    megaStroke: {
      color: '#808080',
      thickness: 1,
      pattern: "20, 5, 5, 5",
      show: false
    },
    repaintGrid: function () {
      let graph = this.sGraph;
      let lineColor = window.getComputedStyle(graph.container, null).getPropertyValue('border-color');
      this.minorStroke.color = lineColor;
      this.majorStroke.color = lineColor;
      this.megaStroke.color = lineColor;
      //console.log(lineColor);

      let s = 0;
      let gs = 0;
      let tr = new mxPoint();
      let w = 0;
      let h = 0;
      let ctx = this.canvas.getContext("2d");
      ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      ctx.fillStyle = "#ff000000";
      ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
      if (ctx != null) {
        let bounds = graph.getGraphBounds();
        let width = Math.max(
          bounds.x + bounds.width,
          graph.container.clientWidth
        );
        let height = Math.max(
          bounds.y + bounds.height,
          graph.container.clientHeight
        );
        let sizeChanged = width != w || height != h;
        if (
          graph.view.scale != s ||
          graph.view.translate.x != tr.x ||
          graph.view.translate.y != tr.y ||
          gs != graph.gridSize ||
          sizeChanged
        ) {
          tr = graph.view.translate.clone();
          s = graph.view.scale;
          gs = graph.gridSize;
          w = width;
          h = height;
          if (!sizeChanged) {
            ctx.clearRect(0, 0, w, h);
          } else {
            this.canvas.setAttribute("width", w);
            this.canvas.setAttribute("height", h);
          }
          let tx = tr.x * s;
          let ty = tr.y * s;
          let minStepping = graph.gridSize;
          let stepping = minStepping * s;
          /*if (stepping < minStepping) {
              let count =
                  Math.round(Math.ceil(minStepping / stepping) / 2) * 2;
              stepping = count * stepping;
          }*/
          let xs = Math.floor((0 - tx) / stepping) * stepping + tx;
          let xe = Math.ceil(w / stepping) * stepping;
          let ys = Math.floor((0 - ty) / stepping) * stepping + ty;
          let ye = Math.ceil(h / stepping) * stepping;
          xe += Math.ceil(stepping);
          ye += Math.ceil(stepping);
          let ixs = Math.round(xs);
          let ixe = Math.round(xe);
          let iys = Math.round(ys);
          let iye = Math.round(ye);

          if (this.minorStroke.show) {
            ctx.strokeStyle = this.minorStroke.color;
            ctx.beginPath();
            ctx.lineCap = "round";
            try {
              ctx.setLineDash(
                JSON.parse("[" + this.minorStroke.pattern + "]")
              );
            } catch (e) {}
            ctx.lineWidth = this.minorStroke.thickness;
            for (let x = xs; x <= xe; x += stepping) {
              x = Math.round((x - tx) / stepping) * stepping + tx;
              let ix = Math.round(x);
              ctx.moveTo(ix + 0.5, iys + 0.5);
              ctx.lineTo(ix + 0.5, iye + 0.5);
            }
            for (let y = ys; y <= ye; y += stepping) {
              y = Math.round((y - ty) / stepping) * stepping + ty;
              let iy = Math.round(y);
              ctx.moveTo(ixs + 0.5, iy + 0.5);
              ctx.lineTo(ixe + 0.5, iy + 0.5);
            }
            ctx.closePath();
            ctx.stroke();
          }

          stepping = stepping * 5;
          if (this.majorStroke.show) {
            ctx.strokeStyle = this.majorStroke.color;
            xs = Math.floor((0 - tx) / stepping) * stepping + tx;
            xe = Math.ceil(w / stepping) * stepping;
            ys = Math.floor((0 - ty) / stepping) * stepping + ty;
            ye = Math.ceil(h / stepping) * stepping;
            xe += Math.ceil(stepping);
            ye += Math.ceil(stepping);
            ixs = Math.round(xs);
            ixe = Math.round(xe);
            iys = Math.round(ys);
            iye = Math.round(ye);
            ctx.beginPath();
            ctx.lineCap = "round";
            try {
              ctx.setLineDash(
                JSON.parse("[" + this.majorStroke.pattern + "]")
              );
            } catch (e) {}
            ctx.lineWidth = this.majorStroke.thickness;
            for (let x = xs; x <= xe; x += stepping) {
              x = Math.round((x - tx) / stepping) * stepping + tx;
              let ix = Math.round(x);
              ctx.moveTo(ix + 0.5, iys + 0.5);
              ctx.lineTo(ix + 0.5, iye + 0.5);
            }
            for (let y = ys; y <= ye; y += stepping) {
              y = Math.round((y - ty) / stepping) * stepping + ty;
              let iy = Math.round(y);
              ctx.moveTo(ixs + 0.5, iy + 0.5);
              ctx.lineTo(ixe + 0.5, iy + 0.5);
            }
            ctx.closePath();
            ctx.stroke();
          }

          stepping = stepping * 2;
          if (this.megaStroke.show) {
            ctx.strokeStyle = this.megaStroke.color;
            xs = Math.floor((0 - tx) / stepping) * stepping + tx;
            xe = Math.ceil(w / stepping) * stepping;
            ys = Math.floor((0 - ty) / stepping) * stepping + ty;
            ye = Math.ceil(h / stepping) * stepping;
            xe += Math.ceil(stepping);
            ye += Math.ceil(stepping);
            ixs = Math.round(xs);
            ixe = Math.round(xe);
            iys = Math.round(ys);
            iye = Math.round(ye);
            ctx.beginPath();
            ctx.lineCap = "round";
            try {
              ctx.setLineDash(
                JSON.parse("[" + this.megaStroke.pattern + "]")
              );
            } catch (e) {}
            ctx.lineWidth = this.megaStroke.thickness;
            for (let x = xs; x <= xe; x += stepping) {
              x = Math.round((x - tx) / stepping) * stepping + tx;
              let ix = Math.round(x);
              ctx.moveTo(ix + 0.5, iys + 0.5);
              ctx.lineTo(ix + 0.5, iye + 0.5);
            }
            for (let y = ys; y <= ye; y += stepping) {
              y = Math.round((y - ty) / stepping) * stepping + ty;
              let iy = Math.round(y);
              ctx.moveTo(ixs + 0.5, iy + 0.5);
              ctx.lineTo(ixe + 0.5, iy + 0.5);
            }
            ctx.closePath();
            ctx.stroke();
          }
        }
      }
    }
  };
  this.hideGraphText = false;
  //Handling labels
  this.getLabel = function (cell) {
    if (!!cell.value) {
      if (!!cell.style && cell.style.search("umk_model") >= 0) {
        if (this.hideGraphText) {
          //console.log("hi");
          return "";
        } else {
          try {
            if ((typeof cell.value === "string") ||
              ((typeof cell.value === "Object") && (cell.value.constructor.name.search(/umk_\d{13}/g) >= 0))) {
              if (typeof cell.value !== "Object") {
                cell.value = JSON.parse2(cell.value);
              }
              eval("var tempModel = new " + cell.value.id + "(cell.value);");
              cell.value = tempModel;
            }
            /*//Set input and output terminals
            setTermianls(this, cell, "umk_input");
            setTermianls(this, cell, "umk_output");*/
            //console.log(cell.value.Icon());
            this.setCaption(cell, cell.value.Name);
            if (!!cell.style && cell.style.search("umk_display") >= 0) {
              return cell.value.show || "$[\\cdot]$";
            }
            return (
              "<div class='rotate-" + cell.value.rotateHTML + "'>" +
              cell.value.Icon().html +
              "</div>"
            );
          } catch (e) {
            console.log(e);
            return "ERROR";
          }
        }
      } else {
        if (!!cell.style && cell.style.search("umk_EO") >= 0 && !this.showExeOrder) {
          return "";
        } else {
          return cell.value; //"$\\text{"+cell.value+"}$";
        }
      }
    } else return null;
  };
  this.getEditingValue = function (cell, evt) {
    if (!!cell.value) {
      if (typeof cell.value === "object") return cell.value.Name || "";
      else return cell.value;
    } else return null;
  };
  this.labelChanged = function (cell, newValue, trigger) {
    if (!!cell.value) {
      if (typeof cell.value === "object") {
        let value = mxUtils.clone(cell.value);
        value.Name = newValue;
        newValue = value;
      }
    }
    mxGraph.prototype.labelChanged.apply(this, arguments);
  };
  this.showCaptions = true;
  this.showExeOrder = true;
  this.setCaption = function (Cell, value) {
    let children = Cell.children;
    if (!!children) {
      for (let i = 0; i < children.length; i++) {
        if (!!children[i].style && children[i].style.search("umk_caption") >= 0) {
          if (this.showCaptions) {
            children[i].setValue(value);
          } else {
            children[i].setValue("");
          }
          this.refresh(children[i]);
        }
      }
    }
  }
  //Lines before connecting edges
  this.view.updateFixedTerminalPoint = function (
    edge,
    terminal,
    source,
    constraint
  ) {
    mxGraphView.prototype.updateFixedTerminalPoint.apply(
      this,
      arguments
    );
    let pts = edge.absolutePoints;
    let pt = pts[source ? 0 : pts.length - 1];
    if (
      terminal != null &&
      pt == null &&
      this.getPerimeterFunction(terminal) == null
    ) {
      edge.setAbsoluteTerminalPoint(
        new mxPoint(
          this.getRoutingCenterX(terminal),
          this.getRoutingCenterY(terminal)
        ),
        source
      );
    }
  };
  this.connectionHandler.createEdgeState = function (me) {
    let edge = this.createEdge(null, null, null, null, null);
    return new mxCellState(
      this.graph.view,
      edge,
      this.graph.getCellStyle(edge)
    );
  };
  // Redirects selection to parent
  this.selectCellForEvent = function (cell) {
    if (this.isPart(cell)) {
      cell = this.model.getParent(cell);
    }

    mxGraph.prototype.selectCellForEvent.apply(this, arguments);
  };
  // Helper method to mark parts with constituent=1 in the style
  this.isPart = function (cell) {
    //console.log(cell);
    let style = this.getCellStyle(cell);

    return style["constituent"] == "1";
  };

  //Connection switching source traget, when required
  this.connectionHandler.addListener(mxEvent.CONNECT, function (
    sender,
    evt
  ) {
    this.graph = GraphPointer;
    //console.log(this);
    let edge = evt.getProperty("cell");
    let source = this.graph.getModel().getTerminal(edge, true);
    let target = this.graph.getModel().getTerminal(edge, false);
    if (!!source.style &&
      source.style.search("umk_input") >= 0 &&
      target.style.search("umk_output") >= 0
    ) {
      this.graph.getModel().setTerminal(edge, source, false);
      this.graph.getModel().setTerminal(edge, target, true);
    }
  });
  //Connection validation
  this.customValidationError = true;
  this.getEdgeValidationError = function (
    edge,
    source,
    target
  ) {
    //console.log(source.edges);
    let defaultOut = mxGraph.prototype.getEdgeValidationError.apply(
      this,
      arguments
    );
    if (this.customValidationError) {
      let outError;
      try {
        if (source.parent === target.parent)
          outError = GUIText[settings.lang].errSameBlkConn;
        if (
          source.style.search("umk_input") >= 0 &&
          target.style.search("umk_input") >= 0
        )
          outError = GUIText[settings.lang].errInpInpConn;
        if (
          source.style.search("umk_output") >= 0 &&
          target.style.search("umk_output") >= 0
        )
          outError = GUIText[settings.lang].errOutOutConn;
        if (
          (target.style.search("umk_input") >= 0 &&
            target.getEdgeCount() > 0) ||
          (source.style.search("umk_input") >= 0 &&
            source.getEdgeCount() > 0)
        )
          outError = GUIText[settings.lang].errOnlyOneInp;
      } catch (e) {} finally {
        return outError || defaultOut;
      }
    } else return defaultOut;
  };
  this.validationAlert = function (message) {
    new Noty({
      text: message,
      timeout: 5000,
      theme: "nest",
      type: 'warning'
    }).show();
  };

  //selection of a vertix
  this.isCellSelectable = function (cell) {
    let state = this.view.getState(cell);
    let style = state != null ? state.style : this.getCellStyle(cell);

    return (
      this.isCellsSelectable() &&
      !this.isCellLocked(cell) &&
      style["selectable"] != 0
    );
  };

  //Change tooltip string
  this.getTooltipForCell = function (cell) {
    let label = this.convertValueToString(cell);
    return label;
  }
  this.convertValueToString = function (cell) {
    if (!!cell.style && cell.style.search("umk_model") >= 0) return null;
    else return cell.value;
  }

  //Group blocks
  this.createSubModel = function () {
    let model = this.getModel();
    model.beginUpdate();
    let subModel;
    try {
      subModel = this.groupCells(null, 35, this.getSelectionCells());
      subModel.geometry.alternateBounds = new mxRectangle(0, 0, 200, 25);
      this.setSelectionCell(subModel);
    } catch (e) {
      console.log(e);
      this.validationAlert(GUIText[settings.lang].errUnablGrping);
      return;
    } finally {
      model.endUpdate();
      return subModel;
    }
  }

  this.ungroupSubModel = function () {
    let model = this.getModel();
    model.beginUpdate();
    try {
      let cells = this.getSelectionCells();
      for (let i = 0; i < cells.length; i++) {
        if (!!cells[i].getStyle() && cells[i].getStyle().search("umk_group") >= 0) {
          let sCells = this.getSelectionCells();
          sCells = sCells.concat(cells[i].children);
          //console.log(sCells);
          this.ungroupCells([cells[i]]);
          this.setSelectionCells(sCells);
        }
      }
    } catch (e) {
      console.log(e);
      validationAlert(GUIText[settings.lang].k171);
    } finally {
      model.endUpdate();
    }
  }
  // fold and unfold
  this.collapsedImage = new mxImage("data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjQ0OHB0IiB2aWV3Qm94PSIwIDAgNDQ4IDQ0OCIgd2lkdGg9IjQ0OHB0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im00MDggMTg0aC0xMzZjLTQuNDE3OTY5IDAtOC0zLjU4MjAzMS04LTh2LTEzNmMwLTIyLjA4OTg0NC0xNy45MTAxNTYtNDAtNDAtNDBzLTQwIDE3LjkxMDE1Ni00MCA0MHYxMzZjMCA0LjQxNzk2OS0zLjU4MjAzMSA4LTggOGgtMTM2Yy0yMi4wODk4NDQgMC00MCAxNy45MTAxNTYtNDAgNDBzMTcuOTEwMTU2IDQwIDQwIDQwaDEzNmM0LjQxNzk2OSAwIDggMy41ODIwMzEgOCA4djEzNmMwIDIyLjA4OTg0NCAxNy45MTAxNTYgNDAgNDAgNDBzNDAtMTcuOTEwMTU2IDQwLTQwdi0xMzZjMC00LjQxNzk2OSAzLjU4MjAzMS04IDgtOGgxMzZjMjIuMDg5ODQ0IDAgNDAtMTcuOTEwMTU2IDQwLTQwcy0xNy45MTAxNTYtNDAtNDAtNDB6bTAgMCIvPjwvc3ZnPg==", 13, 13);
  this.expandedImage = new mxImage("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQyIDQyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MiA0MjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik0zNy4wNTksMTZIMjZIMTZINC45NDFDMi4yMjQsMTYsMCwxOC4yODIsMCwyMXMyLjIyNCw1LDQuOTQxLDVIMTZoMTBoMTEuMDU5QzM5Ljc3NiwyNiw0MiwyMy43MTgsNDIsMjEgUzM5Ljc3NiwxNiwzNy4wNTksMTZ6Ii8+PC9zdmc+", 13, 13);
  this.foldItems = function (fold = true) {
    let cells;
    if (this.getSelectionCells().length > 0) {
      cells = this.getSelectionCells();
    } else {
      cells = this.getDefaultParent().children;
    }
    for (let i = 0; i < cells.length; i++) {
      if (!!cells[i].style && cells[i].style.search("umk_group") >= 0) {
        this.foldCells(fold, false, [cells[i]]);
      }
    }
  }



  /*
  //Handling context icons
  this.createHandler = function (state) {
    if (state != null &&
      this.model.isVertex(state.cell)) {
      return new mxVertexToolHandler(state);
    }

    return mxGraph.prototype.createHandler.apply(this, arguments);
  };*/
};
mxUtils.extend(Graph, mxGraph);



let Outline = function (graph, container) {
  mxOutline.call(this, graph, container);
  this.visibility = false;
  this.setVisiblity = function () {
    container.style.display = (this.visibility) ? "block" : "none";
  }
}
mxUtils.extend(Outline, mxOutline);

let System = function (gContainer, oContainer) {
  this.graph = new Graph(gContainer);
  this.outline = new Outline(this.graph, oContainer);
  //this.keyHandler = new mxKeyHandler(this.graph);

  this.undoManager = new mxUndoManager();
  let undoManager = this.undoManager;
  let umListener = function (sender, evt) {
    undoManager.undoableEditHappened(evt.getProperty("edit"));
  };
  this.graph.getModel().addListener(mxEvent.UNDO, umListener);
  this.graph.getView().addListener(mxEvent.UNDO, umListener);
  this.isRefreshing = false;

  this.refreshNow = function (that) {
    try {
      that.graph.refresh();
      if (that.outline.visibility) {
        that.graph.container.style.overflow = 'hidden';
      } else {
        that.graph.container.style.overflow = 'auto';
      }
      that.outline.setVisiblity();
      that.outline.refresh();
    } catch (e) {
      console.log(e);
    }
    that.isRefreshing = false;
  }
  this.refresh = function () {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      setTimeout(this.refreshNow.bind(null, this), 300);
    } else {
      // console.log("Full refresh call blocked");
    }
    //this.graph.grid.repaintGrid();
  }
  this.navigate = function (dir = "up") {
    switch (dir) {
      case "up":
      case "down":
      case "left":
      case "right":
      case "0":
        this.graph.navigate.move(dir);
        break;
      case "zoomIn":
        this.graph.zoomIn();
        break;
      case "zoomOut":
        this.graph.zoomOut();
        break;
      case "zoomActual":
        this.graph.zoomActual();
        break;
      case "fit":
        this.graph.fit();
        break;

    }
    this.refresh();
  }
}

let mainSystem = new System(document.getElementById("modelContainer"), document.getElementById("outlineContainer"));


mainSystem.graph.getSelectionModel().addListener(mxEvent.CHANGE, function (sender, evt) {
  selectionChanged();
});

mainSystem.outline.update = function (rv) {
  mainSystem.graph.grid.repaintGrid();
  //mathEqn.update();
  return mxOutline.prototype.update.apply(this, arguments);
};


//refresh cells along and also update latex
mainSystem.graph.refresh = function (cell) {
  let out = mxGraph.prototype.refresh.apply(this, arguments);
  mathEqn.update();
  return out;
}

/*
mainSystem.outline.mouseMove = function (sender, me) {
  //console.log('f');
  mainSystem.graph.grid.repaintGrid();
  //mainSystem.graph.container.style.backgroundColor = mainSystem.graph.backgroundColor;
  return mxOutline.prototype.mouseMove.apply(this, arguments);
};*/
mainSystem.outline.mouseDown = function (sender, me) {
  mainSystem.graph.gridCanvas.style.display = "none";
  //mainSystem.graph.container.style.backgroundColor = mainSystem.graph.backgroundColor;
  return mxOutline.prototype.mouseDown.apply(this, arguments);
};

mainSystem.outline.mouseUp = function (sender, me) {
  mainSystem.graph.gridCanvas.style.display = "block";
  //mainSystem.graph.container.style.backgroundColor = "";
  return mxOutline.prototype.mouseUp.apply(this, arguments);
};



function selectionChanged() {
  clearAllTheGraphSelections();
  if (
    mainSystem.graph.getSelectionCells().length === 1 &&
    mainSystem.graph.getSelectionCell() &&
    mainSystem.graph.getSelectionCell().isVertex() &&
    typeof mainSystem.graph.getSelectionCell().value === "object"
  ) {
    changeEditModelWithSelectedBlock();
  } else if (
    mainSystem.graph.getSelectionCells().length === 1 &&
    mainSystem.graph.getSelectionCell() &&
    mainSystem.graph.getSelectionCell().isEdge()
  ) {
    editorVue.$set(editorVue.$data, "modelValue", mainSystem.graph.getSelectionCell().value);
  } else if (
    mainSystem.graph.getSelectionCells().length === 1 &&
    mainSystem.graph.getSelectionCell() &&
    !!mainSystem.graph.getSelectionCell().style &&
    mainSystem.graph.getSelectionCell().style.search("umk_group") >= 0
  ) {
    editorVue.$set(editorVue.$data, "modelValue", mainSystem.graph.getSelectionCell().value);
  }
}

function changeEditModelWithSelectedBlock() {
  eval(
    "var editModel = new " +
    mainSystem.graph.getSelectionCell().value.id +
    "(mainSystem.graph.getSelectionCell().value);"
  );
  editorVue.$set(editorVue.$data, "uyamakModel", editModel);
  editorVue.$set(editorVue.$data, "parametersDisplay", {});
}

function clearAllTheGraphSelections() {
  editorVue.$set(editorVue.$data, "uyamakModel", null);
  editorVue.$set(editorVue.$data, "modelValue", null);
  editorVue.$set(editorVue.$data, "bunchOfItems", null);
}



/*Group cells */
/*graph.autoSizeCellsOnAdd = true;
				graph.autoSizeCells = true;/**/
//Adjust vertices when new group is formed
var graphCreateGroupCell = mxGraph.prototype.createGroupCell;
mxGraph.prototype.createGroupCell = function (cells) {
  var group = graphCreateGroupCell.apply(this, arguments);
  group.setStyle("umk_group;");
  group.setValue(GUIText[settings.lang].subModel);
  return group;
};

/*//resize children with parents
mainSystem.graph.getModel().addListener(mxEvent.CELLS_RESIZED, resizeChildren);
mainSystem.graph.getView().addListener(mxEvent.CELLS_RESIZED, resizeChildren);
var resizeChildren = function (sender, evt) {
  //console.log(sender);
  //console.log(evt);
};
*/

/*
//Change caption
function setCaption(Cell, value) {
  let children = Cell.children;
  for (let i = 0; i < children.length; i++) {
    if (children[i].style.search("umk_caption") >= 0) {
      children[i].setValue(value);
      graph.refresh(children[i]);
    }
  }
}

*/
/*
//Context icons
// Defines a subclass for mxVertexHandler that adds a set of clickable
// icons to every selected vertex.
function mxVertexToolHandler(state) {
  mxVertexHandler.apply(this, arguments);
};

mxVertexToolHandler.prototype = new mxVertexHandler();
mxVertexToolHandler.prototype.constructor = mxVertexToolHandler;

mxVertexToolHandler.prototype.domNode = null;

mxVertexToolHandler.prototype.init = function () {
  mxVertexHandler.prototype.init.apply(this, arguments);

  // In this example we force the use of DIVs for images in IE. This
  // handles transparency in PNG images properly in IE and fixes the
  // problem that IE routes all mouse events for a gesture via the
  // initial IMG node, which means the target vertices 
  this.domNode = document.createElement('div');
  this.domNode.style.position = 'absolute';
  this.domNode.style.whiteSpace = 'nowrap';

  // Workaround for event redirection via image tag in quirks and IE8
  function createImage(src) {
    if (mxClient.IS_IE && !mxClient.IS_SVG) {
      let img = document.createElement('div');
      img.style.backgroundImage = 'url(' + src + ')';
      img.style.backgroundPosition = 'center';
      img.style.backgroundRepeat = 'no-repeat';
      img.style.display = (mxClient.IS_QUIRKS) ? 'inline' : 'inline-block';

      return img;
    } else {
      return mxUtils.createImage(src);
    }
  };

  // Delete
  let img = createImage('images/delete2.png');
  img.setAttribute('title', 'Delete');
  img.style.cursor = 'pointer';
  img.style.width = '16px';
  img.style.height = '16px';
  mxEvent.addGestureListeners(img,
    mxUtils.bind(this, function (evt) {
      // Disables dragging the image
      mxEvent.consume(evt);
    })
  );
  mxEvent.addListener(img, 'click',
    mxUtils.bind(this, function (evt) {
      this.graph.removeCells([this.state.cell]);
      mxEvent.consume(evt);
    })
  );
  this.domNode.appendChild(img);

  // Size
  img = createImage('images/fit_to_size.png');
  img.setAttribute('title', 'Resize');
  img.style.cursor = 'se-resize';
  img.style.width = '16px';
  img.style.height = '16px';
  mxEvent.addGestureListeners(img,
    mxUtils.bind(this, function (evt) {
      this.start(mxEvent.getClientX(evt), mxEvent.getClientY(evt), 7);
      this.graph.isMouseDown = true;
      this.graph.isMouseTrigger = mxEvent.isMouseEvent(evt);
      mxEvent.consume(evt);
    })
  );
  this.domNode.appendChild(img);

  // Move
  img = createImage('images/plus.png');
  img.setAttribute('title', 'Move');
  img.style.cursor = 'move';
  img.style.width = '16px';
  img.style.height = '16px';
  mxEvent.addGestureListeners(img,
    mxUtils.bind(this, function (evt) {
      this.graph.graphHandler.start(this.state.cell,
        mxEvent.getClientX(evt), mxEvent.getClientY(evt));
      this.graph.graphHandler.cellWasClicked = true;
      this.graph.isMouseDown = true;
      this.graph.isMouseTrigger = mxEvent.isMouseEvent(evt);
      mxEvent.consume(evt);
    })
  );
  this.domNode.appendChild(img);

  // Connect
  img = createImage('images/check.png');
  img.setAttribute('title', 'Connect');
  img.style.cursor = 'pointer';
  img.style.width = '16px';
  img.style.height = '16px';
  mxEvent.addGestureListeners(img,
    mxUtils.bind(this, function (evt) {
      let pt = mxUtils.convertPoint(this.graph.container,
        mxEvent.getClientX(evt), mxEvent.getClientY(evt));
      this.graph.connectionHandler.start(this.state, pt.x, pt.y);
      this.graph.isMouseDown = true;
      this.graph.isMouseTrigger = mxEvent.isMouseEvent(evt);
      mxEvent.consume(evt);
    })
  );
  this.domNode.appendChild(img);

  this.graph.container.appendChild(this.domNode);
  this.redrawTools();
};

mxVertexToolHandler.prototype.redraw = function () {
  mxVertexHandler.prototype.redraw.apply(this);
  this.redrawTools();
};

mxVertexToolHandler.prototype.redrawTools = function () {
  if (this.state != null && this.domNode != null) {
    let dy = (mxClient.IS_VML && document.compatMode == 'CSS1Compat') ? 20 : 4;
    this.domNode.style.left = (this.state.x + this.state.width - 56) + 'px';
    this.domNode.style.top = (this.state.y + this.state.height + dy) + 'px';
  }
};

mxVertexToolHandler.prototype.destroy = function (sender, me) {
  mxVertexHandler.prototype.destroy.apply(this, arguments);

  if (this.domNode != null) {
    this.domNode.parentNode.removeChild(this.domNode);
    this.domNode = null;
  }
};

*/