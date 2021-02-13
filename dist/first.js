"use strict";
let age;
let club = "real madrid";
let isFamous = false;
age = 150;
function add(num1, num2) {
    return num1 + num2;
}
add(9, 8);
add(32, 10);
function doubleItAndConsole(num) {
    const result = num * 2;
    console.log(result);
}
function fullName(firstName, lastName) {
    return firstName + " " + lastName;
}
const user = fullName('Ben', 'afLec');
const output = doubleItAndConsole(50);
console.log(output);
let multiply2;
multiply2 = (x, y) => x * y;
const multiply = (x, y) => x * y;
console.log(multiply(5, 6));
const numbers = [23, 5, 6, 8, 5, 20];
numbers.push(20);
const friends = ['george', 'jeff', 'bill', 'jackson'];
let megaName = '';
for (let i = 0; i < friends.length; i++) {
    const friend = friends[i];
    if (friend.length > megaName.length) {
        megaName = friend;
    }
}
console.log("friend with largest name:", megaName);
let player = {
    club: 'real madrid',
    salary: 450000,
};
//object
const myFriend = {
    name: 'peter parker',
    age: 25
};
myFriend.age = 30;
const messy = {
    name: 'messy',
    club: 'barcelona',
    salary: 4500000,
    wife: 'some one',
    isPlaying: true
};
const ronaldo = {
    name: 'ronaldo',
    club: 'real madrid',
    salary: 5100000,
    isPlaying: true
};
function getBonus(player, friends) {
    return player.salary * .1;
}
const poorPlayer = { age: 50, salary: 1000 };
getBonus(messy, []);
class Person {
    constructor(name, father) {
        this.name = name;
        this._partner = name;
        this.fatherName = father;
    }
    getName() {
        return this.name + " " + this._partner;
    }
}
const sam = new Person('samuel', 'david');
console.log('name', sam.name, sam.fatherName);
const samName = sam.getName();
sam.name = 'ben';
// sam.fatherName = 'afleck'
