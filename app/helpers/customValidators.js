const validateEmail = function(value) {
    const emailRe = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailRe.test(value);
}
module.exports = {
  validateEmail
}
