
import Conversation from "../models/conversationModel.js";
import Message from "../models/messageModel.js"


export const sendMessage = async (req, res) => {
    console.log("[]]]]]]]]]]]]]][[][]][][][][][[][][][][][]][][][][][][][][[]");
    
    try {
        const { message} = req.body;
        const { id:reciverId } = req.params
        const senderId = req.user._id;
        // console.log(",essage",message,id,senderId);
        

        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, reciverId] }
        });

        if(!conversation){
            conversation = await Conversation.create({
                participants: [senderId, reciverId]
            })
        }

        const newMessage = new Message({
            senderId,
            reciverId,
            message,
        });

        if(newMessage){
            conversation.messages.push(newMessage._id);
        }

        // await conversation.save()
        // await newMessage.save();

        // run asynchronously
        await Promise.all([conversation.save(),newMessage.save()]);

        res.status(201).json(newMessage);

    }catch (err) {
        console.error("Error sending message:", err);
        return res.status(500).json({ error: "Failed to send message" });
    }
    
}



export const getMessage = async (req, res) => {
    try {
        const {id:userToChatId} = req.params
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({participants: {$all: [senderId, userToChatId]}})
       .populate("messages",)

       if(!conversation) return res.status(200).json([])

       const messages = conversation.messages
       res.status(200).json(messages);
    
    }catch(error){
        console.error("Error in getting messages", error.message);
        return res.status(500).json({ error: "Failed to get messages" });
    }
}