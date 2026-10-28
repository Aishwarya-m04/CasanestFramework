import { expect, test } from "@playwright/test";
import buypage from "../../PageObjectModel/casanest/casabuypage.page";
import casaurl from "../../testData/casaurl.json"
test("property details @integration",async({page})=>
    {
        let Buyurl=casaurl.buyurl
        let Buypage=new buypage(page)
        await page.goto(Buyurl)

        // Store the current URL
    const previousURL = page.url();

        // Select the first property link
    const propertyCard = page.getByAltText("5-bedroom villa for sale in Caminha").first();

    // Click the property card
    await propertyCard.click();

    // Verify that the URL changes
    await expect(page).not.toHaveURL(previousURL);

// Verify that the property details page has loaded
    // await expect(page.getByText("5-bedroom villa for sale in Caminha")).toContainText("5-bedroom");
    
    await expect(page.locator("h1")).toBeVisible()
    })