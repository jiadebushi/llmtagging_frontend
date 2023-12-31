window.onload = function () {
    function selectText() {
        if (document.selection) {
            //For ie
            return document.selection.createRange().text;
        } else {
            return window.getSelection().toString();
        }
    }

    //创建图标
    var ourIcon = new Image();
    //用在线的图标
    ourIcon.src =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEUBAQH////8/Pzo6OhZWVkEBAT29vbR0dEpKSlCQkJ4eHi3t7fd3d3x8fGamppmZmYbGxsTExOAgIBtbW2lpaVPT0/a2tq6urrr6+tHR0chISGxsbGQkJAuLi4WFhZfX19i5L/1AAAB5UlEQVR4nO3c226CQBRGYWYQDwjioR5aa33/tyxWjSdqYtx05rfrS7wjZJYjIDc7SQAAAAAAAAAAAAAAAAAAAAAAAADgFWX1Z5IPi9I7/yzny2KYT+qTZqGzztRrGZXOUjnaf2/x6Jn27fRCJ12yD4wscdpCoHPT0FlH9eWStlJYhC476bcS6Fw/dNhBllQtFVbR3E7zlgrzaApnzrdSOAsddpAlA9dCYn3GQei0k6553043dNaZt1b2cBQ668zY9k/pXhrLbebH3H4Py4iuwt3NZrN4tMDf/1J642geFUfVcvXIRt451vt03Ukie3vav6323zvN6h/xbdFq/svRg4/TKWU07VgaelGmKNRHoT4K9VGoj0J9FOqjUB+F+ijUR6E+CvVRqI9CfRTqo1Afhfoo1EehPgr1UaiPQn0U6qNQH4X6KNRHoT4K9VGoj0J9FOqjUB+F+ijUR6E+CvVRqO8/FvoXK2waQhTRODYDq4bCqKYGPidLktvpNd4tQ6/L1LphDz9DL8pU08y6TuhFmRrf3kzL0GsyNnTXg5NimlVmYXP9vCi/Qi/J2vWVuA29IHsXc2p9LEMfTc0Ld7wYF1FNmzNUDYuu7xbrbWSz2AAAAAAAAAAAAAAAAAAAAAAAAADgT30DTpMUFaGA2bEAAAAASUVORK5CYII=";
    ourIcon.alt = "icon_near";
    ourIcon.title = "tagging";
    ourIcon.style.display = "none";
    ourIcon.style.position = "absolute";
    ourIcon.style.cursor = "pointer";
    ourIcon.style.width = "20px";
    document.body.appendChild(ourIcon);
    //绑定鼠标抬起事件
    document.onmouseup = function (ev) {
        var ev = ev || window.event,
            sTop = document.documentElement.scrollTop || document.body.scrollTop,
            left = ev.clientX,
            top = ev.clientY + sTop;
        console.log("selected text is ", window.getSelection().toString());
        if (window.getSelection().toString().length != 0) {
            //判断有无选中文字
            setTimeout(function () {
                //设置图标位置
                let displayOurIcon = true;
                chrome.storage.local.get(["iconNearMouseEnabled"], function (result) {
                    displayOurIcon = result.iconNearMouseEnabled;
                    console.log(
                        "Value of displayOurIcon currently is: " +
                        displayOurIcon
                    );
                });
                setTimeout(() => {
                    ourIcon.style.display = displayOurIcon ? "block" : "none"; //ourIcon呈现为块级元素
                    console.log(ourIcon.style.display);
                }, 200);

                ourIcon.style.left = left + "px";
                ourIcon.style.top = top + 25 + "px";
            }, 200);
        }
    };

    ourIcon.onmouseup = function (ev) {
        var ev = ev || window.event;
        ev.cancelBubble = true;
    };
    ourIcon.onmousedown = function (ev) {
        var ev = ev || window.event;
        ev.cancelBubble = true;
    };

    ourIcon.onclick = function (ev) {
        const selectedText = selectText();
        fetch('http://127.0.0.1:5000/summarize/words/limit_nums', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({"content": selectedText}),
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
                        data: {value: data},
                    },
                    () => {
                        console.log("send response-summary-to-sidepanel");
                    }
                );
                // 100ms时间差传递selected-text-to-sidepanel
                // 因为sidepanel打开之前，sidepanel.js收不到消息/document找不到？
                chrome.runtime.sendMessage({type: "open_side_panel"}, () => {
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
            body: JSON.stringify({"content": selectedText}),
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
                        data: {value: data["summary"]},
                    },
                    () => {
                        console.log("send response-summary-to-sidepanel2");
                    }
                );

            })
            .catch(error => console.error('Error:', error));

        setTimeout(() => {
            chrome.runtime.sendMessage(
                {
                    name: "selected-text-to-sidepanel",
                    data: {value: selectText()},
                },
                () => {
                    console.log("send selected-text-to-sidepanel");
                }
            );
        }, 300);
        // 100ms时间差传递selected-text-to-sidepanel
        // 因为sidepanel打开之前，sidepanel.js收不到消息/document找不到？
        chrome.runtime.sendMessage({type: "open_side_panel"}, () => {
            //打开侧边栏
            console.log("send open_side_panel to service-worker.js");
        });
    };
    document.onclick = function (ev) {
        ourIcon.style.display = "none";
    };
    document.onmousedown = function (ev) {
        ourIcon.style.display = "none";
    };
};
