// Problem 01

function cashOut(cashMoney){
    if(typeof cashMoney !== "number" || cashMoney < 0){
        return "invalid"
    }
    let charge = cashMoney * 1.75 / 100
    return charge
}
     let cashOutmoney = cashOut(2000)
    //  console.log(cashOutmoney)

//--------------------------------------------------------

// Problem 02
function validMail(mail){
     if(typeof mail !== "string"){
        return "invalid";
    }

    if(mail.startsWith("@") || mail.startsWith(".") ||  mail.startsWith("-") || mail.startsWith("_") ||  mail.startsWith("+") || mail.includes(" ") || mail.includes("-")){
        return false;
    }
    if(mail.includes("@") && mail.endsWith(".com")){
        return true;
    }

    return false;

}

let email = validMail("chat420@gpt.net")
console.log(email);

// ferdous@gmail.com / true
// lzihad@gmail.com / true
// .king@yahoo.com / false
// Mewo@cat.com / true
// ["jhankar@hero.com"] / invalid
// true / invalid
// programming-hero.com // false
// chat420@gpt.net //false


//---------------------------------------------------------

// Problem 03





