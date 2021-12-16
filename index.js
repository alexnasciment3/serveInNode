const express = require('express');
const sequelize = require('./database');
const cors = require('cors');
const User = require('./User');
const Book = require('./Book');
const Order = require('./Order');

sequelize.sync().then(()=>console.log('db-created!!!'));
const app = express();

app.use(cors())

app.use(express.json());

//User Table
app.post('/register', async (req, res) => {
    await User.create(req.body);
    res.send('User successfully created !!')
});

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email});
    console.log(user);
    if(user.email !== email || user.password !== password){
      return res.send({message: 'Incorrect email or password'});
    }
    return res.send(user);
  });

//Book Table
app.post('/book-register', async (req, res) => {
    await Book.create(req.body);
    res.send('Book successfully created !!')
});

app.get('/product-list', async (req, res) => {
    const books = await Book.findAll();
    res.send(books)
});

//Order Table
app.post('/create-order', async (req, res) => {
    await Order.create(req.body);
    res.send('Order successfully created !!')
});

app.get('/order-list', async (req, res) => {
    const orders = await Order.findAll();
    res.send(orders)
});

app.delete('/order/:id', async (req, res) => {
    const {id} = req.params;
    await Order.destroy({where: {id}});
    res.send('Oder deleted !!')
});

app.put('/order-list/:id', async (req, res) => {
    const {id} = req.params;
    const orderElement = await Order.findOne({where: {id}});
    orderElement.book = req.body.book
    await Order.save();
    res.send('Order updated !!')
});

app.listen(3001, ()=>{
    console.log('app is running!!')
})