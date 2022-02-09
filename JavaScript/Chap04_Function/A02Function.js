
console.log('---------------- 함수 표현식 -----------------');

// 변수이므로 undefined가 할당. 함수 형식으로 호출할 수 없음.
// console.log( onAdd() );          // Error


// 함수 표현식. 익명함수를 이용한다. 이름을 붙이면 기명함수라 한다.
// 표현식 방식의 함수 선언(익명함수)
var onAdd = function() {
    let x = 10;
    let y = 20;
    // console.log(this);          // Global 영역에서 호출된다

    let result = x + y;
    console.log(`${x} + ${y} = ${result}`);
}
onAdd();
console.log('');

let factrial = function(n) {
    if(n === 1) return 1;
    return n * factrial(n - 1);
}
console.log(factrial(10));
console.dir(factrial);


// 표현식 방식의 함수 선언(기명함수)
// 익명함수에 함수 이름을 기술하면 내부에서만 사용 가능하다(외부 사용 에러)
let factrial1 = function fact(n) {
    if(n === 1) return 1;
    return n * fact(n - 1);
}
console.log(factrial1(10));
// console.log(fact(10));           
console.dir(factrial1);


// Function 생성자 함수 이용
var onMin = new Function('x', 'y', 'return x - y');
console.log(onMin(10, 2));

