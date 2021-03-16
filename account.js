
//NO 1. CHECK IF ACCOUNT IS FIRST BANK ACCOUNT AND BALANCE IS BELOW 2350
var accountBalance = prompt("enter your account balance");
var balannce = parseInt(accountBalance);

var bankName =  prompt("enter your bank name")

if(balannce < 2350 && bankName === "first bank"){
    console.log(balannce += 2400)
}else if(balannce < 2350 && bankName != "first bank"){
    console.log("Sorry, only first bank account can be cridited at the moment")

}else if(balannce >= 2350 && bankName === "first bank"){
    console.log("sorry only first bank account below 2350 we can credite at the moment")
}else if( balannce > 2350 && bankName != "first bank"){
    console.log("sorry the offer is for first bank customers only")
}else{
    console.log("Try else where")
}
