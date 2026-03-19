const {test,expect} = require("@playwright/test")

/**
 * 
 * 
 */


test("verify confrimation popup ",async({page})=>{

await page.goto("https://webdriveruniversity.com/Popup-Alerts/index.html")

await page.locator('[id="button4"]').click()

page.on("dialog",async(simplealert)=>{
    await simplealert.message() // this gives you message form the alerts 
    await expect(simplealert.message()).toContain("Press a button!")
    await simplealert.dismiss() // this is used to select ok
    console.log(simplealert.message() )
})
await page.waitForTimeout(5000)
let text= await page.locator('[id="confirm-alert-text"]').textContent()
await expect(text).toContain("You pressed Cancel!")

})

//https://webdriveruniversity.com/Popup-Alerts/index.html
//https://the-internet.herokuapp.com/javascript_alerts