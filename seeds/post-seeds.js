const { Post } = require('../models');

const postData = [
    {
        title: "Tech Turbo finally goes public!",
        post_content: "The Tech Turbo Blog is a great resource if you want to stay up-to-date on technology news.",
        user_id: 3
    },
    {
        title: "The importance of tech news!",
        post_content: "Technology news is an integral part of staying abreast of advancements in the digital sphere. Being aware of the most exciting breakthroughs in technology news could help open up new opportunities for entrepreneurs.",
        user_id: 1
    },
    {
        title: "Stay up to date with newest technology blogs!",
        post_content: "I follow several tech news websites, allowing me to keep up with the topics I cover in my technology blog.",
        user_id: 2

    },
    {
        title: "Rapid emergence of AI and its benefits!",
        post_content: "As AI technology advances, more and more jobs will be taken over by algorithms and machine learning. Researchers are studying ways to harness the power of AI to advance healthcare technology. Companies are also developing AI-based systems to automate mundane tasks and improve efficiency.",
        user_id: 5
    },
    {
        title: "Technology in schools:",
        post_content: "Researchers are continually exploring novel applications of new technology to solve real-world problems. Schools in particular have embraced new technology to enhance the learning experience for their students.",
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
