// JavaScript Document
 function GetRTime(){
	 var Endtime = new Date('2016/08/08 00:00:00');
	 var Nowtime = new Date();
	 var t =Endtime.getTime() - Nowtime.getTime();
	 var d=0;
	 var h=0;
	 var m=0;
	 var s=0;
	 if(t>=0){
		 d=Math.floor(t/1000/60/60/24);
		 h=Math.floor(t/1000/60/60%24);
		 m=Math.floor(t/1000/60%60);
		 s=Math.floor(t/1000%60);
	 }
	 document.getElementById("t_d").innerHTML = d + "��";
	 document.getElementById("t_h").innerHTML = h + "ʱ";
	 document.getElementById("t_m").innerHTML = m + "��";
	 document.getElementById("t_s").innerHTML = s + "��";
 }
	 setInterval(GetRTime,600);