console.log("loops started")

let x:number = 15
let y:number = 25

if (x > y) {
    console.log("X is bigger than Y")
}
else {
    console.log("X is smaller than Y or equal to it.");
}

//? No significant difference from JS

x > y
  ? console.log("X is bigger than Y")
    : console.log("X is smaller than Y or equal to it.");          // ternary operator option
  

//! SWITCH CASE

let day: number = 2

switch (day) {
    case 0:
        console.log("Its Sunday.");
        break;
    case 1:
        console.log("Its Monday.");
        break;
    case 2:
        console.log("Its Tuesday.");
        break;
    case 3:
        console.log("Its Wednesday.");
        break;
    case 4:
        console.log("Its Thirsday.");
        break;
    case 5:
        console.log("Its Friday.");
        break;
    case 6:
        console.log("Its Saturday.");
        break;
    default:
        console.log("Wrong day entry");
        break;
    
}



//! FOR LOOP

//? No difference from JS for loop

let arr = [10, 20, 30, 40]

for (let item of arr) {
    console.log(item)
}

let str = "React"

for (let item of str) {
  console.log(item);
}

for (let item in arr) {           // arr arrayindeki itemlearin indexini almak icin, sirayla ekrana yazdirir
  console.log(item);
}