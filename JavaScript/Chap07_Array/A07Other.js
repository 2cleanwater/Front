
console.log('---------------- Number -----------------');
var str = '123.56';
let x1 = parseInt(str);         // 123 (number)
let x2 = parseFloat(str);       // 123.56 (number)
let x3 = Number(str);           // 123.45 (number)

console.log(x1, typeof(x1));
console.log(x2, typeof(x2));
console.log(x3, typeof(x3));

var str = '';
// parseInt => NaN, parseFloat => NaN, Number => 0


let num = 12345.678945;
x1 = num.toFixed(2);
console.log(x1, typeof(x1));        // 12345.48 (string)

str = '124N';
let check1 = isNaN(str);     // 숫자가 아니니?. 숫자가 아니면 true
let check2 = isNaN(num);
console.log(check1, check2);
console.log('');



console.log('---------------- Math -----------------');
// 난수 발생
x1 = Math.random();
x2 = Math.ceil(10.00001);       // 무조건 올림
x3 = Math.floor(10.99999);      // 무조건 버림

console.log(x1, typeof(x1));
console.log(x2, typeof(x2));
console.log(x3, typeof(x3));


console.log('---------------- Date  -----------------');

let today = new Date();         // 현재 시간
// let today = new Date('2022-12-25 12:25:35');
console.log(today);             // Date.toString() 메서드가 호출

// today.setFullYear(2025);

let year = today.getFullYear();
// 0이 1월, 1일 2월.  시작이 0부터 시작된다.
let month = today.getMonth() + 1;
let date = today.getDate();

// 요일. 0이 일요일, 1 월요일
let day = today.getDay();

let yoil = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
console.log(`${year}-${month}-${date} ${yoil[day]}`);

let hour = today.getHours();
let min = today.getMinutes();
let sec = today.getSeconds();
let millSec = today.getMilliseconds();      // 1초는 1000
console.log(`${hour}:${min}:${sec}`);
console.log('');

let x = today.toLocaleDateString();
let y = today.toLocaleTimeString();
let z = today.toLocaleString();
console.log(x);
console.log(y);
console.log(z);


// 이넘은 기억하자
let times = Date.now();

// 1970.01.01 00:00:00 부터 현재 시간까지 경과 시간을 mill초로 환산해서 돌려준다
console.log(times);         

let obj = { id: Date.now(), name: 'TV'}
console.log(obj);

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_VALUE);


console.log('---------------- String  -----------------');
str = ' abc 123 DEF 456 ';

console.log( str.length );

x = str.trim();
console.log(x, x.length);

console.log( x.toUpperCase(), x.toLowerCase() );

console.log( x.substr(4, 8) );      // 4부터 8개 추출
console.log( x.substring(4, 8) );   // 4부터 8 - 1 까지 추출

y = x.replace('123', '일이삼');
console.log(y, x);

y = x.replace('1', '일이삼');
console.log(y, x);

y = x.indexOf('D');
console.log(y);

y = x.indexOf('D', 3);
console.log(y);

y = x.indexOf('X');
console.log(y);


console.log('-------------- try ~ catch -------------------');

const arr = [10, 11];

try {
    console.log(abc);
} catch(err) {
    console.log(err.message);
}


try {
    // 사용자가 원하지 않은 동작을 했니?. 강제로 아래 명령이 실행 안되게 할 목적
    if(true) { 
        throw new Error('이게 표시될 에러 메시지')
    }
    console.log('여기는 실행 안됨');
   
} catch(err) {
    console.log(err.message);
} finally {
    console.log('이건 항상 실행됨');
}


console.log('종료');
