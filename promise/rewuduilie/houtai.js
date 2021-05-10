export default function(url){
    return new Promise((resolve,reject)=>{
        let xhr=new XMLHttpRequest();
        xhr.open("GET",url);
        xhr.send();
        xhr.onload=function(){
            if (this.status == 200) {
                resolve(this.response);
            }else{
                reject(this);
            }
        };
    });
}
