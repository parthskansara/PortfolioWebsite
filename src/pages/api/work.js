import connectToDatabase from "@/lib/mongo";
import mongoose from "mongoose";

const WorkSchema = new mongoose.Schema({
    type: String,
    year: String,
    title: String,
    company: String,
    location: String, 
    description: String,
    tech: [String],
});

let Work;

try{
    Work = mongoose.model('Work');
}
catch{
    Work = mongoose.model('Work', WorkSchema);
}

export default async function handler (req, res){
    await connectToDatabase();

    if (req.method === 'GET'){
        const experiences = await Work.find({});
        res.status(200).json({experiences});
    }
    else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}