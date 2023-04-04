const mongoose = require("mongoose");

const connectDB = async () => {
   try {
      // console.log("dfsfsfs ",process.env.MONGO_URI)
      const conn = await mongoose.connect('mongodb://127.0.0.1/csv_upload');

      console.log(`Database Connection Established\n`);
   } catch (error) {
      console.log(error);
      process.exit(1);
   }
};

module.exports = connectDB;
