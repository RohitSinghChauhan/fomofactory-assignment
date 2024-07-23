import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI!;
const client = new MongoClient(uri);

async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { symbol } = req.query;

    try {
        await client.connect();
        const database = client.db('crypto_data');
        const collection = database.collection('prices');

        const data = await collection.find({ symbol }).sort({ _id: -1 }).limit(20).toArray();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data' });
    } finally {
        await client.close();
    }
}

export default handler;
