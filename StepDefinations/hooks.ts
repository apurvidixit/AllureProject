import { Before, After, Status } from "cucumber";
import { browser } from "protractor";

Before(async function () {

  // This hook will be executed before scenarios tagged with @foo
  //browser.manage().window().maximize();  given in conf file 
});

After(async function (scenario) {
  //This hook will be executed before scenarios tagged with @foo
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
 
});
