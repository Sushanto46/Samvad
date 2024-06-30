import mongoose, {Schema} from "mongoose";

const postSchema = new Schema(
    {
        content: {
            type: String,
            required: true,
            trim: true,
        },
        image: {
            type: String,
        }

    }, {timestamps: true}
)

export const Post = mongoose.model("Post", postSchema)
