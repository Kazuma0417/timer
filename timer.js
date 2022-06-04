var time = document.getElementsByClassName('time');
  var time_display=document.getElementsByClassName("time_display");
  function rangeValue(time, target, target2) {
    return function(){
        if(time.value >= 10){
                 target.innerHTML = time.value;
                    target2.innerHTML = time.value;
           }else{
               target.innerHTML = "0"+time.value;
                    target2.innerHTML = "0"+time.value;
           }
    }
  }
  for(var i = 0; i<time.length;i++){
      bar=time[i].getElementsByTagName("input")[0];
      target=time[i].getElementsByTagName("span")[0];
      target2=time_display[i].getElementsByTagName("span")[0];
      bar.addEventListener("input",rangeValue(bar,target,target2));
  }
        
        function timeAll(){
            var hour_all = document.getElementById("hour").value;
            var minute_all = document.getElementById("minute").value;
                var second_all = document.getElementById("second").value;
            var all = Number(hour_all*3600)+Number(minute_all*60)+Number(second_all);
            return all;
        }
        
        var ontheway = false;
        var onthewayallsec = 0;
        
        function start(){
            document.getElementById("bargroup").style.visibility ="hidden";
            document.getElementById("start_button").disabled="disabled";
            document.getElementById("reset_button").disabled="disabled";
            document.getElementById("stop_button").disabled=""
            if(ontheway == false){
                          var allsec = timeAll(); 
               }else{
                   var allsec = onthewayallsec;
               }
            ontheway = false;
            var dt = new Date();
            var endDt = new Date(dt.getTime() + allsec * 1000);
            hour = Math.floor(allsec/3600);
            if(hour < 10){
            largehour.innerHTML="0"+hour;
               }else{
               largehour.innerHTML=hour;
               }
            hour_remainder =Math.floor(allsec%3600);
            minute = Math.floor(hour_remainder/60);
            if(minute < 10){
            largeminute.innerHTML="0"+minute;
               }else{
               largeminute.innerHTML=minute;
               }
            sec=Math.floor(hour_remainder%60);
      if(sec < 10){
            largesecond.innerHTML="0"+sec;
               }else{
               largesecond.innerHTML=sec;
               }
  var count_down = setInterval(function(){
    allsec = allsec-0.1;
          dt = new Date();
            hour = Math.floor(allsec/3600);
            if(hour < 10){
            largehour.innerHTML="0"+hour;
               }else{
               largehour.innerHTML=hour;
               }
            hour_remainder =Math.floor(allsec%3600);
            minute = Math.floor(hour_remainder/60);
            if(minute < 10){
            largeminute.innerHTML="0"+minute;
               }else{
               largeminute.innerHTML=minute;
               }
            sec=Math.floor(hour_remainder%60);
      if(sec < 10){
            largesecond.innerHTML="0"+sec;
               }else{
               largesecond.innerHTML=sec;
               }
    if(dt.getTime() >= endDt.getTime()){
      clearInterval(count_down);
        playaudio();
        largeminute.innerHTML=minute;
        largesecond.innerHTML="00";
          largeminute.innerHTML="00";
          largehour.innerHTML="00";
    }
      if(ontheway == true){
         clearInterval(count_down);
         onthewayallsec = allsec;
         }
  }, 100);
        }
        
        function stop(){
            stopaudio();
            ontheway = true;
            document.getElementById("start_button").disabled="";
            document.getElementById("reset_button").disabled="";
            document.getElementById("stop_button").disabled="disabled"
        }
        
        function reset(){
            location.reload();
        }
        //音楽を鳴らす
        function playaudio(){
            document.getElementById('audio').play();
        }
　　　　　//音楽を止める
        function stopaudio(){
            document.getElementById('audio').pause();
        }