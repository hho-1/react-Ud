"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("We started to Typescript");
console.log("This is the second row.");
var age = 37;
var firstName = "Eleman";
var isUpdated = true;
function display(id, name) {
    //any, id her tipte olabilir demek
    console.log("Id = " + id + ", Name = " + name);
}
var hexadecimalNumber = 0x37cf; // Bu da bir sayi tipi
console.log(hexadecimalNumber);
var empleyeeName = "".concat(firstName, " is ").concat(age, " years old."); //template literal kullanimi burada da var.
console.log(empleyeeName);
//! ARRAYS
var workers = ["Ali", "Veli", "Cem"];
var workers2 = ["Salih", "Sacit", "Tuba"];
console.log(workers);
console.log(workers2);
var workers3;
workers3 = ["John", "Hans"];
//!Multi-type arrays
var values = ["Apple", 2, "Orange", 3, 4];
console.log(values);
console.log(values[2]); //2.index
//!Tuples (Coklu degisken tanimlamalari)
var Id = 1;
var instructorName = "Ben";
var instructor = [1, "Abby"];
console.log(instructor);
var employees;
employees = [
    [1, "Steve"],
    [2, "John"],
    [3, "Abby"],
];
console.log(employees);
//!Objects
var student;
student = {
    firstName: "Can",
    lastname: "Sari",
    age: 21,
    jobTitle: "developer",
};
console.log(student);
var student2; // Bu bir interface
student2 = {
    firstName: "Ali",
    lastname: "Kara",
    age: 23,
    jobTitle: "graphic designer",
};
console.log(student2.age); // Simdi artik burada hata almiyoruz
var person;
person = {
    firstName: "Salih",
    lastname: "kirmizi",
    age: 76,
    jobTitle: "actor",
};
console.log(person.lastname);
//! ENUM
var Media;
(function (Media) {
    Media[Media["Newspaper"] = 0] = "Newspaper";
    Media[Media["Newsletter"] = 1] = "Newsletter";
    Media[Media["Magazine"] = 2] = "Magazine";
    Media[Media["Book"] = 3] = "Book";
})(Media || (Media = {}));
console.log(Media.Magazine);
console.log(Media[3]); // Book'a ulasmak icin
var PrintMedia;
(function (PrintMedia) {
    PrintMedia["Newspaper"] = "NEWSPAPER";
    PrintMedia["Newsletter"] = "NEWSLETTER";
    PrintMedia["Magazine"] = "MAGAZINE";
    PrintMedia["Book"] = "BOOK";
})(PrintMedia || (PrintMedia = {}));
console.log(PrintMedia.Newsletter); //NEWSLETTER verir
//! UNION
var code = "123"; // Ya string ya number
console.log(code);
code = 32;
console.log(32);
//! ANY       cok önerilmese de frontendde kullanilabiliyor. backendde data type degisikiginden etkilenmesin diye
var smthng = "Hello";
smthng = 64;
console.log(smthng);
smthng = true; // Bunlarin hicbirinde hata almiyoruz
console.log(smthng);
var someArray = ["John", 34, false];
console.log(someArray);
//! VOID
//? Bir fonksiyon geriye deger döndürmüyorsa tipini void olarak tanimliyoruz
function sayHello() {
    console.log("Hello");
}
sayHello();
//! NEVER (geriye null dahil hicbir value dönmeyecek demek)
function throwError(errorMsg) {
    throw new Error(errorMsg);
}
// throwError("Hata")     bu hata veriyor
//? never ile void arasindaki fark? void null ve undefined degerini döndürebiliyorken, never onlari bile döndürmez.
//let voidExample: void = null;
//let neverExample: never = null;
//console.log(voidExample);
//! TYPE INFERENCE (Tip belirtmememize ragmen otomatik tip atamasi yapilmasi)
var sayac = 0;
console.log(typeof sayac); //number verir
function increment(counter) {
    return counter++;
}
function increment2(counter) {
    // Bununla üstteki fonksiyon birbirinin aynisi
    return counter++;
}
var a = "Some text";
var b = 123;
// a = b;            //Type 'number' is not assignable to type 'string'. hatasi veriyor
//! TYPE ASSERTION
var etwas = 123;
console.log(typeof etwas);
var empCode = etwas;
console.log(typeof empCode);
var personal = {};
console.log(typeof personal);
personal.name = "Albert";
console.log(personal.name);
