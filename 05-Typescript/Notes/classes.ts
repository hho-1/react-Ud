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
    super(id, firstName, lastName);                         //parentin constructor'ini cagirdik
  }
}

let employee = new Employee(29, "Can", "Boz");
console.log(employee)
console.log(employee.getFullName())                     // Parenttaki metodu cagirdik



//! STATIC METHODS     

class Circle{
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

console.log(Circle.pi)            // statik olunca bu sekilde ulasilabiliyor, yani bu class'tan bir obje olusturmamiza gerek kalmadan icine erisebiliyoruz.
console.log(Circle.hesapla(5))


let objem = new Circle()
console.log(objem.piSayisi)       // statik olmayan degiskene ancak bu sekilde ulasabilirim. Önce obje olusturmam gerek

let objem2 = new Circle();
console.log(objem2.piSayisi);


//! ABSTRACT CLASSES

//Abstract classin instance'ini alip ondan object olusturamiyoruz, ancak onu extend edebiliriz.

abstract class Department {
    constructor(public name: string) { }
    
    abstract printMeeting(): void;
}

class AccountingDepartment extends Department {
    constructor() {
        super("Accounting and Auditing")
    }

    printMeeting(): void {
        console.log("The accounting department meets each Monday at 10.00am")
    }
}