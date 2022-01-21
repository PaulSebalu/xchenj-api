import env from "dotenv";
import requestPromise from "request-promise"; // FIXME: deprecated library

env.config();

// eslint-disable-next-line consistent-return
export const priceConversion = async (req, res) => {
  try {
    const requestOptions = {
      method: "GET",
      uri: `${process.env.API_DOMAIN}/v1/tools/price-conversion`,
      qs: {
        amount: req.body.amount,
        id: req.body.baseCurrency,
        convert: req.body.exchangeCurrency,
      },
      headers: {
        "X-CMC_PRO_API_KEY": `${process.env.X_CMC_PRO_API_KEY}`,
      },
      json: true,
      gzip: true,
    };

    requestPromise(requestOptions)
      .then((response) => res.status(200).json(response.data))

      .catch((error) => {
        res.status(400).json(error.error);
      });
  } catch (error) {
    return res.status(500);
  }
};

// eslint-disable-next-line consistent-return
export const currencyListing = async (req, res) => {
  try {
    const requestOptions = {
      method: "GET",
      uri:
        req.query.currency === "cryptos"
          ? `${process.env.API_DOMAIN}/v1/cryptocurrency/map`
          : `${process.env.API_DOMAIN}/v1/fiat/map`,
      headers: {
        "X-CMC_PRO_API_KEY": `${process.env.X_CMC_PRO_API_KEY}`,
      },
      json: true,
      gzip: true,
    };

    requestPromise(requestOptions)
      .then((response) => res.status(200).json(response.data.slice(0, 4)))

      .catch((error) => {
        res.status(400).json(error.error);
      });
  } catch (error) {
    return res.status(500);
  }
};
