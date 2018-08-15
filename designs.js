// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
let sizePicker,width,height;
sizePicker=document.querySelector('#sizePicker');

sizePicker.addEventListener('submit',readValues);

function readValues(event){
		event.preventDefault();
		clearCanvas();
		height=document.getElementById('inputHeight').value;
		width=document.getElementById('inputWidth').value;
		document.querySelector('html').style.height='auto';
		makeGrid(height,width);
};
function clearCanvas(){
	pixelCanvas.innerHTML='';
}


function makeGrid(M,N) {
	for(let i=1;i<=M;i++){
		const pixelCanvas=document.getElementById('pixelCanvas');
		const tableRow='<tr id=tr'+i+'></tr>';
		pixelCanvas.insertAdjacentHTML('beforeend',tableRow);
			for(let j=1;j<=N;j++){
				tr=document.getElementById('tr'+i);
				tableData= '<td></td>'
				tr.insertAdjacentHTML('beforeend',tableData);
			}
	}
}
paintingCanvas=document.querySelector('.paint');
paintingCanvas.addEventListener('click',painting);
function painting(){
	pixelCanvas.addEventListener('mouseover',colorFilling);

	function colorFilling(event) {
		colorValue = document.querySelector('#colorPicker').value;
		console.log(colorValue);
			if(event.target.nodeName === 'TD'){
				if(event.target.hasAttribute("style") === false){
				event.target.style.cssText="background-color:"+colorValue;		
				}
			}
	}
}
erasingCanvas=document.querySelector('.erase');
erasingCanvas.addEventListener('click',erasing);
function erasing(){
	pixelCanvas.addEventListener('mouseover',colorRemoving);
	function colorRemoving(){
		if(event.target.nodeName === 'TD'){
			if(event.target.hasAttribute("style")){
				event.target.removeAttribute("style");
			}
		}
	}
}

