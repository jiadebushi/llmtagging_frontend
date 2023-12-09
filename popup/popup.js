document.addEventListener("DOMContentLoaded", function () {
  const setting_icon = document.getElementById("lt-popuphead-settings-icon");
  const toggleSwitchIcon = document.getElementById("switch-button");

  // Add event listener for the settings-icon
  // 点击设置
  setting_icon.addEventListener("click", function () {
    console.log("click");
    window.open("https://github.com/");
  });

  // Initialize the toggle switch based on the stored state
  chrome.storage.local.get("iconNearMouseEnabled", function (data) {
    toggleSwitchIcon.checked = data.iconNearMouseEnabled !== false; // Default to true if undefined
  });

  // Add event listener for the switch-button
  // 是否选中文字后显示图标
  toggleSwitchIcon.addEventListener("change", function () {
    const enabled = toggleSwitchIcon.checked;
    chrome.storage.local.set({ iconNearMouseEnabled: enabled }, () => {
      if (chrome.runtime.lastError) {
        console.error(
          `Error setting extensionEnabled: ${chrome.runtime.lastError}`
        );
      } else {
        console.log(`Extension enabled set to: ${enabled}`);
        statusLabel.textContent = enabled ? "On" : "Off";
      }
    });
    chrome.storage.local.get(["iconNearMouseEnabled"], function (result) {
      console.log(
        "Value of iconNearMouseEnabled currently is: " +
          result.iconNearMouseEnabled
      );
    });
  });
});

