describe("Test on post  4.43", () => {
  let dir = "";
  beforeEach(() => {
    cy.visit("http://localhost:2368/ghost/#signin");
    cy.wait(1500);

    //And I sign in
    cy.get("form").within(() => {
      cy.get("#ember7").type("test@test.com");
      cy.get("#ember9").type("12345678910");
      cy.get("#ember11").click();
    });
    cy.wait(1500);
  });

  it("Create post", () => {
    let scenario = "/create-post-";
    let index = 0;

    cy.visit("http://localhost:2368/ghost/#/posts");
    cy.wait(1500);
    index++;
    cy.screenshot(dir + scenario + index);

    cy.get("li.gh-posts-list-item").then((before) => {
      index++;
      cy.screenshot(dir + scenario + index);

      cy.get(".gh-nav-new-post").click();
      cy.wait(1500);
      index++;
      cy.screenshot(dir + scenario + index);

      cy.get("textarea").type("Test para crear post");
      index++;
      cy.screenshot(dir + scenario + index);

      cy.get("article").click();
      cy.wait(1500);
      index++;
      cy.screenshot(dir + scenario + index);

      cy.get(".ember-basic-dropdown-trigger").click();
      index++;
      cy.screenshot(dir + scenario + index);

      cy.get(".gh-publishmenu-button").click();
      index++;
      cy.screenshot(dir + scenario + index);

      cy.get(".epm-modal-container").get(".gh-btn-black").click();

      cy.get(".gh-editor-back-button").click();
      index++;
      cy.screenshot(dir + scenario + index);

      cy.get("li.gh-posts-list-item").then((after) =>
        expect(after.length).to.equal(before.length + 1)
      );
      index++;
      cy.screenshot(dir + scenario + index);
    });
  });

  it("Editar post", () => {
    cy.visit("http://localhost:2368/ghost/#/posts");
    cy.wait(1500);
    index++;
    cy.screenshot(dir + scenario + index);

    cy.get("li.gh-posts-list-item").then((before) => {
      index++;
      cy.screenshot(dir + scenario + index);
      cy.get("li.gh-posts-list-item").first().click();
      cy.wait(1500);
      index++;
      cy.screenshot(dir + scenario + index);

      cy.get("textarea").type("Test para editar un post");
      index++;
      cy.screenshot(dir + scenario + index);

      cy.get("article").click();
      cy.wait(1500);
      index++;
      cy.screenshot(dir + scenario + index);

      cy.get(".ember-basic-dropdown-trigger").click();
      index++;
      cy.screenshot(dir + scenario + index);

      cy.get(".gh-publishmenu-button").click();
      cy.wait(1500);
      index++;
      cy.screenshot(dir + scenario + index);

      cy.get("body").type("{esc}");

      cy.get(".gh-editor-back-button").click();
      index++;
      cy.screenshot(dir + scenario + index);

      cy.get("li.gh-posts-list-item").then((after) =>
        expect(after.length).to.equal(before.length)
      );
      index++;
      cy.screenshot(dir + scenario + index);
    });
  });

  it("Regresar evitando guardar un post editado", () => {
    cy.visit("http://localhost:2368/ghost/#/posts");
    cy.wait(1500);
    index++;
    cy.screenshot(dir + scenario + index);

    cy.get("li.gh-posts-list-item").first().click();
    index++;
    cy.screenshot(dir + scenario + index);

    cy.get("textarea").clear();
    index++;
    cy.screenshot(dir + scenario + index);

    cy.get("article").click();
    index++;
    cy.screenshot(dir + scenario + index);

    cy.go("back");
    index++;
    cy.screenshot(dir + scenario + index);

    cy.wait(1500);

    cy.url().should("eq", "http://localhost:2368/ghost/#/posts");
    index++;
    cy.screenshot(dir + scenario + index);
  });
});
