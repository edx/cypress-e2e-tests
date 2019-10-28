export class EnterpriseDashboard {
  getLogoAltAttributes(logoContainer: string, attributeName: string, logoType: string = '/') {
    // This function takes parent container name, logo type and attribute name
    // as parameter and return attribute value
    return cy.get(logoContainer).find(`a[href="${logoType}"]>img`).invoke('attr', attributeName)
  }

  getFooterNavItems() {
    return cy.get('footer .nav-item .nav-link')
  }

  getCardText(cardSequenceNumber: number) {
    return cy.get(`:nth-child(${cardSequenceNumber})>.number-card .card-text`)
  }

  getCardTitle(cardSequenceNumber: number) {
    return cy.get(`:nth-child(${cardSequenceNumber})>.number-card .card-title>span:nth-child(1)`)
  }

  getCardQuestions(cardSequenceNumber: number) {
    return cy.get(`:nth-child(${cardSequenceNumber})>.number-card .card-footer .d-flex .label`)
  }

  getTableTitle() {
    return cy.get('.table-title')
  }

  getTableHeaders(tableName: string) {
    return cy.get(`.${tableName} .table thead .btn-header>span`)
  }

  getEmptyTableWarning() {
    return cy.get('.alert-warning .message')
  }

  getSpecificTableHeader(tableName: string, columnNumber: number) {
    return cy.get(`.${tableName} .table thead th:nth-child(${columnNumber}) .btn-header>span`)
  }

  openCardDetailedBreakdownArea(cardSequenceNumber: number) {
    cy.get(`:nth-child(${cardSequenceNumber})>.number-card .footer-title>.toggle-collapse`)
      .should('have.attr', 'aria-expanded', 'false')
      .click()
      .should('have.attr', 'aria-expanded', 'true')
  }

  clickCardDetailedBreakdownQuestion(cardSequenceNumber: number, questionText: string | number | RegExp) {
    return cy.get(`:nth-child(${cardSequenceNumber})>.number-card .card-footer .d-flex .label`)
      .contains(questionText)
      .click()
  }

  resetTable() {
    cy.get('.reset.btn').click()
  }
}

// export default EnterpriseDashboard