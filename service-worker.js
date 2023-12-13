/**鼠标右击 */
function setupContextMenu() {
  chrome.contextMenus.create({
    id: 'define-word',
    title: '使用LLM Tagging',
    contexts: ['selection']
  });
}

chrome.runtime.onInstalled.addListener(() => {
  setupContextMenu();
});

chrome.contextMenus.onClicked.addListener((data) => {
  const selectedText = selectText();
  fetch('http://127.0.0.1:5000/summarize/words/limit_nums', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ "content": selectedText }),
  })
    .then(response => {
      // console.log("response.json() is ", response.json());
      return response.json();
    })
    .then(data => {
      // Display the returned content in the frontend
      console.log('Response from the backend:', data);
      // Handle the data as needed, e.g., update the UI
      chrome.runtime.sendMessage(
        {
          name: "response-summary-to-sidepanel",
          data: { value: data },
        },
        () => {
          console.log("send response-summary-to-sidepanel");
        }
      );
      // 100ms时间差传递selected-text-to-sidepanel
      // 因为sidepanel打开之前，sidepanel.js收不到消息/document找不到？
      chrome.runtime.sendMessage({ type: "open_side_panel" }, () => {
        //打开侧边栏
        console.log("send open_side_panel to service-worker.js");
      });
    })
    .catch(error => console.error('Error:', error));

    fetch('http://127.0.0.1:5000/summarize/article', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ "content": selectedText }),
    })
      .then(response => {
        // console.log("response.json() is ", response.json());
        return response.json();
      })
      .then(data => {
        // Display the returned content in the frontend
        console.log('Response from the backend:', data);
        // Handle the data as needed, e.g., update the UI
        chrome.runtime.sendMessage(
          {
            name: "response-summary-to-sidepanel2",
            data: { value: data },
          },
          () => {
            console.log("send response-summary-to-sidepanel2");
          }
        );
        // 100ms时间差传递selected-text-to-sidepanel
        // 因为sidepanel打开之前，sidepanel.js收不到消息/document找不到？
        chrome.runtime.sendMessage({ type: "open_side_panel" }, () => {
          //打开侧边栏
          console.log("send open_side_panel to service-worker.js");
        });
      })
      .catch(error => console.error('Error:', error));

  setTimeout(() => {
    chrome.runtime.sendMessage(
      {
        name: "selected-text-to-sidepanel",
        data: { value: selectText() },
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

