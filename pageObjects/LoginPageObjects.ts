import { ElementFinder, element, by, ElementArrayFinder } from "protractor";

export class LoginPageObjects {
    WelcomeMsg: ElementFinder;

    constructor() {
        this.WelcomeMsg = element(by.xpath("//*[contains(text(),'Welcome to Petclinic')]"));
    }
}