const Util={
    //是否为表单元素
    isForm(node){
        return node instanceof HTMLInputElement;
    },
    //获取原型链
    prototype(node){
        const prototypes=[];
        prototypes.push(node.__proto__);

        prototypes.push(...(node.__proto__?this.prototype(node.__proto__):[]));
        return prototypes;
    },
}

//添加原型方法
Node.prototype.substr=function(start,num){
    if (Util.isForm(this)) {
        return this.value.substr(start,num);
    }else{
        return this.textContent.substr(start,num);
    }
};
//标签测试
console.log(document.querySelector('#hd').substr(1, 2));

//表单测试
console.log(document.querySelector('input').substr(3, 5));
