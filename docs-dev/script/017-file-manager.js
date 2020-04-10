// save and load the uymak models
const uyamakFileManager = {
  fileName: null,
  xml: function () {
    let encoder = new mxCodec();
    return mxUtils.getXml(encoder.encode(mainSystem.graph.getModel()));
  },
  js2: function () {
    return JSON.stringify2(mainSystem.graph.getModel());
  },
  download: function (filename, text) {
    let element = document.createElement('a');
    let blob = new Blob([text], {
      type: "text/plain;charset=utf-8"
    });
    let url = window.URL.createObjectURL(blob);

    element.style.display = 'none';
    element.href = url;
    element.download = filename;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    window.URL.revokeObjectURL(url);
  },
  saveLocal: function () {
    this.fileName = prompt(GUIText[settings.lang].enterFileName, GUIText[settings.lang].myUmkModel);
    if (!!this.fileName) {
      this.download(this.fileName + ".umk", this.ab2str(pako.deflate(this.xml())));
    }
  },
  openLocal: function () {
    this.fileInp.click();
  },
  fileInp: null,
  ab2str: function (buf) {
    return String.fromCharCode.apply(null, new Uint16Array(buf));
  },
  str2ab: function (str) {
    var buf = new ArrayBuffer(str.length * 2); // 2 bytes for each char
    var bufView = new Uint16Array(buf);
    for (var i = 0, strLen = str.length; i < strLen; i++) {
      bufView[i] = str.charCodeAt(i);
    }
    return buf;
  }
};
(() => {
  uyamakFileManager.fileInp = document.createElement('input');
  uyamakFileManager.fileInp.type = 'file';
  uyamakFileManager.fileInp.onchange = (e) => {
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.onload = function (x) {
      let xmlString = uyamakFileManager.ab2str(pako.inflate(x.target.result));
      let doc = mxUtils.parseXml(xmlString);
      let codec = new mxCodec(doc);
      //console.log(doc);
      codec.decode(doc.documentElement, mainSystem.graph.getModel());
    };
    reader.readAsText(file);
    //console.log(file);
    uyamakFileManager.fileInp.value = "";
  }
})();



//Handles the umk_model 's value
var oldEncode = mxCodec.prototype.encode;
mxCodec.prototype.encode = function (obj) {
  /*mxLog.show();
  mxLog.debug('mxCodec.encode: obj=' + mxUtils.getFunctionName(obj.constructor));*/
  if (obj.constructor.name === "Object" || obj.constructor.name.search(/umk_\d{13}/g) >= 0) {
    //console.log(obj.constructor.name);
    return;
  } else {
    let xmlOut = oldEncode.apply(this, arguments);
    if (xmlOut.getAttribute('style') && xmlOut.getAttribute('style').search('umk_model') >= 0) {
      xmlOut.setAttribute("value", JSON.stringify2(obj.value));
    }
    return xmlOut;
  }


  /*
  console.log(obj.constructor.name);
  let a = oldEncode.apply(this, arguments);
  //console.log(a);
  return a;
  return oldEncode.apply(this, arguments);
  */
};

/*
const mxCodecEncodeCell = mxCodec.prototype.encodeCell;
mxCodec.prototype.encodeCell = function(cell,node,includeChildren	) {
  console.log(arguments);
  if (cell.style && cell.style.search('umk_model')>=0) {
    arguments[3] = false;
  }
  mxCodecEncodeCell.apply(this, arguments);
}
*/
/*


function compress(text) {
    var byteArray = new TextEncoder().encode(text);
    var cs = new CompressionStream('deflate'); // 'deflate' or 'gzip'
    var writer = cs.writable.getWriter();
    writer.write(byteArray);
    writer.close();
    return new Response(cs.readable).arrayBuffer();
}

function decompress(byteArray) {
    var cs = new DecompressionStream('deflate');
    var writer = cs.writable.getWriter();
    writer.write(byteArray);
    writer.close();
    return new Response(cs.readable).arrayBuffer().then(function (arrayBuffer) {
        return new TextDecoder().decode(arrayBuffer);
    });
}

/*
var test = "http://www.ScriptCompress.com - Simple Packer/Minify/Compress JavaScript Minify, Fixify & Prettify 75 JS Obfuscators In 1 App 25 JS Compressors (Gzip, Bzip, LZMA, etc) PHP, HTML & JS Packers In 1 App PHP Source Code Packers Text Packer HTML Packer or v2 or v3 or LZW Twitter Compress or More Words DNA & Base64 Packer (freq tool) or v2 JS JavaScript Code Golfer Encode Between Quotes Decode Almost Anything Password Protect Scripts HTML Minifier v2 or Encoder or Escaper CSS Minifier or Compressor v2 SVG Image Shrinker HTML To: SVG or SVGZ (Gzipped) HTML To: PNG or v2 2015 JS Packer v2 v3 Embedded File Generator Extreme Packer or version 2 Our Blog DemoScene JS Packer Basic JS Packer or New Version Asciify JavaScript Escape JavaScript Characters UnPacker Packed JS JavaScript Minify/Uglify Text Splitter/Chunker Twitter, Use More Characters Base64 Drag 'n Drop Redirect URL DataURI Get Words Repeated LZMA Archiver ZIP Read/Extract/Make BEAUTIFIER & CODE FIXER WHAK-A-SCRIPT JAVASCRIPT MANGLER 30 STRING ENCODERS CONVERTERS, ENCRYPTION & ENCODERS 43 Byte 1px GIF Generator Steganography PNG Generator WEB APPS VIA DATAURL OLD VERSION OF WHAK PAKr Fun Text Encrypt Our Google";

console.time('compress');
compress(test).then(function (x) {
  console.timeEnd('compress');
  console.log('compressed length', x.byteLength);
  console.time('decompress');
  decompress(x).then(function (y) {
    console.timeEnd('decompress');
    console.log('decompressed length', y.length);
    console.assert(test === y);
  });
});*/