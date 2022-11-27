///<reference types = "cypress"/>
import {faker} from '@faker-js/faker';

let user = {
    email: faker.internet.email(),
    password: faker.internet.password(15),
    securityAnswer: faker.animal.bear()
  }

class RegAuthPage {
    visit() {
        cy.log('**Open sign up page**');
        cy.visit('http://juice-shop-sanitarskyi.herokuapp.com');
        cy.get('[aria-label="Close Welcome Banner"]').click();
        cy.get('[aria-label="Show/hide account menu"]').click();
        cy.get('button[aria-label="Go to login page"]').click();
    }

    fillUpRegistrationForm() {
        cy.get('[href="#/register"]').click();
        cy.log('**Fill up registration form**');
        cy.get('[aria-label="Email address field"]').type(user.email);
        cy.get('[aria-label="Field for the password"]').type(user.password);
        cy.get('[aria-label="Field to confirm the password"]').type(user.password);
        cy.get('[class*="mat-select-placeholder"]').click();
        cy.contains('mat-option', " Mother's maiden name? ").click();
        cy.get('[aria-label="Field for the answer to the security question"]').type(user.securityAnswer);
        cy.log('**Confirm registration form**');
        cy.get('[aria-label="Button to complete the registration"]').click();
    }

    fillUpAuthForm(){
        cy.log('**Fill up auth form**');
        cy.get('[aria-label="Text field for the login email"]').type(user.email);
        cy.get('[aria-label="Text field for the login password"]').type(user.password);
        cy.log('**Confirm auth form**');
        cy.get('[aria-label="Login"]').click();
    }
}
export default new RegAuthPage();