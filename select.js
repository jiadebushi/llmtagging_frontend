icon_enable = true;
chrome.runtime.onMessage.addListener(({ name, data }) => {
    if (name === 'enable_tagging') {
        
     }
  });


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
    ourIcon.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEUBAQH////8/Pzo6OhZWVkEBAT29vbR0dEpKSlCQkJ4eHi3t7fd3d3x8fGamppmZmYbGxsTExOAgIBtbW2lpaVPT0/a2tq6urrr6+tHR0chISGxsbGQkJAuLi4WFhZfX19i5L/1AAAB5UlEQVR4nO3c226CQBRGYWYQDwjioR5aa33/tyxWjSdqYtx05rfrS7wjZJYjIDc7SQAAAAAAAAAAAAAAAAAAAAAAAADgFWX1Z5IPi9I7/yzny2KYT+qTZqGzztRrGZXOUjnaf2/x6Jn27fRCJ12yD4wscdpCoHPT0FlH9eWStlJYhC476bcS6Fw/dNhBllQtFVbR3E7zlgrzaApnzrdSOAsddpAlA9dCYn3GQei0k6553043dNaZt1b2cBQ668zY9k/pXhrLbebH3H4Py4iuwt3NZrN4tMDf/1J642geFUfVcvXIRt451vt03Ukie3vav6323zvN6h/xbdFq/svRg4/TKWU07VgaelGmKNRHoT4K9VGoj0J9FOqjUB+F+ijUR6E+CvVRqI9CfRTqo1Afhfoo1EehPgr1UaiPQn0U6qNQH4X6KNRHoT4K9VGoj0J9FOqjUB+F+ijUR6E+CvVRqO8/FvoXK2waQhTRODYDq4bCqKYGPidLktvpNd4tQ6/L1LphDz9DL8pU08y6TuhFmRrf3kzL0GsyNnTXg5NimlVmYXP9vCi/Qi/J2vWVuA29IHsXc2p9LEMfTc0Ld7wYF1FNmzNUDYuu7xbrbWSz2AAAAAAAAAAAAAAAAAAAAAAAAADgT30DTpMUFaGA2bEAAAAASUVORK5CYII=";
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
        console.log(window.getSelection().toString())
        if (window.getSelection().toString().length != 0) { //判断有无选中文字
            setTimeout(function () {
                //设置图标位置
                ourIcon.style.display = "block"; //ourIcon呈现为块级元素
                ourIcon.style.left = left + "px";
                ourIcon.style.top = top + 14 + "px";
            }, 150);
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
        chrome.runtime.sendMessage({
            name: 'selected-text',
            data: { value: selectText() }
        });
        //百度搜索...
        window.open(
            "http://www.baidu.com/baidu?wd=" +
            encodeURIComponent(selectText()) +
            "&tn=cnopera&ie=utf-8"
        );
    };
    document.onclick = function (ev) {
        ourIcon.style.display = 'none';
    }
    document.onmousedown = function (ev) {
        ourIcon.style.display = 'none';
    }
};
