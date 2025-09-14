describe('Select 컴포넌트', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
  });

  it('Select 컴포넌트를 불러온다.', () => {
    cy.get('select').should('exist');
  });

  it('매개변수가 없을 때 기본값 "선택"을 출력한다.', () => {
    cy.get('select option').should('contain.text', '선택');
  });
});
