'use strict';
const fs = require('fs');
const WASM_URL = 'wasm/httpclient.wasm';

var wasm;

var serverName = ""

function init() {
  serverName = document.getElementById('serverName').value;
  const go = new Go();
  WebAssembly.instantiate(fs.readFileSync(WASM_URL), go.importObject).then(function (obj) {
    wasm = obj.instance;
    go.run(wasm);
  })
}