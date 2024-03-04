// import { ObjectId } from 'mongodb';
// import { connectToDatabase } from "../db/connection.js"; // Adjust the path accordingly

// // Helper to get the users collection
// const getUsersCollection = async () => {
//   const db = await connectToDatabase();
//   return db.collection("users");
// };

// export const getUserById = async (userId) => {
//   const collection = await getUsersCollection();
//   const userDoc = await collection.findOne({ _id: new ObjectId(userId) });
//   return userDoc; // MongoDB returns null if no document is found
// };

// export const updateUserChats = async (userId, chats) => {
//   const collection = await getUsersCollection();
//   await collection.updateOne({ _id: new ObjectId(userId) }, { $set: { chats: chats } });
// };

// export const getUserByEmail = async (email) => {
//   const collection = await getUsersCollection();
//   const userDoc = await collection.findOne({ email: email });
//   return userDoc; // Returns null if no document is found
// };

// export const getAllUsers = async () => {
//   const collection = await getUsersCollection();
//   const usersCursor = await collection.find({});
//   const users = await usersCursor.toArray();
//   return users;
// };

// export const createUser = async (name, email, hashedPassword) => {
//   const collection = await getUsersCollection();
//   const result = await collection.insertOne({
//     name,
//     email,
//     password: hashedPassword,
//   });
//   return result.insertedId.toString(); // Convert ObjectId to string
// };
