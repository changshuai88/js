export const site="李太白";
export const func=function(){
    return "is a module function";
};
export class User{
    show(){
        console.log("user.show");
    }
}

const du="杜工部";
const dufunc=function () {
    return "is a du function";
};
class Dufu{
    show(){
        console.log("杜甫杜子美");
    }
}
export{du,dufunc,Dufu};