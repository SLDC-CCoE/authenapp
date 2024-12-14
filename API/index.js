const CryptoJS = require('crypto-js');

module.exports = async function (context, req) {
    const encryptionKey = "YourSecretKey"; // Should be the same key used on the client side
    const predefinedPassword = "YourSecretPassword"; // The plain text password to check against

    const encryptedPassword = req.body.encryptedPassword;
    const decryptedPassword = CryptoJS.AES.decrypt(encryptedPassword, encryptionKey).toString(CryptoJS.enc.Utf8);

    if (decryptedPassword === predefinedPassword) {
        context.res = {
            status: 200,
            body: 'Password is correct'
        };
    } else {
        context.res = {
            status: 401,
            body: 'Password is incorrect'
        };
    }
};
