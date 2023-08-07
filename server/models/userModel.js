import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
    {
        userid: {
            type: String,
            required: true
        },
        email : {
            type: String,
            required: true
        },
        firstname: {
            type: String,
            required: true
        },
        lastname : {
            type: String,
            required: true
        },
    },
    {timestamps: true}
)

const UserModel= mongoose.model("Users", UserSchema);
export default UserModel
