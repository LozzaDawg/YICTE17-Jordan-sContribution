
// var colB = 'rgb(62, 6, 52)'
// var colG = 'rgb(140, 19, 88)'

var colB = 'rgb(65, 65, 65)'
var colG = 'rgb(96, 96, 96)'


function grid(){
  c.lineWidth=1
  c.strokeStyle=colG
  c.beginPath()
  for(var i = 0;i<Math.ceil(canvas.width/20);i++){
    c.moveTo((i*20),0)
    c.lineTo((i*20),canvas.height)
  }
  for(var i = 0;i<Math.ceil(canvas.height/20);i++){
    c.moveTo(0,(i*20))
    c.lineTo(canvas.width,(i*20))
  }
  c.stroke()
}
