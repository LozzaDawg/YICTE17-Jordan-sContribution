
function Wire(sx,sy,dx,dy,pO,pI){
  this.sx=sx
  this.sy=sy
  this.dx=dx
  this.dy=dy
  this.pO=pO
  this.pI=pI
  wires.push(this)
}

Wire.prototype.render = function () {
  c.lineWidth=2
  c.strokeStyle='rgb(170, 179, 0)'
  c.beginPath()
  c.moveTo(this.sx,this.sy)
  c.lineTo(this.dx,this.dy)
  c.stroke()
};

Wire.prototype.adjustPos = function () {
  this.sx=this.pO.x+this.pO.width
  this.sy=this.pO.y+this.pO.height/2
  this.dx=this.pI.x
  this.dy=this.pI.y+this.pI.height/2
};

Wire.prototype.update = function () {
  if(this.pI.wired==true && this.pO.wired==true) console.log('prongs wired')
  this.adjustPos()
  this.render()
};
