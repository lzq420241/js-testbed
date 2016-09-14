'use strict';
// define the Person Class  
function Person(name) {
    this.name = name;
}  

Person.prototype.copy = function() {
    return new this.constructor(this.name);
};  

// define the Student class  
function Student(name) {  
    Person.call(this, name);
}  

// inherit Person  
Student.prototype = Object.create(Person.prototype);

var student1 = new Student("trinth");  
console.log(student1.copy() instanceof Student); // => false
Student.prototype.constructor = Student;
console.log(student1.copy() instanceof Student); 