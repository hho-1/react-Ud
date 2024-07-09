console.log("We started to Typescript");
console.log("This is the second row.");
var age = 37;
var firstName = "Eleman";
var isUpdated = true;
function display(id, name) {
    console.log("Id = " + id + ", Name = " + name);
}
var hexadecimalNumber = 0x37cf; // Bu da bir sayi tipi
console.log(hexadecimalNumber);
var empleyeeName = "".concat(firstName, " is ").concat(age, " years old."); //template literal kullanimi burada da var.
console.log(empleyeeName);
// ARRAYS
var workers = ["Ali", "Veli", "Cem"];
var workers2 = ["Salih", "Sacit", "Tuba"];
console.log(workers);
console.log(workers2);
var workers3;
workers3 = ["John", "Hans"];
//Multi-type arrays
var values = ["Apple", 2, "Orange", 3, 4];
console.log(values);
console.log(values[2]); //2.index
