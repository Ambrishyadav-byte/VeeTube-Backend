import mongoose, { Mongoose } from "mongoose";
import { DB_NAME } from "../constants.js";




const connectDB = async () => {
      try {
      const connectionInstance = await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`MongoDB connected !! DB host:${connectionInstance.connection.host} `);
      } catch (error) {
        console.error(`MONGOBD connection Error: ${error.message}`);
        process.exit(1);
      }
};

export default connectDB;