'use strict';
const {app, BrowserWindow, Menu, shell, screen} = require('electron');
const path = require('path');

const isWindows = process.platform === 'win32';
const isMac = process.platform === 'darwin';
const isLinux = process.platform === 'linux';

if (isMac) {
  // TODO
  Menu.setApplicationMenu(Menu.buildFromTemplate([
    { role: 'appMenu' },
    { role: 'fileMenu' },
    { role: 'editMenu' },
    { role: 'viewMenu' },
    { role: 'windowMenu' },
    { role: 'help' }
  ]));
} else {
  Menu.setApplicationMenu(null);
}

app.enableSandbox();

const createWindow = (windowOptions) => {
  const options = {
    title: "Back to Jetty's World",
    icon: path.resolve(__dirname, "icon.png"),
    useContentSize: true,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
    },
    show: true,
    width: 480,
    height: 360,
    ...windowOptions,
  };

  const activeScreen = screen.getDisplayNearestPoint(screen.getCursorScreenPoint());
  const bounds = activeScreen.workArea;
  options.x = bounds.x + ((bounds.width - options.width) / 2);
  options.y = bounds.y + ((bounds.height - options.height) / 2);

  const window = new BrowserWindow(options);
  return window;
};

const createProjectWindow = () => {
  const window = createWindow({
    backgroundColor: "#000000",
    width: 1920,
    height: 1080,
    minWidth: 50,
    minHeight: 50,
  });
  window.loadFile(path.resolve(__dirname, './index.html'));
};

const createDataWindow = (dataURI) => {
  const window = createWindow({});
  window.loadURL(dataURI);
};

const isSafeOpenExternal = (url) => {
  try {
    const parsedUrl = new URL(url);
    return parsedUrl.protocol === 'https:' || parsedUrl.protocol === 'http:';
  } catch (e) {
    // ignore
  }
  return false;
};

const isDataURL = (url) => {
  try {
    const parsedUrl = new URL(url);
    return parsedUrl.protocol === 'data:';
  } catch (e) {
    // ignore
  }
  return false;
};

const openLink = (url) => {
  if (isSafeOpenExternal(url)) {
    shell.openExternal(url);
  } else if (isDataURL(url)) {
    createDataWindow(url);
  }
};

app.on('web-contents-created', (event, contents) => {
  contents.setWindowOpenHandler((details) => {
    setImmediate(() => {
      openLink(details.url);
    });
    return {action: 'deny'};
  });
  contents.on('will-navigate', (e, url) => {
    e.preventDefault();
    openLink(url);
  });
});

app.on('window-all-closed', () => {
  app.quit();
});

app.whenReady().then(() => {
  createProjectWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createProjectWindow();
    }
  });
});
