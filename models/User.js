const Sequelize = require('sequelize')
const db = require("../database/db.js")

module.exports = db.sequelize.define(
    'user',
    {
        user_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        user_fname: {
            type: Sequelize.STRING
        },
        user_lname: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        created_on: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        }  
    },
    {
        timstamps: false
    }
)