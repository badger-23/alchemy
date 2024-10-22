const Account = require('../models/Account');
const sendEmail = require('../utils/sendEmail');

module.exports = class AccountService {
  static async createAccount(values) {
    // values = {firstName: 'first', lastName: 'last', email: 'some-email@example.com'}
    const account = await Account.insert(values);
    const mailPreview = await sendEmail({
      to: account.email,
      subject: 'Welcome to our AMS',
      html: `<h1>Hello, ${account.firstName}!</h1>`,
    });

    return { ...account, mailPreview };
  }
};
