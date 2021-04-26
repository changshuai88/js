let du=new Promise(resolve=>{
    resolve();
});
let bai=du.then(()=>{
    console.log("杜甫");
});
bai.then(()=>{
    console.log("白居易");
});
console.log(du);
console.log(bai);

// 在尝试把上面两行放在setTimeout里
setTimeout(()=>{
    console.log(du);
    console.log(bai);
})