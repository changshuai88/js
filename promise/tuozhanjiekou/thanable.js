const hd={
    then(resolve,reject){
        resolve("后盾人");
    }
};
Promise.resolve(hd).then(value=>{
    console.log(value);
});