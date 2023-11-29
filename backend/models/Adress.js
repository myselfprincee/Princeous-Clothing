import mongoose, { model } from "mongoose";

const AddressSchema = new mongoose.schema({
    
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date
    }
});

const Adress = model('User', AddressSchema);
export default Adress;