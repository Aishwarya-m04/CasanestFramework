import { test } from "@playwright/test";
import homepage from "../../PageObjectModel/casanest/casahomepage.page";
import rentpage from "../../PageObjectModel/casanest/casarentpage.page";
import casaurl from "../../testData/casaurl.json"
test("rent @smoke",async({page})=>
    {
        let Homepage=new homepage(page)
        let Rentpage=new rentpage(page)
        let Homepageurl=casaurl.homepageurl
        await page.goto(Homepageurl)
        await Homepage.rentlink.click()

        //select district,type,bedroom and click apply button
        await Rentpage.districtdd.selectOption({value:"braga"})
        await Rentpage.typedd.selectOption({label:"Apartment"})
        await Rentpage.bedroomdd.selectOption({value:"t1"})
        await page.waitForTimeout(2000)
        await Rentpage.applybutton.click()
    })