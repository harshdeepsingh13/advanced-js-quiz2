const dotenv = require('dotenv');
//env init
let envFilePath = "./.env"
// if (process.env.MODE === "dev") envFilePath = "./.env-dev"
dotenv.config({path: envFilePath});

const express = require('express');
const app = express();
const {addNewRecord} = require('./model');
const mongooseConnection = require("./mongoose")

const port = process.env.PORT || 7001;

mongooseConnection();

app.get("/", async (req, res) => {
	await addNewRecord();
	res.status(200).json({message: "New document added to the Exams collection"})
})

app.listen(port, () => console.log(`Server listening at port ${port}`));
