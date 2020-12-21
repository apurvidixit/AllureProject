import { Given, When, Then } from "cucumber";
import { LoginPageObjects } from "../pageObjects/LoginPageObjects";
import { HomePageObjects } from "../pageObjects/HomePageObjects";
import { VeterinariansObjects } from "../pageObjects/VeterinariansObjects";
import { browser, by, element, ElementFinder, protractor } from "protractor"




const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

var { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(70 * 1000);

let HomeObj = new HomePageObjects();
let logObj = new LoginPageObjects();
let vetObj = new VeterinariansObjects();

Then('User should navigate to Veterinarians add user', async function () {

  await vetObj.Veterinarians.click();
  await browser.sleep(3000);
  await vetObj.vetAdd.click();
  await browser.sleep(3000);
});

Given('User is on Veterinarians', async function () {
  await browser.sleep(3000);
  let newvet = await vetObj.NewVeterians.getAttribute("innerText");
  await console.log(newvet);
  expect(await vetObj.NewVeterians.getAttribute("innerText")).to.equals("New Veterinarian");

});

Then('User should able to see First Name', async function () {
  await browser.sleep(5000);
  let firstn = await vetObj.FirstName.getAttribute("innerText");
  await console.log(firstn);
  expect(await vetObj.FirstName.getAttribute("innerText")).to.equals("First Name");

});


Then('User should able to see Last Name',async function () {
  await browser.sleep(5000);
  let lastn = await vetObj.LastName.getAttribute("innerText");
  await console.log(lastn);
  expect(await vetObj.LastName.getAttribute("innerText")).to.equals("Last Name");
});
