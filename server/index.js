// Initializing variables
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT;
const DB = process.env.DB;
const app=express()
// const db = require('./DB/Database');
const noteModel = require('./DB/Models/noteModel');

app.use(cors());


// middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

// fetch all records
app.get('/notes', async(req,res)=>{
    try {
        const data = await noteModel.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
});

// fetch particular records
app.get('/notes/:id', async(req,res)=>{
    try {
        const id = await req.params.id;
        const data =await noteModel.findById(id);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
});

// create a record
app.post('/notes/upload',async(req,res)=>{
    try {
        const {title,content} = req.body;
        const note = new noteModel({title,content});
        await note.save();
        res.status(201).json(note);
    } catch (error) {   
        res.status(500).json({message:error.message})
    }
});


// update a record
app.put('/notes/:id',async(req,res)=>{
    try {
        await noteModel
        .findByIdAndUpdate(req.params.id,{
            title:req.body.title,
            content:req.body.content
        })
        .then (async(data)=>{
            const result = await noteModel.findById(data.id);
            res.status(200).json(result);
        })
    } catch (error) {
        res.status(500).json({message:error.message})
    }
});

// delete a record
app.delete('/notes/:id',async(req,res)=>{
    try {
        await noteModel
        .findByIdAndDelete(req.params.id)
        .then((data)=>{
            res.status(200).json({message:"Deleted Successfully"});
        })
    } catch (error) {
        res.status(500).json({message:error.message})
        
    }
});

// DB connection
mongoose
  .connect(process.env.DB)
  .then(() => {
    console.log("DB Connected");
    app.listen(PORT, () => {
      console.log("App is running in the PORT " + PORT);
    });
  })
  .catch(() => {
    console.log("Connection Failed");
  });