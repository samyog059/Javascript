// ==========================================
// COMPREHENSIVE JAVASCRIPT OBJECTS PROGRAM
// ==========================================

console.log("=== JAVASCRIPT OBJECTS COMPLETE GUIDE ===\n");

// ==========================================
// 1. OBJECT CREATION (Different Methods)
// ==========================================

console.log("1. OBJECT CREATION METHODS:");

// Method 1: Object Literal
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "john.doe@example.com"
};
console.log("✓ Object Literal:", person);

// Method 2: Constructor Function
function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.getInfo = function() {
        return `${this.brand} ${this.model} (${this.year})`;
    };
}
const car1 = new Car("Toyota", "Camry", 2022);
console.log("✓ Constructor Function:", car1.getInfo());

// Method 3: Object.create()
const animalPrototype = {
    makeSound: function() {
        return `${this.name} says ${this.sound}`;
    }
};
const dog = Object.create(animalPrototype);
dog.name = "Buddy";
dog.sound = "Woof!";
console.log("✓ Object.create():", dog.makeSound());

// Method 4: Class Syntax (ES6)
class Product {
    constructor(name, price, category) {
        this.name = name;
        this.price = price;
        this.category = category;
    }
    
    applyDiscount(percent) {
        this.price -= this.price * (percent / 100);
        return this.price;
    }
    
    static comparePrice(productA, productB) {
        return productA.price - productB.price;
    }
}
const laptop = new Product("MacBook Pro", 2000, "Electronics");
console.log("✓ Class Syntax:", laptop);

// ==========================================
// 2. PROPERTIES (Data, Accessor, Computed)
// ==========================================

console.log("\n2. PROPERTIES:");

const account = {
    // Data Properties
    _balance: 1000, // Convention: _ prefix for private
    
    // Accessor Properties (Getters/Setters)
    get balance() {
        console.log("Balance accessed");
        return this._balance;
    },
    
    set balance(amount) {
        if (amount < 0) {
            throw new Error("Balance cannot be negative");
        }
        this._balance = amount;
        console.log("Balance updated");
    },
    
    // Computed Property Names
    ["account" + "Type"]: "Savings",
    [Symbol.iterator]: function*() {
        yield this._balance;
        yield this.accountType;
    }
};

console.log("✓ Getter:", account.balance);
account.balance = 1500;
console.log("✓ After Setter:", account.balance);
console.log("✓ Computed Property:", account.accountType);

// ==========================================
// 3. PROPERTY DESCRIPTORS
// ==========================================

console.log("\n3. PROPERTY DESCRIPTORS:");

const config = {};
Object.defineProperty(config, "apiKey", {
    value: "secret123",
    writable: false,
    enumerable: false,
    configurable: false
});

Object.defineProperties(config, {
    "maxConnections": {
        value: 10,
        writable: true
    },
    "timeout": {
        value: 30000,
        writable: false
    }
});

console.log("✓ Non-enumerable property:", Object.getOwnPropertyDescriptor(config, "apiKey"));
console.log("✓ Config properties:", Object.getOwnPropertyNames(config));

// ==========================================
// 4. OBJECT METHODS & THIS BINDING
// ==========================================

console.log("\n4. METHODS & THIS BINDING:");

const calculator = {
    value: 0,
    
    add(num) {
        this.value += num;
        return this; // Method chaining
    },
    
    multiply(num) {
        this.value *= num;
        return this;
    },
    
    getValue() {
        return this.value;
    },
    
    // Arrow function (lexical this)
    reset: () => {
        // Arrow functions don't have their own 'this'
        console.log("Resetting...");
    }
};

calculator.add(5).multiply(2).add(10);
console.log("✓ Method Chaining Result:", calculator.getValue());

// ==========================================
// 5. PROTOTYPES & INHERITANCE
// ==========================================

console.log("\n5. PROTOTYPES & INHERITANCE:");

// Prototype Chain
function Employee(name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary = salary;
}

Employee.prototype.getDetails = function() {
    return `${this.name} - ${this.position} - $${this.salary}`;
};

function Manager(name, salary, department) {
    Employee.call(this, name, "Manager", salary);
    this.department = department;
}

// Inheritance setup
Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;

Manager.prototype.getDepartment = function() {
    return `Department: ${this.department}`;
};

const manager = new Manager("Alice", 80000, "Engineering");
console.log("✓ Prototype Inheritance:", manager.getDetails());
console.log("✓ Manager Method:", manager.getDepartment());

// ==========================================
// 6. OBJECT ITERATION & ENUMERATION
// ==========================================

console.log("\n6. OBJECT ITERATION:");

const student = {
    name: "Bob",
    grade: "A",
    subjects: ["Math", "Science"],
    [Symbol("id")]: 12345
};

console.log("✓ for...in loop:");
for (let key in student) {
    if (student.hasOwnProperty(key)) {
        console.log(`  ${key}: ${student[key]}`);
    }
}

console.log("✓ Object.keys():", Object.keys(student));
console.log("✓ Object.values():", Object.values(student));
console.log("✓ Object.entries():", Object.entries(student));

// ==========================================
// 7. OBJECT DESTRUCTURING & SPREAD
// ==========================================

