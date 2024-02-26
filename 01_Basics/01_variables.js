const accountId = 363855
let accountEmail = "mahesh1105@gmail.com"
var accountPassword = "123456"
accountCity = "Bengaluru"
/* 
JS allows you create a variable without any datatype
Memory will also be allocated to that variable
*/

let accountState;
/*
If you create a variable without initializing its value,
By default it is undefined
*/

// accountId = 54367 // Assignment to constant : Not Allowed

accountEmail = "ms@ms.com"
accountPassword = "736527"
accountCity = "Kolkata"

console.log(accountId);

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])