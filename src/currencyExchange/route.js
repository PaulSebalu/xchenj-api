import { Router } from "express";

import { currencyListing, priceConversion } from "./controller";

import { validateConversion } from "./middleware";

const currencyExchangeRoute = Router();

currencyExchangeRoute.get("/listing", currencyListing);
currencyExchangeRoute.post("/convert", validateConversion, priceConversion);

export default currencyExchangeRoute;
