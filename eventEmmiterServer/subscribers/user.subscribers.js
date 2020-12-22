const sendEmail = (user) => {
  setTimeout(() => {
    console.log('the email was send');
  }, 10000);
};

module.exports = {
  sendEmail,
};
