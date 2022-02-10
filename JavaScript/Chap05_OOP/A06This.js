
console.log('---------------- Object this -----------------');

const obj = {
    name: 'NolBu', 
    age: 20,
    display() {
        console.log(`${this.name} / ${this.age}`);
    }
};
console.log(obj.name, obj.age);
obj.display();



function Person(name, age) {
    this.name = name;
    this.age = age;
};

Person.prototype.display = function() {
    console.log(`${this.name} / ${this.age}`)
};

const nolbu = new Person('NolBu', 30);
nolbu.display();

const hungbu = new Person('HungBu', 30);
hungbu.display();
console.log('');


console.log(this);              // window
console.log('');


function onAdd() {
    console.log(this);
}

onAdd();                        // window

const objA = {
    name: Object,
    onAdd: onAdd
}
console.log(objA.name);
objA.onAdd();                   // obj
console.log('');

const arr = [10, 20, onAdd];
console.log(arr[0], arr[1]);
arr[2]();                       // arr 배열

