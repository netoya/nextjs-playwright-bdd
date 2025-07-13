import { createBdd } from "playwright-bdd";
import { expect } from "@playwright/test";

const { Given, When, Then } = createBdd();

Given("I have valid product data", function () {
  this.productDetails = {
    name: "Valid Product",
    price: 99.99,
    stock: 20,
  };
});

When("I try to create the product", async function ({ request }) {
  const response = await request.post(
    "http://localhost:3000/api/products/create",
    {
      data: this.productDetails,
    }
  );
  this.response = response;
});

Then("I should get a successful response with product id", function () {
  expect(this.response.status()).toBe(201);
  const body = this.response.json();
  expect(body.id).toBeDefined();
});
