import { Page } from "../fixtures/playwright";
import { Component } from "./component";

export class GlobalComponent extends Component<Page> {
    get page() {
        return this.root;
    }

    public async back() {
        await this.page.goBack();
    }
} 