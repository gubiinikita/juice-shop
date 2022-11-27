///<reference types = "cypress"/>
import RegAuthPage from '../support/pages/RegAuthPage';

describe('empty spec', () => {
  it('Registration', () => {
    RegAuthPage.visit();
    RegAuthPage.fillUpRegistrationForm();
  })

  it('Auth', () => {
    RegAuthPage.fillUpAuthForm();
  })
})
