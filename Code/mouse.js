

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
  if(evt.button === left && testShift()){
    stopClickforABit()
    //Move IC's
    for(var i=0;i<circuits.length;i++){
      if(pointWithinBox(circuits[i],mousePos)){
        if(circuits[i].selected==false){
          circuits[i].selected=true;
          return
        }
        if(circuits[i].selected==true){
          circuits[i].selected=false;
        }
      }
    }

  }

  if(evt.button === left){
    stopClickforABit()
    //Make Wire
    for(var i=0;i<circuits.length;i++){
      var ic=circuits[i]
      for(var j=0;j<ic.inpA.length;j++){
        if(pointWithinBox(ic.inpA[j],mousePos)){

          for(var a=0;a<circuits.length;a++){
            for(var b=0;b<circuits[a].oupA.length;b++){
              //if an output is selected and the selected input is not wired
              if(circuits[a].oupA[b].selected==true && ic.inpA[j].wired==false){
                //There is an output selected
                //If the input is on the same chip as output, skip
                if(ic.id==circuits[a].id){
                  console.log('cant put the output of one chip to the input of the same chip')
                  return
                }
                circuits[a].oupA[b].selected=false
                circuits[a].oupA[b].wired=true
                ic.inpA[j].wired=true
                var wire=new Wire(circuits[a].oupA[b].x+circuits[a].oupA[b].width,circuits[a].oupA[b].y+circuits[a].oupA[b].height/2,ic.inpA[j].x,ic.inpA[j].y+ic.inpA[j].height/2,circuits[a].oupA[b],ic.inpA[j])
              }
            }
          }

        }
      }
      for(var j=0;j<ic.oupA.length;j++){
        var anyOupsSelectedforOup=false
        if(pointWithinBox(ic.oupA[j],mousePos)){

          for(var a=0;a<circuits.length;a++){
            for(var b=0;b<circuits[a].oupA.length;b++){
              if(circuits[a].oupA[b].selected==true) anyOupsSelectedforOup=true
            }
          }
          if(anyOupsSelectedforOup==false && ic.oupA[j].wired==false) ic.oupA[j].selected=true

        }
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
