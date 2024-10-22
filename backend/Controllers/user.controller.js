import User from "../Models/user.model.js";
import mongoose from 'mongoose'

//! get all users
export const getUserForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    const filteredUsers = await User.find({
      _id: { $ne: loggedInUserId },
    }).select("-password");

    res.status(200).json(filteredUsers);
  } catch (error) {
    console.error(`Error in getUserForSidebar controller: ${error.message}`);
    res.status(500).json({ error: "Internal server error" });
  }
};

//! get SINGLE user
export const getSingleUser = async (req, res) => {
  try {
    const { id: singleUserId } = req.params;

    // Validate if the ID is a valid MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(singleUserId)) {
      return res.status(400).json({ error: "Invalid User ID format" });
    }

    const user = await User.findById(singleUserId).select("-password");

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error(`Error in getSingleUser controller: ${error.message}`);
    res.status(500).json({ error: "Internal server error" });
  }
  };

  //! DELETE USER
  export const deleteSingleUser = async (req, res) => {
    try {
      const { id: singleUserId } = req.params;
    
      if (!singleUserId) {
        return res.status(400).json({ error: "Invalid or missing User ID" });
      }
      

      const userDeleted = await User.findByIdAndDelete(singleUserId)

      if (!userDeleted) {
        return res.status(404).json({ error: "User not found!" });
      }
    
      const userWithoutPassword = userDeleted.toObject();
      delete userWithoutPassword.password;

      res.status(200).json({
        message: "User deleted successfully",
        user: userWithoutPassword,
      });


    } catch (error) {
      console.error(`Error in deleteSingleUser controller: ${error.message}`);
      res.status(500).json({ error: "Internal server error" });
    }
  };
