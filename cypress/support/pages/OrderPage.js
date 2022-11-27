///<reference types = "cypress"/>
import {faker} from '@faker-js/faker';
import { searchProductPageByPage } from '../../support/helper'

let data = {
    country: faker.address.country(),
    firstName: faker.name.firstName(),
    phone: faker.phone.number('501######'),
    address: faker.address.streetAddress(),
    city: faker.address.city(),
    zipCode: faker.address.zipCode('######'),
    card: faker.finance.creditCardNumber('4###############')
  }

class OrderPage {
    addProductToBasket(productName) {
        cy.log(`**Add ${productName} in basket**`);
        cy.contains('mat-card', ` ${productName} `).find('[aria-label="Add to Basket"]').click();
        cy.wait(500);
    }

    openBasket() {
        cy.log('**Open basket**');
        cy.get('[aria-label="Show the shopping cart"]').click();
        cy.get('[id="checkoutButton"]').click();
    }

    fillUpDeliveryData() {
        cy.log('**Fill up delivery data**');
        cy.get('[aria-label="Add a new address"]').click();
        cy.get('[placeholder="Please provide a country."]').type(data.country);
        cy.get('[placeholder="Please provide a name."]').type(data.firstName);
        cy.get('[placeholder="Please provide a mobile number."]').type(data.phone);
        cy.get('[placeholder="Please provide a ZIP code."]').type(data.zipCode);
        cy.get('[id="address"]').type(data.address);
        cy.get('[placeholder="Please provide a city."]').type(data.city);
        cy.log('**Confirm delivery data**');
        cy.get('[id="submitButton"]').click();
    }

    chooseDeliveryAddress() {
        cy.log('**Choose delivery address**');
        cy.contains('mat-row', ` ${data.address}, ${data.city}, , ${data.zipCode} `).find('[class="mat-radio-inner-circle"]').click();
        cy.get('[aria-label="Proceed to payment selection"]').click();
    }
    
    chooseDeliveryOption() {
        cy.log('**Choose delivery option**');
        cy.contains('mat-row', ' Fast Delivery').find('[class="mat-radio-container"]').click();
        cy.get('[aria-label="Proceed to delivery method selection"]').click();
    }

    addNewCard() {
        cy.log('**Add new credit card**');
        cy.contains(' Add new card ').click();
        cy.contains('mat-form-field', 'Name').click().type(data.firstName);
        cy.contains('mat-form-field', 'Card Number').click().type(data.card);
        cy.get('select').eq(0).select('2');
        cy.get('select').eq(1).select('2090');
        cy.log('**Confirm new credit card**');
        cy.get('[id="submitButton"]').click();
    }
    
    finishPurchase() {
        cy.log('**Finish purchase**');
        cy.contains('mat-row', `${data.firstName}`).find('[class="mat-radio-container"]').click();
        cy.get('[aria-label="Proceed to review"]').click();
        cy.get('[aria-label="Complete your purchase"]').click();
    }

    searchProductPageByPage(productName) {
        cy.log(`**Search ${productName} page by page**`);
        searchProductPageByPage(` ${productName} `);
        cy.wait(500);
    }
}
export default new OrderPage();
