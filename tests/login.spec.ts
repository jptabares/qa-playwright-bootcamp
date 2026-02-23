import { test } from "../fixtures/test";

test.describe("Login Test", () => {
  test("should login successfully", async ({ loginPage, productsPage }) => {
    await loginPage.login("standard_user", "secret_sauce");
    await productsPage.expectTitleToBeVisible();
  });
});