
console.log('---------------- Variable -----------------');

// 변수는 식별자라고도 한다.
var x = 10;
var y = 10.25;
var str = 'NolBu';

console.log( typeof(x), typeof(y), typeof(str) );
console.log('x: ' + x + ' typeof(x): ' + typeof(x));

x = 'Hello';
console.log('x: ' + x + ' typeof(x): ' + typeof(x));

// typeof()의 출력값으로 기본형 변수 이외의 값은 object로 출력된다.
x = new Date();
console.log('x: ' + x + ' typeof(x): ' + typeof(x));
console.log('');


// 변수의 선언 방식
var z = 10;
var a = 1, b = 2, c = 3.5;      // 여러개를 동시에 선언

// 변수의 초기화는 나중에 해도 된다.
var d;
d = 100;
console.log('d: ' + d + ' typeof(d): ' + typeof(d));

// 호이스팅
// var 키워드는 선언한 변수를 재 선언해도 에러가 아니다
// 자바스크립트은 먼저 문서를 읽어서 변수와 함수를 메모리 공간에 먼저 
// 정의부터 한 후에 첫줄부터 실행하기 시작한다.
// 이후 var 변수는 초기화 문장을 만날때 값이 대입된다.
// 이때 정의된 변수가 있으면 덮어쓰기(재 정의)한다. (에러아님)
var d = 'HungBu';
console.log('d: ' + d + ' typeof(d): ' + typeof(d));

// 없는 변수를 선언하면 Error
// console.log('e: ' + e + ' typeof(e): ' + typeof(e));

// 메모리에는 변수가 선언되어 있음. 값은 undefined 값으로 초기화 되어 있음
var f;
console.log('f: ' + f + ' typeof(f): ' + typeof(f));

// 메모리에 이미 정의는 되어 있음(초기화 구문은 아직 실행 안됨)
console.log('g: ' + g + ' typeof(g): ' + typeof(g));
var g = 10;
console.log('g: ' + g + ' typeof(g): ' + typeof(g));

