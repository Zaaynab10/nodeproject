const fs= require("fs")
fs.writeFileSync("welcome.txt" ,"Hello Node")

fs.open("welcome.txt",(error,fd)=>{
    var buffer=Buffer.alloc(2000)
fs.read(fd,buffer,0,buffer.length,0,(error,bytesRead,buffer)=>{
console.log(''+ buffer)
})
})