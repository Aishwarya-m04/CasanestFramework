import { test, expect } from '@playwright/test';
import buypage from '../../PageObjectModel/casanest/casabuypage.page';
import casaurl from "../../testData/casaurl.json"
test("CN_INT_009 - Verify properties are sorted by lowest price @integration", async ({ page }) => {

    let Buyurl=casaurl.buyurl
    let Buypage=new buypage(page)
    // Open Buy page
    await page.goto(Buyurl);

    // Select price: lowest first
    await Buypage.sortDD.selectOption({
        label: "Price: lowest first"
    });

   // Locate the individual property cards
    
    const propertyCards = page.locator(".prop-card");

    // Wait for the first property to be visible
    await expect(propertyCards.first()).toBeVisible();

    // Store all displayed prices
   const prices = [];
const count = await propertyCards.count();

for (let i = 0; i < count; i++) {
    const card = propertyCards.nth(i);

    const priceText = await card.locator(".prop-price").innerText();

    const price = Number(
        priceText.replace("€", "").replaceAll(",", "").trim()
    );

    console.log(`Property ${i + 1}: ${priceText} => ${price}`);

    prices.push(price);
}
})