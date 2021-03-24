class Su{
    static show(){
        console.log("将一个导出命名为default也算默认导出");
    }
}

export {Su as default};