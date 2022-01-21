import express, { json, urlencoded } from "express";
import env from "dotenv";
import pino from "pino";
import expressPino from "express-pino-logger";

import { excludeMethods } from "./core/middleware";

import currencyExchangeRoute from "./currencyExchange/route";

env.config();

const app = express();

const logger = pino({
  level: process.env.LOG_LEVEL || "info",
  prettyPrint: true,
});

app.use(json(), urlencoded({ extended: true }), expressPino({ logger }));

app.use(excludeMethods);

const requestOrigin =
  process.env.NODE_ENV === "production"
    ? process.env.PROD_ORIGIN
    : process.env.DEV_ORIGIN;

app.use((req, res, next) => {
  // allows request origin
  res.header("Access-Control-Allow-Origin", `${requestOrigin}`);

  // used in response to a pre-flight request
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Routes
app.use(currencyExchangeRoute);

app.get("/", (req, res) => {
  res.status(200).send({
    message: "Xchenj, REST API",
  });
});

app.use("*", (req, res) =>
  res.status(405).json({
    status: 405,
    message: "Looks like the specified path does not exist...",
  })
);

let PORT;

if (process.env.NODE_ENV === "test") {
  PORT = 3000;
} else {
  PORT = process.env.PORT || 4000;
}

app.listen(PORT, () => {
  logger.info(`Server started on port ${PORT}...`);
});

export default app;
