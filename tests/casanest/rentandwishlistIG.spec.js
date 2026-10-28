// Verify that a user can add a recommended rental property from the Braga listings to the wishlist and find the same property in Favourites.
import { test,expect } from "@playwright/test";
import rentpage from "../../PageObjectModel/casanest/casarentpage.page";
import casaurl from "../../testData/casaurl.json"
test("verify favorities @integration",async({page})=>
    {

        let Rentpage=new rentpage(page)
        //goto rent page
        let Renturl=casaurl.renturl
       await page.goto(Renturl)

       //select district
       await Rentpage.districtdd.selectOption({value:"braga"})

       // Wait for the page to finish updating
      await page.waitForLoadState("networkidle");
       
       //  Wait for the first property to load
       await expect(Rentpage.propertycard.first()).toBeVisible();

       //count of loadeded properties
      let count= await Rentpage.propertycard.count()
      console.log("number of properties loaded :"+count);

        // Store the first property's name
    let selectedPropertyName =
        (await Rentpage.propertyname.first().innerText()).trim();

    console.log("Selected property:", selectedPropertyName);
       
      //click on first property to favorities
      await page.waitForTimeout(2000)
      
      let fav=await Rentpage.fovoriteicon.first()
      await expect(fav).toBeVisible()
      await page.waitForTimeout(2000)
      await fav.click()
      await page.waitForTimeout(2000)

      //navigate to favorities page to see wishlisted
      await Rentpage.favoritelink.click()


    // Verify the same property is displayed
    await expect(
        page.getByText(selectedPropertyName, { exact: true })
    ).toBeVisible();

    console.log("Verification passed: Property is present in Favourites");


      

    })


