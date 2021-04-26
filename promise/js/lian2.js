new Promise((resolve,reject)=>{
    reject();
})
.then(
    resolve=>console.log("fulfilled"),
    reject=>console.log("rejected")
)
.then(
    resolve=>console.log("fulfilled"),
    reject=>console.log("rejected")
)
.then(
    resolve=>console.log("fulfilled"),
    reject=>console.log("rejected")
);
