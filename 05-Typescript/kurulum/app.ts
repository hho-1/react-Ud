console.log("We started to Typescript");
console.log("This is the second row.");

let age:number = 37;
let firstName: string = "Eleman";
let isUpdated: boolean = true;


function display(id: any, name: string) {              //any, id her tipte olabilir demek
    console.log("Id = " + id + ", Name = " + name)
}

let hexadecimalNumber: number = 0x37cf;       // Bu da bir sayi tipi
console.log(hexadecimalNumber)

let empleyeeName: string = `${firstName} is ${age} years old.`        //template literal kullanimi burada da var.
console.log(empleyeeName)


// ARRAYS

let workers:string[] = ["Ali", "Veli", "Cem"]
let workers2: Array<string> = ["Salih", "Sacit", "Tuba"]

console.log(workers)
console.log(workers2)

let workers3: Array<string>;
workers3 = ["John", "Hans"]

//Multi-type arrays

let values: (string | number)[] = ["Apple", 2, "Orange", 3, 4]
console.log(values)

console.log(values[2])         //2.index