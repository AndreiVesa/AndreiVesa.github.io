window.addEventListener('load', function(){
 
    var point1 = document.getElementById('box1')
    var statusdiv = document.getElementById('statusdiv')
    var startx = 0
    var dist = 0
 
    box1.addEventListener('touchmove', function(e){
        //var touchobj = e.changedTouches[0] // reference first touch point for this event
        var dist = parseInt(touchobj.clientX) - startx
        statusdiv.innerHTML = 'Distanta de la pct A la B: ' + dist + 'px'
        e.preventDefault()
    }, false)
 
}, false) 
