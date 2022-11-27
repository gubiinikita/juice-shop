///<reference types = "cypress"/>
import { faker } from '@faker-js/faker';

let data = {
  feedbackText: faker.hacker.phrase()
}

class FeedBackPage {
  visit() {
    cy.log(`**Open feedback page**`);
    cy.visit('http://juice-shop-sanitarskyi.herokuapp.com/#/contact');
    cy.get('[aria-label="Close Welcome Banner"]').click();
  }

  fillUpFeedbackForm() {
    cy.log(`**Fill up feedback form with message "${data.feedbackText}" and rating 4**`);
    cy.get('[id="comment"]').type(data.feedbackText);
    cy.get('[id="rating"]').type('{rightArrow}{rightArrow}{leftArrow}')
    cy.get('[aria-label="Slider for selecting the star rating"]').should('contain', '4')
  }

  resolveCaptchaAndSendForm() {
    cy.log(`**Resolve captcha and send feedback**`);
    cy.get('[id="captcha"]').then(function ($elem) {
      cy.log($elem.text());
      let answer = eval($elem.text());
      cy.log(`**Captcha answer is ${answer}**`);
      cy.get('[id="captchaControl"]').type(answer);
      cy.get('[id="submitButton"]').click();
    })
  }

}
export default new FeedBackPage();