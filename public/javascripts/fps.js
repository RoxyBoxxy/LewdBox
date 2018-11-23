var lastCalledTime;
var fps;
var refresh =0;
function getFPS() {

  if(!lastCalledTime) {
     lastCalledTime = Date.now();
     fps = 0;
     return;
  }
  delta = (Date.now() - lastCalledTime)/1000;
  lastCalledTime = Date.now();
  fps = 1/delta;
    refresh ++;
        if(refresh > 8)
            {refresh = 0
                       
    console.log(fps);
    document.getElementById('fpscontanor').innerHTML = '<a>'+Math.floor(fps)+' FPS</a>';
                       }
}
