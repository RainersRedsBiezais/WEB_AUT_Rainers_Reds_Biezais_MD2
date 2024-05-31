const { AppointmentPage } = require("../../pageObjects/AppointmentPage");
const { LoginPage } = require("../../pageObjects/LoginPage");

describe("MD2", () => { 
    context("Make Appointment", () => {
        it("Make Appointment", () => {
            LoginPage.visit();
            
            LoginPage.clickLoginButton.click();
            LoginPage.setUsername.type("John Doe");
            LoginPage.setPassword.type("ThisIsNotAPassword");
            LoginPage.clickSubmitButton.click();

            AppointmentPage.clickFacilityButton.select("Seoul CURA Healthcare Center");
            AppointmentPage.clickReadmissionButton.click();
            AppointmentPage.clickMedicaidButton.click();
            AppointmentPage.setCalendar.click();
            AppointmentPage.setDate.contains("30").click();
            AppointmentPage.setComment.type("CURA Healthcare Service");
            AppointmentPage.clickBookAppointmentButton.click();

            AppointmentPage.validateAppointment.contains("Seoul CURA Healthcare Center");
            AppointmentPage.validateAppointment.contains("Yes");
            AppointmentPage.validateAppointment.contains("Medicaid");
            AppointmentPage.validateAppointment.contains("30");
            AppointmentPage.validateAppointment.contains("CURA Healthcare Service");
        });
        it.only("Make Appointment", () => {
            LoginPage.visit();

            LoginPage.clickLoginButton.click();
            LoginPage.setUsername.type("John Doe");
            LoginPage.setPassword.type("ThisIsNotAPassword");
            LoginPage.clickSubmitButton.click();

            LoginPage.clickMenuButton.click();
            LoginPage.validateMenuButtonActive.should('have.value', '');
            LoginPage.clickMenuButtonHistoryButton.click();
            LoginPage.validateAppointmentHistory.contains("No appointment")

        });

    });
});