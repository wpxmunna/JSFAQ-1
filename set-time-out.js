function doSomething(){
    console.log(4444);
}
console.log(1234);
setTimeout(doSomething, 10000);
console.log(5678);
setTimeout(function(){
    console.log('lazy and waiting');
},15000);
console.log(9874);

setInterval(() => {
    console.log('Doing it..');
}, 10000);
