import { test,expect } from "@playwright/test";
import buypage from "../../PageObjectModel/casanest/casabuypage.page";
import casaurl from "../../testData/casaurl.json"
import { log } from "console";
test("Verify property listings based on district and municipality filters @system",async({page})=>
    {
        let Buyurl=casaurl.buyurl
        let Buypage=new buypage(page)
        await page.goto(Buyurl)

        // 1. Select district
        await Buypage.distictDD.selectOption({value:"lisboa"})

        await page.waitForTimeout(2000)

      // 2. Wait for the municipality dropdown to update
       await expect(Buypage.muncipaltyDD).toBeEnabled();

      // 3. Wait until Lisboa is available as an option
     await Buypage.muncipaltyDD.waitFor({state:"visible"})

        await page.waitForTimeout(2000)
      // 4. Select municipality
      await Buypage.muncipaltyDD.selectOption({ value: "lisboa" });

        await page.waitForTimeout(2000)
       // 5. Enter area
        await Buypage.areatextfield.fill("90")

        // 6. Click Apply
        await Buypage.applybutton.click()
        let properties=Buypage.propertycard
        await expect(properties.first()).toBeVisible()
        await properties.first().click()
        let propertyname=await page.locator(".detail-top")
        console.log(await propertyname.innerText());

         // Step 6: Get the property name
    
    const propertyName = page.locator("//h1[text()]").first();
    await expect(propertyName).toBeVisible();

    const name = (await propertyName.innerText()).trim();

    // Step 7: Get the property price
    // Replace with the actual price locator
    const propertyPrice = page.locator(".detail-price").first();
    await expect(propertyPrice).toBeVisible();

    const price = (await propertyPrice.innerText()).trim();

    // Step 8: Print the details in the terminal
    console.log('Property Name:', name);
    console.log('Property Price:', price);
        
     })