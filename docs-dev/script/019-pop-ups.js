const popup = {
  pointToOpenWind: { //Gives the point at witch the window open
    x: 50,
    y: 50
  },
  refsForSinks: {}, // References for the sink cells
  /**
   * Each item maximum items are:
   * id: {
   *  extWind: frameHandle,
   *  intWind: {
   *    winRef: windowHandle,
   *    frmRef: frameHandle 
   *  }
   * }
   * 
   * 
   */
  rType: {}, //Registered type
  open: function (evt, type, pop = true) {
    let graphDOMHandle = document.getElementById("graph");
    let x = evt.pageX - graphDOMHandle.offsetLeft;
    let y = evt.pageY - graphDOMHandle.offsetTop;
    let cell = mainSystem.graph.getCellAt(x, y);
    if (cell.style.search("umk_model") >= 0) {
      let urlQuery = {};
      urlQuery.v = Object.assign({
        cid: cell.id
      }, cell.value);
      urlQuery.lang = (type === 'chart') ? GUIText[settings.lang].chartLang : settings.lang;
      let urlQueryString = packer.pack(JSON.stringify2(urlQuery));
      switch (type) {
        case 'chart':
          this.rType[cell.id] = "chart";
          this.openUrl(cell.id, "chart.html?" + urlQueryString, {
            W: 600,
            H: 300,
            w: 350,
            h: 200
          }, pop); //noreferrer, noopener,
          break;
        default:
          break;
      }
      /*
      setTimeout(() => {
        this.sendParams(simVue.pCell4Exp(cell)); // sends the cell info to the popup window
      }, 100);*/
    }
    evt.stopPropagation();
  },
  openUrl: function (cid, url, spec, pop = true) {
    //console.log(cid);
    if (!this.refsForSinks[cid]) {
      this.refsForSinks[cid] = {};
    }
    if (pop) {
      if (!!this.refsForSinks[cid] && !!this.refsForSinks[cid].extWind && !this.refsForSinks[cid].extWind.closed) {
        this.refsForSinks[cid].extWind.focus();
      } else {
        this.refsForSinks[cid].extWind = window.open(url, "_blank", "width=" + spec.W + ",height=" + spec.H + ",");
      }
    } else {
      if (!!this.refsForSinks[cid] && !!this.refsForSinks[cid].intWind) {
        this.refsForSinks[cid].intWind.winRef.activate();
      } else {
        const tempItem = {};
        tempItem.frmRef = document.createElement('iframe');
        tempItem.frmRef.setAttribute('width', '100%');
        tempItem.frmRef.setAttribute('height', '100%');
        tempItem.frmRef.setAttribute('src', url);
        tempItem.winRef = new mxWindow(mainSystem.graph.getTooltipForCell(mainSystem.graph.getModel().getCell(cid)),
          tempItem.frmRef, this.pointToOpenWind.x, this.pointToOpenWind.y, spec.w, spec.h);
        this.refsForSinks[cid].intWind = tempItem;
        tempItem.winRef.setVisible(true);
        tempItem.winRef.setMaximizable(true);
        tempItem.winRef.setMinimizable(true);
        tempItem.winRef.setClosable(true);
        tempItem.winRef.setResizable(true);
        tempItem.winRef.destroyOnClose = true;
        tempItem.winRef.cid = cid;
        tempItem.winRef.addListener(mxEvent.DESTROY, function (sender, evt, c) {
          //console.log(sender.cid);
          popup.refsForSinks[sender.cid].intWind.frmRef.remove();
          delete popup.refsForSinks[sender.cid].intWind;
        });
        // update this.pointToOpenWind
        this.pointToOpenWind.x = ((this.pointToOpenWind.x + 50 + 200 - document.body.clientWidth) < 0) ? this.pointToOpenWind.x + 5 : 50;
        this.pointToOpenWind.y = ((this.pointToOpenWind.y + 50 + 200 - document.body.clientHeight) < 0) ? this.pointToOpenWind.y + 5 : 50;
      }
    }
  },
  closeAll: function (clearRegisters = false) {
    let keys = Object.keys(this.refsForSinks);
    for (let i = 0; i < keys.length; i++) {
      this.close(keys[i]);
    }
    if (clearRegisters) {
      this.rType = {};
    }
  },
  close: function (cid) {
    if (!!this.refsForSinks[cid]) {
      if (!!this.refsForSinks[cid].extWind) {
        this.refsForSinks[cid].extWind.close();
      }
      if (!!this.refsForSinks[cid].intWind) {
        this.refsForSinks[cid].intWind.winRef.destroy();
      }
      delete this.refsForSinks[cid]
    }
  },
  prepareData: function (cid) {
    //console.log(cid);
    try {
      return function (ele) {
        let val = math.evaluate(ele.o[cid]);
        return {
          t: ele.t,
          v: [math.re(val)._data, math.im(val)._data]
        };
      }
    } catch (e) {
      console.log(e);
    }
  },
  messageWindows: function(cid, msg) {
    console.log(cid);
    if (!!this.refsForSinks[cid]) {
      if (!!this.refsForSinks[cid].extWind &&
        !this.refsForSinks[cid].extWind.closed) {
        this.refsForSinks[cid].extWind.postMessage(msg);
      }
      if (!!this.refsForSinks[cid].intWind) {
        this.refsForSinks[cid].intWind.frmRef.contentWindow.postMessage(msg);
      }
    }
  },
  sendParams: function (prepCell) {
    console.log('sendParams');
    this.messageWindows(prepCell.cid, {c: prepCell});
  },
  sendData: function (cid) {
    console.log('sendData');
    this.messageWindows(cid, {d: simVue.results.map(popup.prepareData(cid))});
  },
  resetAll: function () {
    console.log('resetAll');
    let keys = Object.keys(this.refsForSinks);
    for (let i = 0; i < keys.length; i++) {
      this.messageWindows(keys[i], {r: true});
    }
  }
};