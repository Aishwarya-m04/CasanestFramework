import {test as base,expect} from "@playwright/test"
import buypage from "../PageObjectModel/casanest/casabuypage.page"
import homepage from "../PageObjectModel/casanest/casahomepage.page"
import rentpage from "../PageObjectModel/casanest/casarentpage.page"

const test=base.extend({
    allpages:
    async({page},use)=>{
            let homePage=new homepage(page)
            let rentPage=new rentpage(page)
            let buyPage=new buypage(page)

        const allpages={homePage,rentPage,buyPage}
            
        await use(allpages)
    }

    
})
export { test, expect };