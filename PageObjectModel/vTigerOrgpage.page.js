class organizationPage
{
    constructor(page)
    {
        this.createOrgButton=page.locator("//img[@title='Create Organization...']")
        this.orgNameTextfield=page.locator("//input[@name='accountname']")
        this.savebutton=page.locator("(//input[contains(@value,'Save')])[1]")
        this.verifyOrgTitle=page.locator("//span[@class='dvHeaderText']")
        this.signoutDD=page.locator('//img[@src="themes/softed/images/user.PNG"]')
        this.signoutlink=page.locator("//a[text()='Sign Out']")
    }
}
export default organizationPage