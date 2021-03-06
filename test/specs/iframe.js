describe('IFrame', () => {
    it('Working with iframe', async () => {
        // open url
        await browser.url('https://practice.automationbro.com/iframe-sample/');

        // access the iframe
        const iframe = await $('#advanced_iframe');
        await browser.switchToFrame(iframe);

        // verify that logo exists
        await expect($('#site-logo')).toExist();

        // switch to parent frame and verify that h1 exists & contains correct text
        await browser.switchToParentFrame();
        await expect($('h1.tg-page-header__title')).toHaveText('IFrame Sample');
    });
});