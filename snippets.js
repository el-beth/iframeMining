var delayInSec=3, i=0;

function executeAfterWait(){
	if (document.stop != true){
  		document.querySelector('div.x1jl3cmp:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)').click();
  		console.log(i++);
  		document.title=i;
  		// this is where other execution stuff gets put.
		setTimeout(executeAfterWait, delayInSec*1000);
	};
};

function stopRecursion() {
	document.stop = true;
}

function appendElement(){
	let e = document.createElement('div');
	e.style.height = "100px";
	e.style.backgroundColor= "red";
	document.body.appendChild(e);	
}

document.stop = false;
executeAfterWait();
// this stops after 10 recursions
// setTimeout(()=>{document.stop = true;}, delayInSec*10*1000);

// to print a document
// window.print()


// fmovies.to
// this website clears console, DOM inspector and network tab in Dev Tools, so need a secondary means of extracting the embeds.
// the M.O. I see good enough as well as expditent
// creating the iframe to embed the page that will get scraped

// start from about:home or about:privatebrowsing
if (document.location != 'about:home' && document.location != 'about:privatebrowsing'){
	console.error(new Error("start running this snippet from a new tab that's got Dev Tools open"));
}

document.location = 'https://fmovies.to'
// here wait until the page loads and settles
while (document.body.children.length != 0){
	for (var d of document.body.children){
		d.remove();
	};
};
var frame = document.createElement('iframe');
frame.style.height = "3000px";
frame.style.width = "100%";
frame.style.border="none";
var serialStartPage="https://fmovies.to/series/slow-horses-ro86y/1-1";
frame.src=serialStartPage;
frame.addEventListener("DOMContentLoaded", ()=>{
	console.info("Endrias said this")
});
document.body.appendChild(frame);

// here wait for DOM of the embed to load
document.frame = frame.contentDocument;

function clickSeasonButton(){
	document.frame.querySelector('button.btn').click()
}

clickSeasonButton();



function iterateOverServers(){
	var ret=[], loopDelayMS=300;
	function executeAfterWait(){
		if (document.frame.querySelector('iframe').src == start){
			setTimeout(executeAfterWait, loopDelayMS);
		}
		else ret.push(document.frame.querySelector('iframe').src);
	};
	for (var i of document.frame.getElementsByClassName('server')){
		var start=document.frame.querySelector('iframe').src;
		i.click();
		executeAfterWait();
		// M.O., check the src of the embed and read and push to the returnable array when the src changes
	};
}


for (var i of document.frame.getElementsByClassName('server')){
	while(document.frame.querySelector('iframe').src === start){
		executeAfterWait();
	}
}
