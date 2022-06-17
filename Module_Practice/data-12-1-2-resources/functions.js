var numbers = [1,2,3,4,5];
var doubled = numbers.map(function(num){
    return num * 2;
});
console.log(doubled);

var numbers = [0,2,4,6,8];
var plus_five = numbers.map(function(num){
    return num + 5;
});
console.log(plus_five);


var numbers = [1,2,3,4,5];


var doubled = numbers.map(num => num * 2);
console.log(doubled);

var numbers = [1,2,3,4,5];

var larger = numbers.filter(function(num){
    return num > 1;
});

console.log(larger);

var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];

var word_filter = words.filter(function(word){

    return word[0] === 's';
});

console.log(word_filter)