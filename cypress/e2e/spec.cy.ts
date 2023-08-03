describe("General Usage", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.injectAxe();
  });
  it("Should be fully accessible", () => {
    cy.checkA11y();
  });

  it("Should initially show loading skeletons when there's no data", () => {
    cy.get('[data-cy="skeleton-time"]').get('[data-cy="skeleton-metrics"]');
  });
  it("Should hide loading skeletons when there is data", () => {
    cy.get('[data-cy="skeleton-time"]').should("not.exist");
    cy.get('[data-cy="skeleton-metrics"]').should("not.exist");
  });
});
