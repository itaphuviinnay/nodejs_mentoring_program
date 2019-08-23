import mongoose, { Model } from "mongoose";
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const userSchema = new Schema({
  id: {
    type: Number,
    unique: true,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  createdAt: Date,
  lastModifiedDate: Date
});

userSchema.pre("save", function(next) {
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
const User = mongoose.model("User", userSchema);

export default User;
