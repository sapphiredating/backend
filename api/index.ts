import createError from "http-errors";
import express, { NextFunction, Request, Response } from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";

import apiRouter from "../routes/api";
import devRouter from "../routes/dev";

const port = process.env.PORT;
if (!port) {
  throw new Error("PORT not set");
}

const app = express();

// view engine setup
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api", apiRouter);
app.use("/dev", devRouter);

// error handling - should be last middleware

interface Error {
  message: string;
  status?: number;
}

app.use(function (err: Error, req: Request, res: Response, next: NextFunction) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send("error");
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// catch 404 and forward to error handler.
// ! ANY ROUTES SPECIFIED AFTER THIS LINE WILL NOT BE REACHED
app.use(function (req, res, next) {
  next(createError(404));
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
export default app;
