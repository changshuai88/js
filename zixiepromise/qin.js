class HD{
    static PENDING="pengding";
    static FULFILLED="fulfilled";
    static REJECTED="rejected";
    constructor(executor) {
        this.status=HD.PENDING;
        this.value=null;
        try {
            executor(this.resolve.bind(this),this.reject.bind(this));
        } catch (error) {
            this.reject(error);
        }
    }

    resolve(value){
        if (this.status ==HD.PENDING) {
            this.status=HD.FULFILLED;
            this.value=value;
        }
    }

    reject(value){
        if (this.status==HD.PENDING) {
            this.status=HD.REJECTED;
            this.value=value;
        }
    }
    //1.基础构建
    then(onFulfilled,onRejected){
        if (typeof onFulfilled !="function") {
            onFulfilled=value=>value;
        }

        if (typeof onRejected !="function") {
            onRejected=value=>value;
        }

        if (this.status == HD.FULFILLED) {
            setTimeout(()=>{   //3.利用宏将代码变成异步
                try {
                    onFulfilled(this.value);
                } catch (error) {
                    onRejected(error);
                }
            });
        }

        if (this.status ==HD.REJECTED) {
            setTimeout(() => {
              try {
                onRejected(this.value);
            } catch (error) {
                onRejected(error);
            }  
            });
        }
    }
}