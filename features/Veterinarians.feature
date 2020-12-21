Feature: Veterinarians
    # @smoke
    Scenario: Verify User will able to navigate to Petclinic application Veterinarians
        Given User will navigate to Petclinic url
        Then User should able to see Welcome to Petclinic message
        And User should able to see title of the webpage
        And User should navigate to Veterinarians add user

    # @smoke
    Scenario: Verify User will able to see First Name attribute in Veterinarians
        Given User is on Veterinarians
        Then User should able to see First Name

# @smoke
# Scenario: Verify User will able to see Last Name attribute in Veterinarians
#     Given User is on Veterinarians
#     Then User should able to see Last Name

# Scenario: Verify User will able to see Type attribute in Veterinarians
#     Given User is on Veterinarians
#     Then User should able to see Type

# Scenario: Verify User will able to see Back attribute in Veterinarians
#     Given User is on Veterinarians
#     Then User should able to see Back

# Scenario: Verify User will able to see Save Vet attribute in Veterinarians
#     Given User is on Veterinarians
#     Then User should able to see Save Vet

