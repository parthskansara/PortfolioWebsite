import connectToDatabase from "@/lib/mongo";
import mongoose from "mongoose";

const PubSchema = new mongoose.Schema({
    name: String,
    description: String,
    date: Date,
    link: String,
});

let Publication;

try {
    Publication = mongoose.model('Publication');
}
catch {
    Publication = mongoose.model('Publication', PubSchema);
}

export default async function handler (req, res) {
    await connectToDatabase();

    if (req.method === 'GET'){
        const pubs = await Publication.find({});
        res.status(200).json({ pubs });
    }
    else if (req.method === 'POST'){
        const { name, description, date, link } = req.body;
        const newPublication = new Publication ({ name, description, date, link });
        await newPublication.save();
        res.status(201).json({ publication: newPublication});
    }
    else {
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}