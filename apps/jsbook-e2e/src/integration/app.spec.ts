import { getGreeting } from '../support/app.po';

describe('jsbook', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to jsbook!');
  });
});
