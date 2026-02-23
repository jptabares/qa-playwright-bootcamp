import { GlobalComponent } from "../components/global-component";
import { expect } from "../fixtures/expect";

export class ProductsPage extends GlobalComponent {
    readonly title = this.page.getByText("Products");

    async expectTitleToBeVisible() {
        await expect(this.title).toBeVisible();
    }
}