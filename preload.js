const { contextBridge, ipcRenderer } = require('electron');

// 暴露受保护的 API 给渲染进程
contextBridge.exposeInMainWorld('electronAPI', {
  // 可以在这里添加需要与主进程通信的 API
  showMessage: (message) => ipcRenderer.invoke('show-message', message)
});
