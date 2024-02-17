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

export const readAllProducts = async (req, res) => {
  try {
    const allProducts = await Product.find();
    return res.json({
      message: "All products fetched!",
      data: allProducts
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  };
};

export const readSingleProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById({ _id: id });
    if(!product) {
      return res.status(404).json({
        message: "Product not found!"
      });
    };
    return res.json({
      message: "Product found!",
      data: product
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  };
};

export const updateSingleProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, stock, status, imageUrl } = req.body;
    const updatedProduct = await Product.findByIdAndUpdate(id, {
      name, price, stock, status, imageUrl
    });

    if(!updatedProduct) {
      return res.status(404).json({
        message: "Product not found!"
      });
    };

    return res.json({
      message: "Product updated successfully!",
      data: updatedProduct
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  };
};

export const deleteSingleProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById({ _id: id });
    console.log(product);
    if(!product) {
      return res.status(404).json({
        message: "Product not found!"
      });
    };
    await Product.findByIdAndDelete({ _id: id });
    return res.json({ message: "Product deleted successfully!" });
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  };
};