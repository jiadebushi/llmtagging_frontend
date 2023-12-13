chrome.runtime.onMessage.addListener(({ name, data }) => {
  if (name === "selected-text-to-sidepanel") {
    console.log("receive selected-text-to-sidepanel")
    // Hide instructions.
    document.body.querySelector("#select-a-word").style.display = "none";
    document.body.querySelector("#select-a-word2").style.display = "none";
    // Show word and definition.
    document.body.querySelector("#definition-word").innerText = data.value;
    document.body.querySelector("#definition-text").innerText =
      data.value.toLowerCase();
    console.log(document.getElementById("definition-word").innerText);

  }
  else if (name == "response-summary-to-sidepanel") {
    console.log("receive response-summary-to-sidepanel")
    document.body.querySelector("#summary-text").innerText = data.value;

  }
  else if (name == "response-summary-to-sidepanel2") {
    console.log("receive response-summary-to-sidepanel2")
    document.body.querySelector("#summary-text2").innerText = data.value;

  }
});

document.addEventListener("DOMContentLoaded", function () {
  const copy_button = document.getElementById("sidepanel_copy_button");
  const copy_button2 = document.getElementById("sidepanel_copy_button2");
  const copy_button3 = document.getElementById("sidepanel_copy_button3");
  const copy_button4 = document.getElementById("sidepanel_copy_button4");
  const display_button = document.getElementById("sidepanel_nodisplay_button");
  const display_button2 = document.getElementById("sidepanel_nodisplay_button2");
  const edit_button = document.getElementById("sidepanel_edit_button");
  const edit_button2 = document.getElementById("sidepanel_edit_button2");
  const edit_button3 = document.getElementById("sidepanel_edit_button3");
  const edit_button4 = document.getElementById("sidepanel_edit_button4");


  display_button.addEventListener("click", function () {
    console.log("display_button click");
    if(document.body.querySelector("#text_container").style.display !== "none"){
      document.body.querySelector("#text_container").style.display = "none";
    }else{
      document.body.querySelector("#text_container").style.display = "inline";
    }
  });

  display_button2.addEventListener("click", function () {
    console.log("display_button2 click");
    if(document.body.querySelector("#text_container3").style.display !== "none"){
      document.body.querySelector("#text_container3").style.display = "none";
    }else{
      document.body.querySelector("#text_container3").style.display = "inline";
    }
  });

  edit_button.addEventListener("click", function () {
    console.log("edit_button click");
    console.log(document.body.querySelector("#definition-word").contentEditable)
    if(document.body.querySelector("#definition-word").contentEditable !== true){
      document.body.querySelector("#definition-word").contentEditable = true;
    }else{
      document.body.querySelector("#definition-word").contentEditable = false;
    }
  });

  display_button.addEventListener("click", function () {
    var e = document.getElementById("definition-word");
    e.select(); // 选择对象
    document.execCommand("Copy"); // 执行浏览器复制命令
  });

  display_button2.addEventListener("click", function () {
    var e = document.getElementById("definition-word");
    e.select(); // 选择对象
    document.execCommand("Copy"); // 执行浏览器复制命令
  });

  edit_button2.addEventListener("click", function () {
    console.log("edit_button2 click");
    console.log(document.body.querySelector("#summary-text").contentEditable)
    if(document.body.querySelector("#summary-text").contentEditable !== true){
      document.body.querySelector("#summary-text").contentEditable = true;
    }else{
      document.body.querySelector("#summary-text").contentEditable = false;
    }
  });
  edit_button3.addEventListener("click", function () {
    console.log("edit_button click");
    console.log(document.body.querySelector("#definition-word").contentEditable)
    if(document.body.querySelector("#definition-word").contentEditable !== true){
      document.body.querySelector("#definition-word").contentEditable = true;
    }else{
      document.body.querySelector("#definition-word").contentEditable = false;
    }
  });

  edit_button4.addEventListener("click", function () {
    console.log("edit_button4 click");
    console.log(document.body.querySelector("#summary-text2").contentEditable)
    if(document.body.querySelector("#summary-text2").contentEditable !== true){
      document.body.querySelector("#summary-text2").contentEditable = true;
    }else{
      document.body.querySelector("#summary-text2").contentEditable = false;
    }
  });

  copy_button.addEventListener("click", function () {

    const text = document.createElement('textarea');
    text.value = document.body.querySelector("#definition-word").innerText;
    document.body.appendChild(text);
    text.select();
    document.execCommand('Copy');
    text.remove();

     // 隐藏复制按钮
     document.getElementById("sidepanel_copy_button").style.display = "none";

     // 显示对钩
     document.getElementById("checkMark").style.display = "inline";

     // 1秒后恢复按钮并隐藏对钩
     setTimeout(function () {
         document.getElementById("sidepanel_copy_button").style.display = "inline";
         document.getElementById("checkMark").style.display = "none";
     }, 1000);

  });

  copy_button2.addEventListener("click", function () {
    const text = document.createElement('textarea');
    text.value = document.body.querySelector("#summary-text").innerText;
    document.body.appendChild(text);
    text.select();
    document.execCommand('Copy');
    text.remove();

     // 隐藏复制按钮
     document.getElementById("sidepanel_copy_button2").style.display = "none";

     // 显示对钩
     document.getElementById("checkMark2").style.display = "inline";

     // 1秒后恢复按钮并隐藏对钩
     setTimeout(function () {
         document.getElementById("sidepanel_copy_button2").style.display = "inline";
         document.getElementById("checkMark2").style.display = "none";
     }, 1000);
  });

  copy_button3.addEventListener("click", function () {

    const text = document.createElement('textarea');
    text.value = document.body.querySelector("#definition-word").innerText;
    document.body.appendChild(text);
    text.select();
    document.execCommand('Copy');
    text.remove();

     // 隐藏复制按钮
     document.getElementById("sidepanel_copy_button3").style.display = "none";

     // 显示对钩
     document.getElementById("checkMark3").style.display = "inline";

     // 1秒后恢复按钮并隐藏对钩
     setTimeout(function () {
         document.getElementById("sidepanel_copy_button3").style.display = "inline";
         document.getElementById("checkMark3").style.display = "none";
     }, 1000);

  });

  copy_button4.addEventListener("click", function () {
    const text = document.createElement('textarea');
    text.value = document.body.querySelector("#summary-text").innerText;
    document.body.appendChild(text);
    text.select();
    document.execCommand('Copy');
    text.remove();

     // 隐藏复制按钮
     document.getElementById("sidepanel_copy_button4").style.display = "none";

     // 显示对钩
     document.getElementById("checkMark4").style.display = "inline";

     // 1秒后恢复按钮并隐藏对钩
     setTimeout(function () {
         document.getElementById("sidepanel_copy_button4").style.display = "inline";
         document.getElementById("checkMark4").style.display = "none";
     }, 1000);
  });




});
