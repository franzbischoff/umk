const{app:app,BrowserWindow:BrowserWindow}=require("electron"),path=require("path");require("electron-squirrel-startup")&&app.quit();const createWindow=()=>{const e=new BrowserWindow({width:800,height:600,webPreferences:{nodeIntegration:!1,contextIsolation:!1,preload:path.join(__dirname,"preload.js")}});e.on("close",function(e){const o=require("electron").dialog.showMessageBoxSync(this,{type:"question",buttons:["Yes","No"],title:"Confirm",message:"Unsaved data will be lost.\n\nAre you sure you want to quit?"});1===o&&e.preventDefault()}),e.loadFile(path.join(__dirname,"index.html")),e.setMenu(null),e.maximize()};app.on("ready",createWindow),app.on("window-all-closed",()=>{"darwin"!==process.platform&&app.quit()}),app.on("activate",()=>{0===BrowserWindow.getAllWindows().length&&createWindow()});