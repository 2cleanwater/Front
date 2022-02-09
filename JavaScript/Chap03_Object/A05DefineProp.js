
console.log('---------------- defineProperty -----------------');

function printObject(data) {
    for (const prop in data) {
        console.log(prop, data[prop]);
    }
};

var obj = {
    name: 'NolBu',
    age: 30
};

printObject(obj);
console.log('');


// 프로퍼티 추가
obj.address = 'Seoul';

// 기본값은 모두 false로 출력된다
Object.defineProperty(obj, 'tel', {
    value: '010-1234-5678'
});

printObject(obj);
console.log('');

console.log( Object.getOwnPropertyDescriptor(obj, 'address') );
console.log( Object.getOwnPropertyDescriptor(obj, 'tel') );
console.log( obj );

// 기본값을 설정
Object.defineProperty(obj, 'product', {
    value: 'TV',
    writable: true,
    enumerable: true,
    configurable: true
});

// writable
obj.tel = '000-0000-0000';
obj.product = 'Phone';
console.log(obj);

// configurable
delete obj.tel;
delete obj.product;
console.log(obj);

// enumerable
printObject(obj);
console.log('');


// Getter, Setter도 정의 가능
Object.defineProperty(obj, 'nickname', {
    enumerable: true,
    configurable: false,
    get() {                         // value
        return this.name;
    },
    set(name) {
        this.name = name;           // writeable
    }
});
console.log(obj);
console.log('');


// 여러개를 한번에 정의
const person = {};
Object.defineProperties(person, {
    name: {value: 'HungBu'},
    age: {value: 20, writable: true, enumerable: true, configurable: false},
    info: {
        enumerable: false,
        configurable: false,
        get() {
            return `${this.name} / ${this.age}`
        },
        set(obj) {
            this.name = obj.name;
            this.age = obj.age;
        }
    }
});
console.log(person);

printObject(person);
