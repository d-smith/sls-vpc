const rp = require('request-promise-native');

const getUrl = async (callback) => {
    let options = {
        method: 'GET',
        uri: process.env.ENDPOINT
    };

    try {
        let callResult = await rp(options);
        console.log(callResult);
        const response = {
            statusCode: 200,
             body: callResult
        };
        callback(null, response);
    } catch(theError) {
        const response = {
            statusCode: 500,
             body: 'ding it'
        };
    }
}

module.exports.hello = async (event, context, callback) => {
    console.log(event); // Contains incoming request data (e.g., query params, headers and more)
    await getUrl(callback);
};