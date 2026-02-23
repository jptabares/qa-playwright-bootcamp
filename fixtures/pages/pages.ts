import { LoginPage } from "../../pages/login.page";
import { ProductsPage } from "../../pages/products.page";
import { test as base } from "../playwright";

type PageFixtures = {
    loginPage: LoginPage;
    productsPage: ProductsPage;
}

export const test = base.extend<PageFixtures>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        page.goto("");
        await use(loginPage);
    },
    productsPage: async ({ page }, use) => {
        const productsPage = new ProductsPage(page);
        await use(productsPage);
    }
});