import { test, expect } from "@playwright/test";
import loginpage from "../PageObjectModel/vTigerLoginPage.page";
import homepage from "../PageObjectModel/vTigerHomepage.page";
import organizationPage from "../PageObjectModel/vTigerOrgpage.page";
import vTigerLoginData from "../testData/vTigerLoginData.json"
test("vTiger",async({page})=>
    {
        let Loginpage=new loginpage(page)
        let Homepage=new homepage(page)
        let Orgpage=new organizationPage(page)
        let url=vTigerLoginData.url
        let usn=vTigerLoginData.usn
        let pwd=vTigerLoginData.pwd
        //launch url
        await page.goto(url)

        //Username
        await Loginpage.userNameTextfield.fill(usn)

        //password
        await Loginpage.passwordTextField.fill(pwd)

        //submitbutton
        await Loginpage.loginButton.click()
        await page.waitForTimeout(2000)

        //orglink
        await Homepage.orgLink.click()

        //createorgLink
        await Orgpage.createOrgButton.click()

        //orgNameTextfield
        await Orgpage.orgNameTextfield.fill("hiiiiii123445")

        //savebutton
        await Orgpage.savebutton.click()

        //verifyOrgName
        await expect( Orgpage.verifyOrgTitle).toContainText("hiiiiii123445");
        await page.screenshot({path:"Screenshot/org.png"})

        //signout
        await page.waitForTimeout(2000)
        await Orgpage.signoutDD.hover()
        await Orgpage.signoutlink.click()

    })