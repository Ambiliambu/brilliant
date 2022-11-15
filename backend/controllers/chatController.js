const {Chat}=require('../models/chatModel')

const createChat=async(req,res)=>{
    console.log("if",req.body);
    const {chatId,senderId,senderName,text} = req.body

    try {
        const newChat = await Chat.create({
            chatId,
            senderId,
            senderName,
            text,
        })
        res.status(200).json(newChat)
    } catch (error) {
        console.log(error)
    }
}

const Chats=async(req,res)=>{
    const courseId = req.params.courseId
    try {
        const chatDetails = await Chat.find({"chatId":courseId}) 
        // console.log("uuuuooo",chatDetails);
        res.status(200).json(chatDetails)
    } catch (error) {
        console.log(error)
    }
}

module.exports={
    createChat,
    Chats
}