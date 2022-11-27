///<reference types = "cypress"/>
import RegAuthPage from '../support/pages/RegAuthPage';
import OrderPage from '../support/pages/OrderPage';

describe('empty spec', () => {

    beforeEach(() => {
        RegAuthPage.visit();
        RegAuthPage.fillUpRegistrationForm();
        RegAuthPage.fillUpAuthForm();
    })

    it('Order', () => {
        OrderPage.addProductToBasket('Apple Juice (1000ml)');
        OrderPage.openBasket();
        OrderPage.fillUpDeliveryData();
        OrderPage.chooseDeliveryAddress();
        OrderPage.chooseDeliveryOption();
        OrderPage.addNewCard();
        OrderPage.finishPurchase();
    })
})
