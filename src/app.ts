import express from "express";
import "dotenv/config";
import * as console from "console";
import router from "./routes";
const app = express();
const PORT = 3000;

app.use("/static", express.static("static"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", router);

app.listen(3000, () => {
  console.log(`Server is up on http://localhost:${PORT}`);
});
