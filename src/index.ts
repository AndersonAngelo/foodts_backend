import express from "express";
import path from "node:path";
import mongoose from "mongoose";
import { router } from "./router";

mongoose
  .connect("mongodb+srv://andchip:2023@cluster0.jzj65lp.mongodb.net/?retryWrites=true&w=majority")
  .then(() => {
    const app = express();
    const port = 3001;

    app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
    app.use(express.json());
    app.use(router);

    app.listen(port, () => {
      console.log(`🚀 Server is running on http://localhost:${port}`);
    });
  })
  .catch((e) => {
    console.log("error in connected the mongodb");
  });
