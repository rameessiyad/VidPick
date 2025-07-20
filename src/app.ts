import express, { Application, Request, Response } from "express";
import path from "path";
import dotenv from "dotenv";
dotenv.config();

import routes from "./routes/index";

const app: Application = express();
const port = process.env.PORT || 3000;

//view engine
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/", routes);

//start server
app.listen(port, () => {
  console.log(`Server is runnning in port : ${port}`);
});
