
import { test, expect } from "@playwright/test";
import buypage from "../../PageObjectModel/casanest/casabuypage.page";
import casaurl from "../../testData/casaurl.json"

test("Verify property prices are sorted low to high ",{tag:"@integration"}, async ({ page }) => {

    let Buypage = new buypage(page);
    let Buyurl=casaurl.buyurl
    // Step 1: Open Buy page
    await page.goto(Buyurl);

    // Step 2: Select price low to high
    await page.waitForTimeout(2000)
    await Buypage.sortDD.selectOption({ label: "Price: lowest first" });

    // Step 3: Wait for property listings
    await page.waitForTimeout(2000)
    await expect(Buypage.propertycard.first()).toBeVisible();

    // Step 4: Read displayed property prices
    await page.waitForTimeout(2000)
    let prices = await page.locator("span.prop-price").allInnerTexts();

    console.log("Displayed prices:", prices);

    // Step 5: Convert prices into numbers
    let numericPrices = prices.map(price =>
        Number(price.replace(/[^\d]/g, ""))
    );

    // Step 6: Verify ascending order
    await page.waitForTimeout(2000)
    let sortedPrices = [...numericPrices].sort((a, b) => a - b);    //The spread operator (...) copies the elements of the array into a new array.

    expect(numericPrices).toEqual(sortedPrices);
});
