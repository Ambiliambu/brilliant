// const io = require("socket.io")(8800, {
//   cors: {
//     origin: "http://localhost:3000",
//   },
// });
// import socket from 'socket.io'


const io = require("socket.io")(http,{
    path:"/socket"
  })
  
  let roomId = []; 
  
  io.on("connection", (socket) => {
    //add new user
    socket.on("room", (room) => {
      socket.join(room);
      console.log(room, "roomfrom client");
  
     
    });
    //    socket.on("disconnect",()=>{
    //     activeUsers = activeUsers.filter((user)=>user.socketId !== socket.id)
    //     console.log("user disconnected",activeUsers)
    //     io.emit("get-users", activeUsers);
    //    })
  
      socket.on("sendMessage", (message,courseId) => {
        console.log(message, "msg");
        console.log(courseId)
        io.in(courseId).emit("message", message);
      });
  
   
  });
  
  // socket.on("sendMessage", (message) => {
  //   const user = getUser(socket.id);
  //   io.in(user.room).emit("message", { user: user.name, text: message });
  // });
  
  http.listen(8800,function(){
    console.log("listeneing on 8800")
  })
  