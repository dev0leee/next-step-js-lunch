describe('Header 컴포넌트', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
  });

  it('Header 컴포넌트를 불러온다.', () => {
    cy.get('header').should('exist');
  });

  it('title을 출력한다.', () => {
    cy.get('header').should('contain', '점심 뭐 먹지');
  });

  it('버튼을 갖고 있는다.', () => {
    cy.get('header').find('button');
  });
});
