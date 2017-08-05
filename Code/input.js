
keys = []

testShift = function(){
	if(keys[16]) return true;
}


document.body.addEventListener('keydown', function (e) {
	keys[e.keyCode] = true;
})

document.body.addEventListener('keyup', function (e) {
	keys[e.keyCode] = false;
})
