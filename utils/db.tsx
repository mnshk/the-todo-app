import mongoose from 'mongoose'

declare global {
    var mongoose: any
}

const DB_URL = process.env.DB_URL

if (!DB_URL) {
    throw new Error("DB_URL NOT DEFINED")
}

let cached: any = global.mongoose

if (!cached) {
    cached = global.mongoose = { connection: null, promise: null }
}

const dbConnect = async () => {
    if (cached.connection) {
        return cached.connection
    }
    if (!cached.promise) {
        // const options = {
        //     useNewUrlParser: true,
        //     useUnifiedTopology: true
        // }
        cached.promise = mongoose.connect(DB_URL).then((mongoose) => {
            return mongoose
        })
    }


    cached.connection = await cached.promise
    return cached.connection
}

export default dbConnect