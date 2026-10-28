import { test,expect } from "@playwright/test";
import rentpage from "../../PageObjectModel/casanest/casarentpage.page"
import homepage from "../../PageObjectModel/casanest/casahomepage.page"
import casaurl from "../../testData/casaurl.json"
test("rental property deatails @system",async({page})=>
    {
        let Rentpage=new rentpage(page)
        let Homepage=new homepage(page)
        let Homepageurl=casaurl.homepageurl
        await page.goto(Homepageurl)
        await Homepage.rentlink.click()
        await expect(Rentpage.allproperty).toBeVisible()

        //click the first property
        await page.waitForTimeout(2000)
        let firstproperty=await Rentpage.propertycard.first()
        await page.waitForTimeout(2000)
        let oldpropertytitle=await page.locator("span.prop-title").first().innerText()
        await page.waitForTimeout(2000)
        await console.log(oldpropertytitle);
        await page.waitForTimeout(2000)
        await firstproperty.click()

     // Verify property title
        await page.waitForTimeout(2000)
        let Propertytitle = page.locator("div.detail-top>div>h1");

        console.log(await Propertytitle.innerText());

        await expect(Propertytitle).toHaveText(oldpropertytitle);
        console.log("Property title:", await Propertytitle.innerText());

        // Verify property price
        let Propertyprice = Rentpage.proertyprice;

        await expect(Propertyprice).toBeVisible();
        console.log("Property price:", await Propertyprice.innerText());

        
        
    })