import { GlobalComponent } from '../components/global-component';

export class LoginPage extends GlobalComponent { 
    readonly username = this.page.locator('#user-name');
    readonly password = this.page.locator('#password');
    readonly loginButton = this.page.locator('#login-button');

    async login(username: string, password: string) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
    }
}