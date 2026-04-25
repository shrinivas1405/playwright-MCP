const { expect } = require('@playwright/test');
const path = require('path');

class AddMemberPage {
  constructor(page) {
    this.page = page;
    this.allApplicationsLink = 'a:has-text("All Applications"), button:has-text("All Applications")';
    this.addMemberButton = 'button:has-text("Add Member")';
    this.associateLifeMemberRadio = 'input[type="radio"][value="Associate Life Member"]';
    this.titleDropdown = 'select[name="title"]';
    this.firstNameInput = 'input[name="firstName"]';
    this.lastNameInput = 'input[name="lastName"]';
    this.middleNameInput = 'input[name="middleName"]';
    this.suffixInput = 'input[name="suffix"]';
    this.maleRadio = 'input[type="radio"][value="Male"]';
    this.photoUpload = 'input[type="file"][name="photo"]';
    this.qualificationInput = 'input[name="qualification"]';
    this.emailInput = 'input[type="email"]';
    this.mobileInput = 'input[name="mobile"]';
    this.whatsappInput = 'input[name="whatsapp"]';
    this.dobInput = 'input[name="dob"]';
    this.permanentAddressInput = 'textarea[name="permanentAddress"]';
    this.postalAddressInput = 'textarea[name="postalAddress"]';
    this.medicalSchoolInput = 'input[name="medicalSchool"]';
    this.pgTrainingInput = 'input[name="pgTraining"]';
    this.superSpecialityInput = 'input[name="superSpeciality"]';
    this.medicalLicenseInput = 'input[name="medicalLicense"]';
    this.degreeUpload = 'input[type="file"][name="degree"]';
    this.registrationUpload = 'input[type="file"][name="registration"]';
    this.referral1Input = 'input[name="referral1"]';
    this.referral2Input = 'input[name="referral2"]';
    this.gstInput = 'input[name="gst"]';
    this.termsCheckbox = 'input[type="checkbox"][name="terms"]';
    this.submitButton = 'button:has-text("Submit Application")';
    this.successPopup = 'div[role="dialog"]:has-text("success")';
    this.okButton = 'button:has-text("OK")';
  }

  async navigateToAddMember() {
    await this.page.click(this.allApplicationsLink);
    await this.page.click(this.addMemberButton);
  }

  async fillMemberForm(data) {
    await this.page.check(this.associateLifeMemberRadio);
    await this.page.selectOption(this.titleDropdown, { index: 1 });
    await this.page.fill(this.firstNameInput, data.firstName);
    await this.page.fill(this.lastNameInput, data.lastName);
    await this.page.fill(this.middleNameInput, data.middleName);
    await this.page.fill(this.suffixInput, data.suffix);
    await this.page.check(this.maleRadio);
    await this.page.setInputFiles(this.photoUpload, data.photoPath);
    await this.page.fill(this.qualificationInput, data.qualification);
    await this.page.fill(this.emailInput, data.email);
    await this.page.fill(this.mobileInput, data.mobile);
    await this.page.fill(this.whatsappInput, data.whatsapp);
    await this.page.fill(this.dobInput, data.dob);
    await this.page.fill(this.permanentAddressInput, data.permanentAddress);
    await this.page.fill(this.postalAddressInput, data.postalAddress);
    await this.page.fill(this.medicalSchoolInput, data.medicalSchool);
    await this.page.fill(this.pgTrainingInput, data.pgTraining);
    await this.page.fill(this.superSpecialityInput, data.superSpeciality);
    await this.page.fill(this.medicalLicenseInput, data.medicalLicense);
    await this.page.setInputFiles(this.degreeUpload, data.degreePath);
    await this.page.setInputFiles(this.registrationUpload, data.registrationPath);
    await this.page.fill(this.referral1Input, data.referral1);
    await this.page.fill(this.referral2Input, data.referral2);
    await this.page.fill(this.gstInput, data.gst);
    await this.page.check(this.termsCheckbox);
  }

  async submitApplication() {
    await this.page.click(this.submitButton);
  }

  async validateSuccess() {
    await expect(this.page.locator(this.successPopup)).toBeVisible();
    await this.page.click(this.okButton);
  }
}

module.exports = { AddMemberPage };