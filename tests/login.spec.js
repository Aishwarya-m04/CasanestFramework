import { test } from "@playwright/test";
import loginpage from "../PageObjectModel/loginpage.page.js";
import logindata from "../testData/logindata.json"
test(" login POM",async({page})=>
    {
        let LoginPage=new loginpage(page)
        await page.goto("https://practicetestautomation.com/practice-test-login/")
       await LoginPage.uesrNameTextfield.fill("student")
        await LoginPage.passwordTextfield.fill("Password123")
       await LoginPage.submitButton.click()
       await page.waitForTimeout(3000)
    })

    //avoid hardcoding store data in login.json file and fetch it
    test(" login pom",async({page})=>
    {
        let LoginPage=new loginpage(page)
         let url=logindata.url
         let usn=logindata.usn
         let pwd=logindata.pwd
        await page.goto(url)
       await LoginPage.uesrNameTextfield.fill(usn)
        await LoginPage.passwordTextfield.fill(pwd)
       await LoginPage.submitButton.click()
       await page.waitForTimeout(3000)
    })