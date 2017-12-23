        function getStyle(obj,name){
              if(obj.currentStyle){
                return obj.currentStyle[name];
              }else{
                return getComputedStyle(obj,false)[name];
              }
     }

     function start(obj,attr,target){
        clearInterval(obj.timer);
       obj.timer=setInterval(function(){
        var cur=0;
        if(cur=='opacity'){
            cur=Math.round(parseFloat(getStyle(obj,attr))*100);
        }else{
           cur= parseInt(getStyle(obj,attr))
        }
        var speed=(target-cur)/4;
       // var cur=parseInt(getStyle(obj,'height'));
        speed+=speed>0?Math.ceil(speed):Math.floor(speed);//缓冲运动速度取整
          if(cur==target){
            clearInterval(obj.timer)
          }else{
            if(attr=='opacity'){
            obj.style.filter='alpha(opacity:'+(cur+speed)+')';
            obj.style.opacity=(cur+speed)/100;
          // document.title=obj.style.opacity;
          }else{
            obj.style[attr]=cur+speed+'px';
           }
          }
        },30)

     }
