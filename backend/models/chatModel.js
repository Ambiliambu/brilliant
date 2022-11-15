const mongoose=require('mongoose')


const chatSchema=mongoose.Schema(
  {
    chatId:{
        type:String,
        required:true,
    },
    senderId:{
        type:String,
        required:true
    },
    senderName:{
        type:String,
        required:true
    },
    text:{
        type:String
    }

},
{
    timestamps:true
}
)


const Chat=mongoose.model('Chat',chatSchema)
module.exports= {Chat}
