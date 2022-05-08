const { Given, When, Then } = require('@cucumber/cucumber');

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










