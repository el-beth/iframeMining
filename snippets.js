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
