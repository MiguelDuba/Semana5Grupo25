const { Given, When, Then } = require('@cucumber/cucumber');
let dir = "screenshots"

When('I enter email {string}', async function (email) {
    let element = await this.driver.$('input[name="identification"]');
    return await element.setValue(email);
});

When('I enter password {string}', async function (password) {
    let element = await this.driver.$('input[name="password"]');
    return await element.setValue(password);
});

When('I click next', async function() {
    let element = await this.driver.$('.login.gh-btn');
    return await element.click();
})

Then('I click on Pages', async function () {
    let element = await this.driver.$('a[href="#/pages/"]');
    return await element.click();
});

Then('I click on New Page', async function () {
    let element = await this.driver.$('a[href="#/editor/page/"]');
    return await element.click();
});

When('I enter title {string}', function (string) {
    let element = this.driver.$('textarea.gh-editor-title');
    return element.setValue(string);
});

When('I enter content {string}', function (string) {
    let element = this.driver.$('.__mobiledoc-editor');
    return element.setValue(string);
});

Then('I click on Publish', async function () {
    let element = await this.driver.$('.gh-publishmenu-trigger');
    return await element.click();
});


Then('I click on Ready to Publish', async function () {
    let element = await this.driver.$('.gh-publishmenu-button');
    return await element.click();
});

When('I click button to return', async function() {
    let element = await this.driver.$('.gh-editor-back-button');
    return await element.click();
})

Then('I click on return', async function () {
    let element = await this.driver.$('a[href="#/pages/"]');
    return await element.click();
});

Then('I click on content', async function () {
    let element = await this.driver.$('.__mobiledoc-editor');
    return await element.click();
});

Then('I erase page title', async function () {
    let element = await this.driver.$('textarea.gh-editor-title');
    return await element.setValue('')
});


Then('I click on New Tag', async function () {
    let element = await this.driver.$('a[href="#/tags/new/"]');
    return await element.click();
});

When('I enter name {string}', function (string) {
    let element = this.driver.$('#tag-name');
    return element.setValue(string);
});

Then('I click on save primary', async function () {
    let element = await this.driver.$('.gh-btn-primary');
    return await element.click();
});

Then('I click on save blue', async function () {
    let element = await this.driver.$('.gh-btn-blue');
    return await element.click();
});

Then('I click on Edit Tag', async function () {
    let element = await this.driver.$('.gh-tag-list-name');
    return await element.click();
});

Then('I erase Tag name', async function () {
    let element = await this.driver.$('#tag-name');
    return await element.setValue('')
});

When('I take a screenshot {string}', async function(string) {
    await this.driver.saveScreenshot(dir+string+'.png');
  });

When('I go to pages list', async function() {
    let element = await this.driver.$('a[href="#/pages/"]');
    return await element.click();
});

When('I click on a created page', async function() {
    let element = await this.driver.$('.gh-list>li:nth-child(2)>a:nth-child(1)');
    return await element.click();
});

When('I click on the page content', async function() {
    let element = await this.driver.$('p');
    return await element.click();
});

When('I enter content N {string}', function (string) {
    let element = this.driver.$('p');
    return element.setValue(string);
});

When('I click button to return to the pages list', async function() {
    let element = await this.driver.$('a[href="#/pages/"]');
    return await element.click();
});

When('I confirm to leave the page', async function () {
    let element = await this.driver.$('.gh-btn-red');
    return await element.click();
});

When('I expect to return to pages list', async function () {
    let element = await this.driver.$('a[href="#/pages/"]');
    return await await element.waitForExist(2000);
});

//cambiar contraseña feature

When('I click user icon', async function() {
    let element = await this.driver.$('.gh-user-avatar');
    return await element.click();
})

When('I go to user profile', async function() {
    let element = await this.driver.$('.dropdown-triangle-top>li:nth-child(4)');
    return await element.click();
})

When('I enter old password {string}', function(string) {
    let element = this.driver.$('#user-password-old');
    return element.setValue(string);
})

When('I enter new password {string}', function(string) {
    let element = this.driver.$('#user-password-new');
    return element.setValue(string);
})

When('I confirm new password {string}', function(string) {
    let element = this.driver.$('#user-new-password-verification');
    return element.setValue(string);
})

When('I click Change Password button', async function() {
    let element = await this.driver.$('.button-change-password');
    return await element.click();
})

When('I close notification message', async function() {
    let element = await this.driver.$('.gh-notification-close');
    return await element.click();
})

When('I log out', async function() {
    let element = await this.driver.$('.user-menu-signout');
    return await element.click();
})

When('I expect to not be able to save the new password', async function() {
    let element = await this.driver.$('.error>.response');
    return await element.waitForExist(2000);
  });

  // post

  Then('I click on new post', async function () {
    let element = await this.driver.$('#ember29');
    return await element.click();
});

Then('I click on new post2', async function () {
    let element = await this.driver.$('#ember27');
    return await element.click();
});

Then('I click on Post Title', async function () {
    let element = await this.driver.$('textarea');
    return await element.click();
});

Then('I click on Post boddy', async function () {
    let element = await this.driver.$('article');
    return await element.click();
});

Then('I click on publish', async function () {
    let element = await this.driver.$('.gh-publishmenu-trigger');
    return await element.click();
});
// Then('I click on publish21', async function () {
//     let element = await this.driver.$('#ember86');
//     return await element.click();
// });


Then('I click on publish2', async function () {
    let element = await this.driver.$('.gh-publishmenu-button');
    return await element.click();
});
// Then('I click on publish22', async function () {
//     let element = await this.driver.$('#ember96');
//     return await element.click();
// });


Then('I click on publish3', async function () {
    let element = await this.driver.$('.gh-btn-black');
    return await element.click();
});

Then('I click on post', async function () {
    let element = await this.driver.$('a[href="#/posts/"]');
    return await element.click();
});
// Then('I click on post2', async function () {
//     let element = await this.driver.$('a[href="#/posts/"]');
//     return await element.click();
// });

Then('I expect to return to post list', async function () {
    let element = await this.driver.$('.gh-btn-green');
    return await await element.waitForExist(2000);
});

Then('I expect to return to post list2', async function () {
    let element = await this.driver.$('.gh-btn-primary');
    return await await element.waitForExist(2000);
});

// Editar Post
Then('I go to the post list', async function(){
    let element = await this.driver.$('a[href="#/posts/"]');
    return await element.click();
});

Then('I click in the first post of the list', async function(){
    let element = await this.driver.$('li.gh-posts-list-item');
    return await element.click();
});

// When('I enter title {string}', function (string) {
//     let element = this.driver.$('textarea');
//     return element.setValue(string);
// });

Then('I expect the title of the post change to {string}', async function(string){
    let element = await this.driver.$('.gh-content-entry-title');
    return string === element.getText();
});

Then('I expect return to the {string} page', async function(string){
    let element = this.driver.$('.gh-canvas-title .active.ember-view');
    return string === element.getText();
});

Then('I expect return to the {string} page2', async function(string){
    let element = this.driver.$('.gh-canvas-header-content');
    return string === element.getText();
});

When('I click button to return1', async function() {
    let element = await this.driver.$('.blue.link.fw4.flex.items-center.ember-view');
    return await element.click();
})

When('I click button to return2', async function() {
    let element = await this.driver.$('.gh-editor-back-button');
    return await element.click();
})
  







