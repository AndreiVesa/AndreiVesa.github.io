window.addEventListener('load', function(){
window.addEventListener("deviceorientation",on_device_orientation);

    var box1 = document.getElementById('box1')
    var statusdiv = document.getElementById('statusdiv')
    var startx = 0
    var dist = 0
 
    box1.addEventListener('touchmove', function(e){
        var touchobj = e.changedTouches[0] // reference first touch point for this event
        var dist = parseInt(touchobj.clientX) - startx
        statusdiv.innerHTML = 'Distanta de la pct A la B: ' + dist + 'px'
        e.preventDefault()
    })
 
}); 

//----------------

function on_device_orientation(e)
{
	
	document.getElementById("id_x").innerHTML = "x=" +e.beta;
	document.getElementById("id_y").innerHTML = "y="+e.gamma;
	document.getElementById("id_z").innerHTML = "z="+e.alpha;
	
}


