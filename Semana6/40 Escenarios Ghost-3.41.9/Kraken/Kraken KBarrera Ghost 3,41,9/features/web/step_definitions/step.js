const { Given, When, Then } = require('@cucumber/cucumber');
let dir= "screenshots"
When ('I enter email {string}', async function (email){
    let element = await this.driver.$('#ember8');
    return await element.setValue(email);
});

When ('I enter password {string}', async function(password){
    let element = await this.driver.$('#ember10');
    return await element.setValue(password);
});

When('I click next', async function() {
    let element = await this.driver.$('#ember12');
    return await element.click();
})
Then('I click on new post', async function () {
    let element = await this.driver.$('#ember29');
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
Then('I click on publish2', async function () {
    let element = await this.driver.$('.gh-publishmenu-button');
    return await element.click();
});
Then('I click on publish3', async function () {
    let element = await this.driver.$('#ember98');
    return await element.click();
});

Then('I expect to return to post list', async function () {
    let element = await this.driver.$('.gh-btn-green');
    return await await element.waitForExist(2000);
});

Then('I click on post', async function () {
    let element = await this.driver.$('#ember76');
    return await element.click();
});
Then('I erase post title', async function () {
    let element = await this.driver.$('textarea');
    return await element.setValue('')
});
Then('I expect to not be able to post', async function() {
    let element = await this.driver.$('.error>.response');
    return await element.waitForExist(2000);
  });



Then('I click tags', async function () {
    let element = await this.driver.$('#ember38');
    return await element.click()
});
Then('I click on new Tag', async function () {
    let element = await this.driver.$('.gh-btn-green');
    return await element.click();
});
Then('I click on save', async function () {
    let element = await this.driver.$('.gh-btn-icon');
    return await element.click();
});
Then('I click on tagname', async function () {
    let element = await this.driver.$('#tag-name');
    return await element.click();
});
Then('I click on article', async function () {
    let element = await this.driver.$('textarea');
    return await element.click();
});

Then('I expect to have the leave button', async function () {
    let element = await this.driver.$('//button/span[text()="Leave"]');
    return await element.waitForExist(2000);
});

Then('I click on tagslug', async function () {
    let element = await this.driver.$('#tag-slug');
    return await element.click();
});



Then('I expect to be able to see tag list', async function() {
    let element = await this.driver.$('.gh-btn-green');
    return await element.waitForExist(2000);
});

Then('I expect to be able to see new tag', async function() {
    let element = await this.driver.$('//section/ol/li//h3[text()="Tag_conError_Para_Busqueda"]//ancestor::li');
    return await element.waitForExist(2000);
});

Then ('I take a screenshot {string}', async function(string){
    await this.driver.saveScreenshot(dir+string+'.png');
});