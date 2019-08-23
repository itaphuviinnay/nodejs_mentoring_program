import mongoose from "mongoose";
import populateDB from "./populate";

const dbConnectionURL =
  "mongodb://admin:admin123@ds211648.mlab.com:11648/node-js-mentoring";

mongoose.Promise = global.Promise;

function startDB() {
  mongoose
    .connect(dbConnectionURL, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    })
    .then(() => console.log("connection succesful"))
    .then(() => populateDB())
    .catch(err => console.error(err));
  return mongoose.connection;
}

export default startDB;
