const cypress = require('cypress');

describe('End-to-End Tests', () => {
  it('Onboarding Flow', () => {
    cy.visit('/onboarding');
    cy.get('#signup').click();
    cy.get('#username').type('testUser');
    cy.get('#password').type('testPassword');
    cy.get('#signupButton').click();
    cy.url().should('include', '/discovery');
  });

  it('Discovery Flow', () => {
    cy.visit('/discovery');
    cy.get('#search').type('AI Product');
    cy.get('#searchButton').click();
    cy.contains('AI Product').click();
    cy.url().should('include', '/productPages');
  });

  it('Product Pages Flow', () => {
    cy.visit('/productPages');
    cy.get('#upvote').click();
    cy.get('#saveProduct').click();
    cy.get('#shareTab').click();
    cy.get('#shareEmail').type('test@example.com');
    cy.get('#sendEmail').click();
  });

  it('User Profile Flow', () => {
    cy.visit('/userProfile');
    cy.get('#notificationPreferences').click();
    cy.get('#emailNotifications').check();
    cy.get('#savePreferences').click();
  });

  it('Report Issue Flow', () => {
    cy.visit('/reportIssueTab');
    cy.get('#issueDescription').type('Test issue');
    cy.get('#submitIssue').click();
  });
});