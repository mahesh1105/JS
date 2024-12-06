// Note:
// Math is an Object in JS, it has set of properties and methods, which we can use
// One of the property is PI, that is somewhat constant, its value cannot be changed
// Let's see behind the scenes, like - can we change the value of PI, if ok, then well n good and if not, then why?

// Below function is used to get the desciption of the Object's property
const descipter = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descipter);

/*
    Output:
    ------------
    {
        value: 3.141592653589793,
        writable: false,
        enumerable: false,
        configurable: false
    }

    . 'writable', 'enumerable', and 'configurable' flags in a property descriptor define how a property behaves. 
    . These flags give you fine-grained control over the properties of an object

    1. writable:
        . This flag tells whether the property value is changable or not
            Case A: if 'writable': true, then it means that property value is changable
            Case B: if 'writable': false, then it means property value is fixed, it cannot be modified, and if you try to change it
                    you will not get any error (in non-strict mode) and you will get the error (in strict mode)
        
        Example:
        -----------
        const obj = {};
        
        // Defining the property of the object - (pi)
        Object.defineProperty(obj, 'pi', {
            value: 3.14,
            writable: false
        });

        obj.pi = 3.15; // Value will NOT change - NO ERROR
        console.log(obj.pi); // 3.14

        . Usecase: Property value becomes constant, if you want to make property immutable then you can use it. Ex -> Math.PI

    2. enumerable:
        . This flag decides whether the property will be visible upon looping uisng (for...in) loop and Object.keys()
            Case A: if 'enumerable': true, then it means that property will be visible or iterable
            Case B: if 'enumerable': false, then it means that property will be hidden or not visible or not iterable

        Example:
        -----------
        const obj = {};

        // Defining the property of the object - (secret)
        Object.defineProperty(obj, 'secret', {
            value: 'hidden value',
            enumerable: false
        });

        // Printing all the key-value pairs in obj Object
        console.log(Object.keys(obj)); // []

        for (let key in obj) {
            console.log(key); // Nothing will log
        }
        
        // Printing the property directly using (.) or [] syntax - It will be visible
        console.log(obj.secret); // "hidden value"

        . Usecase: To hide the property or make it hidden, when you want to hide sensitive or internal data which should not be visible upon iteration

    3. configurable:
        . This flag tells whether you can delete the property or modify its descriptor, like - writable or enumerable
            Case A: if 'configurable': true, then it means you can delete the property and can also modify its descriptors
            Case B: if 'configurable': false, then it means you cannot delete the property and cannot modify its descriptors also

        Example:
        -----------
        const obj = {};

        // Defining the property of the object - (fixed)
        Object.defineProperty(obj, 'fixed', {
            value: 'permanent',
            configurable: false
        });

        delete obj.fixed; // Will NOT delete
        console.log(obj.fixed); // "permanent"

        Object.defineProperty(obj, 'fixed', { writable: true }); // Error: Cannot redefine property

        . Usecase: When you want to lock any property, so that no one can delete it and even cannot modify its descriptors

*/

// console.log(Math.PI);
// Math.PI = 5 // No Change - Not even generate the error
// console.log(Math.PI);

// Defining the Object - chai
const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

// To get the description of name property under 'chai' Object
// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

/*
    Output: Default - true (all)
    ------------
    {
        value: 'ginger chai',
        writable: true,
        enumerable: true,
        configurable: true
    }
*/

// To define the 'name' property of the Object
Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: false
})

chai.name = "Masala Chai"
// console.log(chai.name); // ginger chai

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

/*
    Output:
    ------------
    {
        value: 'ginger chai',
        writable: false,
        enumerable: false,
        configurable: true
    }
*/

for (let [key, value] of Object.entries(chai)) {
    if(typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
}