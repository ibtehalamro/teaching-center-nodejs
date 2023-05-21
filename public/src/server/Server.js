import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import routes from "../Routes/Routes.js";
const app = express();
const port = process.env.PORT || 8081;
app.use(cors());
//body-parser config;
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
routes(app);
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
