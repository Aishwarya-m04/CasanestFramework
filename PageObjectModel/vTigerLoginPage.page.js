class loginpage
{
    constructor(page)
    {
        this.userNameTextfield=page.locator("//input[@name='user_name']")
        this.passwordTextField=page.locator("//input[@name='user_password']")
        this.loginButton=page.locator("input#submitButton")
    }
    async clicklogin(usn,pwd)
    {
        this.userNameTextfield.fill(usn)
        this.passwordTextField.fill(pwd)
        this.loginButton.click()
    }
}
export default loginpage