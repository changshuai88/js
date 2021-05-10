function qin(nums){
    return nums.reduce((promise,n)=>{
        return promise.then(()=>{
            return new Promise(resolve=>{
                console.log(n);
                resolve();
            });
        });
    },Promise.resolve());
}

qin([1,2,3,4,5]);