const generatePassword=require("generate-password")

var password=generatePassword.generateMultiple(50,{
    length:5,
}
)
console.log(password)