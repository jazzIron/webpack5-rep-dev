export {}; // isolatedModules option error 처리

describe('sample', () => {
  it('finds the content "hello"', () => {
    cy.visit('/');
    cy.contains('hello');
  });
});
