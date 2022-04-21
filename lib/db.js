import { MongoClient } from 'mongodb'

export const connectToDatabase = async () => {
    const client = await MongoClient.connect(process.env.MONGO_URI)

    return client
}