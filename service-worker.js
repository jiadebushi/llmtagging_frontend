/**鼠标右击 */
function setupContextMenu() {
  chrome.contextMenus.create({
    id: 'define-word',
    title: 'Define',
    contexts: ['selection']
  });
}

chrome.runtime.onInstalled.addListener(() => {
  setupContextMenu();
});

chrome.contextMenus.onClicked.addListener((data) => {
  setTimeout(() => {
    chrome.runtime.sendMessage(
      {
        name: "selected-text-to-sidepanel",
        data: { value: data.selectionText },
      },
      () => {
        console.log("send selected-text-to-sidepanel");
      }
    );
  }, 100);
  // 100ms时间差传递selected-text-to-sidepanel
  // 因为sidepanel打开之前，sidepanel.js收不到消息/document找不到？
  chrome.runtime.sendMessage({ type: "open_side_panel" }, () => {
    //打开侧边栏
    console.log("send open_side_panel to service-worker.js");
  });
  // chrome.runtime.sendMessage({
  //   name: 'define-word',
  //   data: { value: data.selectionText }
  // });
});

chrome.runtime.onMessage.addListener((message, sender) => {
  // The callback for runtime.onMessage must return falsy if we're not sending a response
  (async () => {
    if (message.type === 'open_side_panel') {
      // This will open a tab-specific side panel only on the current tab.
      console.log("open side panel",new Date().toString())
      await chrome.sidePanel.open({ tabId: sender.tab.id });
      await chrome.sidePanel.setOptions({
        tabId: sender.tab.id,
        path: 'sidepanel.html',
        enabled: true
      });
    }
  })();
});

