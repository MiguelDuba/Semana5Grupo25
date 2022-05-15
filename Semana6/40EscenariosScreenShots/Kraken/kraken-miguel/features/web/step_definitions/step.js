const { Given, When, Then } = require('@cucumber/cucumber');
let dir = "screenshots"

When('I enter email {string}', async function (email) {
    let element = await this.driver.$('#ember7');
    return await element.setValue(email);
});

When('I enter password {string}', async function (password) {
    let element = await this.driver.$('#ember9');
    return await element.setValue(password);
});

When('I click next', async function() {
    let element = await this.driver.$('#ember11');
    return await element.click();
})

Then('I click on Pages', async function () {
    let element = await this.driver.$('#ember28');
    return await element.click();
});

Then('I click on New Page', async function () {
    let element = await this.driver.$('.gh-btn.gh-btn-primary');
    return await element.click();
});

When('I enter title {string}', function (string) {
    let element = this.driver.$('textarea');
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
    let element = await this.driver.$('.gh-editor-back-button');
    return await element.click();
});

Then('I click on content', async function () {
    let element = await this.driver.$('.__mobiledoc-editor');
    return await element.click();
});

Then('I erase page title', async function () {
    let element = await this.driver.$('textarea');
    return await element.setValue('')
});

// When('I click on Tags', async function () {
//     let element = await this.driver.$('#ember12.ember-view');
//     return await element.click();
// });

Then('I click on New Tag', async function () {
    let element = await this.driver.$('.gh-btn-primary');
    return await element.click();
});

When('I enter name {string}', function (string) {
    let element = this.driver.$('#tag-name');
    return element.setValue(string);
});

Then('I click on save', async function () {
    let element = await this.driver.$('.gh-btn-primary');
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

// Editar Post
Then('I go to the post list', async function(){
    let element = await this.driver.$('a[href="#/posts/"]');
    return await element.click();
});

Then('I click in the first post of the list', async function(){
    let element = await this.driver.$('li.gh-posts-list-item');
    return await element.click();
});

Then('I click on Update', async function () {
    let element = await this.driver.$('.gh-publishmenu-trigger');
    return await element.click();
});

Then('I click on Update again', async function () {
    let element = await this.driver.$('.gh-publishmenu-button');
    return await element.click();
});

Then('I expect the title of the post change to {string}', async function(string){
    let element = await this.driver.$('.gh-content-entry-title');
    return string === element.getText();
});

Then('I expect return to the {string} page', async function(string){
    let element = this.driver.$('.gh-canvas-header-content');
    return string === element.getText();
});
// Miembros
Then('I go to the members list', async function(){
    let element = await this.driver.$('a[href="#/members/"]');
    return await element.click();
});
Then('I click on New Member', async function () {
    let element = await this.driver.$('.gh-btn-primary');
    return await element.click();
});
Then('I set member name {string}', async function(string){
    let element = await this.driver.$('#member-name');
    return await element.setValue(string)
});
Then('I set member email random', async function(){
    const number = Math.random() * (10000 - 1000) + 1000;
    let element = await this.driver.$('#member-email');
    let email = 'test' + number + '@test.com'
    return await element.setValue(email)
});
Then('I expect the title of the new member change to {string}', async function(string){
    let element = await this.driver.$('.gh-members-list-name');
    return string === element.getText();
});
Then('I select the first member', async function(){
    let element = await this.driver.$('.gh-list-data')
    return await element.click()
});

Then('I enter note {string}', async function(string){
    let element = await this.driver.$('#member-note')
    return await element.setValue(string)
});

Then('I expect to see the error message', async function(){
    let element = await this.driver.$('.gh-member-note.error')
    return await element
});

Then('I click leave', async function(){
    let element = await this.driver.$('.modal-footer button.gh-btn.gh-btn-red')
    return await element.click()
});

Then('I expect to the error message hidden', async function(){
    let element = await this.driver.$('#member-note.success')
    return element
});

When('I take a screenshot {string}', async function(string) {
    await this.driver.saveScreenshot(dir+string+'.png');
  });
