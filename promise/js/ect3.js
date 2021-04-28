class User{
    constructor(id){
        this.id=id;
    }
    then(resolve,reject){
        resolve(ajax(`http://localhost:80/php/houdunren.php?id=${this.id}`));

    }
}
new Promise((resolve,reject)=>{
    resolve(ajax(`http://localhost:80/php/user.php?name=向军`));
})
.then(user=>{
    // console.log(user.id);
    return new User(user.id);
})
.then(lessons=>{
    console.log(lessons);
});