console.log("\n7. DESTRUCTURING & SPREAD:");

const user = {
    id: 1,
    username: "js_dev",
    profile: {
        firstName: "John",
        lastName: "Smith",
        address: {
            city: "NYC",
            zipCode: "10001"
        }
    },
    preferences: ["dark-mode", "notifications"]
};

// Destructuring
const { username, id: userId } = user;
const { profile: { firstName, address: { city } } } = user;

console.log("✓ Destructuring:", { username, userId, firstName, city });

// Spread Operator
const userUpdate = {
    ...user,
    profile: {
        ...user.profile,
        firstName: "Jonathan"
    },
    lastLogin: new Date()
};

console.log("✓ Spread Operator - Updated FirstName:", userUpdate.profile.firstName);

// ==========================================
// 8. OBJECT METHODS (Static Methods)
// ==========================================

console.log("\n8. OBJECT STATIC METHODS:");

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

console.log("✓ Object.assign():", Object.assign({}, obj1, obj2));
console.log("✓ Object.freeze():", Object.isFrozen(Object.freeze({ x: 1 })));
console.log("✓ Object.seal():", Object.isSealed(Object.seal({ y: 2 })));

const sourceObj = { a: 1, b: { c: 2 } };
const clonedObj = JSON.parse(JSON.stringify(sourceObj));
console.log("✓ Deep Clone:", clonedObj);

// ==========================================
// 9. SYMBOLS & PRIVATE PROPERTIES
// ==========================================

console.log("\n9. SYMBOLS & PRIVACY:");

const idSymbol = Symbol("id");
const privateData = Symbol("privateData");

const secureObject = {
    [idSymbol]: "unique123",
    publicData: "This is public",
    [privateData]: {
        secret: "confidential",
        token: "abc123"
    },
    
    getSecret() {
        return this[privateData].secret;
    }
};

console.log("✓ Symbol Properties:", Object.getOwnPropertySymbols(secureObject));
console.log("✓ Access via Method:", secureObject.getSecret());

// ==========================================
// 10. MODERN FEATURES (ES6+)
// ==========================================

console.log("\n10. MODERN ES6+ FEATURES:");

// Optional Chaining & Nullish Coalescing
const company = {
    name: "Tech Corp",
    departments: {
        engineering: {
            teamLead: { name: "Sarah" }
        }
    }
};

console.log("✓ Optional Chaining:", company.departments?.marketing?.teamLead?.name ?? "Not found");
console.log("✓ Object.hasOwn():", Object.hasOwn(company, "name"));

// Dynamic Property Keys
const dynamicKey = "status";
const dynamicObject = {
    [dynamicKey]: "active",
    [`${dynamicKey}Code`]: 200
};
console.log("✓ Dynamic Properties:", dynamicObject);

// ==========================================
// 11. PRACTICAL EXAMPLE
// ==========================================

console.log("\n11. PRACTICAL EXAMPLE - E-COMMERCE CART:");

const shoppingCart = {
    items: [],
    
    addItem(product, quantity = 1) {
        const existingItem = this.items.find(item => item.product.id === product.id);
        
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push({ product, quantity });
        }
        return this;
    },
    
    removeItem(productId) {
        this.items = this.items.filter(item => item.product.id !== productId);
        return this;
    },
    
    get total() {
        return this.items.reduce((sum, item) => 
            sum + (item.product.price * item.quantity), 0);
    },
    
    get summary() {
        return this.items.map(item => 
            `${item.product.name} x${item.quantity} - $${item.product.price * item.quantity}`
        );
    },
    
    applyCoupon(discountPercent) {
        const discount = this.total * (discountPercent / 100);
        return {
            originalTotal: this.total,
            discount,
            finalTotal: this.total - discount
        };
    },
    
    checkout() {
        const summary = {
            items: this.summary,
            total: this.total,
            timestamp: new Date().toISOString()
        };
        this.items = []; // Clear cart
        return summary;
    }
};

// Usage
const products = [
    { id: 1, name: "Laptop", price: 999 },
    { id: 2, name: "Mouse", price: 25 }
];

shoppingCart
    .addItem(products[0], 1)
    .addItem(products[1], 2)
    .addItem(products[1], 1); // Additional mouse

console.log("✓ Cart Items:", shoppingCart.summary);
console.log("✓ Cart Total: $", shoppingCart.total);
console.log("✓ With Coupon:", shoppingCart.applyCoupon(10));
console.log("✓ Checkout:", shoppingCart.checkout());

// ==========================================
// SUMMARY
// ==========================================

console.log("\n=== OBJECT CONCEPTS COVERED ===");
console.log("✓ Object Creation (4 methods)");
console.log("✓ Properties (Data, Accessor, Computed)");
console.log("✓ Property Descriptors");
console.log("✓ Methods & this binding");
console.log("✓ Prototypes & Inheritance");
console.log("✓ Iteration & Enumeration");
console.log("✓ Destructuring & Spread");
console.log("✓ Object Static Methods");
console.log("✓ Symbols & Privacy");
console.log("✓ Modern ES6+ Features");
console.log("✓ Practical Implementation");

console.log("\nProgram completed successfully! 🎉");