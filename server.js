
const express = require('express')
const app=express()
const http=require('http').createServer(app)
 


app.listen((process.env.PORT || 3000), function () {
  console.log("Server started on port 3000");
});
app.use(express.static(__dirname+'/public'))
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})
const io=require('socket.io')(http)
io.on('connection',(socket)=>{
    console.log('Connected')
})
io.on('connection',(socket)=>{


console.log('Connected')
socket.on('message',(msg)=>
{
    socket.broadcast.emit('message',msg)
    //message is the data being passed
})
})
