window.addEventListener('load', function(){
 
    var point = document.getElementById('point')
    var statusdiv = document.getElementById('statusdiv')
    var startx = 0
    var dist = 0
 
    point.addEventListener('touchstart', function(e){
        var touchobj = e.changedTouches[0] // reference first touch point (ie: first finger)
        startx = parseInt(touchobj.clientX) // get x position of touch point relative to left edge of browser
        statusdiv.innerHTML = 'Status: touchstart<br> ClientX: ' + startx + 'px'
        e.preventDefault()
    }, false)
 
    point.addEventListener('touchmove', function(e){
        var touchobj = e.changedTouches[0] // reference first touch point for this event
        var dist = parseInt(touchobj.clientX) - startx
        statusdiv.innerHTML = 'Status: touchmove<br> Distance traveled: ' + dist + 'px'
        e.preventDefault()
    }, false)
 
}, false)
