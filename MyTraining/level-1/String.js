function getlength(a) {
    console.log(a.length);
}
var a = "343/434";
// getlength(a);




//give first index value
function getIndexOf(a, target) {
    // console.log(a)
    console.log("Index: ",
        a.indexOf(target));
}
// getIndexOf(a, '/32');
// the target is not present in the system then the out put is -1





//give last index value
function findLastIndexOf(a, target) {
    // console.log(a)
    console.log("Index: ",
        a.lastIndexOf(target));
}
// findLastIndexOf(a, '3');


function Slice(arr, f, l) {
    console.log(arr.slice(f, l));
}
a = "Hello world";
// Slice(a, 0, 5);
// or
// console.log("hell01world".slice(2, 5));
// console.log(" ");
// console.log("hell01world".substr(2, 5));
// here substr 2 represents the starting opint and 5 represents the length but inslice5 it represents the ending pointit is totally different
let n = "";

function cutit(arr, f, l) {
    n = arr.slice(f, l);
}
cutit("lakhanororo", 0, 4);
// console.log(n);
// if i want to include the last index alsoso just do +1;



function Replace(arr, a, b) {
    let z = arr.replace(a, b); //returns the variable does'nt actualy changes it
    console.log(z);
}
let arr = "hello world";
a = "world";
let b = "lakhan";
Replace(arr, a, b);
// console()


let words = "hello  world this is dushant ";
const value = words.split(" ");
// console.log(value);
console.log("To Upper case : ",
    words.toUpperCase());
console.log("To lower case : ", words.toLowerCase());
// console.log(value;


words = "       Helo     world       ";
console.log("after trimiming", words.trim());
// it only trims the outer part not the inner part of the string
// it only trims the outer part not the inner part of the string
//parseInt removes the quotes and converts it into int ie
/*
"34"=34;
"34pd"=34;
1.1334343=1;
*/
// console.log(parseInt("437480"));
// console.log(parseInt(".437480"));
// console.log(parseInt("4dnf37480"));
/*
console.log("before push ",
    arr);

arr.push(2);
console.log("after push :",
    arr);
arr.pop();
console.log("after pop : ", arr);


// if i wznt to pop from front use SHifta
arr.shift();
console.log("after shift: ",
    arr);
//unshift will put some value  in front
arr.unshift(69);
console.log("after unshift: ",
    arr);

// push pop shift inshift

//add two array'
let iarr = "6";
let farr = "9";
let earr = iarr.concat(farr);
console.log(earr);

function newFunction() {
    arr = [1, 3, 4, 5];
}

//fucntion log thing
function logThing(str) {
    console.log(str);
}


// iarr.array.forEach(logThing);
logThing(1);
logThing(2);
logThing(3);

function callinginsideafunction(fn) {
    fn();
}
*/
//  callback ,map, filter, find, sort
/*

class animal{

constructor(name,age,speak)
{
    this.name=name;
    this.age=age;
    this.speak=speak;
}
describe(){
    return '&(this.name) has &(this.age)'
}};

// animal lion/
let dog=4;
dog=new animal("dog",3,"bhow bhow");
console.log(dog);
// static fcinton " thiese arn't aassosiated to obj these are associated to classes  "
*/

class cs{
  static mytype(){
    console.log("checking how static function works");
  }
};
//  cs = new class();

cs.mytype();

/*date class in javascript */
const cd=new Date();
console.log(cd);
console.log(cd.getDate());
