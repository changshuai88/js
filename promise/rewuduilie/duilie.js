export default function(promises){
    promises.reduce((promise,next)=>promise.then(next),Promise.resolve())
}