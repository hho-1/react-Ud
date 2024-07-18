//export {}; //! this row is so important. It protects you from gettirng continuous errors for double implementation. because JS and TS files work together
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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
    Department.prototype.printName = function () {
        console.log("Department name: " + this.name);
    };
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
    AccountingDepartment.prototype.generateReports = function () {
        console.log("Generating accounting reports...");
    };
    return AccountingDepartment;
}(Department));
var department = new AccountingDepartment();
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
var person = {
    firstName: "Aisha",
    lastName: "Marvick",
    middleName: "Mariam",
};
function getFullname21(person) {
    if (person.middleName) {
        return "".concat(person.firstName, " ").concat(person.middleName, " ").concat(person.lastName);
    }
    else {
        return "".concat(person.firstName, " ").concat(person.lastName);
    }
}
console.log(getFullname21(person));
var format;
format = function (str, isUpper) {
    return isUpper ? str.toLocaleUpperCase() : str.toLocaleLowerCase();
};
console.log(format("Aisha Mariam", false));
var employeeee = {
    empNumber: 1,
    gender: "male",
    name: "John",
};
console.log(employeeee);
var newEmployeee = {
    empNumber: 2,
    gender: "female",
    name: "Carol",
    personalDept: "HR",
};
console.log(newEmployeee);
var Staff = /** @class */ (function () {
    function Staff(name, gender, idNumber) {
        this.name = name;
        this.gender = gender;
        this.idNumber = idNumber;
    }
    return Staff;
}());
var newStaff = new Staff("Hasan", "male", 1272736723627);
console.log(newStaff);
var kisi = {
    name: "Necati",
    id: 95959765976,
    email: "hsjddj@example.com",
    phone: 98879878,
};
console.log(kisi);
function add(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    if (typeof a === "string" && typeof b === "string") {
        return a.concat(b);
    }
    //throw new Error("Please pay attention to the types of your given data");
}
console.log(add("Hasan ", 5));
var Customer = /** @class */ (function () {
    function Customer() {
    }
    Customer.prototype.isCreditAllowed = function () {
        return true;
    };
    return Customer;
}());
var Supplier = /** @class */ (function () {
    function Supplier() {
    }
    Supplier.prototype.isInShortList = function () {
        return true;
    };
    return Supplier;
}());
function signContract(partner) {
    var message;
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
function getRandomNumber(items) {
    var randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
var numbers = [1, 54, 65, 7, 8];
console.log(getRandomNumber(numbers));
function getRandomString(items) {
    var randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
var myNames = ["Can", "Cem", "Ali"];
console.log(getRandomString(myNames));
//* Yukardaki iki fonksiyonu tek fonksiyonda halletmek istiyorum.
function getRandomElement(items) {
    var randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
console.log(getRandomElement(numbers));
console.log(getRandomElement(myNames));
function getRandomElement2(items) {
    var randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
console.log(getRandomElement2(numbers));
console.log(getRandomElement2(myNames));
//*Burada istersek zorunlu tip atamasi da yapabiliyoruz. Su sekilde:
console.log(getRandomElement2(numbers));
console.log(getRandomElement2(myNames)); //? Burada T'ye hic bakma, tipi direkt olarak bundan olsun diye baskilama yapiyoruz.
var myBooleans = [true, false, true, true, false];
console.log(getRandomElement2(myBooleans)); //? görüldügü gibi boolean degisken bile girsek problem cikarmiyor.
//! GENERIC CONSTRAINTS
function merge(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
var sahis = merge({
    name: "John",
}, { age: 28 });
console.log(sahis);
var months = {
    key: 1, value: "January"
};
console.log(months);
var List = /** @class */ (function () {
    function List() {
        this.items = [];
    }
    List.prototype.add = function (o) {
        this.items.push(o);
        console.log(this.items);
    };
    List.prototype.remove = function (o) {
        var index = this.items.indexOf(o);
        if (index > -1) {
            this.items.splice(index, 1);
        }
    };
    return List;
}());
var list = new List();
for (var i = 0; i < 10; i++) {
    list.add(i);
}
//! GENERIC CLASSES
var Stack = /** @class */ (function () {
    function Stack(size) {
        this.size = size;
        this.elements = [];
    }
    Stack.prototype.isEmpty = function () {
        return this.elements.length === 0;
    };
    Stack.prototype.isFull = function () {
        return this.elements.length === this.size;
    };
    Stack.prototype.push = function (element) {
        if (this.elements.length === this.size) {
            throw new Error("The stack is full!");
        }
        this.elements.push(element);
    };
    Stack.prototype.pop = function () {
        if (this.elements.length == 0) {
            throw new Error("The stack is empty!");
        }
        return this.elements.pop();
    };
    return Stack;
}());
function randomBetween(low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low);
}
var numbers2 = new Stack(5);
while (!numbers2.isFull()) {
    var n = randomBetween(1, 10);
    console.log("Push ".concat(n, " into the stack"));
    numbers2.push(n);
}
while (!numbers2.isEmpty()) {
    var n = numbers2.pop();
    console.log("Pop ".concat(n, " from the stack"));
}
