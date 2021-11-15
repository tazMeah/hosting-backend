import express from 'express';
import { getClient } from '../db';
// import { ObjectId } from 'mongodb';


const routes = express.Router();

routes.get("/favorites", async (req, res) => {
    try {
        const client = await getClient();
        const results = await client.db().collection("favorites")
            .find().toArray();
        res.json(results); // send JSON results
    } catch (err) {
        console.error("FAIL", err);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

export default routes;