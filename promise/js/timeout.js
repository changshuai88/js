function timeout(times){
	return new Promise(resolve=>{
		setTimeout(resolve,times);
	});
}

timeout(3000)
.then(()=>{
	console.log("3秒后执行");
	return timeout(1000);
})
.then(()=>{
	console.log("执行上一步的promise后1秒执行");
});