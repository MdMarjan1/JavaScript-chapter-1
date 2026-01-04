
// function validMail(mail) {
//     // ১. Check input is string
//     if (typeof mail !== "string") {
//         return "invalid";
//     }

//     // ২. Check email should not start with invalid characters or contain spaces
//     if (mail.startsWith("@") || mail.startsWith(".") || mail.startsWith("-") || 
//         mail.startsWith("_") || mail.startsWith("+") || mail.includes(" ")) {
//         return false;
//     }

//     // ৩. Email should include "@" in middle and end with ".com"
//     if (mail.includes("@") && mail.endsWith(".com")) {
//         return true;
//     }

//     // ৪. সব other cases invalid
//     return false;
// }

// // ✅ Test cases
// console.log(validMail("programming-hero.com")); // false
