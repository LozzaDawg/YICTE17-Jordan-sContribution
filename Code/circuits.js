
var prW = 15
var prH = 8

function Circuit(x,y,inp,oup,multiplyer){
  this.inp=inp
  this.oup=oup
  this.x=x
  this.y=y
  this.height=Math.max(this.inp,this.oup)*20+20
  this.width=60
  this.selected=false
  this.inpA=[]
  this.oupA=[]
  this.pNum=0
  this.id=circuits.length
  circuits.push(this)
  this.generateProngs()
}

Circuit.prototype.generateProngs = function () {
  for(var i=0;i<this.inp+1;i++){
    if(i==0)continue
    var inpProng = new Prong(this.x-prW,this.y+20*i-(prH/2),prW,prH,this.inpA,i-1)
  }
  for(var i=0;i<this.oup+1;i++){
    if(i==0)continue
    var oupProng = new Prong(this.x+this.width,this.y+20*i-(prH/2),prW,prH,this.oupA,i-1)
  }
};

Circuit.prototype.snap = function () {
  this.x=Math.round(this.x/20)*20;
  this.y=Math.round(this.y/20)*20;
  this.upadateProngPos()
};

Circuit.prototype.updatePos = function () {
  this.x=mousePos.x-this.width/2
  this.y=mousePos.y-this.height/2
  this.upadateProngPos()
};

Circuit.prototype.upadateProngPos = function () {
  for(var i=0;i<this.inp+1;i++){
    if(i==0)continue
    this.inpA[i-1].x=this.x-prW
    this.inpA[i-1].y=this.y+20*i-(prH/2)
  }
  for(var i=0;i<this.oup+1;i++){
    if(i==0)continue
    this.oupA[i-1].x=this.x+this.width
    this.oupA[i-1].y=this.y+20*i-(prH/2)
  }
}

Circuit.prototype.render = function () {
  c.fillStyle = 'rgba(20, 20, 20, 0.6)'
  c.fillRect(this.x-6,this.y-2,this.width+12,this.height+8)
  c.fillStyle = 'rgb(15, 15, 15)'

  c.fillRect(this.x,this.y,this.width,this.height)
  for(var i=0;i<this.inpA.length;i++){
    this.inpA[i].render()
  }
  for(var i=0;i<this.oupA.length;i++){
    this.oupA[i].render()
  }
};


Circuit.prototype.update = function () {
  if(testShift()!=true) this.selected=false
  if(this.selected && testShift()){
    this.updatePos()
  }else this.snap()
  this.render()
};
