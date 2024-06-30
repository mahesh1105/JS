// switch-case
// It checks for key, either of the case will execute,, if not any then default will execute

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3

switch (month) {
    case 1:
        console.log("January")
        break;

    case 2:
        console.log("February")
        break;
    
    case 3:
        console.log("March")
        break;

    default:
        console.log("Month Error")
        break;
}

const mnth = "mar"

switch (mnth) {
    case "jan":
        console.log("January")
        break;
    
    case "feb":
        console.log("February")
        break;
    
    case "mar":
        console.log("March")
        break;

    default:
        console.log("Month Error")
        break;
}