const bcrypt = require('bcrypt');

const userModel = require('../database/models/user');

const loginController = {
    login: async (req, res) => {
        const { email, password } = req.body;
        const user = await userModel.findOne({ where: { email } });

        try {
            if (user) {
                const isPasswordCorrect = bcrypt.compareSync(password, user.password);
    
                if (isPasswordCorrect) {
                    return res.redirect('/logged');
                }
            }
        } catch (error) {
            return res.status(400).json(error);
        }
}
};

module.exports = loginController;