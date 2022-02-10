
console.log('---------------- Set ES6 -----------------');

// 중복된 데이터는 덮어쓴다. (중복 허용 안함)
let mySet = new Set([10, 11, 100, 11, 10, 1000]);

// 크기
console.log( mySet.size );

// 값을 꺼내오는 함수는 지원하지 않음
// 값이 있니?
console.log( mySet.has(10) );
console.log( mySet.has(1) );

let x = 0;
if(mySet.has(10)) {
    x = 10;
};
console.log(x);
console.log('');


// 값 추가
mySet.add(1000);
mySet.add(30);
console.log(mySet, mySet.size);


// 값 삭제
x = mySet.delete(30);
console.log(x, mySet);


// 순환
for(let i = 0; i < mySet.size; i++) {
    console.log(mySet[i]);        // 값을 꺼내는 명령이 없음. 사용 안됨
};

// 순환 가능
mySet.forEach( (item, index) => console.log(index, item));


// key(), value(), enties

// Set에는 index가 없음. 따라서 for 문 순환이 안됨
// Set은 value가 key 역할도 한다
console.log('--------- key -------------');
let key = mySet.keys();
console.log(key);


let value = mySet.values();
console.log(value);

// index => value 형태로 출력
let entries = mySet.entries();
console.log(entries);
console.log('');

// iterator 객체는 next()를 이용해서 하나씩 순차적으로 참조 가능한 객체
console.log( key.next() );
console.log( key.next() );
console.log( key.next() );
console.log( key.next() );
console.log( key.next() );


// 위의 next()를 for ~ of 문으로 순환 가능. done이 true가 되면 자동으로 for문을 벗어남
for(let item of value) {
    console.log(item);
}
console.log('');

for(let item of entries) {
    console.log(item);
}

// 배열도 iterator 객체
let ary = [10, 11, 100];
key = ary.keys();


// 값만 꺼내오고자 하는 경우 편하게 사용 가능
for(let i in ary) {
    console.log(i, ary[i]);
};
console.log('');

for(let item of ary) {      // next()
    console.log(item);
}
console.log('');


// Set 객체도 이렇게 값 추출 가능
for(let item of mySet) {
    console.log(item);
}


// for ~ of
let mSet = new Set([10, 11, 100]);

console.log(mSet);      // [[Prototype]]을 보면 next()가 없음. 이터레이터 객체가 아님
// mSet.next();         // 따라서 이게 에러

// mSet의 values()가 순환된다.
// Set의 values()는 이터레이터 객체
// 따라서 done: true가 되기 전까지 하나씩 순차적으로 next()를 호출하면서 값을 대입해 준다
for(let item of mSet) { 
    console.log(item);
}






