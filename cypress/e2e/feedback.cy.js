///<reference types = "cypress"/>
import FeedbackPage from '../support/pages/FeedbackPage';

it('Feedback form', () => {
    FeedbackPage.visit();
    FeedbackPage.fillUpFeedbackForm();
    FeedbackPage.resolveCaptchaAndSendForm();
})