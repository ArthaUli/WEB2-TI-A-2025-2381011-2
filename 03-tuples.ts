let person: [string, number, boolean] = ["Jhon", 30, true];

//Tuple untuk koordinat
let coordinate: [number, number] = [10.5, 20.1];

//Tuple dengan optional element
let optionalTuple: [string, number?] = ["Hello"];
optionalTuple = ["Hello", 42];

//Destructuring tuple
let [name, age, isEmployed] = person;
console.log("Name : ", name);
console.log("Age : ", age);
console.log("Employed : ", isEmployed);

//Tuple dalam array
let employees: [string, number][] = [
  ["Jhon", 30],
  ["Jane", 25],
  ["Bob", 35],
];

employees.forEach(([name, age]) => {
  console.log(`${name} is ${age} years old`);
});

export {};
