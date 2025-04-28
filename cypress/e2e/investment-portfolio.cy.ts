describe("Investment Portfolio", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should load the portfolio page with wallets", () => {
    cy.get("h1").contains("Investment Portfolio");
    cy.get('[data-testid="wallet-card"]').should("have.length.at.least", 1);
  });

  it("should show wallet details correctly", () => {
    cy.get('[data-testid="wallet-card"]')
      .first()
      .within(() => {
        cy.get('[data-testid="wallet-name"]').should("exist");
        cy.get('[data-testid="wallet-amount"]').should("exist");
        cy.get('[data-testid="wallet-spent"]').should("exist");
      });
  });

  it("should display assets table with 4 rows when selecting first wallet", () => {
    cy.get('[data-testid="wallet-card"]').first().click();
    cy.get('[data-testid="asset-table"]').should("be.visible");
    cy.get('[data-testid="asset-row"]').should("have.length", 4);
  });

  it("should toggle theme", () => {
    cy.get("html").should("have.class", "dark");
    cy.get('[data-testid="theme-toggle"]').click();
    cy.get("html").should("not.have.class", "dark");
  });
});
