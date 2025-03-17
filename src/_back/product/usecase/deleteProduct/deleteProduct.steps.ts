import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";

const { Given, When, Then } = createBdd();

Given("I have a valid product ID {string} to delete", function (id) {
  this.productId = id;
});

When("I delete the product", async function ({ request }) {
  const response = await request.delete(
    `http://localhost:3000/api/products/delete?id=${this.productId}`
  );
  this.response = response;
});

Then("I should get a successful response confirming the deletion", function () {
  expect(this.response.status()).toBe(200);
  const body = this.response.json();
  expect(body.message).toBe("Product deleted successfully");
});
