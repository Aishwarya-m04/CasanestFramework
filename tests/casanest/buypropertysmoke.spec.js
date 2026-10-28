import { test } from "@playwright/test";
import homepage from "../../PageObjectModel/casanest/casahomepage.page"
import buypage from "../../PageObjectModel/casanest/casabuypage.page"
import casaurl from "../../testData/casaurl.json"
test("buy property @smoke",async({page})=>
    {
        //navigate to home page
        let Homepageurl=casaurl.homepageurl
        let Homepage=new homepage(page)
        let Buypage=new buypage(page)
        await page.goto(Homepageurl)

        //click on buy link
        await Homepage.buylink.click()
        await page.waitForTimeout(2000)

        //enter min and max price
        await Buypage.pricefromtextfield.fill("120000")
        await Buypage.pricetotextfield.fill("400000")
        //click on apply button
        await Buypage.applybutton.click()
         await page.waitForTimeout(2000)

    })