
console.log('---------------- Object -----------------');

var nolbu = 'NolBu';
var kor = 100;
var eng = 80;
var total = kor + eng;
var avg = total / 2;
console.log(nolbu + '님의 총점은 ' + total + '이고 평균은 ' + avg + '입니다');
console.log(`${nolbu}님의 총점은 ${total}이고 평균은 ${avg}입니다.`);
console.log('');

// 객체 Object를 이용하여 하나의 이름으로 묶자
let hungbu = new Object();
hungbu.name = '흥부';
hungbu.kor = 100;
hungbu.eng = 70;
hungbu.total = hungbu.kor + hungbu.eng;
hungbu.avg = hungbu.total / 2;
console.log(`${hungbu.name}님의 총점은 ${hungbu.total} / ${hungbu.avg}`);

// new Object()를 { }로 변경해서 묶을 수 있다
let hangDan = {
    name: '향단',
    kor: 100,
    eng: 80,
    total: this.kor + this.eng,
    avg: this.total / 2,            // 마지막 ,는 es6부터는 다음이 없어도 에러 아님(이전에는 에러)
}
console.log(hungbu);
console.log(hangDan);
