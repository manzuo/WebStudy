window.onload = function () {
    var oImg = document.getElementById('ico');
    var drawerclass = document.getElementsByClassName("drawer");
    var drawer = drawerclass[0];
    var onOff = true;  //此处相当于设置了一个开关，通过设置布尔值，进而通过改变布尔值来完成if的判断！
    oImg.onclick = function () {
        if (onOff) {
            oImg.src = 'cha.png';
            onOff = false;
            drawer.style.display='block';
            
        } else {
            oImg.src = 'drawer.png';
            onOff = true;
            drawer.style.display='none';
        };
    };
};