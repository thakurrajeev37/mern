import User from "../models/User.js";

export const getUser = async (req, res) => {
    const userInfo = req.userInfo;
    let user;
    try {
        user = await User.findById(userInfo.id, "-password");
    } catch (error) {
        return new Error(error);
    }
    if(!user) {
        return res.status(404).json({message: "User Not Found!"});
    }
    return res.status(200).json({user});
};
export const getAllUser = async (req, res) => {
    let users;
    try {
        users = await User.find().select("-password");
    } catch (error) {
        return new Error(error);
    }
    if(!users) {
        return res.status(404).json({message: "User Not Found!"});
    }
    return res.status(200).json({users});
};