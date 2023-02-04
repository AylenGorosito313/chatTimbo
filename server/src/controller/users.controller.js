const bcrypt = require("bcrypt");
const { Users } = require("../models/users");


const updateUserProfile = async (req, res) => {
    const { id } = req.params;
    const userUpdate = req.body;
    try {
        let hash = undefined;

        if (userUpdate.password) {
            hash = await bcrypt.hash(userUpdate.password, 10);
        }
        const user = await Users.findByPk(id);
        user.update({
            ...userUpdate,
            passwordHash: hash !== undefined ? hash : user.passwordHash
        });
        await user.save();

        res.json(user);
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};



module.exports = {
    updateUserProfile,
  
};