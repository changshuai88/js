const promise1=new Promise(resolve=>resolve("success"));
promise1.then(alert);
alert("houdunren.com");
promise1.then(()=>{
    alert("后盾人");
});