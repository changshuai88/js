function notice(msg,then){
    then(msg);
}

function meal(){
    notice("肯德基厨房开始做饭",msg=>{
        console.log(msg);
        notice("我是肯德基，你的餐已经做好",msg=>{
            console.log(`收到肯德基消息:${msg}`);
            setTimeout(()=>{
                notice("孩子，我吃了两秒了，不辣，你可以吃了",msg=>{
                    console.log(`收到爸爸消息：${msg}`);
                    setTimeout(()=>{
                        notice("妈妈，我和爸爸吃完饭了",msg=>{
                            console.log(`收到孩子消息:${msg},事情结束`);
                        });
                    },2000);
                });
            },2000);
        });
    });
}
meal();