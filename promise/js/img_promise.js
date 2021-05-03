function loadImage(file){
	return new Promise((resolve,reject)=>{
		const image=new Image();
		image.src=file;
		image.onload=()=>{
			resolve(image);
		};
		image.onerror=reject;
		document.body.appendChild(image);
	});
}

loadImage("images/1.jpg").then(image=>{
	image.style.border="solid 20px black";
	console.log("宽度:" + window.getComputedStyle(image).width);
});