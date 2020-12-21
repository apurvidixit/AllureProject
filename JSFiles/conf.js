"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const protractor_1 = require("protractor");
let reporter = require('cucumberjs-allure-reporter');
var CucumberJSAllureFormatter = require("cucumberjs-allure2-reporter").CucumberJSAllureFormatter;
var AllureRuntime = require("cucumberjs-allure2-reporter").AllureRuntime;
let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();
let ReportDate = yyyy + '-' + mm + '-' + dd;
exports.config = {
    allScriptsTimeout: 100000,
    getPageTimeout: 100000,
    // The address of a running selenium server.
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    SELENIUM_PROMISE_MANAGER: false,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            // args: ["--incognito"],
            prefs: {
                download: {
                    prompt_for_download: false,
                    directory_upgrade: true,
                    default_directory: './Download/'
                }
            }
        }
    },
    specs: [
        '../features/login.feature',
        //'../features/homePage.feature',
        '../features/Veterinarians.feature',
    ],
    cucumberOpts: {
        // require step definitions
        //tags:{"@smoke, @regression"},
        //tags:"@regression",
        //format: 'json:./cucumberreport.json',
        strict: true,
        require: [
            './stepDefinations/*.js',
        ]
    },
    onPrepare: function () {
        protractor_1.browser.ignoreSynchronization = false;
        protractor_1.browser.driver.manage().window().maximize();
        function Reporter(options) {
            CucumberJSAllureFormatter.call(this, options, new AllureRuntime({ resultsDir: "./allure-results" }), {});
        }
        Reporter.prototype = Object.create(CucumberJSAllureFormatter.prototype);
        Reporter.prototype.constructor = Reporter;
        exports.default = Reporter;
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvbmYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkNBQTZDO0FBQzdDLElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO0FBRXJELElBQUkseUJBQXlCLEdBQUcsT0FBTyxDQUFDLDZCQUE2QixDQUFDLENBQUMseUJBQXlCLENBQUM7QUFDakcsSUFBSSxhQUFhLEdBQUcsT0FBTyxDQUFDLDZCQUE2QixDQUFDLENBQUMsYUFBYSxDQUFDO0FBRXpFLElBQUksS0FBSyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7QUFDdkIsSUFBSSxFQUFFLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDbEQsSUFBSSxFQUFFLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsZUFBZTtBQUN2RSxJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7QUFFL0IsSUFBSSxVQUFVLEdBQUcsSUFBSSxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQztBQUdqQyxRQUFBLE1BQU0sR0FBVztJQUUxQixpQkFBaUIsRUFBRSxNQUFNO0lBQ3pCLGNBQWMsRUFBRSxNQUFNO0lBQ3RCLDRDQUE0QztJQUM1QyxrREFBa0Q7SUFDbEQsYUFBYSxFQUFFLElBQUk7SUFFbkIsd0JBQXdCLEVBQUUsS0FBSztJQUMvQixTQUFTLEVBQUUsUUFBUTtJQUNuQixhQUFhLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQztJQUcvRCx1REFBdUQ7SUFFdkQsWUFBWSxFQUNaO1FBQ0UsV0FBVyxFQUFFLFFBQVE7UUFFckIsYUFBYSxFQUFFO1lBRWIseUJBQXlCO1lBRXpCLEtBQUssRUFBRTtnQkFFTCxRQUFRLEVBQUU7b0JBQ1IsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsaUJBQWlCLEVBQUUsSUFBSTtvQkFDdkIsaUJBQWlCLEVBQUUsYUFBYTtpQkFDakM7YUFDRjtTQUNGO0tBQ0Y7SUFFRCxLQUFLLEVBQUU7UUFDTCwyQkFBMkI7UUFDM0IsaUNBQWlDO1FBQ2pDLG1DQUFtQztLQUNwQztJQUVELFlBQVksRUFBRTtRQUNaLDJCQUEyQjtRQUMzQiwrQkFBK0I7UUFDL0IscUJBQXFCO1FBQ3JCLHVDQUF1QztRQUN2QyxNQUFNLEVBQUUsSUFBSTtRQUVaLE9BQU8sRUFBRTtZQUNQLHdCQUF3QjtTQUV6QjtLQUNGO0lBRUQsU0FBUyxFQUFFO1FBR1Qsb0JBQU8sQ0FBQyxxQkFBcUIsR0FBRyxLQUFLLENBQUM7UUFDdEMsb0JBQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDNUMsU0FBUyxRQUFRLENBQUMsT0FBTztZQUN2Qix5QkFBeUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUNqQyxPQUFPLEVBQ1AsSUFBSSxhQUFhLENBQUMsRUFBRSxVQUFVLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQyxFQUNyRCxFQUFFLENBQUMsQ0FBQztRQUNSLENBQUM7UUFDRCxRQUFRLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMseUJBQXlCLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDeEUsUUFBUSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDO1FBRTFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDO0lBSTdCLENBQUM7Q0FzQ0YsQ0FBQyJ9