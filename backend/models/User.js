import mongoose, { model } from "mongoose";

const UserSchema = new mongoose.schema({
    firstName : {
        type: String,
        required: true,
        minlength: 3,   
    },
    lastName : {
        type: String, 
    },
    password: {
        type: String,
        required: true,
        minlength: 5
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date
    }
});

const User = model('User', UserSchema);
export default User;