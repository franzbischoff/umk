class umk_1589609383222 extends umk_model {
    Icon() {
      return {
        html: blockUtils.makeIcon(this.id),
        inLabels: "",
        outLabels: null,
        splStyle: ""
      };
    }
    Evaluate() {
      this.outputs[0] = math.asech(this.inputs[0]);
    }
    Details() {
      return TeX.prepDisp("y_{i,j}(t) = \\sech^{-1}\\left({u_{i,j}(t)}\\right)");
    }
    constructor(obj) {
      super(Object.assign({
        TerminalsIn: {
          min: 1,
          max: 1,
          value: 1,
          editable: false
        },
        TerminalsOut: {
          min: 1,
          max: 1,
          value: 1,
          editable: false
        }
      }, obj));
    }
  }