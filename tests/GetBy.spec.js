import {test} from "@playwright/test";
test("get by methods",async({page})=>
    {
        await page.goto("https://demowebshop.tricentis.com/")

        //-------------getByLabel------(<label>,aria-label,aria-labelledby)
          // await page.getByLabel("Excell",{exact:false}).click()

          //----getByAltText("altText")
          //  await page .getByAltText("Tricentis Demo Web Shop").click()

          //------getByTitle("titleText")
          //await page.getByTitle("Show details for 14.1-inch Laptop").first().click()

          //-----getByRole(role,option)
          //await page.getByRole('link', { name: 'Electronics' }).first().click()          

          //------getByPlaceholder-----(locate by placeholder attribute and pass its value) 
          //  await page.goto("https://www.amazon.in/")
          // await page.getByPlaceholder("Search Amazon.in").fill("mobiles") 

          //----getByText("text",option)---
          // await page.getByText("Coupons").click()

          //----getByTestId()

          

      

        })