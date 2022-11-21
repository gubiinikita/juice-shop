///<reference types = "cypress"/>

describe('empty spec', () => {
  it('Registration', () => {
    //мб скипнуть клики и регаться по урлу, а эти клики оставить для авторизации. хз
    cy.visit('http://juice-shop-sanitarskyi.herokuapp.com');
    cy.get('[aria-label="Close Welcome Banner"]').click();
    cy.get('[aria-label="Show/hide account menu"]').click();
    cy.get('button[aria-label="Go to login page"]').click();
    cy.get('[href="#/register"]').click();
    cy.get('[aria-label="Email address field"]').type('pap12@papa.com');
    cy.get('[aria-label="Field for the password"]').type('pwd123@Aa');
    cy.get('[aria-label="Field to confirm the password"]').type('pwd123@Aa');
    //добавить проверку подсказок для пароля
    cy.get('[class*="mat-select-placeholder"]').click();
    //добавить проверку содержимого дропдауна
    cy.contains('mat-option', " Mother's maiden name? ").click();
    cy.get('[aria-label="Field for the answer to the security question"]').type('Abema');
    cy.get('[aria-label="Button to complete the registration"]').click();
  })

  it.skip('Authorization', () => {
    //мб скипнуть клики и регаться по урлу, а эти клики оставить для авторизации. хз
    cy.visit('http://juice-shop-sanitarskyi.herokuapp.com');
    cy.get('[aria-label="Close Welcome Banner"]').click();
    cy.get('[aria-label="Show/hide account menu"]').click();
    cy.get('button[aria-label="Go to login page"]').click();
    cy.get('[aria-label="Text field for the login email"]').type('pap1@papa.com');
    cy.get('[aria-label="Text field for the login password"]').type('pwd123@Aa');
    cy.get('[aria-label="Login"]').click();
    // cy.get('[aria-label="Show/hide account menu"]').click(); добавить проверку, что в аккаунт меню именно мои логин и пасс
  })

  it.skip('Order', () => {
    cy.visit('http://juice-shop-sanitarskyi.herokuapp.com');
    cy.get('[aria-label="Close Welcome Banner"]').click();
    cy.get('[aria-label="Show/hide account menu"]').click();
    cy.get('button[aria-label="Go to login page"]').click();
    cy.get('[aria-label="Text field for the login email"]').type('pap1@papa.com');
    cy.get('[aria-label="Text field for the login password"]').type('pwd123@Aa');
    cy.get('[aria-label="Login"]').click();

    cy.contains('mat-card', ' Apple Juice (1000ml) ').find('[aria-label="Add to Basket"]').click();

    cy.get('[aria-label="Show the shopping cart"]').click();
    //тут можно проверять суммирование и пр
    cy.get('[id="checkoutButton"]').click();

    cy.get('[aria-label="Add a new address"]').click();
    cy.get('[placeholder="Please provide a country."]').type('Ukraine');
    cy.get('[placeholder="Please provide a name."]').type('Nikita');
    cy.get('[placeholder="Please provide a mobile number."]').type('066248306');
    cy.get('[placeholder="Please provide a ZIP code."]').type('65009');
    cy.get('[id="address"]').type('Fr blvd 60');
    cy.get('[placeholder="Please provide a city."]').type('Odesa');
    cy.get('[id="submitButton"]').click();

    cy.contains('mat-row', ' Fr blvd 60, Odesa, , 65009 ').find('[class="mat-radio-inner-circle"]').click();
    cy.get('[aria-label="Proceed to payment selection"]').click();

    // тут можно проверить правильность введенных данных
    cy.contains('mat-row', ' Fast Delivery').find('[class="mat-radio-container"]').click();
    cy.get('[aria-label="Proceed to delivery method selection"]').click();
    //payment
    cy.contains(' Add new card ').click();
    cy.contains('mat-form-field', 'Name').click().type('Nikita');
    cy.contains('mat-form-field', 'Card Number').click().type('4242424242424242');
   // cy.contains('select', 'Expiry Month').click();
    cy.get('select').eq(0).select('2');
    cy.get('select').eq(1).select('2090');
    cy.get('[id="submitButton"]').click();

    cy.contains('mat-row', 'Nikita').find('[class="mat-radio-container"]').click();
    cy.get('[aria-label="Proceed to review"]').click();
    cy.get('[aria-label="Complete your purchase"]').click();
  })



  //cy.get('[class="mat-card mat-focus-indicator mat-elevation-z6 ribbon-card"]').contains(" Apple Juice (1000ml) ").click(); - форма ОС
})