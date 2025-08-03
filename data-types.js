// JavaScript Data Type  = (The main eight)

// 1. String   -- Used for text quality.
        //let name = "Takrim";

// 2. Number  -- For numbers or counting values.
        //let age = 25;
        //let price = 99.99;
        
// 3. Boolean -- True or False values are maintained.
        //let isOnline = true;
        //let isStudent = false;
        
// 4. Undefined -- Variable declared but not assigned.
        //let test;
        
// 5. Null -- Intentionally implying no value.
        // let empty = null;
        
// 6. Object -- Stores data in the form of Key-value pairs.
        // let person = {
        //        name : "Takrim", 
        //        age : 25
        //  };
        
// 7. Array -- Can Store multiple values at once.
        // let fruits = ["Apple", "Mango", "Banana"]
        
// 8. Symbol -- Unique and immutable values (less commonly used).
        // let sym = Symbol("id");
        
        



        // String 
         let name = "Tamkeim";
         console.log (typeof name);
         console.log ('Name:', name);

         // Number 
         let age = 24;
         let price =99.99;
         console.log (typeof age, price);
         console.log('Age:', age, 'Price:', price);

         // Boolean 
         let isStudent = false;
         console.log(typeof isStudent, isStudent);
         console.log("Is Student:", isStudent);
        
         // Undefined
         let something;
         console.log(typeof something, something);
         console.log("Something:", something);

         // Null 
         let nothing = null;
         console.log(typeof nothing, nothing);
         console.log("Nothing:", nothing);

         // Object 
         let person = {
                pro : "Iptu",
                year :32,
         };
         console.log(typeof person, person);
         console.log("Person:", person, pro, year);

         // Array 
         let colors = ["Red", "Green", "Blue"];
         console.log(typeof colors, colors);
         console.log("Colors:", colors);

         //Symbol 
         let id = Symbol("id123");
         console.log(typeof id);
         console.log("Symbol:", id);