import { test } from "../fixtures/test";

test.describe("Inventory Healthcheck suite", () => {
    test("should load inventory page successfully", async ({ productsPageSignedIn }) => {
        await productsPageSignedIn.expectTitleToBeVisible();
    });
});