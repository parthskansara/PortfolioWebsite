import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    throw new Error (
        'Couldn\'t find the MONGODB URI'
      );
}

let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = {conn: null, promise: null};
}

async function connectToDatabase () {
    
    // Check if a connection already exists
    if (cached.conn) {
        return cached.conn;
    }

    // If no connection promise exists, create one
    if (!cached.promise) {
        const opts = {
            bufferCommands: false, // disables mongoose buffering commands
        };

        // create a new promise
        cached.promise = mongoose.connect(MONGODB_URI, opts).then ((mongoose) => {return mongoose;});
    }

    cached.conn = await cached.promise;
    return cached.conn;
}

export default connectToDatabase;