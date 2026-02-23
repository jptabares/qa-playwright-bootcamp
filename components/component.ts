import { Locator, Page } from "../fixtures/playwright";

export class Component<T = Locator> {
    constructor(public readonly root: T) {}

    get page(): Page {
        return (this.root as Locator).page();
    }
}