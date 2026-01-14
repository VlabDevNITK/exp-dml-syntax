let simsubscreennum=0;
let temp=0;

function navNext()
{
	
	for(temp=0;temp<2;temp++)
	{ 
		document.getElementById("canvas"+temp).style.display="none";
	}
	
	simsubscreennum+=1;
	//
	document.getElementById("canvas"+simsubscreennum).style.display="block";
	document.getElementById("nextButton").style.display="none";
	// magic();

	
	
}

// function animatearrow()
// {
//     if (document.getElementById('arrow1').style.visibility=="hidden")
//         document.getElementById('arrow1').style.visibility="visible";
//     else
//         document.getElementById('arrow1').style.visibility="hidden";
// }

// function myStopFunction() 
// {
//      clearInterval(myInt);
//      document.getElementById('arrow1').style.visibility="hidden";
// }

// function blinkArrow(l,t,d,h)
// {
// 	myInt = setInterval(function(){ animatearrow(); }, 500);
// 	document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:"+l+"px; top:"+t+"px; height:"+h+"px; z-index: 10;";
// 	document.getElementById("arrow1").style.WebkitTransform = "rotate("+d+"deg)"; 
// 	document.getElementById("arrow1").style.msTransform = "rotate("+d+"deg)";
// 	document.getElementById("arrow1").style.transform = "rotate("+d+"deg)";
// }

// function magic()
// {
// 	if(simsubscreennum==1)
// 	{
// 		blinkArrow(520,270,360,40);
		
// 	}
	
	
// }
var morseTimeout;
var isPlaying = false;
const initialX = 0; 
const initialY = 0; 
const morsePlayElements = document.getElementsByClassName('morsePlay');
function buttonClick(row, column) {
	
	
  // document.getElementById('morse-Cover').style.display ="block";  
	Array.from(morsePlayElements).forEach(element => {
	
	index = 0;
	isPlaying = false;
	element.classList.remove('hide');	
	document.getElementById("morseCodeDisplay1").innerHTML = "";

});
	// Dictionary for Morse code names and values
	var morseCodes = {
	 "1-1": { name: "/", value: "-..-." },
	 "1-2": { name: ".", value: ".-.-.-" },
	 "1-3": { name: ",", value: "--..--" },
	 "1-4": { name: "?", value: "..--.." },
	 "2-1": { name: "'", value: ".----." },
	 "2-2": { name: ":", value: "---..." },
	 "2-3": { name: ";", value: "-.-.-." },
	 "2-4": { name: "=", value: "-...-" },
	 "3-1": { name: "+", value: ".-.-." },
	 "3-2": { name: "!", value: "-.-.--" },
	 "3-3": { name: "(", value: "-.--." },
	 "3-4": { name: ")", value: "-.--.-" },
	 "4-1": { name: "&", value: ".-..." },
	 "4-2": { name: "-", value: "-....-" },
	 "4-3": { name: "_", value: "..--.-" },
	 "4-4": { name: "\"", value: ".-..-." },
	 "5-1": { name: "$", value: "...-..-" },
	 "5-2": { name: "@", value: ".--.-." }
	 
   };
   var playButton=document.getElementById('ply');   
   var buttonKey = row + "-" + column;
   var morseCode =  morseCodes[buttonKey].value;
   var morseCodeName =   morseCodes[buttonKey].name ;
   var playButton = document.getElementById('ply');
   var backButton = document.getElementById('back-button');	
   var selectLabel = document.getElementById('selectSyntax1');	 
	

   document.getElementById('ad').style.display ="block";  
   document.getElementById("dm1").innerHTML=morseCodeName;
  //  document.getElementById("selctedSyntax").innerHTML=morseCodeName;
   document.getElementById('Syntax').innerHTML=morseCodeName;
//    backButton.style.visibility ="visible";
   selectLabel.innerHTML = "Selected Syntax";
   document.getElementById('container-Cover').style.display = "none"
   document.getElementById('ply').addEventListener('click',function(){
	
	if (!isPlaying) {
		
		playButton.disabled = true;
		// backButton.disabled = true;
			index = 0;

		// Play Morse code audio
		playMorseCodeAudio(morseCode);

		// Display Morse code sequence
		displayMorseCodeSequence(morseCode);
	}
});
	//   console.log(buttonKey)
	  clearTimeout(morseTimeout);
	 
}

function displayMorseCodeSequence(morseCode) {  isPlaying = true; 
    var playButton = document.getElementById('ply');
    var pTag = document.getElementById("morseCodeDisplay1");
    pTag.innerHTML = "";
    index = 0;

    function displayNextSymbol() {
        if (index < morseCode.length) {
            const symbol = morseCode[index];
            pTag.innerHTML += symbol;
            index++;
            morseTimeout = setTimeout(displayNextSymbol, 1000);
        } else {
            playButton.disabled = false;
            isPlaying = false; 
            // document.getElementById('repeat').style.display = "block";
        }
    }
    displayNextSymbol();
	
}


function goBack(){
	if (!isPlaying) {
        var selectLabel = document.getElementById('selectSyntax1');
        selectLabel.innerHTML = "Select the syntax:";
        document.getElementById('container-Cover').style.display = "block";
        document.getElementById('ad').style.display = "none";

        index = 0;
        isPlaying = false;

        Array.from(morsePlayElements).forEach(element => {
            element.classList.add('hide');
        });
	}
}

function playMorseCodeAudio(morseCode) {
	
	let index = 0;
		function playNextSymbol() {
			if (index < morseCode.length) {
				const symbol = morseCode[index];
				const Context = new AudioContext(); 
				var oscillator = Context.createOscillator();
				oscillator.frequency.value=600;
				oscillator.type = 'sine';
				oscillator.connect(Context.destination);
				oscillator.start();
				if (symbol === '.') {
					setTimeout(function() { oscillator.stop();},100);
					
				} else if (symbol === '-') {
					setTimeout(function() { oscillator.stop();},300);
					
				}
				index++;
				morseTimeout = setTimeout(playNextSymbol, 1000);				
			}

		}
		playNextSymbol();
		
	}
	
	function Table(){
		document.getElementById('clickHidden').style.display ="none";
         document.getElementById('container-Cover').style.display ="block";

		 
	}
function ButtonMorse(){
	document.getElementById('Syntax').style.display="block";
	
}




// function movingTable(){
// 	const div = document.getElementById('container-Cover');

	
// 	const targetX = 0;
// 	const targetY = 45;

	
// 	div.style.transform = `translate(${targetX}px, ${targetY}px)`;
	
// } 

// function resetDiv() {
// 	const div = document.getElementById('container-Cover');

// 	// Reset the div to the initial position
// 	div.style.transform = `translate(${initialX}px, ${initialY}px)`;
// }
function repeat(){
	
	console.log("clickedrepeat");
	
simsubscreennum = 1;
   
	document.getElementById("canvas2").style.visibility="hidden";
  
 
document.getElementById("canvas1").style.visibility="visible";
document.getElementById("repeat").style.display="none";


document.getElementById("morseCodeDisplay1").innerHTML = "";
document.getElementById("dm1").innerHTML = "";
document.getElementById("selctedSyntax").innerHTML = "";
document.getElementById('clickHidden').style.d="visible";
index = 0;
isPlaying = false;
clearTimeout(morseTimeout);


}




	









	
	 
	
		

























