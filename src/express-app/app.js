import express from "express";
import cookieParser from "./middlewares/cookie-parser";
import queryParser from "./middlewares/query-parser";
import router from "./routes";
import passport from "passport";
import session from "express-session";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger/swagger.json";
import startDb from "./db";

const app = express();

startDb();

app.use(cookieParser);
app.use(queryParser);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "343ji43j4n3jn4jk3n",
    resave: true,
    saveUninitialized: false
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(router);
app.use("/swagger-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default app;
