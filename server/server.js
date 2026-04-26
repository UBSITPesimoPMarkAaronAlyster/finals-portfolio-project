const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

//MongoDB Connection
mongoose.connect("mongodb://20246896_db_user:Alyzter012345@ac-1xk8iky-shard-00-00.mzkf8r4.mongodb.net:27017,ac-1xk8iky-shard-00-01.mzkf8r4.mongodb.net:27017,ac-1xk8iky-shard-00-02.mzkf8r4.mongodb.net:27017/portfolioDB?ssl=true&replicaSet=atlas-14ow6u-shard-0&authSource=admin&appName=portfolioDB")
.then(() => console.log("MongoDB Connected Successfully"))
.catch(err => console.log(err));


//Schema + Model
const contactSchema = new mongoose.Schema({
    employerName: String,
    email: String,
    company: String,
    message: String,
    status: {
        type: String,
        default: "Unread"
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const adminSchema = new mongoose.Schema({
    username: String,
    password: String
});

const Contact = mongoose.model("contacts", contactSchema, "Contacts");
const Admin = mongoose.model("admins", adminSchema, "Admins");


//CREATE - Employer sends message
app.post("/contact", async(req,res)=> {

    try{

        const contact = await Contact.create(req.body);

        res.json({
            message: "Message sent successfully.",
            contact
        });

    }catch(err){
        res.status(500).json({
            error: err.message
        });
    }

});


//Admin Login
app.post("/admin-login", async(req,res)=> {

    try{

        const admin = await Admin.findOne({
            username: req.body.username,
            password: req.body.password
        });

        if(admin){
            res.json({
                success: true,
                message: "Login successful."
            });
        }else{
            res.json({
                success: false,
                message: "Invalid username or password."
            });
        }

    }catch(err){
        res.status(500).json({
            error: err.message
        });
    }

});


//READ - Show all employer messages
app.get("/contacts", async(req,res)=> {

    try{

        const contacts = await Contact.find().sort({date: -1});

        res.json(contacts);

    }catch(err){
        res.status(500).json({
            error: err.message
        });
    }

});


//UPDATE - Change message status
app.put("/contacts/:id", async(req,res)=> {

    try{

        const contact = await Contact.findByIdAndUpdate(
            req.params.id,
            {
                status: req.body.status
            },
            {
                new: true
            }
        );

        res.json({
            message: "Message status updated.",
            contact
        });

    }catch(err){
        res.status(500).json({
            error: err.message
        });
    }

});


//DELETE - Delete employer message
app.delete("/contacts/:id", async(req,res)=> {

    try{

        await Contact.findByIdAndDelete(req.params.id);

        res.json({
            message: "Message deleted successfully."
        });

    }catch(err){
        res.status(500).json({
            error: err.message
        });
    }

});


//Start Server
app.listen(5000, () => console.log("Server running on port 5000"));