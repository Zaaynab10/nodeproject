const http=require("http")
http.createServer(

(resquest,response)=>{
 if(resquest.url==="/"){
    response.write( " Hello Node!!!!")
 }
 response.end()
}

).listen(3000)