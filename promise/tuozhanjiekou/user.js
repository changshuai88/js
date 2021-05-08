function ajax(url){
    return new Promise((resolve,reject)=>{
        let xhr=new XMLHttpRequest();
        xhr.open("GET",url);
        xhr.send();
        xhr.onload=function(){
            if(this.status==200){
                resolve(JSON.parse(this.response));
            }else{
                reject(this);
            }
        };
    });
}

const api="http://localhost:80/php";
const promises=["向军","后盾人"].map(name=>{
    return ajax(`${api}/user.php?name=${name}`);
});

Promise.all(promises)
.then(response=>{
    console.log(response);
})
.catch(error=>{
    console.log(error);
});