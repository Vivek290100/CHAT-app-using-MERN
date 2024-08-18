import User from "../models/userModel.js";

export const getUsersfromSlidebar = async (req, res) => {
    try {

        const loggedInuserId = req.user._id 
        const allUsers = await User.find({_id:{$ne: loggedInuserId}}).select("-password")

        res.status(200).json(allUsers);

    }catch (error) {
      console.log("Error in getUsersfromSlidebar", error.message);
      res.status(500).json({ error: "Failed to get users from slidebar" }); 
    }
}