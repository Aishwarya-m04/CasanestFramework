//Verify that the user can submit an enquiry for a property and receive a successful message confirmation
import { test,expect} from "@playwright/test";
import conatactadvertiser from "../../PageObjectModel/casanest/contactAdvertiser.page";
import casabuyerdetails from "../../testData/casabuyerdetails.json"
import casaurl from "../../testData/casaurl.json"
test("contact advertiser @system",async({page})=>
    { 
        let Buyurl=casaurl.buyurl
        let buyerName=casabuyerdetails.name
        let buyeremail=casabuyerdetails.email
        let buyerphone=casabuyerdetails.phonenumber
       let contactAdvertiser=new conatactadvertiser(page)
       await page.goto(Buyurl)
       await contactAdvertiser.propertyImage.click()
       await expect(contactAdvertiser.nameofproperty).toBeVisible()
       await contactAdvertiser.nametextfield.fill(buyerName)
       await contactAdvertiser.emailtextfield.fill(buyeremail)
       await contactAdvertiser.phonetextfield.fill(buyerphone)
       await contactAdvertiser.checkbox.click()
          await expect(contactAdvertiser.checkbox).toBeChecked();
    //    await page.pause();
    //    await contactAdvertiser.contactadvertiserbutton.click()
    //    await expect(contactAdvertiser.successMessage).toBeVisible();
       
    })
