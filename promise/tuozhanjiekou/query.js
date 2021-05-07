function query(name){
    const cache = query.cache||(query.cache=new Map());
    if (cache.has(name)) {
        console.log("走缓存了");
        return Promise.resolve(cache.get(name));
    }
    return ajax(`http://localhost:80/php/user.php?name=${name}`).then(
        response=>{
            cache.set(name,response);
            console.log("没走缓存");
            return response;
        }
    );
}

query("向军").then(response=>{
    console.log(response);
});
setTimeout(()=>{
    query("向军").then(response=>{
        console.log(response);
    });
},1000);