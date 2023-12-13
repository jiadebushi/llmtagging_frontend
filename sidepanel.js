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
  else if (name == "response-summary-to-sidepanel") {
    console.log("receive response-summary-to-sidepanel")
    document.body.querySelector("#summary-text").innerText = data.value;

  }
});

document.addEventListener("DOMContentLoaded", function () {
  const copy_button = document.getElementById("sidepanel_copy_button");
  const display_button = document.getElementById("sidepanel_nodisplay_button");
  const edit_button = document.getElementById("sidepanel_edit_button");
  const edit_button2 = document.getElementById("sidepanel_edit_button2");
  const copy_button2 = document.getElementById("sidepanel_copy_button2");

  // //复制按钮事件绑定
  // $("#sidepanel_copy_button").on("tap", function () {
  //   //获取input对象
  //   var obj = document.getElementById("definition-word").innerText;
  //   //选择当前对象
  //   obj.select();
  //   try {
  //     //进行复制到剪切板
  //     if (document.execCommand("Copy", "false", null)) {
  //       //如果复制成功
  //       alert("复制成功！");
  //     } else {
  //       //如果复制失败
  //       alert("复制失败！");
  //     }
  //   } catch (err) {
  //     //如果报错
  //     alert("复制错误！")
  //   }
  // })

  display_button.addEventListener("click", function () {
    console.log("display_button click");
    if(document.body.querySelector("#text_container").style.display !== "none"){
      document.body.querySelector("#text_container").style.display = "none";
    }else{
      document.body.querySelector("#text_container").style.display = "inline";
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

  edit_button2.addEventListener("click", function () {
    console.log("edit_button2 click");
    console.log(document.body.querySelector("#summary-text").contentEditable)
    if(document.body.querySelector("#summary-text").contentEditable !== true){
      document.body.querySelector("#summary-text").contentEditable = true;
    }else{
      document.body.querySelector("#summary-text").contentEditable = false;
    }
  });

  copy_button.addEventListener("click", function () {

    const text = document.createElement('textarea');
    text.value = document.body.querySelector("#definition-word").innerText;
    document.body.appendChild(text);
    text.select();
    document.execCommand('Copy');
    text.remove();
    alert("copied")
  });

  copy_button2.addEventListener("click", function () {
    const text = document.createElement('textarea');
    text.value = document.body.querySelector("#summary-text").innerText;
    document.body.appendChild(text);
    text.select();
    document.execCommand('Copy');
    text.remove();
    alert("copied")
  });



});
