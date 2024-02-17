import Product from "../models/productModel.js";

export const createNewProduct = async (req, res) => {
  try {
    const { name, price, stock, status, imageUrl } = req.body;
    const newProduct = await Product.create({ name, price, stock, status, imageUrl });
    return res.send({
      message: 'New product added!',
      data: newProduct
    });
  } catch (error) {
    return res.status(500).send({
      message: error.message
    });
  };
};