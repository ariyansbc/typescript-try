let age: number;
let club: string = "real madrid";
let isFamous: boolean = false;

age = 150;


function add(num1: number, num2: number) {
    return num1 + num2;
}
add(9, 8);
add(32, 10)

function doubleItAndConsole(num: number): void {
    const result = num * 2;
    console.log(result)
}


function fullName(firstName: string, lastName: string): string {
    return firstName + " " + lastName;
}


const user: string = fullName('Ben', 'afLec')

const output = doubleItAndConsole(50)
console.log(output)

let multiply2: (x: number, y: number) => number;
multiply2 = (x, y,) => x * y;
const multiply = (x: number, y: number): number => x * y;

console.log(multiply(5, 6))


const numbers: number[] = [23, 5, 6, 8, 5, 20];
numbers.push(20)

const friends: string[] = ['george', 'jeff', 'bill', 'jackson'];
let megaName: string = ''
for (let i = 0; i < friends.length; i++) {
    const friend: string = friends[i];
    if (friend.length > megaName.length) {
        megaName = friend;
    }
}
console.log("friend with largest name:", megaName)

let player: {
   club:string,
   salary: number
} = {   
  club: 'real madrid',
  salary: 450000,
}

//object
const myFriend:{name:string, age:number} = {
    name: 'peter parker',
    age: 25
}
myFriend.age = 30;
// myFriend.age = 'thirty'




interface Player {
    club: string,
    name: string,
    salary: number,
    wife?: string
    isPlaying: boolean
}

const messy:Player = {
    name: 'messy',
    club: 'barcelona',
    salary: 4500000,
    wife: 'some one',
    isPlaying: true
}
const ronaldo:Player = {
    name: 'ronaldo',
    club: 'real madrid',
    salary: 5100000,
    isPlaying: true
}


function getBonus(player: Player, friends: string[]) {
    return player.salary * .1;
}
const poorPlayer = {age: 50, salary: 1000}
getBonus(messy,[])


class Person {
    name:string;
    private _partner:string;
    readonly fatherName:string;
    constructor(name:string, father:string) {
        this.name = name;
        this._partner = name;
        this.fatherName = father;
    }
    getName():string{
        return this.name + " " + this._partner
    }
}

const sam = new Person('samuel','david');
console.log('name', sam.name , sam.fatherName)
const samName:string = sam.getName()
sam.name = 'ben';
// sam.fatherName = 'afleck'
