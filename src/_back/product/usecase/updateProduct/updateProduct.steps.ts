import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";

const { Given, When, Then } = createBdd();

Given("I have a valid product ID {string} and updated data", function (id) {
  this.productId = id;
  this.updatedData = {
    stock: 30,
  };
});

When("I update the product with new data", async function ({ request }) {
  const response = await request.put(
    `http://localhost:3000/api/products/update?id=${this.productId}`,
    {
      data: this.updatedData,
    }
  );
  this.response = response;
});

Then("I should get a successful response confirming the update", function () {
  expect(this.response.status()).toBe(200);
  const body = this.response.json();
  expect(body.message).toBe("Product updated successfully");
});
