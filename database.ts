import { MongoClient, MongoClientOptions } from "mongodb";

const url = process.env.MONGODB_URL || "";
const options: MongoClientOptions = {};

let connectDB: Promise<MongoClient>;

if (typeof window === "undefined") {
  if (process.env.NODE_ENV === "development") {
    if (!global._mongo) {
      global._mongo = new MongoClient(url, options).connect();
    }
    connectDB = global._mongo;
  } else {
    connectDB = new MongoClient(url, options).connect();
  }
} else {
  connectDB = Promise.reject(
    new Error("MongoDB connection is not available on the client side"),
  );
}

export { connectDB };
