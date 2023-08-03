describe("General Usage", () => {
  it("Should initially show loading skeletons when there's no data", () => {
    cy.visit("http://localhost:3000");
    cy.get('[data-cy="skeleton-time"]').get('[data-cy="skeleton-metrics"]');
  });
  it("Should hide loading skeletons when there is data", () => {
    cy.visit("http://localhost:3000");
    cy.get('[data-cy="skeleton-time"]').should("not.exist");
    cy.get('[data-cy="skeleton-metrics"]').should("not.exist");
  });
});
