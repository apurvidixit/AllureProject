import { Given, When, Then } from "cucumber";
import { LoginPageObjects } from "../pageObjects/LoginPageObjects";
import { HomePageObjects } from "../pageObjects/HomePageObjects";
import { browser, by, element, ElementFinder, protractor } from "protractor"



const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

var { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(70 * 1000);

let HomeObj = new HomePageObjects();
let logObj = new LoginPageObjects();

Given('User is on Petclinic home page', async function () {
    await logObj.WelcomeMsg.isDisplayed().then(async function (result) {
        await expect(true).to.equal(result);
    });
});
Then('Five menus should be displayed as Home,Owners,Veterinarians,Pet Types and Specialties', async function () {
    let menu1 = await HomeObj.HomeMenu.getAttribute("innerText");
    await console.log(" First Menu : " + menu1);
    await expect("HOME").to.equal(menu1);

    let menu2 = await HomeObj.Owners.getAttribute("innerText");
    await console.log(" Second Menu : " + menu2);
    await expect("OWNERS").to.equal(menu2);

    let menu3 = await HomeObj.Veterinarians.getAttribute("innerText");
    await console.log(" Third Menu : " + menu3);
    await expect("VETERINARIANS").to.equal(menu3);

    let menu4 = await HomeObj.PetTypes.getAttribute("innerText");
    await console.log(" Fourth Menu : " + menu4);
    await expect("PET TYPES").to.equal(menu4);

    let menu5 = await HomeObj.Specialties.getAttribute("innerText");
    await console.log(" Fifth Menu : " + menu5);
    await expect("SPECIALTIES").to.equal(menu5);
});
When('User clicks on owners tab', async function () {
    await HomeObj.Owners.click();
});
Then('ALL and ADD NEW owners sub-menus should be displayed', async function () {
    await console.log("ALL and ADD NEW owners sub-menus should be displayed");
});