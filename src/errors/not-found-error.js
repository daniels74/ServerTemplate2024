export default class NotFoundError extends Error {
    statusCode = 404;
    
    constructor() {
        super("Not Found!");
    }

    serializeError() {
        return [{message: "Nor Found!"}]
    }
}