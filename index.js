import express from "express";
import routes from "../routes/todos.js";
import dbconnect from "./config/data.js";
import dotenv from "./"

dotenv.config();
const port = process.env.PORT || 3001;

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Connect to the database
dbconnect();

// Routes
app.use("/api/v1", routes);

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
