"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomePageObjects = void 0;
const protractor_1 = require("protractor");
class HomePageObjects {
    constructor() {
        this.HomeMenu = protractor_1.element(protractor_1.by.xpath("//*[@class='nav navbar-nav']/li[1]/a"));
        this.Owners = protractor_1.element(protractor_1.by.xpath("//*[@class='nav navbar-nav']/li[2]/a"));
        this.Veterinarians = protractor_1.element(protractor_1.by.xpath("//*[@class='nav navbar-nav']/li[3]/a"));
        this.PetTypes = protractor_1.element(protractor_1.by.xpath("//*[@class='nav navbar-nav']/li[4]/a"));
        this.Specialties = protractor_1.element(protractor_1.by.xpath("//*[@class='nav navbar-nav']/li[5]/a"));
    }
}
exports.HomePageObjects = HomePageObjects;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSG9tZVBhZ2VPYmplY3RzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdHMvSG9tZVBhZ2VPYmplY3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUE0RTtBQUc1RSxNQUFhLGVBQWU7SUFPeEI7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDLENBQUM7UUFDMUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsc0NBQXNDLENBQUMsQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxhQUFhLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHNDQUFzQyxDQUFDLENBQUMsQ0FBQztRQUMvRSxJQUFJLENBQUMsUUFBUSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDLENBQUM7UUFDMUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsc0NBQXNDLENBQUMsQ0FBQyxDQUFDO0lBQ2pGLENBQUM7Q0FHSjtBQWhCRCwwQ0FnQkMifQ==