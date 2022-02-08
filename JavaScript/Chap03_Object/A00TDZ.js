// A00TDZ.js

console.log(this);
console.log(this == window);

this.A = 10;
window.A1 = 20;
A2 = 30;    // var로 선언하지 않으면 global 영역에 정의

console.log(A3);        // undefined(hosting)
// var 변수로 선언하면 함수와 Object 이외는 참조하는 this 객체에 변수 정의
var A3 = 40;

// window 영역에 빌드인 함수 alert의 값이 Hello로 변경된다.
// var alert = 'Hello';

// 재 정의 에러 아니다
var A3 = 30;

// var은 함수, 객체 이외의 { } 범위를 갖지 않음
{
    var A3 = 'NolBu';
}


// let, const로 선언된 변수는 global 영역에 만들어지지 않는다
// console.log(A10);        // hosting은 발생하지만 먼저 꺼내 사용할 수는 없음
let A10 = 10;

// var 변수로 선언되던 let로 선언되던 중복 선언은 안된다
// let A3 = 100;

{
    let A10 = 20;
    let A11 = 11;
    console.log('{} 내부 => ', A10, A11);
}   // 이 } 를 만나면 {} 내부에 선언된 let 변수는 모두 삭제된다(지역변수)

console.log('{} 외부 => ', A10);
// console.log('{} 외부 => ', A11);     // Error
console.log('');


// 기본형 변수
const A20 = 100;
console.log('A20 => ', A20);
// A20 = 200;                   // 값 설정은 안된다.


const obj = {
    name: 'NolBu'
};

obj.age = 30;
obj.name = '홍길동';

// TDZ에 정의한 변수의 메모리 번지수 값을 변경하려고 함. Error
// obj = { 
//     address: 'Seoul'
// };
console.log(obj);
console.log('');


const arr = [10, 20, 30];
arr[0] = 100;
arr[3] = 40;

// 리퍼런스 타입으로 변경하던 기본형으로 변경하던 변겨은 에러
// arr = 10;        // Error

console.log(arr);



let fn = function() {
    console.log('let Function');
};

const fn1 = function() {
    console.log('const Function');
}

fn = 100;
// fn1 = 100;
