import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/test", function (req, res) {
  res.send("Hello World");
});

app.listen(9000);
