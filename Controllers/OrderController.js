
const Order = require('../models/Order');

exports.getAll = async (req, res) => {
    try {
        const orders = await Order.find({}).exec();
        res.status(200).json(orders);

    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};


exports.createOrder = async (req, res) => {
  
    try {
        const order = new Order({...req.body});
        await order.save();

        res.status(200).json({order,msg:"order created successfully"});
     
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}
