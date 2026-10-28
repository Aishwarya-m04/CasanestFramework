import { test ,expect} from "../../fixtures/casanestfixture";
// import homepage from "../../PageObjectModel/casanest/casahomepage.page";
// import rentpage from "../../PageObjectModel/casanest/casarentpage.page";
import casaurl from "../../testData/casaurl.json"
test("rent @smoke",async({page,rentPage})=>
    {
        // let Homepage=new homepage(page)
        // let Rentpage=new rentpage(page)
        // let Homepageurl=casaurl.homepageurl
        // await page.goto(Homepageurl)
        // await Homepage.rentlink.click()

        //select district,type,bedroom and click apply button
        await rentPage.districtdd.selectOption({value:"braga"})
        await rentPage.typedd.selectOption({label:"Apartment"})
        await rentPage.bedroomdd.selectOption({value:"t1"})
        await page.waitForTimeout(2000)
        await rentPage.applybutton.click()
    })

    test("verify favorities @integration",async({page,rentPage})=>
    {

    //     let Rentpage=new rentpage(page)
    //     //goto rent page
    //     let Renturl=casaurl.renturl
    //    await page.goto(Renturl)

       //select district
       await rentPage.districtdd.selectOption({value:"braga"})

       // Wait for the page to finish updating
      await page.waitForLoadState("networkidle");
       
       //  Wait for the first property to load
       await expect(rentPage.propertycard.first()).toBeVisible();

       //count of loadeded properties
      let count= await rentPage.propertycard.count()
      console.log("number of properties loaded :"+count);

        // Store the first property's name
    let selectedPropertyName =
        (await rentPage.propertyname.first().innerText()).trim();

    console.log("Selected property:", selectedPropertyName);
       
      //click on first property to favorities
      await page.waitForTimeout(2000)
      
      let fav=await rentPage.fovoriteicon.first()
      await expect(fav).toBeVisible()
      await page.waitForTimeout(2000)
      await fav.click()
      await page.waitForTimeout(2000)

      //navigate to favorities page to see wishlisted
      await rentPage.favoritelink.click()


    // Verify the same property is displayed
    await expect(
        page.getByText(selectedPropertyName, { exact: true })
    ).toBeVisible();

    console.log("Verification passed: Property is present in Favourites");
    })

    test("rental property deatails @system",async({page,rentPage,homePage})=>
    {
        // let Rentpage=new rentpage(page)
        // let Homepage=new homepage(page)
        // let Homepageurl=casaurl.homepageurl
        // await page.goto(Homepageurl)
        // await Homepage.rentlink.click()

        //veryfy properties get loaded
        await expect(rentPage.allproperty).toBeVisible()

        //click the first property
        await page.waitForTimeout(2000)

        let firstproperty=await rentPage.propertycard.first()

        await page.waitForTimeout(2000)

        let oldpropertytitle=await rentPage.propertytitleold.first().innerText()

        await page.waitForTimeout(2000)
        await console.log(oldpropertytitle);

        await page.waitForTimeout(2000)
        await firstproperty.click()

     // Verify property title
        await page.waitForTimeout(2000)
        let Propertytitle = rentPage.propertytitlenew

        console.log(await Propertytitle.innerText());

        await expect(Propertytitle).toHaveText(oldpropertytitle);
        console.log("Property title:", await Propertytitle.innerText());

        // Verify property price
        let Propertyprice = rentPage.proertyprice;

        await expect(Propertyprice).toBeVisible();
        console.log("Property price:", await Propertyprice.innerText())   
        
    })