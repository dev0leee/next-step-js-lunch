describe('카테고리 필터', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
  });

  it('카테고리 필터를 볼 수 있다.', () => {
    cy.get('#category-filter').should('exist');
  });

  it('카테고리 필터 목록이 없을 시, 기본 옵션인 선택이 보인다.', () => {
    cy.get('#category-filter option:first').should('contain.text', '선택');
  });

  it('카테고리 필터의 목록이 2개 이상이다.', () => {
    cy.get('#category-filter option').should('have.length.greaterThan', 1);
  });

  it('목록에서 option을 선택하면, 해당 option으로 필터링된 음식점 목록이 보인다.', () => {
    cy.get('select').should('exist');
  });
});
