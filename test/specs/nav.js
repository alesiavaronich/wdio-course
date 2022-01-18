import HomePage from '../pages/home-page';
import allureReporter from '@wdio/allure-reporter';

describe("Navigation Menu", () => {
  it("Get the text of all menu items and assert them", async () => {
    allureReporter.addFeature("Navigation");
    allureReporter.addSeverity("critical");
    
    await HomePage.open();

    const expectedLinks = [
      "Home",
      "About",
      "Shop",
      "Blog",
      "Contact",
      "My account",
    ];

    const actualLinks = [];

    const navLinks = await HomePage.NavComponent.linksNavMenu;

    for (const link of navLinks) {
      actualLinks.push(await link.getText());
    }

    await expect(expectedLinks).toEqual(actualLinks);
  });

  it("Get the text of all menu items and assert them - using timeout", async () => {
    
    HomePage.open();

    const expectedLinks = [
      "Home",
      "About",
      "Shop",
      "Blog",
      "Contact",
      "My account",
    ];

    const actualLinks = [];

    // wait until the Home text is displayed on the navigation menu
    await browser.waitUntil(async function () {
      const homeText = await HomePage.NavComponent.firstNavMenuList.getText(); // "Home"
      return homeText === "Home"; // true | false
    },{
      timeout: 5000,
      timeoutMsg: 'Could not verify the Home text from #primary-menu li'
    });

    const navLinks = await HomePage.NavComponent.linksNavMenu;

    for (const link of navLinks) {
      actualLinks.push(await link.getText());
    }

    await expect(actualLinks).toEqual(expectedLinks);
  });
});
