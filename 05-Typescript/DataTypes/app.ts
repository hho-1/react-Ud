console.log("We started to Typescript");
console.log("This is the second row.");

let age: number = 37;
let firstName: string = "Eleman";
let isUpdated: boolean = true;

function display(id: any, name: string) {
  //any, id her tipte olabilir demek
  console.log("Id = " + id + ", Name = " + name);
}

let hexadecimalNumber: number = 0x37cf; // Bu da bir sayi tipi
console.log(hexadecimalNumber);

let empleyeeName: string = `${firstName} is ${age} years old.`; //template literal kullanimi burada da var.
console.log(empleyeeName);

//! ARRAYS

let workers: string[] = ["Ali", "Veli", "Cem"];
let workers2: Array<string> = ["Salih", "Sacit", "Tuba"];

console.log(workers);
console.log(workers2);

let workers3: Array<string>;
workers3 = ["John", "Hans"];

//!Multi-type arrays

let values: (string | number)[] = ["Apple", 2, "Orange", 3, 4];
console.log(values);

console.log(values[2]); //2.index

//!Tuples (Coklu degisken tanimlamalari)

let Id: number = 1;
let instructorName: string = "Ben";

let instructor: [number, string] = [1, "Abby"];
console.log(instructor);

let employees: [number, string][];
employees = [
  [1, "Steve"],
  [2, "John"],
  [3, "Abby"],
];
console.log(employees);

//!Objects

let student: object;

student = {
  firstName: "Can",
  lastname: "Sari",
  age: 21,
  jobTitle: "developer",
};

console.log(student);
//console.log(student.age)     //burada hata aliyoruz, bunun önüne gecmek icin sunu yapiyoruz:

type Person = {
  firstName: string;
  lastname: string;
  age: number;
  jobTitle: string;
};

let student2: Person; // Bu bir interface

student2 = {
  firstName: "Ali",
  lastname: "Kara",
  age: 23,
  jobTitle: "graphic designer",
};

console.log(student2.age); // Simdi artik burada hata almiyoruz

let person: {
  // Bu sekilde de tanimlama yapilabilir
  firstName: string;
  lastname: string;
  age: number;
  jobTitle: string;
};

person = {
  firstName: "Salih",
  lastname: "kirmizi",
  age: 76,
  jobTitle: "actor",
};

console.log(person.lastname);

//! ENUM

enum Media {
  Newspaper, // Bunlara deger vermezsek default olarak 0'dan baslayarak asagi dogru 1 artirarak verir
  Newsletter,
  Magazine,
  Book,
}

console.log(Media.Magazine);
console.log(Media[3]); // Book'a ulasmak icin

enum PrintMedia {
  Newspaper = "NEWSPAPER",
  Newsletter = "NEWSLETTER",
  Magazine = "MAGAZINE",
  Book = "BOOK",
}

console.log(PrintMedia.Newsletter); //NEWSLETTER verir


//! UNION

let code: string | number = "123"          // Ya string ya number

console.log(code)

code = 32
console.log(32)


//! ANY       cok önerilmese de frontendde kullanilabiliyor. backendde data type degisikiginden etkilenmesin diye

let smthng: any = "Hello";

smthng = 64

console.log(smthng)

smthng = true          // Bunlarin hicbirinde hata almiyoruz

console.log(smthng)

let someArray: any[] = ["John", 34, false]
console.log(someArray)


//! VOID

//? Bir fonksiyon geriye deger döndürmüyorsa tipini void olarak tanimliyoruz

function sayHello(): void {
    console.log("Hello")
}

sayHello()


//! NEVER (geriye null dahil hicbir value dönmeyecek demek)

function throwError(errorMsg: string): never {
    throw new Error(errorMsg)
}

// throwError("Hata")     bu hata veriyor


//? never ile void arasindaki fark? void null ve undefined degerini döndürebiliyorken, never onlari bile döndürmez.

let voidExample: void = null;
//let neverExample: never = null;

console.log(voidExample)


//! TYPE INFERENCE (Tip belirtmememize ragmen otomatik tip atamasi yapilmasi)

let sayac = 0;

console.log(typeof(sayac))           //number verir

function increment(counter: number) {
    return counter++;
}

function increment2(counter: number):number {           // Bununla üstteki fonksiyon birbirinin aynisi
    return counter++;
}

let a = "Some text";
let b = 123;

// a = b;            //Type 'number' is not assignable to type 'string'. hatasi veriyor


//! TYPE ASSERTION

let etwas: any = 123;
console.log(typeof (etwas))

let empCode = <number>etwas;
console.log(typeof (empCode))

// let personal = {};
// console.log(typeof (personal))

//personal.name = "John"       //hata verir

interface Personal{
    name: string,
    code:number
}

let personal = <Personal>{};

console.log(typeof (personal));
personal.name = "Albert"
console.log(personal.name)
