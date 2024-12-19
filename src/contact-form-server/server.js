const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const cors = require("cors");

const app = express();
const PORT = 3000;
const DATA_FILE = "./contacts.json";

// Middleware
app.use(cors());
app.use(bodyParser.json());

// POST route to save contact details
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const newContact = { name, email, message, date: new Date().toISOString() };

  // Read existing data
  fs.readFile(DATA_FILE, "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Error reading data file" });
    }

    const contacts = JSON.parse(data);

    // Add new contact
    contacts.push(newContact);

    // Save updated data
    fs.writeFile(DATA_FILE, JSON.stringify(contacts, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ error: "Error saving data" });
      }

      res.status(201).json({ message: "Contact saved successfully" });
    });
  });
});

// GET route to fetch all contact details
app.get("/api/contacts", (req, res) => {
  fs.readFile(DATA_FILE, "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Error reading data file" });
    }

    const contacts = JSON.parse(data);
    res.json(contacts);
  });
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
