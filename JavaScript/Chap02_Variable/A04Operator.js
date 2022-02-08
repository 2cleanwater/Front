
console.log('---------------- Comparison Operator -----------------');

var x = 10;
var y = 3;

var result = x > y;
console.log('x > y => ' + result);

result = x >= y;
console.log('x > y => ' + result);
console.log('');


// 동등 비교
result = x == y;
console.log('x > y => ' + result);

result = x != y;
console.log('x > y => ' + result);
console.log('')

// 일치 비교
// == 값을 자바스크립트 엔진이 형 변환을 해 보고 값이 같으면 TRUE로 표시

// 1 == "1"
// "1" => Number("1") 후 비교 
// true => 1로 변환후 비교, false => 0 으로 변환 후 비교
var x = true;
var y = 1;

result = x == y;
console.log('true == 1 => ' + result);

// === 짜리는 형 변환을 하지 않음 (타입까지 체크)
// 1 == 1 and 'boolean' == 'string'
result = x === y;
console.log('true === 1 => ' + result);
console.log('');



// 3항 연산자
var name = 'NolBu';
result = ( name === 'NolBu' ) ? '놀부' : '누군지 모름';
console.log(result);




