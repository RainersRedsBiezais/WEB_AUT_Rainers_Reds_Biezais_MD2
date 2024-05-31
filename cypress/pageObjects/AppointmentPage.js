import { BasePage } from "./BasePage";

export class AppointmentPage extends BasePage{
    static get url() {
        return "";
    }
    static get clickFacilityButton(){
        return cy.get('#combo_facility');
    }
    static get clickReadmissionButton(){
        return cy.get("[id='chk_hospotal_readmission']");
    }
    static get clickMedicaidButton(){
        return cy.get("[id='radio_program_medicaid']");
    }
    static get setCalendar(){
        return cy.get("[class='input-group date']");
    }
    static get setDate(){
        return cy.get("[class='datepicker-days']");
    }
    static get setComment(){
        return cy.get("[id='txt_comment']");
    }
    static get clickBookAppointmentButton(){
        return cy.get("[id='btn-book-appointment']");
    }
    static get validateAppointment(){
        return cy.get("[id='summary']");
    }

   
    
    

    
    
    

  
}