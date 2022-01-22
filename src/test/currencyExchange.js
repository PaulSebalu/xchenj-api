/* eslint-disable func-names */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import chai, { expect } from "chai";
import chaiHttp from "chai-http";

import app from "../index";

/*
This is a rather subjective take:
Since an external API exists and no number crunching 
exists in here, it's better to put more 
emphasis on testing the behavior of the external API
to check that expected responses are received once queried.
It would be good to also test for various edge cases like 
unexpected query parameters and more.

Since the frontend is only acting as a presentational layer
in this particular instance, it's reason to start by testing 
where the logic is.
*/
chai.use(chaiHttp);

describe("Currency listings endpoint **************", () => {
  it("endpoint returns fiat listing **************", async () => {
    const res = await chai.request(app).get(`/listing?currency=fiats`);

    expect(res).to.have.status(200);
    expect(res.body).to.be.a("array");
    expect(
      res.body[Math.floor(Math.random() * res.body.length)]
    ).to.include.any.keys("id", "name", "sign", "symbol");
  });

  it("endpoint returns crypto listing **************", async () => {
    const res = await chai.request(app).get(`/listing?currency=cryptos`);

    expect(res).to.have.status(200);
    expect(res.body).to.be.a("array");
    expect(
      res.body[Math.floor(Math.random() * res.body.length)]
    ).to.include.any.keys("id", "name", "slug", "symbol");
  });
});

describe("Price conversion endpoint **************", () => {
  it(`endpoint returns price conversion and certain
   arbitrary behaviors hold **************`, async () => {
    const fiatListing = await chai.request(app).get(`/listing?currency=fiats`);

    const cryptoListing = await chai
      .request(app)
      .get(`/listing?currency=cryptos`);

    const base =
      cryptoListing.body[Math.floor(Math.random() * cryptoListing.body.length)];
    const exchange =
      fiatListing.body[Math.floor(Math.random() * fiatListing.body.length)];

    const {
      body: { quote, id, symbol },
    } = await chai.request(app).post(`/convert`).send({
      amount: 1,
      baseCurrency: base.id,
      exchangeCurrency: exchange.symbol,
    });

    const { price } = quote[`${exchange.symbol}`];
    expect(price).to.be.a("number");

    expect(id).to.equal(base.id);
    expect(symbol).to.equal(base.symbol);

    expect(quote).to.have.property(exchange.symbol);
  });
});
