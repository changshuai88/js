class User{
    //加载用户
    ajax(user){
        let url=`http://localhost:80/php/user.php?name=${user}`;
        return new Promise(resolve=>{
            let xhr=new XMLHttpRequest();
            xhr.open("GET",url);
            xhr.send();
            xhr.onload=function(){
                if (this.status==200) {
                    resolve(JSON.parse(this.response));
                }else{
                    reject(this);
                }
            };
        });
    }
    //启动
    render(users){
        users.reduce((promise,user)=>{
            return promise
            .then(()=>{
                return this.ajax(user);
            })
            .then(user=>{
                return this.view(user);
            });

        },Promise.resolve());
    }
    //渲染视图
    view(user){
        return new Promise(resolve=>{
            let h1=document.createElement("h1");
            h1.innerHTML=user.name;
            document.body.appendChild(h1);
            resolve();
        });
    }
}

new User().render(["向军","后盾人"])