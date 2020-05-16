class umk_1589386898267 extends umk_model {
  Icon() {
    return {
      html: blockUtils.makeIcon(this.id),
      inLabels: null,
      outLabels: null,
      splStyle: null
    };
  }
  Evaluate() {
    if ((this.Parameters.d.Value._data.length === 1) && (this.Parameters.d.Value._data[0].length === 1)) {
      this.outputs[0] = math.mod(this.inputs[0], this.Parameters.d.Value._data[0][0]);
    } else {
      if ((this.inputs[0]._data.length === 1) && (this.inputs[0]._data[0].length === 1)){
        this.outputs[0] = math.mod(this.inputs[0]._data[0][0], this.Parameters.d.Value);
      } else {
        this.outputs[0] = math.mod(this.inputs[0], this.Parameters.d.Value);
      }
    }
  }
  Details() {
    return blockUtils.makeIcon(this.id);
  }
  constructor(obj) {
    super(Object.assign({
      Parameters: {
        "d": {
          "Name": {
            "en-us": "Divisor $(n)$",
            "es-mx": "Divisor $(n)$"
          },
          "Dimension": "Matrix",
          "Type": "Real",
          "Value": [
            [10]
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