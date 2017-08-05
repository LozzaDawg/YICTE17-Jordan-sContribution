

var mousePos
var left
var right
var canClick = true
left = 0
right = 2

function getMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}

canvas.addEventListener('mousemove', function(evt) {
  mousePos = getMousePos(canvas, evt);
}, false)

canvas.addEventListener('mouseup', function(evt) {
  if(evt.button === right){
    //Move IC's
    for(var i=0;i<circuits.length;i++){
      if(pointWithinBox(circuits[i],mousePos)){
        if(circuits[i].selected==false){
          stopClickforABit()
          circuits[i].selected=true;
          return
        }
        if(circuits[i].selected==true){
          stopClickforABit()
          circuits[i].selected=false;
        }
      }
    }

  }

  if(evt.button === left){
    //Make Wire
    for(var i=0;i<circuits.length;i++){
      if(pointWithinBox(circuits[i],mousePos)){
        var ic=circuits[i]
        //Clear All Prongs
        // for(var j=0;j<ic.inpA.length;j++){
        //   ic.inpA[j].selected=false
        // }
        // for(var j=0;j<ic.oupA.length;j++){
        //   ic.inpA[j].selected=false
        // }
        //
        // ic.pNum++
        //
        // if(ic.pNum>ic.inpA.length){
        //   if(ic.pNum-ic.inpA.length>ic.oupA.length){
        //     ic.pNum=0
        //   }else ic.oupA[ic.pNum-1].selected=true
        // }else ic.inpA[ic.pNum-1].selected=true
        //

      }
    }
  }
}, false)

function stopClickforABit(){
  canClick = false
  setTimeout(startclickagain,60)
}
function startclickagain(){
  canClick = true
}

function pointWithinBox(entity,entity2){
	return(entity2.x < entity.x + entity.width &&
	entity2.x > entity.x &&
	entity2.y < entity.y + entity.height &&
	entity2.y > entity.y)
}

function pointWithinBoxFromSeperatePoints(entity,entityx,entityy){
	return(entityx < entity.x + entity.width &&
	entityx > entity.x &&
	entityy < entity.y + entity.height &&
	entityy > entity.y)
}
