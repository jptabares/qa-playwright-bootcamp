import { mergeTests } from "./playwright";

import { test as pageFixtures } from "./pages/pages";

export const test = mergeTests(
    pageFixtures
);