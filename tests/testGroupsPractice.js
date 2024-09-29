import { expect, test } from '@playwright/test';

test.describe('Test Group', () => {

  // create beforeEach for every test
  test.beforeEach(async({ page }) => {
    await page.goto('https://practice.cydeo.com/');
  });

  // create afterEach for every test
  test.afterEach(async ({ page }) => {
    
  });



  test("Getting the title of the page", async ({ page }) => {
    console.log(await page.title());

  });

  test("Getting the current URL of the page", async ({ page }) => {
    console.log(page.url());

  });

  

});