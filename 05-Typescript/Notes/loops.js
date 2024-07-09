console.log("loops started");
var x = 15;
var y = 25;
if (x > y) {
    console.log("X is bigger than Y");
}
else {
    console.log("X is smaller than Y or equal to it.");
}
//? No significant difference from JS
x > y
    ? console.log("X is bigger than Y")
    : console.log("X is smaller than Y or equal to it."); // ternary operator option
//! SWITCH CASE
var day = 2;
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
var arr = [10, 20, 30, 40];
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var item = arr_1[_i];
    console.log(item);
}
var str = "React";
for (var _a = 0, str_1 = str; _a < str_1.length; _a++) {
    var item = str_1[_a];
    console.log(item);
}
for (var item in arr) { // arr arrayindeki itemlearin indexini almak icin, sirayla ekrana yazdirir
    console.log(item);
}
