const { test, expect } = require('@playwright/test');
const path = require('path');
const { LoginPage } = require('./support/POM/LoginPage');
const { AddMemberPage } = require('./support/POM/AddMemberPage');

function randomString(length = 6) {
  return Math.random().toString(36).substring(2, 2 + length);
}

test('Add Associate Life Member end-to-end', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const addMemberPage = new AddMemberPage(page);

  await loginPage.goto('https://qa.asiindia.space/');
  await loginPage.selectRole('admin');
  await loginPage.login('kavya.p@quantana.in', 'Test@12345');

  await addMemberPage.navigateToAddMember();

  const data = {
    firstName: 'First' + randomString(),
    lastName: 'Last' + randomString(),
    middleName: 'Mid' + randomString(),
    suffix: 'Suf' + randomString(),
    photoPath: path.resolve(__dirname, '../../support/POM/sample-photo.jpg'),
    qualification: 'B.Tech',
    email: `user${randomString()}@mail.com`,
    mobile: '9' + Math.floor(100000000 + Math.random() * 900000000),
    whatsapp: '9' + Math.floor(100000000 + Math.random() * 900000000),
    dob: '1995-09-25',
    permanentAddress: '123 Main St, City',
    postalAddress: '456 Other St, City',
    medicalSchool: 'Medical School ' + randomString(),
    pgTraining: 'PG Training ' + randomString(),
    superSpeciality: 'Super Speciality ' + randomString(),
    medicalLicense: 'License ' + randomString(),
    degreePath: path.resolve(__dirname, '../../support/POM/sample-degree.pdf'),
    registrationPath: path.resolve(__dirname, '../../support/POM/sample-registration.pdf'),
    referral1: 'Referral1 ' + randomString(),
    referral2: 'Referral2 ' + randomString(),
    gst: 'GST' + randomString(),
  };

  await addMemberPage.fillMemberForm(data);
  await addMemberPage.submitApplication();
  await addMemberPage.validateSuccess();
});
