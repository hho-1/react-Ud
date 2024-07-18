//export {}; //! this row is so important. It protects you from gettirng continuous errors for double implementation. because JS and TS files work together

console.log("Classes started");

class Person {
  id: number;
  firstName: string;
  lastName: string;

  constructor(myId: number, myFirstName: string, myLastName: string) {
    this.id = myId;
    this.firstName = myFirstName;
    this.lastName = myLastName;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

let personalInfo = new Person(312211, "Ali", "Kara");
console.log(personalInfo);

console.log(personalInfo.getFullName());

//! ACCESS MODIFIERS

//? Üstteki kisimda yazdigimiz degiskenler default olarak public, olmasalar zaten ulasamazdim

class Person2 {
  private id: number;
  protected firstName: string;
  readonly lastName: string;

  constructor(myId: number, myFirstName: string, myLastName: string) {
    this.id = myId;
    this.firstName = myFirstName;
    this.lastName = myLastName;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

let personalInfo2 = new Person2(312211, "Ali", "Kara");
// console.log(personalInfo2.id)            // id private oldigi icin sadece ilgili class icinden erisilebilir
// console.log(personalInfo2.firstName)            // firstName protected oldigi icin sadece ilgili class icinden ya da bu classtan extend ile üretilen classlarda kullanilabilir
console.log(personalInfo2.lastName); // lastName readonly olunca erisilebilir ama degistirilemez.

//! INHERITANCE

class Employee extends Person {
  constructor(id: number, firstName: string, lastName: string) {
    super(id, firstName, lastName); //parentin constructor'ini cagirdik
  }
}

let employee = new Employee(29, "Can", "Boz");
console.log(employee);
console.log(employee.getFullName()); // Parenttaki metodu cagirdik

//! STATIC METHODS

class Circle {
  static pi: number = 3.14;
  piSayisi = 3;

  constructor() {
    Circle.pi++;
    this.piSayisi++;
  }

  static hesapla(radius: number) {
    return this.pi * radius * radius;
  }
}

console.log(Circle.pi); // statik olunca bu sekilde ulasilabiliyor, yani bu class'tan bir obje olusturmamiza gerek kalmadan icine erisebiliyoruz.
console.log(Circle.hesapla(5));

let objem = new Circle();
console.log(objem.piSayisi); // statik olmayan degiskene ancak bu sekilde ulasabilirim. Önce obje olusturmam gerek

let objem2 = new Circle();
console.log(objem2.piSayisi);

//! ABSTRACT CLASSES

//Abstract classin instance'ini alip ondan object olusturamiyoruz, ancak onu extend edebiliriz.

abstract class Department {
  constructor(public name: string) {}

  printName(): void {
    console.log("Department name: " + this.name);
  }

  abstract printMeeting(): void;
}

class AccountingDepartment extends Department {
  constructor() {
    super("Accounting and Auditing");
  }

  printMeeting(): void {
    console.log("The accounting department meets each Monday at 10.00am");
  }

  generateReports(): void {
    console.log("Generating accounting reports...");
  }
}

let department = new AccountingDepartment();

//let department2 = new Department()       //? Bunu yapamiyrouz, cünkü abstract class'in instance'i alinamiyor.

department.printMeeting();
department.printName();
department.generateReports();

//! INTERFACES

// function getFullname(person: {
//   firstName: string,                 //Bu sekilde uzun uzun her seyin tipini tanimlamamak icin interface kullanacagiz
//   lastName:string
// }) {
//   return `${person.firstName} ${person.lastName}`;
// }

let person = {
  firstName: "Aisha",
  lastName: "Marvick",
  middleName: "Mariam",
};

// console.log(getFullname(person))

interface Eleman {
  firstName: string; //Bu sekilde uzun uzun her seyin tipini tanimlamamak icin interface kullanacagiz
  lastName: string;
  middleName?: string; //? Optional parameter, can be sent or not
}

function getFullname21(person: Eleman) {
  if (person.middleName) {
    return `${person.firstName} ${person.middleName} ${person.lastName}`;
  } else {
    return `${person.firstName} ${person.lastName}`;
  }
}

console.log(getFullname21(person));

//!FUNCTION TYPE INTERFACES

interface StringFormat {
  (str: string, isUpper: boolean): string;
}

let format: StringFormat;

format = function (str: string, isUpper: boolean) {
  return isUpper ? str.toLocaleUpperCase() : str.toLocaleLowerCase();
};

console.log(format("Aisha Mariam", false));

//! EXTENDING INTERFACES AND IMPLEMENTING

interface IPerson {
  name: string;
  gender: string;
}

interface IEmployee extends IPerson {
  empNumber: number;
}

let employeeee: IEmployee = {
  empNumber: 1,
  gender: "male",
  name: "John",
};

console.log(employeeee);

interface IPersonal extends IEmployee {
  personalDept: string;
}

let newEmployeee: IPersonal = {
  empNumber: 2,
  gender: "female",
  name: "Carol",
  personalDept: "HR",
};

console.log(newEmployeee);

class Staff implements IPerson {
  //? Cok önerilen bir kullanim degil, implemente ettigin interface'i bir daha tanimlamani öngörüyor. Amele isi
  name: string;
  gender: string;
  idNumber: number;

  constructor(name: string, gender: string, idNumber: number) {
    this.name = name;
    this.gender = gender;
    this.idNumber = idNumber;
  }
}

let newStaff = new Staff("Hasan", "male", 1272736723627);
console.log(newStaff);

//! TYPE INTERSECTION

//? Basic data type'larda pek bir anlami yok, yani bir variable ayni anda hem number hem string olamaz. Interface'lerde kullaniliyor.

interface BusinessPartner {
  name: string;
  credit: number;
}

interface Identity {
  name: string;
  id: number;
}

interface Contact {
  email: string;
  phone: number;
}

type Calisan = Identity & Contact; //* Intersection type & ile yapiliyor.

let kisi: Calisan = {
  name: "Necati",
  id: 95959765976,
  email: "hsjddj@example.com",
  phone: 98879878,
};

console.log(kisi);

//! TYPE GUARD

type tip = string | number;

function add(a: tip, b: tip) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  if (typeof a === "string" && typeof b === "string") {
    return a.concat(b);
  }

  //throw new Error("Please pay attention to the types of your given data");
}

console.log(add("Hasan ", 5));

class Customer {
  isCreditAllowed(): boolean {
    return true;
  }
}
class Supplier {
  isInShortList(): boolean {
    return true;
  }
}

type BusinessPartner1 = Customer | Supplier;

function signContract(partner: BusinessPartner1) {
  let message: string;

  if (partner instanceof Customer) {
    message = partner.isCreditAllowed()
      ? "Sign a new contract with the customer"
      : "credit issue";
  }
  if (partner instanceof Supplier) {
    message = partner.isInShortList()
      ? "Sign a new contract with the supplier"
      : "Need to evaluate further";
  }

  
}


//!   GENERICS

// Donus tipini verdigim degere göre ayarlamak istiyorsam generic kullaniyoruz

function getRandomNumber(items: number[]): number{
  let randomIndex = Math.floor(Math.random() * items.length)
  return items[randomIndex]
}

let numbers = [1, 54, 65, 7, 8]

console.log(getRandomNumber(numbers))


function getRandomString(items: string[]): string {
  let randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

let myNames = ["Can", "Cem", "Ali"]

console.log(getRandomString(myNames));

//* Yukardaki iki fonksiyonu tek fonksiyonda halletmek istiyorum.

function getRandomElement(items: any[]): any {                         //? Tip any olunca her seyi döndürüyor. Ancak bu da tip güvenligi konusunda bizi rahatlatmiyor. type-safe degil
  let randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

console.log(getRandomElement(numbers))
console.log(getRandomElement(myNames))


function getRandomElement2<T>(items: T[]): T {                       //? bu sekilde generic kullaninca type inference yoluyla gelen seyin type'ina uygun olarak geri dönüt veriyor.
  let randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

console.log(getRandomElement2(numbers));
console.log(getRandomElement2(myNames));

//*Burada istersek zorunlu tip atamasi da yapabiliyoruz. Su sekilde:

console.log(getRandomElement2<number>(numbers));
console.log(getRandomElement2<string>(myNames));        //? Burada T'ye hic bakma, tipi direkt olarak bundan olsun diye baskilama yapiyoruz.

let myBooleans = [true, false, true, true, false]

console.log(getRandomElement2(myBooleans));             //? görüldügü gibi boolean degisken bile girsek problem cikarmiyor.


//! GENERIC CONSTRAINTS

function merge<U extends object, V extends object>(obj1: U, obj2: V) {       //? Genericlerde constraint tipi extends ile bir sarta baglamak demek
  return {
    ...obj1, ...obj2
  }
}

let sahis = merge(
  {
    name: "John", 
  }, {age:28}
)

console.log(sahis)


//! GENERIC INTERFACES

interface IMonths<U, V>{
  key: U,
  value: V
}

let months: IMonths<number, string> = {
  key: 1, value: "January"
}

console.log(months)

interface ICollection<T>{
  add(o: T): void;
  remove(o:T):void
}

class List<T> implements ICollection<T>{
  private items: T[] = [];

  add(o: T): void{
    this.items.push(o)
    console.log(this.items)
  }

  remove(o: T): void { 
    let index = this.items.indexOf(o);
    if (index > -1) {
      this.items.splice(index, 1)
    }
  }
}

let list = new List<number>()

for (let i = 0; i < 10; i++){
  list.add(i)
}


//! GENERIC CLASSES

class Stack<T> {
  private elements: T[] = []

  constructor(private size: number) {
    
  }

  isEmpty(): boolean{
    return this.elements.length === 0
  }

  isFull(): boolean {
    return this.elements.length === this.size;
  }

  push(element: T): void {
    if (this.elements.length === this.size) {
      throw new Error("The stack is full!")
    }
    this.elements.push(element)
  }

  pop(): T {
    if (this.elements.length == 0) {
      throw new Error("The stack is empty!");
    }
    return this.elements.pop();
  }
}

function randomBetween(low: number, high: number): number{
  return Math.floor(Math.random() * (high - low + 1) + low);
}

let numbers2 = new Stack<number>(5)

while (!numbers2.isFull()) {
  let n = randomBetween(1, 10);
  console.log(`Push ${n} into the stack`)
  numbers2.push(n)
}

while (!numbers2.isEmpty()) {
  let n = numbers2.pop();
  console.log(`Pop ${n} from the stack`)
}