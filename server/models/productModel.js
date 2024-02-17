import mongoose, { Schema } from 'mongoose';

const productSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name cannot be blank"],
    minlength: 2,
    maxlength: 30
  },
  price: {
    type: Number,
    required: true,
    min: 1000,
    max: 100000000
  },
  stock: Number,
  status: {
    type: Boolean,
    default: true
  },
  imageUrl: {
    type: String,
    default: null
  }
});

const Product = mongoose.model('Product', productSchema);
export default Product;