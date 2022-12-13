/* 
I know this is kind of funny to have a controller 
with only one function, but I did it for practice
*/

const Product = require('../models/Product');

exports.getAll = async (req, res) => {
  
    try {
        const products = await Product.find({});
        console.log({ products });
        res.status(200).json({ products });
    } catch (error) {
        console.log(error)
        res.send(error);
    }
}