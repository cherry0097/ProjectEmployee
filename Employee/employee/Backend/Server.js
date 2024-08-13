const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { Employee } = require("./Models/Empolye.js");

const app = express();
const port = 3000;

const startServer = async () => {
  try {

    app.use(express.json())
    await mongoose
      .connect(
        "<Mongo DB connection string>"
      )
      .then(() => console.log("MongoDB connected"))
      .catch((err) => console.error("MongoDB connection error:", err));

    app.use(cors());
    app.use(bodyParser.json());
    

    app.post("/registration-form", async (req, res) => {
      try {
        const employee = new Employee(req.body);
        await employee.save();
        console.log(req.body);
        res.status(200).send("Data received");
      } catch (err) {
        console.error("Error saving employee:", err);
        res.status(500).send("Error saving data");
      }
    });

    app.get("/details", async (req, res) => {
      try {
        const employees = await Employee.find();
        res.json(employees);
        console.log('Data fetched');
      } catch (err) {
        console.error("Error fetching employees:", err);
        res.status(500).send("Error fetching data");
      }
    });

    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
};

startServer();
