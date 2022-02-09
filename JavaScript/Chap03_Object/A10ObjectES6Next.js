
console.log('---------------- Object -----------------');

var x = 10;
var str = 'Hello World';

// 선언하는 키의 이름과 대입되는 변수의 이름이 동일하면 생략 가능
var obj = {
    x, str
}
console.log(obj);
console.log('');


// 계산된 프로퍼티 이름
var prefix = 'prop'
for(let i = 0; i < 3; i++) {
    obj[prefix + i + 'value'] = i;
};
console.log(obj);

// 메서드를 info() 형태로 사용 가능 => vue에서 많이 사용
const nolbu = {
    name: 'NolBu',
    age: 30,
    info () {
        console.log(`${this.name}님의 나이는 ${this.age}`);
    }
}
nolbu.info();


