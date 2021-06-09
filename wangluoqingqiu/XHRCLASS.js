class HD{
    options={
        responseType:'json'
    }
    constructor(method='GET',url,data=null,options){
        this.method=method;
        this.url=url;
        this.data=this.formatData(data);
        Object.assign(thi.options,options)
    }
    formatData(data){
        if(typeof data !='object'||data==null)data={};
        let form=new FormData();
        for(const [name,value]of Object.entries(data)){
            form.append(name,value);
        }
        return form;


    }
    static get(url,options){
        return new this('GET',url,null,options).xhr()
    }
    static post(url,data,options){
        return new this('POST',url,data,options).xhr()
    }
    xhr(){
        return new Promise((resolve,reject)=>{
            const xhr=new XMLHttpRequest();
            xhr.open(this.method,this.url);
            xhr.responseType=this.options.responseType;
            xhr.send(this.data);
            xhr.onload=function(){
                if(xhr.status!=200){
                    reject({status:xhr.status,error:xhr.statusText})
                }else{
                    resolve(xhr.response)
                }
            }
            xhr.onerror=function(error){
                reject(error);
            }
        })
    }

}