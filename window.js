var name = 'Kuddus';
function add(num1, num2){
    // Not recommended for window uses----
    // window.result = num1 + num2;
    var result = num1 + num2;
    console.log('Inside name', name);
    function double(num){
        return num*2;
    }
    var total = double(result);
    return total;
}
console.log('Outside name', name);
var sum = add(12, 30);
console.log(sum);
// console.log(result);