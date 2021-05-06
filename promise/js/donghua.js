function interval(delay=1000,callback){
    return new Promise(resolve=>{
        let id=setInterval(() => {
            callback(id,resolve);
        }, delay);
    });
}

interval(100,(id,resolve)=>{
    const div=document.querySelector("div");
    let left=parseInt(window.getComputedStyle(div).left);
    div.style.left=left+10+"px";
    if(left>=200){
        clearInterval(id);
        resolve(div);
    }
}).then(div=>{
    interval(50,(id,resolve)=>{
        let width=parseInt(window.getComputedStyle(div).width);
        div.style.width=width-10+"px";
        if (width<=20) {
            clearInterval(id);
        }
    });
});