// 4. Nested if  *Statements

let isLoggedId = true;
let isAdmin = false;

if (isLoggedId) {
    if (isAdmin) {
        console.log("Welcome Admin!");
    } else {
        console.log("Welcome User!");
    }
} else {
    console.log("Please log in first.");
}
