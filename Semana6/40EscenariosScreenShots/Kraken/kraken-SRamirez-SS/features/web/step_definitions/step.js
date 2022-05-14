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

//editar página feature

When('I go to pages list', async function() {
    let element = await this.driver.$('a[href="#/pages/"]');
    return await element.click();
})

When('I click New page button', async function() {
    let element = await this.driver.$('a[href="#/editor/page/"]');
    return await element.click();
})

When('I enter title {string}', function (string) {
    let element = this.driver.$('textarea');
    return element.setValue(string);
});

When('I click outside the page content', async function() {
    let element = await this.driver.$('header');
    return await element.click();
})

When('I click Publish', async function() {
    let element = await this.driver.$('.gh-publishmenu-trigger');
    return await element.click();
})

When('I confirm Publish', async function() {
    let element = await this.driver.$('.gh-publishmenu-button');
    return await element.click();
})

When('I click button to return to the pages list', async function() {
    let element = await this.driver.$('a[href="#/pages/"]');
    return await element.click();
})

When('I click on a created page', async function() {
    let element = await this.driver.$('.gh-list>li:nth-child(2)>a:nth-child(1)');
    return await element.click();
})

When('I click on the page content', async function() {
    let element = await this.driver.$('p');
    return await element.click();
})

When('I enter content {string}', function (string) {
    let element = this.driver.$('p');
    return element.setValue(string);
});

When('I confirm to leave the page', async function () {
    let element = await this.driver.$('.gh-btn-red');
    return await element.click();
});

When('I expect to return to pages list', async function () {
    let element = await this.driver.$('.gh-list');
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

//toma screenshots

When('I take a screenshot {string}', async function(string) {
    await this.driver.saveScreenshot(dir+string+'.png');
  });









