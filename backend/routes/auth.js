import express from 'express';
import User from '../models/User.js';
const router = express.Router();
import { body, validationResult } from 'express-validator';


//ROUTE::1 Create a user using POST ---> NO LOGIN REQUIRED
router.post('/register', [
    body('name', "Enter a valid Name").isLength({ min: 3 }),
    body('email', "Enter a valid Email Address").isEmail(),
    body('password', "Password must be atleast 5 characters including UPPERCASE, lowercase, special characters and Numbers").isLength({ min: 5 })

], async (req, res) => {

    let success = false;

    //if there are errors give invalid Error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    
    //to check whether the user with same email exists already
    try {
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({
                error: "A user with this email already exists"
            })
        }
        const salt = await bcrypt.genSaltSync(10);
        const plaintextPassword = await bcrypt.hashSync(req.body.password, salt)
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: plaintextPassword,
        })

        const userdata = {
            user: {
                id: user.id
            }
        }

        //a variable for signature
        const sign = "hi!thisisprinceverifyingtheuser@69$12346978";

        // Giving the details A JsonWebToken to maximize the security
        const authtoken = jwt.sign(userdata, sign);
        success = true
        res.json({ success, authtoken })

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})