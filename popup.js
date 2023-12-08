document.addEventListener('DOMContentLoaded', function () {
    const statusLabel = document.getElementById('statusLabel');
    const toggleSwitch = document.getElementById('toggleExtension');

    // Initialize the toggle switch based on the stored state
    chrome.storage.local.get('extensionEnabled', function (data) {
        toggleSwitch.checked = data.extensionEnabled !== false; // Default to true if undefined
        statusLabel.textContent = toggleSwitch.checked ? 'On' : 'Off';
    });

    // Add event listener for the toggle switch
    toggleSwitch.addEventListener('change', function () {
        const enabled = toggleSwitch.checked;
        chrome.storage.local.set({ 'extensionEnabled': enabled }, () => {
            if (chrome.runtime.lastError) {
                console.error(`Error setting extensionEnabled: ${chrome.runtime.lastError}`);
            } else {
                console.log(`Extension enabled set to: ${enabled}`);
                statusLabel.textContent = enabled ? 'On' : 'Off';
            }
        });
        chrome.storage.local.get(['extensionEnabled'], function (result) {
            console.log('Value currently is ' + result);
        });

    });
});
