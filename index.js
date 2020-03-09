exports.handler = async (event) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify('This is my second attempt to edit lambda from github!'),
    };
    return response;
};
