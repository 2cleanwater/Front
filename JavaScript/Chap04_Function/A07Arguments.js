
console.log('---------------- Arguments -----------------');

// 함수 내부에서 매개변수를 관리하기 위해 만들어지는 유사 배열이다.
// 자바스크립트는 함수의 매개변수를 체크하지 않는다
function onAdd(x, y) {
    // console.log(arguments);
    // console.log(arguments[0]);
    let result = 0;

    for(let i = 0; i < arguments.length; i++) {
        let num = Number(arguments[i]);
        if(isNaN(num)) {        // isNaN() => ()의 값이 숫자가 아니면 true
            continue;
        }
        result = result + arguments[i];
    }
    console.log(`Arguments Length: ${arguments.length} / Total: ${result}`);
}

onAdd();
onAdd(10,20,30,'a',50,60)


