import connectToDatabase from "@/lib/mongo";
import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
    id: String,
    name: String,
    description: String,
    link: String
});

let Project;

try {
    Project = mongoose.model('Project'); // use existing Project model
}
catch {
    Project = mongoose.model('Project', ProjectSchema); // create new Project model
}

export default async function handler(req, res) {
    await connectToDatabase();
  
    if (req.method === 'GET') {
      const projects = await Project.find({});
      res.status(200).json({ projects });
    } 
    // else if (req.method === 'POST') {
    //   const { name, description, link } = req.body;
    //   const newProject = new Project({ name, description, link });
    //   await newProject.save();
    //   res.status(201).json({ project: newProject });
    // } 
    else {
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  