let numSquares=6
const square=document.querySelectorAll(".square")
const displayColor=document.querySelector(".displayColor")
let message=document.querySelector("#message")
let reset=document.querySelector("#reset")
let easyBtn=document.querySelector("#easy")
let hardBtn=document.querySelector("#hard")
let modeBtn=document.querySelectorAll(".mode")
const h1=document.querySelector("h1")
let colors=generateRandomColor(numSquares)
let pickedColor=colors[pickRandomColor()]
displayColor.innerHTML=pickedColor
function matchColor(color){
	for(let i=0;i<square.length;i++){
		square[i].style.backgroundColor=color;
	}
}
function pickRandomColor(){
	return Math.floor(Math.random()*colors.length)
}

//generate random color
function generateRandomColor(num){
	//create colors array
	let colors=[]
	for(let i=0;i<num;i++){

		let r=Math.floor(Math.random()*256)
		let g=Math.floor(Math.random()*256)
		let b=Math.floor(Math.random()*256)
		let randomColor=`rgb(${r}, ${g}, ${b})`
		colors.push(randomColor)
	}
	return colors
}
for(let i=0;i<square.length;i++){
	square[i].style.backgroundColor=colors[i];
	square[i].addEventListener("click",function(){
		let choosenColor=this.style.backgroundColor;
		if(choosenColor===pickedColor){
			h1.style.backgroundColor=pickedColor
			message.textContent="Correct"
			matchColor(pickedColor)
			reset.textContent="Play Again?"
		}else{
			message.textContent="Try Again"
			this.style.backgroundColor="#232323";
		}
	})
}

reset.addEventListener('click',()=>{
	colors=generateRandomColor(numSquares)
	pickedColor=colors[pickRandomColor()]
	//Show this in DisplayColor
	displayColor.innerHTML=pickedColor
	//Display the generated color
	for(let i=0;i<square.length;i++){
		square[i].style.backgroundColor=colors[i]
	}  
	message.textContent=""
	reset.textContent="New Colors"
})
// easyBtn.addEventListener("click",function(){
// 	// alert("You clicked easy button")
// 	this.classList.add("selected")
// 	hardBtn.classList.remove("Selected")
// 	numSquares=3
// 	//generate new colors
// 	colors=generateRandomColor(numSquares)
// 	// console.log(colors)
// 	//pick a color
// 	pickedColor=colors[pickRandomColor()]
// 	//Show this in DisplayColor
// 	displayColor.textContent=pickedColor
// 	//Display the generated color
// 	for(let i=0;i<square.length;i++){
// 		if(colors[i]){
// 		square[i].style.backgroundColor=colors[i]
// 	  }else{
// 	  	square[i].style.display="none"
// 	  }
// 	}  
// })
// hardBtn.addEventListener("click",function(){
// 	// alert("You clicked hard button")
// 	this.classList.add("selected")
// 	easyBtn.classList.remove("Selected")
// 	numSquares=6
// 	//generate new colors
// 	colors=generateRandomColor(numSquares)
// 	// console.log(colors)
// 	//pick a color
// 	pickedColor=colors[pickRandomColor()]
// 	//Show this in DisplayColor
// 	displayColor.textContent=pickedColor
// 	//Display the generated color
// 	for(let i=0;i<square.length;i++){
// 		square[i].style.backgroundColor=colors[i]
// 		square[i].style.display="block"
// 	  }
// })

for(let i=0;i<modeBtn.length;i++){
	modeBtn[i].addEventListener("click",function(){
		easyBtn.classList.remove("selected")
		hardBtn.classList.remove("selected")
		this.classList.add("selected")
		console.log(this.textContent)
		if(this.textContent === "Easy"){
			console.log(this.textContent)
			numSquares=3;
			console.log("Num easy is:"+numSquares)
		}else{
			console.log(this.textContent)
			numSquares=6;
			console.log("Num hard is:"+numSquares)
		}
		// numSquares = (this.textContent === "Hard") ? 3 : 6
		// console.log(numSquares)
		//generate new colors
		colors=generateRandomColor(numSquares)
		// console.log(colors)
		//pick a color
		pickedColor=colors[pickRandomColor()]
		//Show this in DisplayColor
		displayColor.textContent=pickedColor
		//Display the generated color
		for(let i=0;i<square.length;i++){
			if(colors[i]){
				square[i].style.display="block"
				square[i].style.backgroundColor=colors[i]
	  		}else{
	  			square[i].style.display="none"
	  		}
		}
	})
}
