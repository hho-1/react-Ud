console.log("functions")

function ekle(a: number, b: number):number {          // return tipini parantezin sonuna yazdik, bunu yazmasak da ts bunun type inference yardimiyla number olarak alir. Ama bu kullanim daha garanti
    return a + b;
}

let total = ekle(10, 20)

console.log(total)

function print(): void {
    console.log("Print function")
    // return 35;                           // burasi hata verir
}
print()

function print2() {                         // Burada void atamasi yapmadigimiz icin hata vermez
  console.log("Print-2 function");
    return 35;
}

let variabl = print2()
console.log(variabl)

function combine(name: string, surname: string) {
    return name + " " + surname
}

console.log(combine("Ali", "Yilmaz"))
//console.log(combine(25, "Yilmaz"))           Burasi hata verir


function combine2(name: string, surname: string = "Kirmizi") {
  return name + " " + surname;
}

console.log(combine2("Ali"));        // default parametreyi alir
console.log(combine2("Ali", "Yildiz"));        // Yildiz soyadini alir, cünkü overwrite yapti


//! OPTIONAL PARAMETERS AND ARROW FUNCTIONS

function carpim(a: number, b: number, c?: number) {        //?  ?optional manasina geliyor.
    if (typeof c !== "undefined") {
        return a*b*c
    }

    return a*b
}

console.log(carpim(5, 10, 10))


let toplam = (a:number, b:number, c?:number):number => {
    if (typeof c !== "undefined") {
      return a + b + c;
    }

    return a + b;
}

console.log(toplam(45, 25))


//! OVERLOADING

// Hem string hem de number gönderdigimde toplamasini istiyorsam

function add(a: string, b: string): string;
function add(a: number, b: number): number;

function add(a: any, b: any): any{
    return a + b;
}

console.log(add(25, 20))
console.log(add("Salih", " Özcan"))


//! REST PARAMETERS

function aggregate(...numbers: number[]):number {
    let total = 0;
    numbers.forEach((num) => total += num)
    return total;
}

console.log(aggregate(1,2,3,4,5,6,7,8,9))
// console.log(aggregate("Ali", 3,4))          //hata


function combineStrings(message: string, ...names: string[]) {
    console.log(message+" "+ names.join(", "))
}

combineStrings("Hello", "Ayse", "Ali", "Veli")




