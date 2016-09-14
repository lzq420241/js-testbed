"use strict";
var toString = Object.prototype.toString;

var isString = function (obj) {
    return toString.apply(obj) === '[object String]';
};

//var a = 123;
var c = '123';
var d = {ab: 1};
console.log("'123' is String: " + isString(c));

console.log("d.toString is: " + d.toString());
console.log("Constructor of d is: " + d.constructor);

console.log("Prototype of d is same with Prototype of Object: " + (d.__proto__ === Object.prototype));
console.log("Prototype of Object is: " + Object.prototype);
console.log("Prototype of Function is: " + Function.prototype);

function Employee(name, job, born) {
    this.name = name;
    this.job = job;
    this.born = born;
}

console.log("Properties of Employee are: " + Object.getOwnPropertyNames(Employee));
console.log("Properties of Prototype of Employee is: " + Object.getOwnPropertyNames(Employee.prototype));
console.log("Prototype of Employee is: " + Object.getPrototypeOf(Employee.prototype));
console.log("Constructor of Prototype of Employee is: " + Employee.prototype.constructor);

console.log(Object.getPrototypeOf({}) === Object.prototype);