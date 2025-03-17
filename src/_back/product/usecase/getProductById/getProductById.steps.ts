import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";

const { Given, When, Then } = createBdd();

Given("I have a product with ID {string}", function (_, id: string) {
  this.productId = id;
});

When("I request the product by valid ID", async function ({ request }) {
  const response = await request.get(
    `http://localhost:3000/api/products/getById?id=${this.productId}`
  );
  this.response = response;
});

Then("I should get a successful response with product details", function () {
  expect(this.response.status()).toBe(200);
  const body = this.response.json();
  expect(body).toHaveProperty("name");
  expect(body).toHaveProperty("price");
  expect(body).toHaveProperty("stock");
});
