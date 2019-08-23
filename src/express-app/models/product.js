import mongoose, { Model } from "mongoose";
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const productSchema = new Schema({
  id: {
    type: Number,
    unique: true,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    default: 0,
    required: true
  },
  color: String,
  size: {
    type: String,
    required: true
  },
  reviews: {
    type: Array
  },
  createdAt: Date,
  lastModifiedDate: Date
});

productSchema.pre("save", function(next) {
  const currentDate = new Date();
  this.lastModifiedDate = currentDate;
  if (!this.createdAt) {
    this.createdAt = currentDate;
  }
  next();
});
/**
 * @type Model
 */
const Product = mongoose.model("Product", productSchema);

export default Product;
