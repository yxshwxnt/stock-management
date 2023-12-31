const { connectToDatabase } = require('../../../lib/mongodb');
const ObjectId = require('mongodb').ObjectId;

export default async function handler(req, res) {
    switch (req.method) {
        case 'GET': {
            return getData(req, res);
        }

        case 'POST': {
            return addProduct(req, res);
        }

        case 'PUT': {
            return updateProduct(req, res);
        }

        case 'DELETE': {
            return deleteProduct(req, res);
        }
    }
}

async function getData(req, res) {
    try {
        let { db } = await connectToDatabase();
        let products = await db
            .collection('inventory')
            .find({})
            .toArray();
        return res.send(products);
    } catch (error) {
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
} 

async function addProduct(req, res) {
    try {
        let { db } = await connectToDatabase();
        let products = await db
            .collection('inventory')
            .find({})
            .toArray();
        return res.send(products);
    } catch (error) {
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}