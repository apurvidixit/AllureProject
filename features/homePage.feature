Feature: User going to validate Petclinic Application homepage

    Scenario: Verify User able to see Five menus on homepage
        Given User is on Petclinic home page
        Then Five menus should be displayed as Home,Owners,Veterinarians,Pet Types and Specialties

    Scenario: Verify sub-menus like ALL and ADD NEW on Owners tab
        Given User is on Petclinic home page
        When User clicks on owners tab
        Then ALL and ADD NEW owners sub-menus should be displayed
