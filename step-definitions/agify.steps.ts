import { Given, When, Then } from "@cucumber/cucumber";
import axios, { AxiosResponse } from "axios";
import assert from "assert";

let baseUrl: string;
let response: AxiosResponse;

Given("the Agify API base URL is {string}", function (url: string) {
  baseUrl = url;
});

When("I send a GET request with the name {string}", async function (name: string) {
  response = await axios.get(`${baseUrl}?name=${encodeURIComponent(name)}`);
});

Then("the response status should be {int}", function (expectedStatus: number) {
  assert.strictEqual(response.status, expectedStatus);
});

Then("the response should contain the field {string} with value {string}", function (field: string, expectedValue: string) {
  assert.strictEqual(response.data[field], expectedValue);
});

Then("the response should contain the field {string}", function (field: string) {
  assert.ok(response.data[field] !== undefined, `Missing field: ${field}`);
});
