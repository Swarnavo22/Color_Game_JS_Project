let numSquares=6
const square=document.querySelectorAll(".square")
const displayColor=document.querySelector(".displayColor")
let message=document.querySelector("#message")
let reset=document.querySelector("#reset")
let easyBtn=document.querySelector("#easy")
let hardBtn=document.querySelector("#hard")
let modeBtn=document.querySelectorAll(".mode")
const h1=document.querySelector("h1")
//console.log(square)
let colors=generateRandomColor(numSquares)
// [
// "rgb(255, 0, 0)",
//  "rgb(255, 255, 0)",
//  "rgb(255, 255, 255)",
//  "rgb(0, 255, 0)",
//  "rgb(255, 0, 255)",
//  "rgb(0, 0, 255)",
// ]
// const pickedColor=pickRandomColor(colors)
let pickedColor=colors[pickRandomColor()]
// console.log(pickedColor)
displayColor.innerHTML=pickedColor
function matchColor(color){
	for(let i=0;i<square.length;i++){
		// console.log(square[i])
		square[i].style.backgroundColor=color;
	}
}
function pickRandomColor(){
	return Math.floor(Math.random()*colors.length)
	// return  colors[randomNum]
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
		// alert("You clicked inside square");
		// alert(this.style.backgroundColor)
		let choosenColor=this.style.backgroundColor;
		// console.log(choosenColor)
		//Compare with pickedColor
		if(choosenColor===pickedColor){
			h1.style.backgroundColor=pickedColor
			message.textContent="Correct"
			// square[i].style.backgroundColor=pickedColor
			matchColor(pickedColor)
			// alert('You are right')
			reset.textContent="Play Again?"
		}else{
			// alert("You are wrong")
			message.textContent="Try Again"
			this.style.backgroundColor="#232323";
		}
	})
}

reset.addEventListener('click',()=>{
	// alert("You clicked reset")
	//generate new colors
	colors=generateRandomColor(numSquares)
	// console.log(colors)
	//pick a color
	pickedColor=colors[pickRandomColor()]
	//Show this in DisplayColor
	displayColor.innerHTML=pickedColor
	//Display the generated color
	for(let i=0;i<square.length;i++){
		square[i].style.backgroundColor=colors[i]
	}  
	message.textContent=""
	// this.textContent="New Colors"  Not Working using this because of arrao function
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