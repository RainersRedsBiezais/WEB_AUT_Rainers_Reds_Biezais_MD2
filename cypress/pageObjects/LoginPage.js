import { BasePage } from "./BasePage";

export class LoginPage extends BasePage{
    static get url() {
        return "";
    }

    static get clickLoginButton(){
        return cy.get("[id='btn-make-appointment']");
    }
    static get setUsername(){
        return cy.get("[id='txt-username']");
    }
    static get setPassword(){
        return cy.get("[id='txt-password']");
    }
    static get clickSubmitButton(){
        return cy.get("[type='submit']");
    }
    static get clickMenuButton(){
        return cy.get("[class='fa fa-bars']");
    }
    static get validateMenuButtonActive(){
        return cy.get("[class='active']");
    }
    static get clickMenuButtonHistoryButton(){
        return cy.get("[href='history.php#history']");
    }
    static get validateAppointmentHistory(){
        return cy.get("[class='col-sm-12 text-center']");
    }
}