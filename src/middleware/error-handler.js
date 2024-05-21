import NotFoundError from "../errors/not-found-error.js";

export default function errorHandler(err, req, res, next) {
    // Not found Error
    if (err instanceof NotFoundError) {
        return res.status(err.statusCode).send({ error: err.serializeError() })
    }

    // Default Error
    res.staus(500).send([{message: "Something went wrong!"}]);
}