<div align="center">
 <h2>Currency converter API</h2>
</div>

<p>A node js API</p>

#### Getting started

- Clone the repository
- Install dependencies using `yarn install` from the app root
- Create an `.env` file and specify the `X_CMC_PRO_API_KEY`, `DEV_ORIGIN`, `API_DOMAIN`
- Get an account with [Coin market](https://coinmarketcap.com) to get a key: `X_CMC_PRO_API_KEY`
- `API_DOMAIN`=https://pro-api.coinmarketcap.com
- `DEV_ORIGIN` is the host your client is running
- `PROD_ORIGIN` is the host your client is running in production
- Link to client [repo](https://github.com/PaulSebalu/xchenj)
- Start the development server using `yarn dev`

<br>

<div>
 <h3>API Endpoints</h3>
</div>

<strong>Request headers:</strong><br>
` Content-Type: application/json`<br>

- `GET /listing?currency=cryptos` &nbsp; Get currency crypto listing
- `GET /listing?currency=fiats` &nbsp; Get currency fiat listing
- `POST /convert` request body { "amount": (number),
  "baseCurrency": (number),
  "exchangeCurrency": (currencySymbol)} &nbsp; Get currency conversion
