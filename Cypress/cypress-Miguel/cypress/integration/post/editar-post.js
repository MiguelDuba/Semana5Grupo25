describe('Test on post ', () => {
  beforeEach(() => {
    cy.visit('http://localhost:2368/ghost/#signin')
    cy.wait(1500)

    //And I sign in
    cy.get('form').within(() => {
        cy.get('#ember7').type('test@test.com')
        cy.get('#ember9').type('12345678910')
        cy.get('#ember11').click()
    })
    cy.wait(1500)

  })

  it('Create post', () =>{

    cy.visit('http://localhost:2368/ghost/#/posts')
    cy.wait(1500)

    cy.get('li.gh-posts-list-item').then((before) => {
      
      cy.get('.gh-nav-new-post').click();
      cy.wait(1500)

      cy.get('textarea')
        .type('Test para crear post');

      cy.get('article').click();

      cy.wait(1500)
      
      cy.get('.ember-basic-dropdown-trigger')
      .click();

      cy.get('.gh-publishmenu-button')
      .click();

      cy.get('.epm-modal-container')
        .get('.gh-btn-black')
        .click();

      cy.get('.gh-editor-back-button').click();
      
      cy.get('li.gh-posts-list-item')
      .then(after => expect(after.length).to.equal(before.length + 1))
      
    });
  })

  it('Editar post', () =>{

    cy.visit('http://localhost:2368/ghost/#/posts')
    cy.wait(1500)

    cy.get('li.gh-posts-list-item').then((before) => {
      
      cy.get('li.gh-posts-list-item').first().click()
      
      cy.wait(1500)

      cy.get('textarea')
        .type('Test para editar un post');

      cy.get('article').click();

      cy.wait(1500)
      
      cy.get('.ember-basic-dropdown-trigger')
      .click();

      cy.get('.gh-publishmenu-button')
      .click();

      cy.wait(1500)

      cy.get('body').type('{esc}');

      cy.get('.gh-editor-back-button').click();
      
      cy.get('li.gh-posts-list-item')
      .then(after => expect(after.length).to.equal(before.length))
      
    });
  })

  it('Regresar evitando guardar un post editado', () => {
    cy.visit('http://localhost:2368/ghost/#/posts')
    cy.wait(1500)

    cy.get('li.gh-posts-list-item').first().click();

    cy.get('textarea')
        .clear();
    
    cy.get('article').click();

    cy.go('back')
    
    cy.wait(1500)

    cy.url().should('eq', 'http://localhost:2368/ghost/#/posts') 
  });
  
})