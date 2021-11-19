import express from "express";

import cors from "cors";
 
import Router from "./routes/routes.js";

const app = express();

app.use(express.json());

app.use(cors());

app.use(express.urlencoded({ extended: true }));

app.use(Router);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to backend application." });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});