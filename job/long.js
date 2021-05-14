console.time("runtime");
function hd(num){
    let count=0;
    for (let i = 0; i <= num; i++) {
        count+= i;
        
    }

    console.log(count);
    console.timeEnd("runtime");
}

let num=987654321;
hd(num);
console.log("houdunren.com");