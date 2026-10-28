import { test, expect } from '@playwright/test';
import casaurl from "../../testData/casaurl.json"
import buypage from '../../PageObjectModel/casanest/casabuypage.page';

test("CN_SYS_001 - Verify property details are displayed correctly @system", async ({ page }) => {

    let Buyurl=casaurl.buyurl
    let Buypage=new buypage(page)
    // Step 1: Open the CasaNest Buy page
    await page.goto(Buyurl);

    // Step 2: Wait for property listings to appear
    const propertyCards = Buypage.propertycard
    await expect(propertyCards.first()).toBeVisible();

    // Step 3: Click the first property
    await propertyCards.first().click();

    // Step 4: Verify the property details page opens
    await expect(page).not.toHaveURL(Buyurl);

    // Step 5: Verify the property price is displayed
    await expect((Buypage.propertycardprice).first()).toBeVisible();

    // Step 6: Verify the property location is displayed
    
    await expect((Buypage.propertycardloc).first()).toBeVisible();

});