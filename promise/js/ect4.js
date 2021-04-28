new Promise((resolve,reject)=>{
    resolve(
        class{
            static then(resolve,reject){
                setTimeout(()=>{
                    resolve();
                },2000);
            }
        }
    );
}).then(
    v=>{
        console.log(`fulfilled:${v}`);
    },
    v=>{
        console.log(`rejected:${v}`);
    }
);