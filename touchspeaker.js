var d = new Date();
document.getElementById("id_business_version").innerHTML = "Business version = " + d.getFullYear() + "." + (d.getMonth()+1) + "." + d.getDate() + ".2";

var canvas = document.getElementById("id_canvas");
var context = canvas.getContext("2d");

var speech=new webkitSpeechRecognition();
speech.onresult=on_speech_results;
speech.onspeechend=on_speech_end;
speech.lang="en-US";
speech.maxAlternatives=4;

var culoare=["#0000FF"];
canvas.addEventListener("touchstart",on_start_touch);


//---------------------------------------

function on_start_touch(e)
{
var touches = e.touches;
for(var i=0; i<touches.length; i++)
{
	context.beginPath();
	context.arc(touches.item(i).pageX,touches.item(i).pageY,20,0,2*Math.PI);
	context.strokeStyle=culoare[i];
	context.fillStyle=culoare[i];
	context.fill();
	context.lineWidth=2;
	context.stroke(); 
}	
}

//---------------------------------------

function recognize(){
	speech.start();
	
}

function on_speech_end(){
	speech.stop();
	
}

function on_speech_results(e){
	for (var i=0;i<speech.maxAlternatives;i++){
	document.getElementById("id_speech").innerHTML+=e.results.item(0).item(i).transcript+"	"+e.results.item(0).item(i).confidence*100+"%"+"<br>";
}
}
