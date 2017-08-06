
var canvas = document.getElementById("canvas");
canvas.width = 860;
canvas.height = 620;
canvas.oncontextmenu = function (e) {
  e.preventDefault();
};
var c = canvas.getContext("2d");

var circuits=[]
var wires=[]

var circ1=new Circuit(100,20,0,1,50)
var circ2=new Circuit(250,20,1,1,50)
var circ3=new Circuit(400,20,2,2,50)
var circ4=new Circuit(550,20,3,2,50)

function update(){
  c.clearRect(0,0,canvas.width,canvas.height);
  c.fillStyle=colB
  c.fillRect(0,0,canvas.width,canvas.height);
  grid()
  for(var i=0;i<circuits.length;i++){
    circuits[i].update()
  }
  for(var i=0;i<wires.length;i++){
    wires[i].update()
  }

}

this.setInterval(update,30);
