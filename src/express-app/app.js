import express from "express";
import cookieParser from "./middlewares/cookie-parser";
import queryParser from "./middlewares/query-parser";
import router from "./routes";

const app = express();
app.use(express.json());
app.use(cookieParser);
app.use(queryParser);
app.use(router);

export default app;
