
console.log('---------------- 상속 -----------------');

class Jumsu {

    // 생성자 메서드. 반환문을 갖지 않는다.
    constructor(name, kor, eng) {
        this.name = name;
        this.kor = kor;
        this.eng = eng;
    }
    onTotal() {
        return this.kor + this.eng;
    }
    onAvg() {
        return this.onTotal() / 2;
    }
    display() {
        console.log(`${this.name} / ${this.onTotal()} / ${this.onAvg()}`);
    }
}

class JumsuThree extends Jumsu {

    constructor(name, kor, eng, math) {
        super(name, kor, eng);
        this.math = math;
    };

    // override
    onTotal() {
        return this.kor + this.eng + this.math;
    }
    onAvg() {
        return this.onTotal() / 3;
    }

}

const nolbu = new Jumsu('놀부', 100, 80);
const hungbu = new JumsuThree('흥부', 100, 90, 80);
console.log(nolbu);
console.log(hungbu);

console.log(nolbu.onTotal(), nolbu.onAvg());
nolbu.display();

console.log(hungbu.onTotal(), hungbu.onAvg());
hungbu.display();

