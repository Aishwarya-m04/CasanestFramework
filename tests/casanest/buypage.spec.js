import { test,expect } from "../../fixtures/casanestfixture.js";
// import homepage from "../../PageObjectModel/casanest/casahomepage.page"
// import buypage from "../../PageObjectModel/casanest/casabuypage.page"
import casaurl from "../../testData/casaurl.json"

test("buy property @smoke",async({buyPage,homePage,page})=>
    {
        // //navigate to home page
        // let Homepageurl=casaurl.homepageurl
        // let Homepage=new homepage(page)
        // let Buypage=new buypage(page)
        // await page.goto(Homepageurl)

        //click on buy link
        await homePage.buylink.click()
        await page.waitForTimeout(2000)

        //enter min and max price
        await buyPage.pricefromtextfield.fill("120000")
        await buyPage.pricetotextfield.fill("400000")
        //click on apply button
        await buyPage.applybutton.click()
         await page.waitForTimeout(2000)

    })

    test("CN_INT_009 - Verify properties are sorted by lowest price @integration", async({ buyPage}) => {

    // let Buyurl=casaurl.buyurl
    //let Buypage=new buypage(page)
    // // Open Buy page
    // await page.goto(Buyurl);

    // Select price: lowest first
    await buyPage.sortDD.selectOption({
        label: "Price: lowest first"
    });

   // Locate the individual property cards
    
    const propertyCards = buyPage.propertycard

    // Wait for the first property to be visible
    //await page.waitForTimeout(2000)
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

test("CN_SYS_001 - Verify property details are displayed correctly @system", async ({ buyPage,page }) => {

    // let Buypage=new buypage(page)
     let Buyurl=casaurl.buyurl
    // // Step 1: Open the CasaNest Buy page
    // await page.goto(Buyurl);

    // Step 2: Wait for property listings to appear
    const propertyCards = buyPage.propertycard
    await expect(propertyCards.first()).toBeVisible();

    // Step 3: Click the first property
    await propertyCards.first().click();

    // Step 4: Verify the property details page opens
    await expect(page).not.toHaveURL(Buyurl);

    // Step 5: Verify the property price is displayed
   // await page.waitForTimeout(2000)
    await expect((buyPage.propertycardprice).first()).toBeVisible();

    // Step 6: Verify the property location is displayed
    //await page.waitForTimeout(2000)
    await expect((buyPage.propertycardloc).first()).toBeVisible();

});


