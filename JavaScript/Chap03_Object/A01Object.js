
console.log('---------------- Object -----------------');

const one = new Object();
one.name = 'ONE';
one.kor = 100;
one.eng = 90;
one.total = one.kor + one.eng;
one.avg = one.total / 2;
one.that = this;                    // window
one.info = function() {
    console.log(this);              // one 객체 자체를 나타낸다.
}
console.log(one);
one.info();



// {} 사용
const two = {
    name: 'TWO',
    kor: 80,
    eng: 70,
    // 초기화될때 어떤 프로퍼티가 먼저 초기화될지 모름. kor 프로퍼티가 없을 수도 있음.
    // total: two.kor + two.eng,
    // avg: total / 2,
    that: this,                     // window
    info: function() {
        console.log(this);          // two 객체 자체
    },
    total: function() {
        return this.kor + this.eng;
    },
    avg: function() {
        return this.total() / 2;
    }
}
console.log(two);
console.log(two.total(), two.avg());
two.info();
console.log('');


// key가 JavaScript 명명규칙과 다른경우
const three = new Object();
three.name = 'three';
three['t-kor'] = 100;
three['t-eng'] = 90;
three[200] = 50;
three.total = three['t-kor'] + three['t-eng'];
three.avg = three.total / 2;
three.that = this;                      
three.info = function() {
    console.log(this);
}
console.log(three);
console.log(three[200]);
three.info();
console.log('');


const four = {
    name: 'FOUR',
    'f-kor': 80,
    'f-eng': 70,
    that: this,
    info: function() {
        console.log(this);
    },
    total: function() {
        return this['f-kor'] + this['f-eng'];
    },
    avg: function() {
        return this.total() / 2;
    }
}
console.log(four);
console.log(four.total(), four.avg());
four.info();
console.log('');
