/* eslint-disable no-unused-expressions */
// Modules to control application life and create native browser window
const { app, BrowserWindow, globalShortcut, dialog } = require('electron')
const path = require('path'); 

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({})
  
  // and load the index.html of the app.
  if (process.env.NODE_ENV === 'development') {
    mainWindow.loadURL('http://localhost:3000');
  } else {  
    mainWindow.loadURL(`file://${path.join(app.getAppPath(), 'build/index.html')}`);
  }
  
  const child = require('child_process').spawn('pkexec', ['dvhasp']);

  child.stdout.on('data', function (data) {
      if(data.indexOf("nohasp") !== -1){
        dialog.showMessageBox({
          type: 'info',
          message: '加密锁检测',
          detail: '未检测到加密锁,请插入加密锁!',
          buttons: ['好的'] 
        });
      }
      console.log('stdout: ' + data);
  });

  child.stderr.on('data', function (data) {
      console.log('stderr: ' + data);
      app.quit();
  });

  child.stdin.write('1\n'); // Attention!
  // Open the DevTools.
  mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
    child.stdin.end(); // 结束加密锁检查
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.

// 启动单个实例
const gotTheLock = app.requestSingleInstanceLock()

if (!gotTheLock) {
  app.quit()
} else {
  app.on('second-instance', (event, commandLine, workingDirectory) => {
    // Someone tried to run a second instance, we should focus our window.
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore()
      mainWindow.focus()
    }
  })

  // Create myWindow, load the rest of the app, etc...
  app.on('ready', () => {
    createWindow();
  })
}

app.on('will-quit', function () {
  globalShortcut.unregisterAll()
})

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  app.quit()
})

app.on('activate', function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
