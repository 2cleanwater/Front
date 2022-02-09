
console.log('---------------- Closure -----------------');

var x = 10;

function one() {
    var x = 'one';
    two();
}
function two() {
    console.log(x);
};
one();


function three() {
    let x = 'Three X';

    function inner() {
        return x;
    };

    return inner;
}

const threeIn = three();
// console.log(threeIn);
const threeX = threeIn();
console.log(threeX);

