import { MongoClient } from "mongodb";

export default async function GET(req, res) {
    const uri = process.env.MONGO_URI;
    console.log(uri);
    const client = new MongoClient(uri);
    try {
        const database = client.db('stockMgmt');
        const stock = database.collection('inventory');
        const query = {};
        const data = stock.find(query).toArray;
        console.log(data);
        res.send({ uri: uri });
    } finally {
        client.close();
    }
}