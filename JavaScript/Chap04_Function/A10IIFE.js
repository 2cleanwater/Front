
console.log('---------------- Closure -----------------');
// Immediately Invoked Function Expression

(function(){
    console.log('즉시 실행함수 1');
}());       // ;를 잊지말고 붙이자

(function(){
    console.log('즉시 실행함수 2');
})();

let x = 10;
(function(num){
    console.log('즉시 실행함수 3=> ' + num);
})(x);


const result = (function(){
    var x = 10;
    var y = 20;
    var result = 0;
    var alert = '값이 올바르지 않습니다'

    return x;
})();
// console.log(window);
console.log(result);


const calc = (function(){
    var x = 10;
    var y = 20;
    var result = 0;
    var alert = '값이 올바르지 않습니다'

    let onAdd = function() {
        result = x + y;
        return result;
    }
    let onMin = function() {
        return x - y;
    }
    let getResult = function() {
        return result;
    }

    return {
        result,             // 0
        alert,
        onPlus: onAdd,
        onMin,
        getResult
    }
})();
console.log( calc );
console.log( calc.onPlus() );
console.log( calc.onMin() );
console.log( calc.alert );
// onPlus()를 호출했다고 하더라도 즉시 실행 함수가 실행된 상태에 리턴된 값은
// 이미 0인 상태에서 result 값이 리턴됨. ()
console.log( calc.result ); 
console.log( calc.getResult() );


// 이 방법으로도 구현한다
(function(){
    var x = 10;
    var y = 20;
    var result = 0;
    var alert = '값이 올바르지 않습니다'

    let onAdd = function() {
        result = x + y;
        return result;
    }
    let onMin = function() {
        return x - y;
    }
    let getResult = function() {
        return result;
    }

    let obj = {
        result,             // 0
        alert,
        onPlus: onAdd,
        onMin,
        getResult
    }

    console.log(this);      // window
    window.myLib = obj;     // window 영역에 myLib 변수 선언하고 obj 값 대입
})();

console.log( myLib );
console.log( myLib.onPlus() );
console.log( myLib.onMin() );
console.log( myLib.alert );
// onPlus()를 호출했다고 하더라도 즉시 실행 함수가 실행된 상태에 리턴된 값은
// 이미 0인 상태에서 result 값이 리턴됨. ()
console.log( myLib.result ); 
console.log( myLib.getResult() );