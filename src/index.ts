import express from "express";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import mongoose from "mongoose";

import router from "router";

const app = express();

app.use(
  cors({
    credentials: true,
  })
);

app.use(compression());
app.use(cookieParser());
app.use(express.json());

app.listen(8080, () => {
  console.log(`🟢 Server is running on http://localhost:8080`);
});

const MONGODB_URL = `mongodb+srv://deephiwase3:xqUgShVTzC1RNrnM@cluster0.gx8umzm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URL);
mongoose.connection.on("error", (error: Error) => console.log(error));

app.use("/", router);
