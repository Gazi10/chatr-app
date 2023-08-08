import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
    {
        id: {
            type: String,
            required: true
        },
        email : {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        token: {
            type: String,
            required: true
        }
    },
    {timestamps: true}
)

const UserModel= mongoose.model("Users", UserSchema);
export default UserModel;
