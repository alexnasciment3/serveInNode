const { Model, DataTypes } = require("sequelize");
const sequelize = require("./database")


class Order extends Model{}

Order.init({
    userId:{
        type:DataTypes.NUMBER
    },
    status:{
        type:DataTypes.STRING
    },
    totalValue:{
        type:DataTypes.FLOAT
    }
},{
    sequelize,
    modelName: 'order',
})

module.exports = Order;