const mongoose = require("mongoose");

const passwordSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, "Please add the username"],
        },
        password: {
            type: String,
            required: [true, "Please add the password"],
        }
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Password",passwordSchema);