//DECLARE VARIABLES YOU'LL USE IN THE FUNCTIONS --

var button1 = document.getElementById('generator');
var height = document.getElementById('inputHeight');
var	character = document.getElementById('chooseChar');

//FIRST FUNCTION GETS VALUES, CHECKS IF FIELDS ARE EMPTY OR NOT, CALLS NEXT FUNCTION.. WHICH CREATES OBJECT

function getValues(){
	console.log("getValues running")
	//CANT HAVE THESE VARIABLES NAMED SAME AS ABOVE...
	var hei = height.value;
	var cha = character.value;
	if (hei === '' || cha === ''){
	alert("You must enter a height and character value.");
	}
	//CALL OBJECT FUNCITON WITH THESE VALUES FROM FIRST FUNC
	createObject(hei, cha);
}

//CREATE OBJECT IN THIS FUNCTION, NAMING ARGUMENTS WHATEVER YOU WANT (h, c) --
//VALUES 'hei' AND 'cha' ARE PASSED TO CREATEOBJECT IN h and c -- (h, c)
function createObject(h, c){
	//MAKE SURE THIS FUNCTION WORKS--
	console.log("createObject runs");
	//CREATE YOUR OBJECT, NAMING h and c ANYTHING YOU WANT--
	var treeObject = {
		ht: h,
		char: c
	}
	//CALL NEXT FUNCTION
	treeBuilder(treeObject);
}

function treeBuilder(treeObject){
	//CREATE WHAT HAS TO COME FIRST BEFORE CHARACTER
	var space = " ";
	//DECLARE WHAT h and c ARE BY PULLING THEM FROM treeObject--
	var h = treeObject.ht;
	var c = treeObject.char;
	//LOOP THROUGH THE VALUES, LOGGING THEM INSIDE OF THE LOOP TO CREATE YOUR TREE EFFECT
	for (var i = 0; i < h; i++){
		//DEFINE SPACE FORMULA, NAMING IT SOMETHING DIFFERENT!!!
		sp = space.repeat(h-1-i);
		//DEFINE CHARACTER, NAMING IT SOMETHING DIFFERENT!!! or it will not work
		ch = c.repeat(2*i + 1);
		//LOG THE CONCATENATION OF THE TWO VALUES
		console.log(sp + ch);
	}
}

//BUTTON "GROW YOUR TREE"--
button1.addEventListener("click", getValues);



//ENTER KEY FOR HEIGHT
height.addEventListener("keyup", function(e) {
	console.log("keyup", e.keyCode);
	if (e.keyCode === 13){
		//have to call the same function as your button for it to work (getValues)
		getValues();
	}
});
//ENTER KEY FOR CHARACTER
character.addEventListener("keyup", function(e) {
	console.log("keyup", e.keyCode);
	if (e.keyCode === 13){
		getValues();
	}
});










