console.time("runtime");
let count=0;
let num=987654321;
function hd(){
    for (let i = 0; i < 100000000; i++) {
         count+= i;
        if (num<=0) break;
        count+= num--;
    }
    if (num>0) {
        console.log(num);
        setTimeout(hd);
    }else{
        console.log(num);
        console.log(count);
    }
}
hd();
console.timeEnd("runtime");
console.log("houdunren.com");