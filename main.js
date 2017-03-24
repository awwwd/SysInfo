const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

let win;

function createWindow() {
    win = new BrowserWindow({
        width:  800, 
        height: 600, 
        icon:   __dirname + '/img/icon.png'
    });

    win.loadURL(url.format({
        pathname:   path.join(__dirname, 'index.html'),
        protocol:   'file',
        slashes:    true
    }));

    win.on('closeed', () => {
        win = null
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
})