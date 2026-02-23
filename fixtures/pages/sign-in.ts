import { test as base, expect } from "../playwright";

import { LoginPage } from "../../pages/login.page";
import { PAGE_LOAD_TIMEOUT } from "../../utils/timeout";
import dotenv from 'dotenv';
dotenv.config();

export type SignInFixtures = {
  signIn: LoginPage;
};

export const test = base.extend<SignInFixtures>({
  signIn: [
    async ({ page }, use) => {
      const username = process.env.APP_USERNAME;
      const password = process.env.APP_PASSWORD;

      if (!username || !password) {
        throw new Error(
          "USERNAME and PASSWORD environment variables must be set",
        );
      }

      const signInPage = new LoginPage(page);
      await signInPage.page.goto("");
      await signInPage.login(username, password);

      expect(page.url()).toBe(`${process.env.BASE_URL}/inventory.html`);

      if (page.url() !== `${process.env.BASE_URL}/inventory.html`) {
        throw new Error("Login failed, check your credentials and try again.");
      }
      await use(signInPage);
    },
    { timeout: PAGE_LOAD_TIMEOUT },
  ],
});
