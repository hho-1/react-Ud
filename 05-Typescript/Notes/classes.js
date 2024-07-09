var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("Classes started");
var Person = /** @class */ (function () {
    function Person(myId, myFirstName, myLastName) {
        this.id = myId;
        this.firstName = myFirstName;
        this.lastName = myLastName;
    }
    Person.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return Person;
}());
var personalInfo = new Person(312211, "Ali", "Kara");
console.log(personalInfo);
console.log(personalInfo.getFullName());
//! ACCESS MODIFIERS
//? Üstteki kisimda yazdigimiz degiskenler default olarak public, olmasalar zaten ulasamazdim
var Person2 = /** @class */ (function () {
    function Person2(myId, myFirstName, myLastName) {
        this.id = myId;
        this.firstName = myFirstName;
        this.lastName = myLastName;
    }
    Person2.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return Person2;
}());
var personalInfo2 = new Person2(312211, "Ali", "Kara");
// console.log(personalInfo2.id)            // id private oldigi icin sadece ilgili class icinden erisilebilir
// console.log(personalInfo2.firstName)            // firstName protected oldigi icin sadece ilgili class icinden ya da bu classtan extend ile üretilen classlarda kullanilabilir
console.log(personalInfo2.lastName); // lastName readonly olunca erisilebilir ama degistirilemez.
//! INHERITANCE
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(id, firstName, lastName) {
        return _super.call(this, id, firstName, lastName) || this;
    }
    return Employee;
}(Person));
var employee = new Employee(29, "Can", "Boz");
console.log(employee);
console.log(employee.getFullName()); // Parenttaki metodu cagirdik
//! STATIC METHODS     
var Circle = /** @class */ (function () {
    function Circle() {
        this.piSayisi = 3;
        Circle.pi++;
        this.piSayisi++;
    }
    Circle.hesapla = function (radius) {
        return this.pi * radius * radius;
    };
    Circle.pi = 3.14;
    return Circle;
}());
console.log(Circle.pi); // statik olunca bu sekilde ulasilabiliyor, yani bu class'tan bir obje olusturmamiza gerek kalmadan icine erisebiliyoruz.
console.log(Circle.hesapla(5));
var objem = new Circle();
console.log(objem.piSayisi); // statik olmayan degiskene ancak bu sekilde ulasabilirim. Önce obje olusturmam gerek
var objem2 = new Circle();
console.log(objem2.piSayisi);
//! ABSTRACT CLASSES
//Abstract classin instance'ini alip ondan object olusturamiyoruz, ancak onu extend edebiliriz.
var Department = /** @class */ (function () {
    function Department(name) {
        this.name = name;
    }
    return Department;
}());
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment() {
        return _super.call(this, "Accounting and Auditing") || this;
    }
    AccountingDepartment.prototype.printMeeting = function () {
        console.log("The accounting department meets each Monday at 10.00am");
    };
    return AccountingDepartment;
}(Department));
