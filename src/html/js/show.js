function detectZoom (){ 
  var ratio = 0,
    screen = window.screen,
    ua = navigator.userAgent.toLowerCase();
  var top1class = document.getElementsByClassName("top");
  var top1 = top1class[0];
  var top2class = document.getElementsByClassName("top2");
  var top2 = top2class[0];
  var drawerclass = document.getElementsByClassName("drawer");
  var drawer = drawerclass[0];
  var oImg = document.getElementById('ico');
   if (window.devicePixelRatio !== undefined) {
      ratio = window.devicePixelRatio;
  }
  else if (~ua.indexOf('msie')) {  
    if (screen.deviceXDPI && screen.logicalXDPI) {
      ratio = screen.deviceXDPI / screen.logicalXDPI;
    }
  }
  else if (window.outerWidth !== undefined && window.innerWidth !== undefined) {
    ratio = window.outerWidth / window.innerWidth;
  }
   
   if (ratio){
    ratio = Math.round(ratio * 100);
  }
   if(ratio>=375){
    top1.style.display='none';
    top2.style.display='block';
    
  }
   if(ratio<375){
    drawer.style.display='none'
    oImg.src = 'drawer.png';
    top2.style.display='none';
    top1.style.display='block';
  }
};
  var t1 = setInterval("detectZoom();",1000);
