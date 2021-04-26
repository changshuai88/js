let sui=new Promise(resolve=>resolve());
let tang=sui.then(()=>{
    return new Promise(resolve=>{
        setTimeout(()=>{
            console.log(`p1`);
            resolve();
        },2000);
    });
}).then(()=>{
    return new Promise((a,b)=>{
        console.log(`p2`);
    });
});