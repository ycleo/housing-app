const { app, BrowserWindow } = require('electron');
// include the Node.js 'path' module at the top of your file
const path = require('node:path');

// modify your existing createWindow() function
let win;
const createWindow = () => {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    // webPreferences: {
    //   preload: path.join(__dirname, 'preload.js')
    // }
  });

  win.loadFile('dist/browser/index.html');
  // win.webContents.openDevTools();

  win.on('closed', function() {
    win = null;
  })
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0)
            createWindow();
    })
});
