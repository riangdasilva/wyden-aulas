import mongoose from "mongoose";

const MONGODB_URI = "mongodb://mongoadmin:secret@localhost:27017";

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });

export default mongoose;
