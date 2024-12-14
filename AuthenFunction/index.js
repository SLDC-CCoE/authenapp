const CryptoJS = require('crypto-js');

module.exports = async function (context, req) {
    context.log('Function started execution.');

    try {
        const encryptionKey = "YourSecretKey";
        const predefinedPassword = "YourSecretPassword";

        context.log('Request body:', req.body);

        if (!req.body || !req.body.encryptedPassword) {
            context.log('Bad Request: Missing encryptedPassword');
            context.res = {
                status: 400,
                body: "Bad Request: Missing encryptedPassword"
            };
            return;
        }

        const encryptedPassword = req.body.encryptedPassword;
        context.log('Encrypted Password:', encryptedPassword);

        const decryptedPassword = CryptoJS.AES.decrypt(encryptedPassword, encryptionKey).toString(CryptoJS.enc.Utf8);
        context.log('Decrypted Password:', decryptedPassword);

        if (decryptedPassword === predefinedPassword) {
            context.log('Password is correct');
            context.res = {
                status: 200,
                body: 'Password is correct'
            };
        } else {
            context.log('Password is incorrect');
            context.res = {
                status: 401,
                body: 'Password is incorrect'
            };
        }
    } catch (error) {
        context.log('Error executing function:', error);
        context.res = {
            status: 500,
            body: 'Internal Server Error'
        };
    }

    context.log('Function execution completed.');
};
