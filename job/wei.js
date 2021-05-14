console.time("run");
async function hd(num){
    let res=await Promise.resolve().then(_=>{
        let count=0;
        for (let i = 0; i < num; i++) {
            count+=num--;
            
        }
        return count;

    });
    console.log(res);
}
hd(987654321);
console.timeEnd("run");
console.log("后盾人");