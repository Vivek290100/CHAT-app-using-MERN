import mongoose from 'mongoose'

const connetToDB = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("connected to DB");
        
    }catch(error){
        console.log("Failed to connect DB", error.message);
        
    }
}

export default connetToDB