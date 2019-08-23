import mongoose, { Model } from "mongoose";
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const citySchema = new Schema({
  id: {
    type: Number,
    unique: true,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  capital: {
    type: Boolean,
    default: false
  },
  location: {
    lat: {
      type: Number,
      default: 0
    },
    long: {
      type: Number,
      default: 0
    }
  },
  createdAt: Date,
  lastModifiedDate: Date
});

citySchema.pre("save", function(next) {
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
const City = mongoose.model("City", citySchema);

export default City;
