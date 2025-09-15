describe('음식점 리스트', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
  });

  it('음식점 목록이 존재한다.', () => {
    cy.get('.restaurant-list-container').should('exist');
  });

  it('음식점 목록이 없으면, 음식점이 존재하지 않습니다.를 출력한다.', () => {
    cy.get('.restaurant-list-empty').should('be.visible');
    cy.get('.restaurant-list-empty').should(
      'contain.text',
      '음식점이 존재하지 않습니다.',
    );
  });

  it('음식점 리스트가 있으면, 이름과 거리와 설명이 표시된다', () => {
    cy.get('.restaurant')
      .first()
      .within(() => {
        cy.get('.restaurant__name').should('be.visible');
        cy.get('.restaurant__distance').should('be.visible');
        cy.get('.restaurant__description').should('be.visible');
      });
  });
});
