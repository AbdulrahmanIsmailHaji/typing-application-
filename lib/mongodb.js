import mongoose from "mongoose";

export const connectMongoDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://ismailabdulrahman086:Abdi2002@cluster0.vysmbjm.mongodb.net/google_auth_test",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB Connection Error:", error.message);
  }
};
