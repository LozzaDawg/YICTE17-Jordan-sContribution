function Prong(x,y,width,height,circuitArray,id){
  this.x=x
  this.y=y
  this.width=width
  this.height=height
  this.text="BOI WE CAN STORE VALUES N' SHIT"
  this.selcted = false
  this.id=id
  this.wired=false
  circuitArray.push(this)
}

Prong.prototype.changeText = function (text) {
    this.text=text
};

Prong.prototype.render = function () {
    if(this.selected==true){
      c.fillStyle='rgb(147, 0, 0)'
      c.fillRect(this.x-5,this.y-5,this.width+10,this.height+10)
    }
    c.fillStyle = 'rgb(228, 213, 247)'
    c.fillRect(this.x,this.y,this.width,this.height)
};
