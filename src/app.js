import Hello from './hello.ts'

const test = 'Success';
document.getElementById('title').innerHTML = test;
const hello = new Hello();
const msg = hello.sayHi();
document.getElementById('msg').innerHTML = msg
console.log(msg);
