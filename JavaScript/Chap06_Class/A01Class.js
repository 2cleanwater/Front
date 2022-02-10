
console.log('---------------- OOP -----------------');

var Jumsu = (function(){
    function Jumsu(name, kor, eng) {
        this.name = name;
        this.kor = kor;
        this.eng = eng;
    }

    Jumsu.prototype.onTotal = function() {
        return this.kor + this.eng;
    }
    Jumsu.prototype.onAvg = function() {
        return this.onTotal() / 2;
    }
    Jumsu.prototype.display = function() {
        console.log(`${this.name} / ${this.onTotal()} / ${this.onAvg()}`);
    }

    return Jumsu;
})();

let nolbu = new Jumsu('NolBu', 100, 80);
nolbu.display();



// ES6
class JumsuClz {
    // 멤버변수 선언은 없음. 멤버변수는 생성자 메서드 내부에서 정의

    constructor(name, kor, eng) {     // 생성자 메서드는 constructor라는 이름으로 고정
        this.name = name;
        this.kor = kor;
        this.eng = eng;
    }

    onTotal() {
        return this.kor + this.eng;
    };

    onAvg(num) {
        return this.onTotal() / num;
    }
}














