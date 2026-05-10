const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(
    "mongodb://20246896_db_user:Alyzter012345@ac-a6axmht-shard-00-00.wobahvn.mongodb.net:27017,ac-a6axmht-shard-00-01.wobahvn.mongodb.net:27017,ac-a6axmht-shard-00-02.wobahvn.mongodb.net:27017/portfolioSecretDB?ssl=true&replicaSet=atlas-1eveh8-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("MongoDB Connected Successfully"))
  .catch((err) => console.log("MongoDB Connection Error:", err.message));

// Schema + Model
const contactSchema = new mongoose.Schema({
  employerName: String,
  email: String,
  company: String,
  message: String,
  status: {
    type: String,
    default: "Unread",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const adminSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const Contact = mongoose.model("contacts", contactSchema, "Contacts");
const Admin = mongoose.model("admins", adminSchema, "Admins");

// CREATE - Employer sends message
app.post("/contact", async (req, res) => {
  try {
    const contact = await Contact.create(req.body);

    res.json({
      message: "Message sent successfully.",
      contact,
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});

// Admin Login
app.post("/admin-login", async (req, res) => {
  try {
    const admin = await Admin.findOne({
      username: req.body.username,
      password: req.body.password,
    });

    if (admin) {
      res.json({
        success: true,
        message: "Login successful.",
      });
    } else {
      res.json({
        success: false,
        message: "Invalid username or password.",
      });
    }
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});

// READ - Show all employer messages
app.get("/contacts", async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ date: -1 });

    res.json(contacts);
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});

// UPDATE - Change message status
app.put("/contacts/:id", async (req, res) => {
  try {
    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      {
        status: req.body.status,
      },
      {
        new: true,
      }
    );

    res.json({
      message: "Message status updated.",
      contact,
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});

// DELETE - Delete employer message
app.delete("/contacts/:id", async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);

    res.json({
      message: "Message deleted successfully.",
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));