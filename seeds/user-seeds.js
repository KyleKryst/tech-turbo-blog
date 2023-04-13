const { User } = require('../models');

const userData = [
    {
        username: "bram_keeley",
        email: "b_keeley@gmail.com",
        password: "p@ssword1"
    },
    {
        username: "jillie_bean",
        email: "jillie_h@gmail.com",
        password: "p@ssword2"
    },
    {
        username: "ArtemSeymour",
        email: "artem_seymour@gmail.com",
        password: "p@ssword3"
    },
    {
        username: "Peggie_P",
        email: "peggie_power@gmail.com",
        password: "p@ssword4"
    },
    {
        username: "kornel.bernard",
        email: "priya_r@gmail.com",
        password: "p@ssword5"
    },
    {
        username: "LeoElliott",
        email: "Leopold.Elliot@gmail.com",
        password: "p@ssword6"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
