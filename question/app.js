// Q1
let nickname = 'ありんこ';
let age = '22';
console.log('私のニックネームは'+ nickname +'です。年齢は'+ age +'歳です。');

// Q2
let languages = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go'];
console.log(`私の好きな言語は${languages[0]}です。次は${languages[3]}を勉強してみたいです。`);

// Q3
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};
console.log(user.age);

// Q4
let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];
console.log(playerList[1].favorites[1]);

// Q5
let total = playerList[0].age + playerList[1].age + playerList[2].age;
let average = total/3;
console.log(average);

// Q6-1
function sayHello(){
  console.log("Hello");
}
sayHello();

// Q6-2
let sayWorld = function (){
  console.log("World");
}
sayWorld();

// Q7-1
user.birthday = '2000-09-27';
console.log(user.birthday);

// Q7-2
user.sayHello = function (){
  console.log("Hello!");
}
user.sayHello();

// Q8
let calc = {
  add: function(x,y){
    console.log(x + y);
  },
  subtract: function(x,y){
    console.log(x - y);
  },
  multiply: function(x,y){
    console.log(x * y);
  },
  divide: function(x,y){
    console.log(x / y);
  }
};

calc.add(3,4);
calc.subtract(15,5);
calc.multiply(7,7);
calc.divide(20,4);

// Q9
function remainder(x,y){
  return x + 'を' + y + 'で割ったは' + x % y + 'です。`'
}
console.log(remainder(5,3));

// Q10
// このfooメソッド内のxという変数は、fooメソッド内で定義されているためローカル変数です。
// そのため、ｘのスコープ（変数の有効範囲）はfooメソッド内です。
// また、メソッド外でｘを定義していないため、ｘをメソッドの外で参照することはできません。
// 以上の理由からコンソールで出力されずにエラーを出します。

// 応用編

// Q1 
const randomNumber = Math.floor(Math.random() * 10);
console.log(randomNumber);

// Q2
function hello(){
  console.log('Hello World!');
}
setTimeout(hello,3000);

//Q3
let num = 0;
if(num > 0){
  console.log("num is greater than 0");
}else if(num == 0){
  console.log("num is 0");
} else {
  console.log("num is less than 0");
}

// Q4
let numbers = [];
let n = 0;
for(let i = 0; i < 100; i++){
 numbers[i] = i;
}
for(let i = 0; i < 100; i++){
  console.log(numbers[i]);
}

// Q5
let mixed = [4, '2', 5, '8', '9', 0, 1];
for(let i = 0; i < mixed.length; i++){
  let Number = mixed[i];
  if(Number%2 === 0  && typeof Number === "number"){
    console.log("even");
  }else if(Number%2 !== 0 && typeof Number === "number"){
    console.log("odd");
  }else{
    console.log("not number");
  }
}

