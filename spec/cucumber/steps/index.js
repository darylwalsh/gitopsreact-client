import { After, Before } from 'cucumber'
import webdriver from 'selenium-webdriver'

Before(function() {
  this.driver = new webdriver.Builder()
    .forBrowser(process.env.TEST_BROWSER || 'firefox')
    .build()
  return this.driver
})

After(function() {
  this.driver.quit()
})
