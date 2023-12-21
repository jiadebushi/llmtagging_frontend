chrome.runtime.onMessage.addListener(({name, data}) => {
    if (name === "selected-text-to-sidepanel") {
        console.log("receive selected-text-to-sidepanel");
        // Hide instructions.
        document.body.querySelector("#select-a-word").style.display = "none";
        document.body.querySelector("#select-a-word2").style.display = "none";
        document.body.querySelector("#select-a-word3").style.display = "none";
        // Show word and definition.
        document.body.querySelector("#definition-word").innerText = data.value;

        document.body.querySelector("#definition-word2").innerText = data.value;

        document.body.querySelector("#definition-word3").innerText = data.value;

        // document.body.querySelector("#definition-text").innerText =
        //   data.value.toLowerCase();
        console.log(document.getElementById("definition-word").innerText);
    } else if (name == "response-summary-to-sidepanel") {
        console.log("receive response-summary-to-sidepanel");
        document.body.querySelector("#summary-text").innerText = data.value;
    } else if (name == "response-summary-to-sidepanel2") {
        console.log("receive response-summary-to-sidepanel2");
        document.body.querySelector("#summary-text2").innerText = data.value;
    } else if (name == "response-summary-to-sidepanel3") {
        console.log("receive response-summary-to-sidepanel3");
        document.body.querySelector("#summary-text3").innerText = data.value;
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const copy_button = document.getElementById("sidepanel_copy_button");
    const copy_button2 = document.getElementById("sidepanel_copy_button2");
    const copy_button3 = document.getElementById("sidepanel_copy_button3");
    const copy_button4 = document.getElementById("sidepanel_copy_button4");
    const copy_button5 = document.getElementById("sidepanel_copy_button5");
    const copy_button6 = document.getElementById("sidepanel_copy_button6");

    const display_button = document.getElementById("sidepanel_nodisplay_button");
    const display_button2 = document.getElementById("sidepanel_nodisplay_button2");
    const display_button3 = document.getElementById("sidepanel_nodisplay_button3");

    const unfold_button = document.getElementById("sidepanel_unfold_button");
    const unfold_button2 = document.getElementById("sidepanel_unfold_button2");
    const unfold_button3 = document.getElementById("sidepanel_unfold_button3");

    const edit_button = document.getElementById("sidepanel_edit_button");
    const edit_button2 = document.getElementById("sidepanel_edit_button2");
    const edit_button3 = document.getElementById("sidepanel_edit_button3");
    const edit_button4 = document.getElementById("sidepanel_edit_button4");
    const edit_button5 = document.getElementById("sidepanel_edit_button5");
    const edit_button6 = document.getElementById("sidepanel_edit_button6");

    // display_button.addEventListener("click", function () {
    //   console.log("display_button click");
    //   console.log(
    //     "#text_container1 style.display is",
    //     document.body.querySelector("#text_container").style.display
    //   );

    //   if (
    //     document.body.querySelector("#text_container").style.display === "inline"
    //   ) {
    //     document.body.querySelector("#text_container").style.display = "none";
    //   } else {
    //     document.body.querySelector("#text_container").style.display = "inline";
    //   }
    // });
    display_button.addEventListener("click", function () {
        // alert("click");
        console.log("display_button click");
        console.log(
            "#text_container style.display is",
            document.body.querySelector("#text_container").style.display
        );

        if (
            document.body.querySelector("#text_container").style.display === "inline"
        ) {
            document.body.querySelector("#text_container").style.display = "none";
            document.body.querySelector("#sidepanel_nodisplay_button").style.display = "none";
            document.body.querySelector("#sidepanel_unfold_button").style.display = "inline";
        } else {
            document.body.querySelector("#text_container").style.display = "inline";
        }
    });

    unfold_button.addEventListener("click", function () {
        console.log("unfold_button click");
        console.log(
            "#text_container style.display is",
            document.body.querySelector("#text_container").style.display
        );

        if (
            document.body.querySelector("#text_container").style.display === "none"
        ) {
            document.body.querySelector("#text_container").style.display = "inline";
            document.body.querySelector("#sidepanel_unfold_button").style.display = "none";
            document.body.querySelector("#sidepanel_nodisplay_button").style.display = "inline";
        } else {
            document.body.querySelector("#text_container").style.display = "none";
        }
    })

    display_button2.addEventListener("click", function () {
        // alert("click");
        console.log("display_button2 click");
        console.log(
            "#text_container3 style.display is",
            document.body.querySelector("#text_container3").style.display
        );

        if (
            document.body.querySelector("#text_container3").style.display === "inline"
        ) {
            document.body.querySelector("#text_container3").style.display = "none";
            document.body.querySelector("#sidepanel_nodisplay_button2").style.display = "none";
            document.body.querySelector("#sidepanel_unfold_button2").style.display = "inline";
        } else {
            document.body.querySelector("#text_container3").style.display = "inline";
        }
    });

    unfold_button2.addEventListener("click", function () {
        console.log("unfold_button2 click");
        console.log(
            "#text_container3 style.display is",
            document.body.querySelector("#text_container3").style.display
        );

        if (
            document.body.querySelector("#text_container3").style.display === "none"
        ) {
            document.body.querySelector("#text_container3").style.display = "inline";
            document.body.querySelector("#sidepanel_unfold_button2").style.display = "none";
            document.body.querySelector("#sidepanel_nodisplay_button2").style.display = "inline";
        } else {
            document.body.querySelector("#text_container3").style.display = "none";
        }
    })

    display_button3.addEventListener("click", function () {
        // alert("click");
        console.log("display_button3 click");
        console.log(
            "#text_container3 style.display is",
            document.body.querySelector("#text_container5").style.display
        );

        if (
            document.body.querySelector("#text_container5").style.display === "inline"
        ) {
            document.body.querySelector("#text_container5").style.display = "none";
            document.body.querySelector("#sidepanel_nodisplay_button3").style.display = "none";
            document.body.querySelector("#sidepanel_unfold_button3").style.display = "inline";
        } else {
            document.body.querySelector("#text_container5").style.display = "inline";
        }
    });

    unfold_button3.addEventListener("click", function () {
        console.log("unfold_button3 click");
        console.log(
            "#text_container5 style.display is",
            document.body.querySelector("#text_container5").style.display
        );

        if (
            document.body.querySelector("#text_container5").style.display === "none"
        ) {
            document.body.querySelector("#text_container5").style.display = "inline";
            document.body.querySelector("#sidepanel_unfold_button3").style.display = "none";
            document.body.querySelector("#sidepanel_nodisplay_button3").style.display = "inline";
        } else {
            document.body.querySelector("#text_container5").style.display = "none";
        }
    })


    edit_button.addEventListener("click", function () {
        console.log("edit_button click");
        console.log(
            document.body.querySelector("#definition-word").contentEditable
        );
        if (
            document.body.querySelector("#definition-word").contentEditable !== true
        ) {
            document.body.querySelector("#definition-word").contentEditable = true;
        } else {
            document.body.querySelector("#definition-word").contentEditable = false;
        }
    });

    edit_button2.addEventListener("click", function () {
        console.log("edit_button2 click");
        console.log(document.body.querySelector("#summary-text").contentEditable);
        if (document.body.querySelector("#summary-text").contentEditable !== true) {
            document.body.querySelector("#summary-text").contentEditable = true;
        } else {
            document.body.querySelector("#summary-text").contentEditable = false;
        }
    });

    edit_button3.addEventListener("click", function () {
        console.log("edit_button3 click");
        console.log(
            document.body.querySelector("#definition-word2").contentEditable
        );
        if (
            document.body.querySelector("#definition-word2").contentEditable !== true
        ) {
            document.body.querySelector("#definition-word2").contentEditable = true;
        } else {
            document.body.querySelector("#definition-word2").contentEditable = false;
        }
    });

    edit_button4.addEventListener("click", function () {
        console.log("edit_button4 click");
        console.log(document.body.querySelector("#summary-text2").contentEditable);
        if (
            document.body.querySelector("#summary-text2").contentEditable !== true
        ) {
            document.body.querySelector("#summary-text2").contentEditable = true;
        } else {
            document.body.querySelector("#summary-text2").contentEditable = false;
        }
    });

    edit_button5.addEventListener("click", function () {
        console.log("edit_button5 click");
        console.log(
            document.body.querySelector("#definition-word3").contentEditable
        );
        if (
            document.body.querySelector("#definition-word3").contentEditable !== true
        ) {
            document.body.querySelector("#definition-word3").contentEditable = true;
        } else {
            document.body.querySelector("#definition-word3").contentEditable = false;
        }
    });

    edit_button6.addEventListener("click", function () {
        console.log("edit_button6 click");
        console.log(document.body.querySelector("#summary-text3").contentEditable);
        if (
            document.body.querySelector("#summary-text3").contentEditable !== true
        ) {
            document.body.querySelector("#summary-text3").contentEditable = true;
        } else {
            document.body.querySelector("#summary-text3").contentEditable = false;
        }
    });


    copy_button.addEventListener("click", function () {
        console.log("edit button click");

        const text = document.createElement("textarea");
        text.value = document.body.querySelector("#definition-word").innerText;
        document.body.appendChild(text);
        text.select();
        document.execCommand("Copy");
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
        const text = document.createElement("textarea");
        text.value = document.body.querySelector("#summary-text").innerText;
        document.body.appendChild(text);
        text.select();
        document.execCommand("Copy");
        text.remove();

        // 隐藏复制按钮
        document.getElementById("sidepanel_copy_button2").style.display = "none";

        // 显示对钩
        document.getElementById("checkMark2").style.display = "inline";

        // 1秒后恢复按钮并隐藏对钩
        setTimeout(function () {
            document.getElementById("sidepanel_copy_button2").style.display =
                "inline";
            document.getElementById("checkMark2").style.display = "none";
        }, 1000);
    });

    copy_button3.addEventListener("click", function () {
        const text = document.createElement("textarea");
        text.value = document.body.querySelector("#definition-word2").innerText;
        document.body.appendChild(text);
        text.select();
        document.execCommand("Copy");
        text.remove();

        // 隐藏复制按钮
        document.getElementById("sidepanel_copy_button3").style.display = "none";

        // 显示对钩
        document.getElementById("checkMark3").style.display = "inline";

        // 1秒后恢复按钮并隐藏对钩
        setTimeout(function () {
            document.getElementById("sidepanel_copy_button3").style.display =
                "inline";
            document.getElementById("checkMark3").style.display = "none";
        }, 1000);
    });

    copy_button4.addEventListener("click", function () {
        const text = document.createElement("textarea");
        text.value = document.body.querySelector("#summary-text2").innerText;
        document.body.appendChild(text);
        text.select();
        document.execCommand("Copy");
        text.remove();

        // 隐藏复制按钮
        document.getElementById("sidepanel_copy_button4").style.display = "none";

        // 显示对钩
        document.getElementById("checkMark4").style.display = "inline";

        // 1秒后恢复按钮并隐藏对钩
        setTimeout(function () {
            document.getElementById("sidepanel_copy_button4").style.display =
                "inline";
            document.getElementById("checkMark4").style.display = "none";
        }, 1000);
    });

    copy_button5.addEventListener("click", function () {
        const text = document.createElement("textarea");
        text.value = document.body.querySelector("#definition-word3").innerText;
        document.body.appendChild(text);
        text.select();
        document.execCommand("Copy");
        text.remove();

        // 隐藏复制按钮
        document.getElementById("sidepanel_copy_button5").style.display = "none";

        // 显示对钩
        document.getElementById("checkMark5").style.display = "inline";

        // 1秒后恢复按钮并隐藏对钩
        setTimeout(function () {
            document.getElementById("sidepanel_copy_button5").style.display =
                "inline";
            document.getElementById("checkMark5").style.display = "none";
        }, 1000);
    });

    copy_button6.addEventListener("click", function () {
        const text = document.createElement("textarea");
        text.value = document.body.querySelector("#summary-text3").innerText;
        document.body.appendChild(text);
        text.select();
        document.execCommand("Copy");
        text.remove();

        // 隐藏复制按钮
        document.getElementById("sidepanel_copy_button6").style.display = "none";

        // 显示对钩
        document.getElementById("checkMark6").style.display = "inline";

        // 1秒后恢复按钮并隐藏对钩
        setTimeout(function () {
            document.getElementById("sidepanel_copy_button6").style.display =
                "inline";
            document.getElementById("checkMark6").style.display = "none";
        }, 1000);
    });
});


// const display_button = document.getElementById("sidepanel_nodisplay_button");
// display_button.onclick = function () {
//     // alert("click");
//     console.log("display_button click");
//     console.log(
//         "#text_container1 style.display is",
//         document.body.querySelector("#text_container").style.display
//     );
//
//     if (
//         document.body.querySelector("#text_container").style.display === "inline"
//     ) {
//         document.body.querySelector("#text_container").style.display = "none";
//         document.body.querySelector("#sidepanel_nodisplay_button").style.display = "none";
//         document.body.querySelector("#sidepanel_unfold_button").style.display = "inline";
//     } else {
//         document.body.querySelector("#text_container").style.display = "inline";
//     }
// };
//
// document.getElementById("sidepanel_unfold_button").onclick = function () {
//     console.log("unfold_button click");
//     console.log(
//         "#text_container1 style.display is",
//         document.body.querySelector("#text_container").style.display
//     );
//
//     if (
//         document.body.querySelector("#text_container").style.display === "none"
//     ) {
//         document.body.querySelector("#text_container").style.display = "inline";
//         document.body.querySelector("#sidepanel_unfold_button").style.display = "none";
//         document.body.querySelector("#sidepanel_nodisplay_button").style.display = "inline";
//     } else {
//         document.body.querySelector("#text_container").style.display = "none";
//     }
// }


