console.log("functions");
function ekle(a, b) {
    return a + b;
}
var total = ekle(10, 20);
console.log(total);
function print() {
    console.log("Print function");
    // return 35;                           // burasi hata verir
}
print();
function print2() {
    console.log("Print-2 function");
    return 35;
}
var variabl = print2();
console.log(variabl);
function combine(name, surname) {
    return name + " " + surname;
}
console.log(combine("Ali", "Yilmaz"));
//console.log(combine(25, "Yilmaz"))           Burasi hata verir
function combine2(name, surname) {
    if (surname === void 0) { surname = "Kirmizi"; }
    return name + " " + surname;
}
console.log(combine2("Ali")); // default parametreyi alir
console.log(combine2("Ali", "Yildiz")); // Yildiz soyadini alir, cünkü overwrite yapti
//! OPTIONAL PARAMETERS AND ARROW FUNCTIONS
function carpim(a, b, c) {
    if (typeof c !== "undefined") {
        return a * b * c;
    }
    return a * b;
}
console.log(carpim(5, 10, 10));
var toplam = function (a, b, c) {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
console.log(toplam(45, 25));
function add(a, b) {
    return a + b;
}
console.log(add(25, 20));
console.log(add("Salih", " Özcan"));
//! REST PARAMETERS
function aggregate() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var total = 0;
    numbers.forEach(function (num) { return total += num; });
    return total;
}
console.log(aggregate(1, 2, 3, 4, 5, 6, 7, 8, 9));
// console.log(aggregate("Ali", 3,4))          //hata
function combineStrings(message) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    console.log(message + " " + names.join(", "));
}
combineStrings("Hello", "Ayse", "Ali", "Veli");
