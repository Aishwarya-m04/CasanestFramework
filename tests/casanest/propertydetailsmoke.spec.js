import { test, expect } from '@playwright/test';
import casaurl from "../../testData/casaurl.json"

test('Verify property details page @smoke', async ({ page }) => {

    let Buyurl=casaurl.buyurl
    await page.goto(Buyurl)

    //click first property card
    // await page.locator("//div[@class='listing-grid']").first().click()
    await page.locator("//img[@alt='3-bedroom villa for sale in Lisboa']").click()
    await page.waitForTimeout(3000)

    //to verify page loaded
   let newurl= await page.url()
   await console.log(newurl);
   await expect(page).toHaveURL(newurl)
   
   //to verify property deatails
   let title=await page.title()
   await console.log(title);
   await expect(page).toHaveTitle(title)

   await expect(page.getByText('Type', { exact: true })).toBeVisible();
await expect(page.getByText('Villa', { exact: true })).toBeVisible();

await expect(page.getByText('Gross area', { exact: true }))
    .toBeVisible();
await expect(page.getByText('308 m²', { exact: true }))
    .toBeVisible();

await expect(page.getByText('Condition', { exact: true }))
    .toBeVisible();
await expect(page.getByText('Resale', { exact: true }))
    .toBeVisible();
   
})