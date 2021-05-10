function queue(nums){
    let promise =Promise.resolve();
    nums.map(n=>{
        promise=promise.then(v=>{
            return new Promise(resolve=>{
                console.log(n);
                resolve();
            });
        });
    });
}
queue([1,2,3,4,5]);