exports.handler = async (event) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello world 2nd attempt!'),
    };
    return response;
};
