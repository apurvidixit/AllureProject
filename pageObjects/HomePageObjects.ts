import { ElementFinder, element, by, ElementArrayFinder } from "protractor";


export class HomePageObjects {
    HomeMenu: ElementFinder;
    Owners: ElementFinder;
    Veterinarians: ElementFinder;
    PetTypes: ElementFinder;
    Specialties: ElementFinder;

    constructor() {
        this.HomeMenu = element(by.xpath("//*[@class='nav navbar-nav']/li[1]/a"));
        this.Owners = element(by.xpath("//*[@class='nav navbar-nav']/li[2]/a"));
        this.Veterinarians = element(by.xpath("//*[@class='nav navbar-nav']/li[3]/a"));
        this.PetTypes = element(by.xpath("//*[@class='nav navbar-nav']/li[4]/a"));
        this.Specialties = element(by.xpath("//*[@class='nav navbar-nav']/li[5]/a"));
    }


}