import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";

const { Given, When, Then } = createBdd();

Given("There are products in the database", async function () {
  // Puedes crear productos de prueba antes de hacer la solicitud o asegurarte de que haya productos en la base de datos.
});

When("I request all products", async function ({ request }) {
  const response = await request.get(
    "http://localhost:3000/api/products/getAll"
  );
  this.response = response;
});

Then("I should get a successful response with a list of products", function () {
  expect(this.response.status()).toBe(200);
  const body = this.response.json();
  expect(body).toBeInstanceOf(Array);
  expect(body.length).toBeGreaterThan(0); // Verifica que haya productos
});
