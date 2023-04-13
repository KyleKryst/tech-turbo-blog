const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 5,
        comment_text: "I'm glad to see our future of humanity is being bettered with AI!"
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "Don't give into the machines!"
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "I for one, am glad to see humanity and AI working hand in hand!"
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "This makes me excited for the future!"
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "I'm glad I'm not the only one who thinks this way!"
    },
    {
        user_id: 3,
        post_id: 4,
        comment_text: "AS long as they don't take my job I'm fine with this future!"
    },
    {
        user_id: 5,
        post_id: 3,
        comment_text: "I agree! Having multiple resources can only benefit yourself!"
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "Best tech blog I've experienced in a while!"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
