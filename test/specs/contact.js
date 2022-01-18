import ContactPage from '../pages/contact-page';

describe("Contact", () => {
  it("Fill all the input fields, submit form and assert success message", async () => {
    await ContactPage.open();

    // Fill out the input fields & click submit
    //.addValue - adds value into the field
    //.setValue - (1) clears the content of the field (2) adds a value into the field

    await ContactPage.submitForm('Test Name', 'test@mail.com', '123456789', 'This is a test message');

    // Assert the success message
    const successAlert = ContactPage.alertSuccess;
    await expect(successAlert).toHaveTextContaining(
      "Thanks for contacting us! We will be in touch with you shortly"
    );
  });
});
