const accountId = 152
let accountEmail = "lovelypandey2427@gmail.com"
var accountPassword = "12345"
accountCity = "delhi"
let accountState;
// accountId = 1 // not allowed

console.log(accountId);

accountEmail = "prince@gmail.com"
accountPassword = 34567
accountCity = "Pune"
/*perfer not to use var
because of issue in block scope and functional scope */


console.table([accountId,accountEmail,accountPassword,accountCity,accountState])