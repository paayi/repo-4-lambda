exports.handler = async (event) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify('Major Change!'),
    };
    return response;
};
