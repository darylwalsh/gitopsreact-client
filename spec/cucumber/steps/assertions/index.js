import chai, { expect } from 'chai'
import chaiAsPromised from 'chai-as-promised'
import { By, until } from 'selenium-webdriver'

chai.use(chaiAsPromised)

Then(
  /^the (?:"|')([\.#\w-]+)(?:"|') element should appear within (\d+) milliseconds$/,
  function(selector, timeout) {
    return expect(
      this.driver.wait(until.elementLocated(By.css(selector)), timeout)
    ).to.be.fulfilled
  }
)
