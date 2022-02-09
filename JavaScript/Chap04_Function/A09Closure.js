
console.log('---------------- Closure -----------------');

let num = 0;

const incOne = function() {
    return num++;
};
console.log(incOne());
console.log(incOne());
console.log(incOne());

// 외부에서 이렇게 수정할 수 없게 만들려면?
num = 100;
console.log(incOne());
console.log(incOne());

function incTwo() {
    let cnt = 0;        // 호출할때마다 0으로 초기화된다.

    return cnt++;
}
// cnt = 100;           // var 선언이 없으면 Global 영역에 변수를 만든다
// console.log(cnt);    // Error
console.log(incTwo());
console.log(incTwo());
console.log(incTwo());
console.log('');


console.log('---------- closure를 이용한 증가 ---------------');
// closure
function incThree(x) {
    let cnt = x;

    function inner() {
        return ++cnt;
    }
    return inner;
}
const three = incThree(0);
console.log( three() );
console.log( three() );
console.log( three() );

const three1 = incThree(10);
console.log( three1() );
console.log( three1() );
console.log( three1() );


var alert = 10;