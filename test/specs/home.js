import HomePage from '../pages/home-page';
import allureReporter from '@wdio/allure-reporter';

// <title>Practice E-Commerce Site – Automation Bro</title>
// https://practice.automationbro.com/

describe("Home", () => {

  beforeEach(async () => {
    // Open URL
    await HomePage.open();
  });

  it("Open URL & assert title", async () => {
    allureReporter.addSeverity("minor");

    // Assert the title
    await expect(browser).toHaveTitle(
      "Practice E-Commerce Site – Automation Bro"
    );
  });

  it("Open About Page & assert URL", async () => {
    // OPen About Page
    await browser.url("https://practice.automationbro.com/about");

    // Assert the URL
    await expect(browser).toHaveUrl(
      "https://practice.automationbro.com/about/"
    );
  });

  it("Click get started button & assert url contains get-started text", async () => {
    // Click get started button
    await HomePage.btnGetStarted.click();

    // Assert url contains get-started text
    await expect(browser).toHaveUrlContaining("get-started");
  });

  it("Click Logo & assert url DOES NOT contain get-started text", async () => {
    allureReporter.addFeature("Logo Verification");
    
    // Click logo
    await HomePage.imageLogo.click();

    // Assert url does not contain get-started text
    await expect(browser).not.toHaveUrlContaining("get-started");
  });

  it("V1 - Find heading element & assert the text", async () => {
    // Find heading element
    const headingEl = await HomePage.txtHeading;

    // get the text
    const headingText = await headingEl.getText();

    // Assert the text
    await expect(headingText).toEqual("Think different. Make different.");
  });

  it("V2 - Find heading element & assert the text", async () => {
    // Find heading element
    const headingEl = await HomePage.txtHeading;

    // Assert the text
    await expect(headingEl).toHaveText("Think different. Make different.");
  });
});
