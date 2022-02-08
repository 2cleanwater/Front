// 한줄 주석
/*
    여러줄의 주석을 사용하는 경우
    이와 같이 사용한다.
*/

// console: 전역 객체

// 문자열은 "" 또는 ''로 묶어 표현한다.
console.log('() 안의 값을 브라우저의 console 탭에 출력해 준다');

var x = 10;
console.log(x);
console.log('');        // 줄바꿈

console.warn('경고 메시지가 필요한 경우');
console.error('에러 메시지가 필요한 경우');
console.info('안내 메시지가 필요한 경우');
console.log('');

// ()안의 문자열이 동일해야 한다.
console.time('시간 체크');
for(var i = 0; i < 1000000; i++) { }
console.timeEnd('시간 체크');
console.log('');


// JavaScript 문자열 출력
console.log("Hello");
console.log("Hello: " + x);

// 문자열은 "", '' 무엇을 사용해도 된다
console.log('Hello');
console.log('Hello: ' + x);

// "", ''을 내부에서 이스케이프 문자 없이 1번만 교차 사용이 가능
console.log(" Hello I'm 'SHIN' ");
console.log(' Hello I"m "SHIN" ');
console.log('');

// 문자열과 + 로 연결하면 결과는 문자열이 된다(이어 쓰기)
// 'Hello ' + 10 => 'Hello 10'
// 'Hello 10' + 20 => 'Hello 1020'
console.log('Hello ' + 10 + 20);

// 연산자 우선 순위에 의해 ()가 먼저 연산된다
console.log('Hello ' + (10 + 20));
console.log('');

// 여러개의 값을 한번에 나누어 출력 
// console.log를 여러번 출력한 것과 동일
// 아래 예제는 3번 console.log를 구현한 것과 동일
console.log('Hello', x, 10);
