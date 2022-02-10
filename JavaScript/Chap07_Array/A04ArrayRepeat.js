
console.log('---------------- Array 반복 메서드 -----------------');

var ary = [10, 11, 100, 101, 1000];

console.log('---------------- Array For -----------------'); 
for(let i = 0; i < ary.length; i++) {
    console.log(ary[i]);
};
console.log('');


console.log('---------------- Array ForEach -----------------'); 
ary = [10, 11, 100, 101, 1000];
ary.forEach(function(item, index){
    console.log(item, index);
});

// 한줄로 기술할때 => 뒤의 구문이 값이 아니면 실행. 값인 경우만 return을 해 준다
// 리턴값은 없이 순환만 해 준다
let y = ary.forEach( (item, index) => console.log(item, index) );
console.log(y);
console.log('');


console.log('---------------- Array map -----------------'); 
// 배열의 값을 forEach와 같이 순차적으로 1개씩 순서대로 꺼내 콜백함수에 대입해 준다
// 리턴구문이 있으면 리턴값을 하나의 배열로 모아서 반환한다
ary = [10, 11, 100, 101, 1000];

let x = ary.map( function(item, index) {
    console.log(item, index)
    return item * 2; 
});
console.log(x);

// react에서 많이 사용되는 구문
// arrow 함수의 주의점 중 하나
x = ary.map( (item, index) => {
    return {i: index, value: item};
});

// 한줄로 적는다면 리턴값이 객체라 {}를 함수의 시작과 종료로 인식하므로
// ()로 묶을 필요가 있다.
x = ary.map( (item, index) => ({i: index, value: item}) );
console.log(x);

console.log('');


console.log('---------------- Array filter -----------------'); 
// 걸러내는 작업을 한다. 
// 따라서 조건문이 필요하고 조건이 true인 요소만 모아서 배열로 만들어 리턴한다
ary = [10, 11, 100, 101, 1000];
x = ary.filter(function(item, index) {
    if(item % 2 === 0) return true;         // true인 순환요소의 값이 x 배열에 추가된다
    else return false;
});
console.log(x);


x = ary.filter( (item) => {
    if(item % 2 === 0) return true;         // true인 순환요소의 값이 x 배열에 추가된다
    else return false;
});
console.log(x);


console.log('---------------- Array reduce -----------------'); 
ary = [10, 11, 100, 101, 1000];

x = ary.reduce( function(init, item) {
    let total = 0;
    total = init + item;
    return total;
}, 0);  // 0이 INIT값. 처음 1번만 반영된다
console.log(x);

// { 'NolBu': 1 }
// { 'NolBu': 1, 'HungBu': 1,  }
var names = ['NolBu', 'HungBu', 'BangJa', 'HongGilDong', 'HungBu', 'BangJa',]
x = names.reduce( (obj, item) => {
    if( !obj[item] ) obj[item] = 1;                  // obj['NolBu']
    else obj[item] = obj[item] + 1;

    return obj
}, {});
console.log(x);

