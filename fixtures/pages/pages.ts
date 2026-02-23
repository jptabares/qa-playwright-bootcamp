import { test as base } from "../playwright";
import { LoginPage } from "../../pages/login.page";
import { ProductsPage } from "../../pages/products.page";
import { PAGE_LOAD_TIMEOUT } from "../../utils/timeout";
import { SignInFixtures } from "./sign-in";

type InheritedFixtures = SignInFixtures;

type PageFixtures = InheritedFixtures & {
    loginPage: LoginPage;
    productsPage: ProductsPage;
    productsPageSignedIn: ProductsPage;
}

export const test = base.extend<PageFixtures>({
    loginPage: [
        async ({ page }, use) => {
            const loginPage = new LoginPage(page);
            await page.goto("");
            await use(loginPage);
        },
        { timeout: PAGE_LOAD_TIMEOUT}
    ],
    productsPage: [
        async ({ page }, use) => {
            const productsPage = new ProductsPage(page);
            await use(productsPage);
        },
        { timeout: PAGE_LOAD_TIMEOUT }
    ],
    productsPageSignedIn: [
        async ({ page, signIn: _ }, use) => {
            const productsPage = new ProductsPage(page);
            await use(productsPage);
        },
        { timeout: PAGE_LOAD_TIMEOUT }
    ]
});