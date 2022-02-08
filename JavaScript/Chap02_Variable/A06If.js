
console.log('---------------- Conditional Statument -----------------');
/*
    if() { var x = 10; }
    for(var i = 10; .... ) { var x = 10; }
    switch() { var x = 10; }
*/
if(true){
    var x = 10;
}
console.log('{ }내부의 x=> ', x);
console.log('');


var kor, eng, avg;
kor = 100;
eng = 60;
avg = (kor + eng) / 2;

// 단순 IF
if(avg > 80) {
    console.log('단순 IF 합격');
};


// IF ~ ELSE
if(avg > 80) {
    console.log('단순 IF ~ ELSE 합격');
} else {
    console.log('단순 IF ~ ELSE 불 합격');
}


// 다중 IF
// 조건에 만족하는 { } 블럭이 실행되고 전체 IF문을 벗어난다.
// 필요에 따라 ELSE { } 블럭을 구현할 수 있다
if(avg > 80) {
    console.log('단순 IF ~ ELSE 합격');
} else if(avg > 70) {
    console.log('단순 IF ~ ELSE 재 시험 2번');
} else if(avg > 60) {
    console.log('단순 IF ~ ELSE 재 시험 1번');
} else {
    console.log('단순 IF ~ ELSE 불합격');
}

// switch
var year = 2000;
var month = 2;
var day = 0;

switch(month) {
    case 1:
        day = 31;
        break;
    case 2:
        day = 28;
        break;
    default:
        day = 31;
        break;
}
console.log(day);