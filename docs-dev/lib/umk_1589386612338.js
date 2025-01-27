class umk_1589386612338 extends umk_model {
  Icon() {
    return {
      //html: blockUtils.makeIcon(this.id),
      html: TeX.prepDisp("{\\Large "+((this.Parameters.typ.Value[0][0] === "ew")?"e^{u_{i,j}}":"e^u")+"}"),
      inLabels: null,
      outLabels: null,
      splStyle: null
    };
  }
  Evaluate() {
    if (this.CompParams["ew"]) {
      this.outputs[0] = math.exp(this.inputs[0]);
    } else {
      this.outputs[0] = math.expm(this.inputs[0]);
    }
  }
  Details() {
    if (this.Parameters.typ.Value[0][0] === "ew") {
      return TeX.prepDisp("y_{i,j}(t) = e^{u_{i,j}}");
    } else {
      return TeX.prepDisp("y(t)=e^u");
    }
  }
  genCompParams() {
    this.CompParams["ew"] = (this.Parameters.typ.Value[0][0] === "ew");
  }
  constructor(obj) {
    super(Object.assign({
      Parameters: {
        "typ": {
          "Name": {
            "en-us": "Type of operation",
            "es-mx": "Tipo de operación"
          },
          "Dimension": "Scalar",
          "Type": "Options",
          "Options": {
            ew: {
              "en-us": "Elementwise operation",
              "es-mx": "Operación por elementos"
            },
            mt: {
              "en-us": "Matrix operation",
              "es-mx": "Operación matricial"
            }
          },
          "Value": [
            ["ew"]
          ]
        }
      },
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