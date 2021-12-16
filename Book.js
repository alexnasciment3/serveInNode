const { Model, DataTypes } = require("sequelize");
const sequelize = require("./database")


class Book extends Model{}

Book.init({
    title:{
        type:DataTypes.STRING
    },
    author:{
        type:DataTypes.STRING
    },
    publication:{
        type:DataTypes.STRING
    },
    price:{
        type:DataTypes.FLOAT
    }
},{
    sequelize,
    modelName: 'book',
})

module.exports = Book;