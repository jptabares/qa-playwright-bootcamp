import { mergeTests } from "./playwright";

import { test as pageFixtures } from "./pages/pages";
import { test as signInFixtures } from "./pages/sign-in";

export const test = mergeTests(
    signInFixtures,
    pageFixtures,
    
);