//获取selected-text，对应select.js 51行
chrome.runtime.onMessage.addListener(({ name, data }) => {
  if (name === "selected-text-to-sidepanel") {
    console.log("receive selected-text-to-sidepanel")
    // Hide instructions.
    document.body.querySelector("#select-a-word").style.display = "none";
    // Show word and definition.
    document.body.querySelector("#definition-word").innerText = data.value;
    document.body.querySelector("#definition-text").innerText =
      data.value.toLowerCase();
    console.log(document.getElementById("definition-word").innerText);

  }
  else if(name == "response-summary-to-sidepanel"){
    console.log("receive response-summary-to-sidepanel")
    document.body.querySelector("#summary-text").innerText = data.value;

  }
});
