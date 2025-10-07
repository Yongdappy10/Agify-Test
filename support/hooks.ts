import { Before, After, BeforeAll, AfterAll } from "@cucumber/cucumber";

BeforeAll(async function () {
  console.log("Starting Agify.io BDD test suite...");
});

Before(async function (scenario) {
  console.log(`Starting scenario: ${scenario.pickle.name}`);
});

After(async function (scenario) {
  console.log(`Finished scenario: ${scenario.pickle.name}`);
});

AfterAll(async function () {
  console.log("All scenarios completed.");
});
