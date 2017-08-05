function Circuit(x,y,width,height,inp,oup,multiplyer){
  this.x=x*multiplyer
  this.y=y*multiplyer
  this.height=height*multiplyer
  this.width=width*multiplyer
  this.inp=inp
  this.oup=oup
  this.inpDist=this.height/(this.inp+1)
  this.oupDist=this.height/(this.oup+1)
  circuits.push(this)
}


Circuit.prototype.render = function () {
  c.fillStyle = 'black'
  c.fillRect(this.x,this.y,this.width,this.height)

  for(var i=0;i<this.inp+1;i++){
    if(i==0)continue
    var width=this.height/10
    var height=this.width/10
    c.fillStyle='grey'
    c.fillRect(this.x-width,this.y+this.inpDist*i-height/2,width,height)
  }
  for(var i=0;i<this.oup+1;i++){
    if(i==0)continue
    var width=this.height/10
    var height=this.width/10
    c.fillStyle='grey'
    c.fillRect(this.x+this.width,this.y+this.oupDist*i-height/2,width,height)
  }

};
