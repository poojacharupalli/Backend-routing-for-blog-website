const Comment = require("../models/CommentModel");
const Post = require("../models/PostModel");

exports.createComment = async (req, res) => {
    try {
        // Fetch data from req body 
        const { post, user, body } = req.body;

        // Log the incoming request for debugging
        console.log("Creating comment for post:", post, "by user:", user);

        // Create a comment object
        const comment = new Comment({
            post,
            user,
            body
        });

        // Save the new comment into the database
        const savedComment = await comment.save();

        // Log the saved comment for debugging
        console.log("Comment saved:", savedComment);

        // Find the post by ID, add the new comment to its comments array
        const updatedPost = await Post.findByIdAndUpdate(
            post,
            { $push: { comments: savedComment._id } },
            { new: true }
        )
            // .populate("likes")
            .populate("comments") // Populate the comments array with comment documents
            .exec();

        // Log the updated post for debugging
        console.log("Post updated with new comment:", updatedPost);

        res.json({
            post: updatedPost,
            // comment: savedComment,
        });

    } catch (error) {
        console.error("Error occurred while creating comment:", error);
        return res.status(500).json({
            error: "Error While Creating comment",
            message:error
        });
    }
};
